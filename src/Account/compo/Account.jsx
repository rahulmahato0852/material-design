import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {


    const { isdark } = useSelector(state => state.public)


    const Topbgcolor = `${isdark ? "rgb(25, 118, 210)" : "rgb(55, 125, 255);"}`


    return <>



        <Box bgcolor={Topbgcolor} padding={"64px 30px"} >

            <Typography color={"white"} mb={"10px"} mt={"20px"} fontWeight={"bold"} variant='h4'>Account settings</Typography>
            <Typography color={"white"} mt={"10px"} mb={"20px"} fontSize={"1.3rem"} variant='body2'>Change account information and settings</Typography>


        </Box>



    </>
}

export default Account