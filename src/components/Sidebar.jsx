import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
        <div className='card'>
            <div className='card-header'>
                <strong>APP LINKS</strong>
            </div>
            <div className='card-body'>
                <ul>
                    <li>
                        <NavLink to="/">POST API</NavLink>
                    </li>
                    <li>
                        <NavLink to="images">IMAGE API</NavLink>
                    </li>
                    <li>
                        <NavLink to="images-limit">IMAGE LIMIT API</NavLink>
                    </li>
                    <li>
                        <NavLink to="todos">TODO API</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidebar