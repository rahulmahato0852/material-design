import { Box, Button, Card, CardContent, CardHeader, Checkbox, Divider, FormControlLabel, InputLabel, Link, Stack, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';
import { Link as RLink } from "react-router-dom"


const AccountSettingNotification = () => {

    const [userResponse, setUserResponse] = useState([])
    const [systemSettingData, setsystemSettingData] = useState([
        { label: "E-mail alerts", checked: true },
        { label: "Push notifications", checked: true },
        { label: "Text messages", checked: true },
        { label: "Phone calles", checked: false },
    ])

    const [chatSettingData, setChatSettingData] = useState([
        { label: "E-mail alerts", checked: false },
        { label: "Push notifications", checked: true },
    ])

    const { isdark } = useSelector(state => state.public)


    console.log(chatSettingData);

    const linkColor = "rgb(30, 32, 34)"

    return <>


        <Box>


            {/* card dashboard 4 */}


            <Box position={"relative"} bottom={"60px"} margin={"30px"} >


                <Grid spacing={4} container>


                    <Grid md={3} xs={12}>


                        <Card sx={{ width: "100%", borderRadius: "10px" }} elevation={3} >


                            <CardContent   >
                                <Stack direction={{ md: "column", xs: "row" }}>

                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"} > <RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-setting"}>General </RLink> </Typography>
                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-security"}  > Security </RLink></Typography>
                                    <Typography sx={{ borderLeft: { md: "2px solid blue" }, p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-notification"}  > Notification </RLink></Typography>
                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-billing-info"}  >Billing Information</RLink> </Typography>
                                </Stack>
                            </CardContent>

                        </Card>
                    </Grid>







                    <Grid width={"100%"} md={9} xs={12} >

                        <Card sx={{ padding: "20px 10px" }} elevation={3}>
                            <CardContent>
                                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography fontWeight={"600"} variant='h6'>Update website notifications</Typography>
                                    <Button variant='outlined' sx={{ textTransform: "none", padding: "10px 20px" }} >Reset All</Button>
                                </Stack>
                                <Divider style={{ marginTop: "34px" }} />

                                <Box>


                                    <Grid spacing={5} p={"25px"} container>

                                        <Grid xs={12} md={6} >
                                            <Box >

                                                <Typography fontWeight={"500"} variant='h6'>System settings</Typography>
                                                <Typography my={1} variant='body2'>You will recieve emails in your business email address</Typography>

                                                <Box>
                                                    {

                                                        systemSettingData.map((item, index) => <>
                                                            <FormControlLabel

                                                                control={
                                                                    <Checkbox
                                                                        checked={item.checked}
                                                                        value={item.label}
                                                                        onChange={(e) => {
                                                                            const updatedData = [...systemSettingData];
                                                                            updatedData[index].checked = e.target.checked;
                                                                            setsystemSettingData(updatedData);
                                                                        }} inputProps={{ 'aria-label': 'controlled-checkbox' }}
                                                                    />
                                                                }
                                                                label={item.label}
                                                            />
                                                            <Box />
                                                        </>)

                                                    }






                                                </Box>


                                            </Box>

                                        </Grid>





                                        <Grid xs={12} md={6} >
                                            <Box >
                                                <Typography fontWeight={"500"} variant='h6'>Chat settings</Typography>
                                                <Typography my={1} variant='body2'>You will recieve emails in your business email address</Typography>

                                                {/* checkboxes */}
                                                <Box>
                                                    {

                                                        chatSettingData.map((item, index) => <>
                                                            <FormControlLabel

                                                                control={
                                                                    <Checkbox
                                                                        checked={item.checked}
                                                                        value={item.label}
                                                                        onChange={(e) => {
                                                                            const updatedData = [...chatSettingData];
                                                                            updatedData[index].checked = e.target.checked;
                                                                            setChatSettingData(updatedData);
                                                                        }} inputProps={{ 'aria-label': 'controlled-checkbox' }}
                                                                    />
                                                                }
                                                                label={item.label}
                                                            />
                                                            <Box />
                                                        </>)

                                                    }






                                                </Box>


                                            </Box>

                                        </Grid>

                                    </Grid>

                                    <Stack direction={{ sm: "row", xs: "column" }} alignItems={"center"} justifyContent={"space-between"} gap={2} >

                                        <Typography>You may also consider to update your <Link sx={{ color: isdark ? "lightskyblue" : "blue", textDecoration: "none" }}>security settings.</Link></Typography>

                                        <Button variant='contained' sx={{ width: { xs: "100%", sm: "15%" }, textTransform: "none", padding: "10px 20px" }} >Save</Button>
                                    </Stack>


                                </Box>


                            </CardContent>
                        </Card>


                    </Grid>



                    <Grid>



                    </Grid>




                </Grid>

                <Divider style={{ marginTop: "34px" }} />

            </Box>





        </Box>

    </>
}

export default AccountSettingNotification