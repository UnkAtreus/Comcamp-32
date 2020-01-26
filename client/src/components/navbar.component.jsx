import React from 'react'
import register from '../api/register'

function Navbar() {

    const logout = () => {
        register.logout()
    }

    return (
        <div>Navbar
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Navbar