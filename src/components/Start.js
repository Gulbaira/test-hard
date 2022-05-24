import React from 'react'
import { NavLink } from 'react-router-dom'

export const Start = () => {
    return (
        <div>
            <NavLink to="/1"><input type="button" value="START" /></NavLink>
        </div>
    )
}

export default Start