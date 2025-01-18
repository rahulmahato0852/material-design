import { Box, Button, Card, CardContent, CardHeader, Divider, FormControlLabel, InputLabel, Link, Stack, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';
import { Link as RLink } from "react-router-dom"


const AccountSettingSecurity = () => {


    const [publicProfile, setPublicProfile] = useState(true)
    const [exposeYourEmail, setExposeYourEmail] = useState()
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

                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"} > <RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-setting"}>General </RLink> </Typography>
                                    <Typography sx={{ borderLeft: { md: "2px solid blue" }, p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-security"}  > Security </RLink></Typography>
                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-notification"}  > Notification </RLink></Typography>
                                    <Typography sx={{ p: "10px 0 10px 13px" }} fontSize={"1rem"}  ><RLink style={{ color: isdark ? "rgb(255, 255,255)" : linkColor, textDecoration: "none" }} to={"/account/general-billing-info"}  >Billing Information</RLink> </Typography>
                                </Stack>
                            </CardContent>

                        </Card>
                    </Grid>







                    <Grid width={"100%"} md={9} xs={12} >

                        <Card sx={{ padding: "20px 10px" }} elevation={3}>
                            <CardContent>
                                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography fontWeight={"600"} variant='h6'>Change your password</Typography>
                                    <Button variant='outlined' sx={{ textTransform: "none", padding: "10px 20px" }} >Log Out</Button>
                                </Stack>
                                <Divider style={{ marginTop: "34px" }} />

                                <Box>

                                    <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "30px" }}>Current password</InputLabel>
                                    <TextField sx={{ marginTop: "15px" }} label={"Current password "} fullWidth />

                                    <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "35px" }}>New password</InputLabel>
                                    <TextField sx={{ marginTop: "15px" }} label={"New password "} fullWidth />

                                    <InputLabel sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "35px" }}>Repeat password</InputLabel>
                                    <TextField sx={{ marginTop: "15px" }} label={"Repeat password "} fullWidth />

                                    <Divider style={{ marginTop: "34px" }} />

                                    {/* Switch btn */}
                                    <Box my={"20px"}>

                                        <FormControlLabel

                                            control={
                                                <Switch
                                                    checked={publicProfile}
                                                    onChange={e => setPublicProfile(true)}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            }
                                            label="Public Profile"
                                        />
                                        <Box my={"20px"} />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={exposeYourEmail}
                                                    onChange={e => setExposeYourEmail(true)}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            }
                                            label="Expose Your label"
                                        />
                                    </Box>


                                    {/* Save btn */}

                                    <Stack gap={2} direction={{ sm: "row" }} alignItems={"center"} justifyContent={"space-between"}>

                                        <Typography>You may also consider to update your <Link sx={{ textDecoration: "none" }} >notification settings</Link>.</Typography>
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

export default AccountSettingSecurity