import { useUser } from "../../context/User.Context";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import UserItem from "./UserItem";


export function UserList(){

const { findUser, state } = useUser()
const [loading, setLoading] = useState(true)

useEffect(  () => {
    findUser()
    .then(() => setLoading(false))
}, [] )

    return(
        <div>
            <h3>Listado de usarios</h3>
            {loading ? <Loading /> : (
                state.users.map((u)=>(
                    <UserItem key={u._id} user={u} />
                ))
            )}
        </div>
    )   

}
export default UserList