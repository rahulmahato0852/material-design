import { Box, Button, Link, Stack, Typography } from '@mui/material'
import { light } from '@mui/material/styles/createPalette'
import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

    const { isdark } = useSelector(state => state.public)

    const lightGray = "rgb(103, 119, 136)"


    return <>


        <Box sx={{ padding: { sm: "2.7rem 2.3rem", xs: "2.7rem 0.85rem" } }}>


            <Stack gap={{ xs: 1, sm: 0 }} paddingX={{ md: "0", xs: "20px" }} alignItems={"center"} justifyContent={"space-between"} direction={{ xs: "column", sm: "row" }}>
                <Box><img height={20} src={`${isdark ? "https://assets.maccarianagency.com/the-front/logos/logo-negative.svg" : "https://assets.maccarianagency.com/the-front/logos/logo.svg"}`} alt="" /></Box>
                <Stack alignItems={"center"} gap={2} direction={"row"}>
                    <Typography sx={{ textDecoration: "none", cursor: "pointer", color: lightGray, fontSize: "0.895rem" }}>Home</Typography>
                    <Typography sx={{ textDecoration: "none", cursor: "pointer", color: lightGray, fontSize: "0.895rem" }}>Documentation</Typography>
                    <Button size='small' sx={{ py: "0.52rem", textTransform: "none" }} variant='outlined'>Purchase Now</Button>


                </Stack>


            </Stack>

            <Box textAlign={"center"}>


                <Typography color={lightGray} mt={"17px"} mb={"10px"} fontSize={"13.89px"} variant='body2'>© theFront. 2021, Maccarian. All rights reserved</Typography>
                <Typography color={lightGray} fontSize={"12.5px"} lineHeight={"23px"} variant='body2'>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</Typography>
            </Box>

        </Box>




    </>
}

export default Footer