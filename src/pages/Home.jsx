import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>JSON PLACEHOLDER - DUMMY APIS</h1>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home