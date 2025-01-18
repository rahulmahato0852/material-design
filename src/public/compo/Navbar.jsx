import { AppBar, Box, Button, Chip, Drawer, IconButton, Link, List, Menu, MenuItem, Paper, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from "react-redux"
import { SwitchMode } from '../../redux/public/publicSlice';
import { DynamicFormTwoTone } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ClassNames } from '@emotion/react';
import { Link as RLink } from "react-router-dom"

const Navbar = () => {

    const [landing, setLanding] = useState(false)
    const [company, setcompany] = useState(false)
    const [account, setAccount] = useState(false)
    const [pages, setPages] = useState(false)
    const [blog, setBlog] = useState(false)
    const [portfolio, setportfolio] = useState(false)

    const [drawer, setDrawer] = useState(false)

    const dispatch = useDispatch()
    const { isdark } = useSelector(state => state.public)






    return <Box sx={{ zIndex: 9999, mb: "70px" }} >

        {/* Dark mode switch etc start */}
        <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} gap={2} sx={{ pt: "8px", marginX: { md: "1.2rem", xs: "1.3rem" } }}>

            <Typography sx={{ cursor: "pointer" }} underline='none' >Demos</Typography>
            <Chip sx={{ borderRadius: "4px", padding: "-1px" }} size='small' color='primary' label="new" />
            <Typography sx={{ cursor: "pointer" }} underline='none'>Components</Typography>
            <Typography sx={{ cursor: "pointer" }} underline='none'>Docs</Typography>

            {/* Dark switch button */}
            <IconButton onClick={e => dispatch(SwitchMode())} size='small' sx={{ borderRadius: "7px", padding: 0.3, border: `${!isdark ? "0.1px solid rgba(0, 0, 0, 0.5)" : "0.1px solid rgba(255, 165, 0, 1)"}` }} color='primary' >
                {
                    !isdark ?
                        <BedtimeOutlinedIcon sx={{ fontSize: "19px" }} />
                        : <LightModeIcon sx={{ fontSize: "19px", color: "rgba(235, 135, 0)" }} />
                }

            </IconButton>

        </Stack>
        {/* Dark mode switch etc end */}




        {/* Main Navbar Start  */}

        <Box sx={{ zIndex: 9999 }}>
            <AppBar position='absolute' color='transparent' sx={{ marginTop: 5, zIndex: 9999 }} variant='' >
                <Toolbar sx={{ marginX: { md: "8px", xs: "2px" } }}>
                    <Stack fontSize={10} justifyContent={"space-between"} width={"100%"} alignItems={'center'} direction={"row"}>
                        {
                            isdark ?
                                <Typography ><img height={28} src="https://assets.maccarianagency.com/the-front/logos/logo-negative.svg" alt="saa" /></Typography>
                                : <Typography ><img height={28} src="https://assets.maccarianagency.com/the-front/logos/logo.svg" alt="saa" /></Typography>

                        }
                        {/* Large screen components */}
                        <Stack display={{ xs: "none", md: "flex", }} gap={3.5} alignItems={'center'} direction={"row"}>
                            {/* DropDowns st */}

                            {/* Landing */}
                            <Box sx={{ fontSize: "1.01rem" }}>

                                <Stack direction={"row"} sx={{ position: "relative", cursor: "pointer", fontWeight: "bold" }} aria-controls={landing ? 'demo-positioned-menu' : undefined}
                                    onClick={e => setLanding(true)}>Landings {landing ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Stack>

                                <Menu onClose={e => setLanding(false)} open={landing}>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>

                                </Menu>
                            </Box>


                            {/* Company */}
                            <Box sx={{ position: "relative", fontSize: "1.01rem" }}>
                                <Stack direction={"row"} sx={{ cursor: "pointer", fontWeight: `${company && "bold"}` }} aria-controls={landing ? 'demo-positioned-menu' : undefined}
                                    onClick={e => setcompany(true)}>Company {company ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Stack>

                                <Menu sx={{ position: "absolute", top: "45px", left: "550px" }} onClose={e => setcompany(false)} open={company}>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>

                                </Menu>
                            </Box>

                            {/* Account */}
                            <Box sx={{ position: "relative", fontSize: "1.01rem" }}>
                                <Stack direction={"row"} sx={{ cursor: "pointer", fontWeight: `${account && "bold"}` }} aria-controls={account ? 'demo-positioned-menu' : undefined}
                                    onClick={e => setAccount(true)}>Account {account ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Stack>

                                <Menu sx={{ position: "absolute", top: "45px", left: "550px" }} onClose={e => setAccount(false)} open={account}>
                                    <MenuItem><RLink to={"/account/general-setting"}>General</RLink></MenuItem>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>

                                </Menu>
                            </Box>

                            {/* pages */}
                            <Box sx={{ position: "relative", fontSize: "1.01rem" }}>
                                <Stack direction={"row"} sx={{ cursor: "pointer", fontWeight: `${pages && "bold"}` }} aria-controls={pages ? 'demo-positioned-menu' : undefined}
                                    onClick={e => setPages(true)}>Pages {pages ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Stack>

                                <Menu sx={{ position: "absolute", top: "45px", left: "550px" }} onClose={e => setPages(false)} open={pages}>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>

                                </Menu>
                            </Box>

                            {/* Blog */}
                            <Box sx={{ position: "relative", fontSize: "1.01rem" }}>
                                <Stack direction={"row"} sx={{ cursor: "pointer", fontWeight: `${blog && "bold"}` }} aria-controls={blog ? 'demo-positioned-menu' : undefined}
                                    onClick={e => setBlog(true)}>Blog {blog ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Stack>

                                <Menu sx={{ position: "absolute", top: "45px", left: "550px" }} onClose={e => setBlog(false)} open={blog}>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>

                                </Menu>
                            </Box>

                            {/* portfolio */}
                            <Box sx={{ position: "relative", fontSize: "1.01rem", fontWeight: `${portfolio && "bold"}` }}>
                                <Stack direction={"row"} sx={{ cursor: "pointer" }} aria-controls={landing ? 'demo-positioned-menu' : undefined}
                                    onClick={e => setportfolio(true)}>Portfolio {portfolio ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Stack>

                                <Menu sx={{ position: "absolute", top: "45px", left: "550px" }} onClose={e => setportfolio(false)} open={portfolio}>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>hi</MenuItem>

                                </Menu>
                            </Box>


                            {/* DropDowns end */}
                            <Button style={{ boxShadow: "none" }} sx={{ py: "10px" }} variant='contained' size='medium' color='primary'  >Buy Now</Button>
                        </Stack>



                        {/* Small Screnn menuicon and componnets */}


                        <Box sx={{ display: { md: "none" } }}>

                            <IconButton onClick={e => setDrawer(true)} color='primary' sx={{ border: `${!isdark ? "0.1px solid rgba(0, 0, 0, 0.5)" : "1px solid rgba(20, 100   , 255,1 )"}`, borderRadius: "5px" }}><MenuIcon /></IconButton>


                            <Drawer sx={{ zIndex: 99999 }} onClose={e => setDrawer(false)} open={drawer}>
                                <Box sx={{ px: "27px", py: "13px", width: "17.34rem" }}>

                                    {
                                        !isdark ? <List sx={{ mb: "13px" }}><img height={24} src="https://assets.maccarianagency.com/the-front/logos/logo.svg" alt="" /></List>
                                            : <List sx={{ mb: "13px" }}><img height={24} src="https://assets.maccarianagency.com/the-front/logos/logo-negative.svg" alt="" /></List>
                                    }


                                    <Stack alignItems={'center'} justifyContent={"space-between"} direction={"row"}>
                                        <List sx={{ fontSize: "17px", my: "3.5px" }}>Landing</List>
                                        <KeyboardArrowDownIcon color='action' />
                                    </Stack>

                                    <Stack alignItems={'center'} justifyContent={"space-between"} direction={"row"}>
                                        <List sx={{ fontSize: "17px", my: "3.5px" }}>Company</List>
                                        <KeyboardArrowDownIcon color='action' />
                                    </Stack>

                                    <Stack alignItems={'center'} justifyContent={"space-between"} direction={"row"}>
                                        <List sx={{ fontSize: "17px", my: "3.5px" }}>Pages</List>
                                        <KeyboardArrowDownIcon color='action' />
                                    </Stack>


                                    <Stack alignItems={'center'} justifyContent={"space-between"} direction={"row"}>
                                        <List sx={{ fontSize: "17px", my: "3.5px" }}>Account</List>
                                        <KeyboardArrowDownIcon color='action' />
                                    </Stack>

                                    <Stack alignItems={'center'} justifyContent={"space-between"} direction={"row"}>
                                        <List sx={{ fontSize: "17px", my: "3.5px" }}>Blog</List>
                                        <KeyboardArrowDownIcon color='action' />
                                    </Stack>

                                    <Stack justifyContent={"space-between"} direction={"row"}>
                                        <List sx={{ fontSize: "17px", my: "4px" }}>Portfolio</List>
                                        <KeyboardArrowDownIcon />
                                    </Stack>

                                    {/* Documentation btn */}
                                    <Box mt={2}>

                                        <Button color='primary' sx={{ py: 1 }} size='large' fullWidth variant='outlined'>Documentation</Button>
                                        <Button color='primary' sx={{ py: 1, my: 2, boxShadow: "none" }} size='large' fullWidth variant='contained'>Purchase now</Button>
                                    </Box>


                                </Box>
                            </Drawer>





                        </Box>


                    </Stack>

                </Toolbar>

            </AppBar >
        </Box >



        {/* Main Navbar end  */}




    </Box >
}

export default Navbar