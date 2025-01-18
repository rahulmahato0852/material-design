import { Box, Button, Card, CardContent, CardHeader, Divider, InputLabel, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';
import { Link as RLink } from "react-router-dom"


const AccountSettingGeneral = () => {


    const { isdark } = useSelector(state => state.public)

    console.log(isdark);

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

                                    <Typography sx={{ borderLeft: { md: "2px solid blue" }, p: "10px 0 10px 13px" }} fontSize={"1rem"} > <RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-setting"}>General </RLink> </Typography>
                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-security"}  > Security </RLink></Typography>
                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-notification"}  > Notification </RLink></Typography>
                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-billing-info"}  >Billing Information</RLink> </Typography>
                                </Stack>
                            </CardContent>

                        </Card>
                    </Grid>



                    <Grid width={"100%"} md={9} xs={12} >

                        <Card sx={{ padding: "20px 10px" }} elevation={3}>
                            <CardContent>

                                <Typography fontWeight={"600"} variant='h6'>Change your private information</Typography>
                                <Typography variant='body2' my={"10px"} >Please read our <Link sx={{ color: isdark ? "lightskyblue" : "blue", textDecoration: "none", cursor: "pointer" }} >terms of use</Link> to be informed how we manage your private data.</Typography>
                                <Divider style={{ marginTop: "34px" }} />

                                <Box>


                                    <Stack gap={4} direction={{ xs: "column", sm: "row" }}>
                                        <Box sx={{ width: "100%" }}>
                                            <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", my: "20px" }}>Enter Your Name</InputLabel>
                                            <TextField label={"First Name *"} fullWidth />
                                        </Box>
                                        <Box sx={{ width: "100%" }}>
                                            <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", my: "20px" }}>Enter Your email</InputLabel>
                                            <TextField label={"Email *"} fullWidth />

                                        </Box>
                                    </Stack>


                                    <Box sx={{ width: "100%" }}>
                                        <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "30px" }}>Bio</InputLabel>
                                        <TextField multiline rows={5} sx={{ marginTop: "15px" }} label={"Bio *"} fullWidth />
                                    </Box>
                                    <Divider style={{ marginTop: "34px" }} />


                                    <Stack mt={"15px"} gap={4} direction={"row"}>
                                        <Box sx={{ width: "100%" }}>
                                            <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", my: "20px" }}>Country</InputLabel>
                                            <TextField label={"Country *"} fullWidth />
                                        </Box>
                                        <Box sx={{ width: "100%" }}>
                                            <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", my: "20px" }}>City</InputLabel>
                                            <TextField label={"City *"} fullWidth />

                                        </Box>
                                    </Stack>

                                    <Box sx={{ width: "100%" }}>
                                        <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", my: "20px" }}>Enter your address</InputLabel>
                                        <TextField label={"Address *"} fullWidth />

                                    </Box>

                                    {/* Save btn */}

                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} mt={"40px"}>

                                        <Typography variant='body2'>You may also consider to update your <Link sx={{ color: isdark ? "lightskyblue" : "blue", textDecoration: "none", cursor: "pointer" }} >billing information</Link> .</Typography>

                                        <Button sx={{ p: "11.3px 22px" }} variant='contained'>Save</Button>
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

export default AccountSettingGeneral