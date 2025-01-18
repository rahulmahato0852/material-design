import React from 'react'
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { Box, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import Navbar from './public/compo/Navbar';
import { useSelector } from "react-redux"
import Home from './public/pages/Home';
import Footer from './public/pages/Footer';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Account from './Account/compo/Account';
import AccountSettingSecurity from './Account/pages/AccountSettingSecurity';
import AccountSettingGeneral from './Account/pages/AccountSettingGeneral';
import AccountSettingNotification from './Account/pages/AccountSettingNotification';
import AccountSettingBillingInformation from './Account/pages/AccountSettingBillingInformation';


const App = () => {

  const { isdark } = useSelector(state => state.public)
  const theme = createTheme({
    palette: {
      mode: isdark ? "dark" : "light",
    }
  })

  return <ThemeProvider theme={theme}>
    <CssBaseline />

    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/account' element={<> <Account /> <Outlet /> </>}>
          <Route path='/account/general-setting' element={<AccountSettingGeneral />} />
          <Route path='/account/general-security' element={<AccountSettingSecurity />} />
          <Route path='/account/general-notification' element={<AccountSettingNotification />} />
          <Route path='/account/general-billing-info' element={<AccountSettingBillingInformation />} />
        </Route>

      </Routes>

    </BrowserRouter>


    <Footer />

  </ThemeProvider>
}

export default App