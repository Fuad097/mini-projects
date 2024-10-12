import { useEffect } from "react";
import { getAllusers } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";

 function UserList(){
    const dispatch = useDispatch()

    const {users} = useSelector(store => store.user)
    console.log({users})
    
    useEffect(()=>{dispatch(getAllusers())}, [])
    return (<div>
        <User/>
    </div>)
}

export default UserList