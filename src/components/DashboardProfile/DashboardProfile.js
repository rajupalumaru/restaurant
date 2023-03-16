import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import DashboardBody from '../DashboardBody/DashboardBody'
import MenuList from '../MenuList/MenuList';
import Order from '../Order/Order';
import TableList from '../TableList/TableList';
import './DashboardProfile.css';

const DashboardProfile = () => {
  return (
    <div className='digital-menu'>
       <BrowserRouter>
                <Dashboard />
                <Routes>
                    <Route path='/' element={<DashboardBody />} />
                    <Route path='/menuList' element={<MenuList />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/tableList' element={<TableList />} />
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default DashboardProfile
