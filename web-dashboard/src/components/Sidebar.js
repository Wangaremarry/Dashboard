import { Button, Drawer, List, ListItem, ListItemButton, ListItemText, styled, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import React from 'react'
import { NavLink } from "react-router-dom"
import { MessageSquare, Users, Home } from 'react-feather'

const OPEN_DRAWER = 280
// const CLOSED_DRAWER = 102

const navItems = [
    { title: "Dashboard", icon: <Home/>, path: "/app" },
    { title: "SMS", icon: <MessageSquare />, path: "/sms" },
    { title: "Users", icon: <Users />, path: "/users" },
]

const RootStyle = styled('div')(({ theme }) => ({}))

function NavItem({ item, active }) {
    const { title, icon, path } = item
    return (
        <ListItemButton component={NavLink} disableGutters disableRipple>
            <Button to={path} component={NavLink}>
                <ListItem>{icon}</ListItem>
                <ListItemText disableTypography primary={title} />
            </Button>
        </ListItemButton>
    )
}




const Sidebar = () => {
    const content = (
        <Stack
            spacing={3}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                px: 2.5,
                pt: 3
            }}
        >
            <h1>Logo</h1>
            {/* <Nav config={navItems} /> */}
            {navItems?.map((item) => (
                <NavItem item={item} key={item.title} path={item.path}/>
            ))}
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="h6">Logout</Typography>
        </Stack>
    )
    return (
        <RootStyle
            sx={{
                width: {
                    lg: OPEN_DRAWER,
                }
            }}
        >
            <Drawer
                open
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: OPEN_DRAWER,
                        bgcolor: '#05277C',
                        border: 'none',
                        overflow: 'hidden',
                        color: "#fff"
                    },
                }}
            >
                {content}
            </Drawer>
        </RootStyle>
    )
}

export default Sidebar
