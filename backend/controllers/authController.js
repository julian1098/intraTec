import usersDao from '../model/users.dao.js';
import rolesDao from '../model/roles.dao.js';
import jwtService from '../services/jwt.service.js';
import { schemaLogin } from '../services/validate.js';
import bcrypt from 'bcrypt';

/*-------------------------------------------------------------------------------------------*/
/**
 * Autentica un usario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function login(req, res) {
    schemaLogin.validate(req.body)
        .then(async (entity) => {
            const user = await usersDao.findByEmail(entity.email)
            if (user) {
                user.role = await rolesDao.findById(user.role_id)
                const validate = await bcrypt.compare(entity.password, user.password)
                if (validate) {
                    delete user.password;
                    const token = jwtService.generate(user)
                    res.header('auth-token', token).json({ user: user, token: token })
                } else {
                    return res.status(401).json({ err: 401, msg: "El password no coincide." })
                }
            } else {
                return res.status(400).json({ error: 400, msg: "El email no existe" })
            }
        })
        .catch((err) => {
            res.status(500).json({
                error: 500, msg: "Error al validar", validateError: err.errors
            })
        })
}
/*-------------------------------------------------------------------------------------------*/
export default {
    login
}