
import { Avatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import './Dashboard.css';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';



const Dashboard = () => {
  
    return (
        <div className='dashbord'>
            <div className='sidebar'>
                <div className='sidebar-info'>
                    <h1>Digital Menu</h1>
                    <div className='sidebar-profile'>
                        <Avatar src='https://media.architecturaldigest.com/photos/5af0707e99371749a05b237b/master/w_4020,h_2691,c_limit/Nebraska.jpg' />
                        <h4>Raju Palumaru</h4>
                        <p>5 star Restaurant</p>
                    </div>
                    <div className='nav-MenuList'>
                        <div className='navigator'>
                            <Link to='/'>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="DashBoard" ></ListItemText>
                                </ListItemButton>
                            </Link>
                        </div>
                        <div className='navigator'>
                            <Link to='/menuList'>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ListAltIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Menu List" />
                                </ListItemButton>
                            </Link>
                        </div>
                        <div className='navigator'>
                            <Link to='/order'>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FormatListBulletedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Orders History" />
                                </ListItemButton>
                            </Link>
                        </div>
                        <div className='navigator'>
                            <Link to='/tableList'>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FormatListBulletedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tables List" />
                                </ListItemButton>
                            </Link>
                        </div>
                    </div>


                </div>
                <div className='sidebar-logout'>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItemButton>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
