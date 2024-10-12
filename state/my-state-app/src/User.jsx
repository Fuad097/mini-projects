import React from 'react'
import { useSelector } from 'react-redux'

function User() {
    const {users} = useSelector((store) => store.user)
    return (
        <div className='usssa'>
            {
                users && users.map(user => user.name)
            }
        </div>
    )
}

export default User
