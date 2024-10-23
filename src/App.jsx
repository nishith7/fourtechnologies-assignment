import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Stack } from '@mui/material';
import Navbar from './Navbar';
import Home from './Home';
import ClientShowcase from './ClientShowcase';
import Services from './Services';
import GooglePartner from './GooglePartner';
import Demands from './Demands';
import Canvas from './Canvas';
import DailyAdOps from './DailyAdOps';
import CustomerFeedback from './CustomerFeedback';
import HighlightedClient from './HighlightedClient';
import Memberships from './Memberships';
import Accolades from './Accolades';
import GetStarted from './GetStarted';
import Footer from './Footer';
import Banner from './Banner';

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <ClientShowcase/>
    <Services/>
    <Banner/>

    <GooglePartner/>
    <Demands/>
    <Canvas/>
    <DailyAdOps/>
    <CustomerFeedback/>
    <HighlightedClient/>
    <Memberships/>
    <Accolades/>
    <GetStarted/>
    <Footer/>
    </>
    
  )
}

export default App
