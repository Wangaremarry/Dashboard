import { styled } from "@mui/material"
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../components/Navbar"
import Sidebar from '../components/Sidebar'

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
}))
const MainStyle = styled('div')(({ theme }) => ({
    // display: 'flex',
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: 88,
}))

const DashboardLayout = () => {
    return (
        <RootStyle>
            <Navbar />
            <Sidebar />
            <MainStyle
                sx={{}}
            >
                <Outlet />
            </MainStyle>
        </RootStyle>
    )
}

export default DashboardLayout
