import { AppBar, Avatar, Toolbar } from '@mui/material'
import React from 'react'
import { Bell as NotificationIcon } from 'react-feather'
import { styled } from '@mui/material'
import { deepPurple } from '@mui/material/colors';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: "#fff",
}))

const Navbar = () => {
    return (
        <StyledAppBar>
            <Toolbar>
                <NotificationIcon />
                <Avatar alt="Profile" sx={{ bgcolor: deepPurple[500] }}/>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Navbar
