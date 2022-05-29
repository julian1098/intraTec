import express from 'express';
import controller from '../controllers/servicesController.js';
//middleware
import { isAuth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { isSuperAdmin } from '../middleware/isSuperAdmin.js';

const router = express.Router();

router.route('/')
    .get([isAuth], controller.viewAlls)
    .post([isAuth, isAdmin], controller.create);
router.route('/:id')
    .get([isAuth], controller.viewId)
    .patch([isAuth, isAdmin], controller.update)
    .delete([isAuth, isSuperAdmin], controller.deleteEntity);

export default router;