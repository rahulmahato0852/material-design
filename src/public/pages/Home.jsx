import { Alert, Box, Button, Card, CardContent, IconButton, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { ArrowBackIos, Bedtime, BedtimeOutlined, CachedOutlined, CodeOff, CurtainsRounded, Draw, ElectricBolt, FavoriteBorderOutlined, FlashOnOutlined, FormatPaintOutlined } from '@mui/icons-material';
import { blue, green } from '@mui/material/colors';
import CurveElement from '../../customization/CurveElement';

const Home = () => {
    const theme = useTheme()
    const isXsOrSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isXsOrMd = useMediaQuery(theme.breakpoints.down('md'));

    const { isdark } = useSelector(state => state.public)

    const lightGray = "rgb(103, 119, 136)"

    return <Box  >

        {/* Turn Your ideas start*/}
        <Grid maxHeight={"53rem"} container>

            <Grid paddingX={{ sm: 4, xs: 2.4 }} sm={6} sx={{ padding: { sm: "180px 30px 0 30px", xs: "20px 20px" } }} >
                <Typography sx={{ fontWeight: "bold" }} variant={!isXsOrSm ? "h2" : "h3"}>Turn your ideas <br /> into <Typography fontWeight={"bold"} color={"primary"} variant={!isXsOrSm ? "h2" : "h3"} sx={{ textDecoration: "underline 10px solid rgba(255,165,0,0.3)", }} display={"inline-block"}>success.</Typography></Typography>
                <Typography sx={{ fontSize: "19px", marginTop: "20px", lineHeight: 1.8, display: "block" }} color={"rgb(103, 119, 136);"} variant='caption'>theFront will make your product look modern and professional while saving you precious time.</Typography>
                <Stack mt={"25px"} direction={{ sm: "row" }} gap={2}>
                    <Button fullWidth={isXsOrSm} size='large' sx={{ px: 2, py: 1, textTransform: "none" }} variant='contained'>View pages</Button>
                    <Button fullWidth={isXsOrSm} size='large' sx={{ px: 2, py: 1, textTransform: "none" }} variant='outlined'>Documentation</Button>
                </Stack>
            </Grid>


            <Grid sx={{ display: { xs: "none", sm: "block" } }} container width={"100%"} sm={6}  >

                <Stack direction={"row"} gap={5} alignItems={"start"} sx={{ width: "100%", boxSizing: "inherit", overflow: "hidden", pl: "5.5rem" }} container width={"100%"}  >

                    <Stack gap={2} sx={{ paddingRight: 2, rotate: "-20deg" }} >
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img1.png"}`} alt="" />
                        </Box>
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img4.png"}`} alt="" />
                        </Box>
                    </Stack>

                    <Stack gap={2} sx={{ rotate: "-20deg", position: "relative", bottom: "215px", right: "45px" }} >
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img13.png"}`} alt="" />
                        </Box>
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img10.png"}`} alt="" />
                        </Box>
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img7.png"}`} alt="" />
                        </Box>

                    </Stack>


                    <Stack gap={2} sx={{ rotate: "-20deg", position: "relative", bottom: "150px", right: "20px" }} >
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img24.png"}`} alt="" />
                        </Box>
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img17.png"}`} alt="" />
                        </Box>
                        <Box borderRadius={"8px"} padding={1} sx={{ boxShadow: 1 }}>
                            <img height={"280px"} width={"240px"} src={`${isdark ? "https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png" : "https://assets.maccarianagency.com/screenshots/the-front/img12.png"}`} alt="" />
                        </Box>


                    </Stack>


                </Stack>
            </Grid>
        </Grid >
        {/* <CurveElement /> */}
        {/* Turn Your ideas end*/}

        {/* Build accessible start */}

        <Box paddingX={"27px"} mt={{ xs: "50px", sm: "0" }}>
            {/* Headings */}
            <Box textAlign={"center"} >
                <Typography fontSize={{ sm: "2.0943rem", xs: "1.56rem" }} variant='h4' fontWeight={"600"}>Build accessible React apps with speed</Typography>
                <Typography variant='body1' mt={2} color={lightGray} fontWeight={"100"} fontSize={{ sm: "21px", xs: "18px" }}>Build a beautiful, modern website with flexible, fully customizable, atomic MUI components</Typography>
            </Box>

            {/* 3 functionality */}

            <Grid mt={"50px"} spacing={2} container>

                <Grid textAlign={"center"} md={4} xs={12}>
                    <IconButton sx={{ padding: 2, bgcolor: isdark ? "" : blue[50] }}><AdsClickIcon color='primary' /></IconButton>
                    <Typography sx={{ my: "15px" }} variant='h6'>Built for developers</Typography>
                    <Typography color={lightGray} fontSize={"1rem"} variant='body2'>theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                </Grid>


                <Grid textAlign={"center"} md={4} xs={12}>
                    <IconButton sx={{ padding: 2, bgcolor: isdark ? "" : blue[50] }}><Draw color='primary' /></IconButton>
                    <Typography sx={{ my: "15px" }} variant='h6'>Designed to be modern</Typography>
                    <Typography color={lightGray} fontSize={"1rem"} variant='body2'>Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.</Typography>
                </Grid>


                <Grid textAlign={"center"} md={4} xs={12}>
                    <IconButton sx={{ padding: 2, bgcolor: isdark ? "" : blue[50] }}><CodeOff color='primary' /></IconButton>
                    <Typography sx={{ my: "15px" }} variant='h6'>Documentation for everything</Typography>
                    <Typography color={lightGray} fontSize={"1rem"} variant='body2'>We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</Typography>
                </Grid>


            </Grid>

            {/* Build tools and full documtation */}

        </Box>
        <Box px={"15px"} my={"7rem"}>

            <Grid container>

                <Grid smOffset={3.3} xs={12} sm={5.5}>

                    <Box textAlign={"center"}>
                        <Typography variant='h4' fontWeight={"600"} >Build tools and full documention</Typography>
                        <Typography variant='body2' color={lightGray} fontSize={"20px"} mt={"13px"} >Components, plugins, and build tools are all thoroughly <br /> documented with live examples and markup for easier use  and customization.</Typography>
                        {/* installation detail  */}
                    </Box>

                    <Box color={"white"} borderRadius={"10px"} padding={"30px 20px"} width={"100%"} bgcolor={"rgb(33, 50, 91)"} my={"30px"} >

                        <pre style={{ lineHeight: "5px" }}>&gt; $ yarn install</pre>
                        <i style={{ color: green[400] }}>// OR</i>
                        <pre style={{ lineHeight: "5px" }}>&gt; $ npm install</pre>
                        <br />
                        <i style={{ color: green[400] }}>// Everything installed!</i>
                        <br />
                        <br />
                        <pre style={{ lineHeight: "5px" }}>&gt; $ yarn start</pre>
                        <i style={{ color: green[400] }}>// OR</i>
                        <pre style={{ lineHeight: "5px" }}>&gt; $ npm start</pre>
                        <br />
                        <i style={{ color: green[400] }}>//  LiveReload started. Opening localhost:3000</i>

                        <br />



                    </Box>





                </Grid>

            </Grid>



        </Box>

        {/* Build accessible and build end */}




        {/* The powerful and flexiable theme start */}

        <Box margin={"0 0 5  0px 0"}>

            <Grid padding={"0 2.3vw"} container>

                <Grid width={"100%"} container paddingX={"1.4vw"} md={6} xs={12} >

                    <Typography fontWeight={"600"} fontSize={"1.82rem"} variant='h4'>The powerful and flexible theme for all kinds of businesses</Typography>
                    <Typography mt={"1.6vw"} fontSize={"1.34rem"} fontWeight={"100"} sx={{ wordSpacing: "3px" }} variant='body2' color={lightGray} >Whether you're creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase, theFront helps you create the best possible product for your users.</Typography>
                    {/* 3 grid */}

                    <Grid spacing={2} mt={"35px"} container width={"100%"}>

                        <Grid md={4} xs={12}>
                            <Typography fontSize={"2.05rem"} variant='h5' color={blue[500]}>300+</Typography>
                            <Typography mt={"10px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>300 + component compositions, which will help you to build any page easily.</Typography>
                        </Grid>
                        <Grid md={4} xs={12}>
                            <Typography fontSize={"2.05rem"} variant='h5' color={blue[500]}>45+</Typography>
                            <Typography mt={"10px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>45 + landing and supported pages to Build a professional website.</Typography>
                        </Grid>
                        <Grid md={4} xs={12}>
                            <Typography fontSize={"2.05rem"} variant='h5' color={blue[500]}>99%</Typography>
                            <Typography mt={"10px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>99% of our customers rated 5-star our themes over 5 years.</Typography>
                        </Grid>





                    </Grid>



                </Grid>




                <Grid sx={{ display: { xs: "none", md: "block" } }} padding={"10px 18px"} md={6} xs={12} >
                    <Box sx={{
                        borderRadius: "14px",
                        backgroundImage: "url('https://assets.maccarianagency.com/backgrounds/img4.jpg')",
                        minHeight: "300px", height: "400px", backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}>

                    </Box>
                </Grid>



            </Grid>


            {/* 6 card grid */}

            <Box padding={"35px"} mt={"6.8rem"}>

                <Grid rowSpacing={5} columnSpacing={4} overflow={"hidden"} container>

                    <Grid md={4} sm={6} xs={12}>

                        <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: "none", pl: "18px" }}>
                            <CardContent sx={{ pt: "30px" }}>

                                <IconButton mt={"20px"} sx={{ bgcolor: blue[600], padding: "13px", color: isdark ? "black" : 'white', }}><Draw /></IconButton>
                                <Typography my={"13px"} variant='h6'>Themeable</Typography>
                                <Typography mb={"20px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>Customize any part of our components to match your design needs</Typography>

                            </CardContent>
                        </Card>

                    </Grid>



                    <Grid md={4} sm={6} xs={12}>

                        <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: "none", pl: "18px" }}>
                            <CardContent sx={{ pt: "30px" }}>

                                <IconButton mt={"20px"} sx={{ bgcolor: blue[600], padding: "13px", color: isdark ? "black" : 'white', }}><BedtimeOutlined /></IconButton>
                                <Typography my={"13px"} variant='h6'>Light and dark UI</Typography>
                                <Typography mb={"20px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>Optimized for multiple color modes. Use light or dark, your choice.</Typography>

                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid md={4} sm={6} xs={12}>

                        <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: "none", pl: "18px" }}>
                            <CardContent sx={{ pt: "30px" }}>

                                <IconButton mt={"20px"} sx={{ bgcolor: blue[600], padding: "13px", color: isdark ? "black" : 'white', }}><FormatPaintOutlined /></IconButton>
                                <Typography my={"13px"} variant='h6'>Composable</Typography>
                                <Typography mb={"20px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>Designed with composition in mind. Compose new components with ease.</Typography>

                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid md={4} sm={6} xs={12}>

                        <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: "none", pl: "18px" }}>
                            <CardContent sx={{ pt: "30px" }}>

                                <IconButton mt={"20px"} sx={{ bgcolor: blue[600], padding: "13px", color: isdark ? "black" : 'white', }}><ElectricBolt /></IconButton>
                                <Typography my={"13px"} variant='h6'>Developer experience</Typography>
                                <Typography mb={"20px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>Guaranteed to boost your productivity when building your app or website.</Typography>

                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid md={4} sm={6} xs={12}>

                        <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: "none", pl: "18px" }}>
                            <CardContent sx={{ pt: "30px" }}>

                                <IconButton mt={"20px"} sx={{ bgcolor: blue[600], padding: "13px", color: isdark ? "black" : 'white', }}><CachedOutlined /></IconButton>
                                <Typography my={"13px"} variant='h6'>Continuous updates</Typography>
                                <Typography mb={"20px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>We continually deploy improvements and new updates to theFront.</Typography>

                            </CardContent>
                        </Card>

                    </Grid>


                    <Grid md={4} sm={6} xs={12}>

                        <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: "none", pl: "18px" }}>
                            <CardContent sx={{ pt: "30px" }}>

                                <IconButton mt={"20px"} sx={{ bgcolor: blue[600], padding: "13px", color: isdark ? "black" : 'white', }}><FavoriteBorderOutlined /></IconButton>
                                <Typography my={"13px"} variant='h6'>Free support</Typography>
                                <Typography mb={"20px"} color={lightGray} fontSize={"1.1rem"} variant='body2'>6 months of free technical support to help you build your website faster.</Typography>

                            </CardContent>
                        </Card>

                    </Grid>

                </Grid>
            </Box>








        </Box>



        {/* The powerful and flexiable theme end */}
        {/* Curve element  */}
        <Box my={"50px"}>
            <CurveElement />

        </Box>



        {/* Get start with the front todat start */}


        <Box mt={"20px"} px={"1px"} textAlign={"center"}>

            <Typography variant={isXsOrSm ? "h5" : "h4"} fontWeight={"600"} >Get started with theFront today</Typography>
            <Typography my={"12px"} fontSize={{ xs: "1.1rem", sm: "1.3rem" }} variant='body2' color={lightGray} fontWeight={"300"} >Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.</Typography>

            <Stack px={"20px"} my={"34px"} justifyContent={"center"} alignItems={"center"} gap={2} direction={{ sm: "row", xs: "column" }}>
                <Button fullWidth={isXsOrMd} sx={{ py: 1.5 }} variant='contained' color='primary' >View Pages</Button>
                <Button fullWidth={isXsOrMd} sx={{ py: 1.5 }} variant='outlined' color='primary' >Documentation</Button>
            </Stack>


        </Box>
        <Box sx={{ mt: "5.5rem", boxShadow: '0px 0px 0.6px 0px rgba(0,0,0,0.75)', height: "0.2px", bgcolor: "transparent" }}>
            {/* <hr /> */}
        </Box>



        {/* Get start with the front todat end */}









    </Box >

}

export default Home