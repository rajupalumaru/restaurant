import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'
import OpenOrders from './tabs/OpenOrders';
import TableAccupancy from './tabs/TableAccupancy';
import './DashboardBody.css';

const DashboardBody = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className='mainbar'>
            <h1>My Dashboard</h1>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:'whitesmoke' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Table Occupancy" value="1" />
                            <Tab label="Open Orders" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><TableAccupancy/></TabPanel>
                    <TabPanel value="2"><OpenOrders/></TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}

export default DashboardBody
