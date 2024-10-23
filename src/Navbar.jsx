import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Stack } from '@mui/material';

const Navbar = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar  sx={{ width: "100%", backgroundColor: 'white',boxShadow:'none' }} position="static">
    <Toolbar sx={{marginLeft:'10px' ,marginRight:'50px'}} >
      {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon /> */}
      {/* </IconButton> */}
      <Button sx={{marginLeft:'150px'}}>
        <img width={'128px'} height={'50px'}  src={'/public/logo.png'}/>

      </Button>
      
      <Stack gap={4} marginLeft={'100px'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <Typography letterSpacing={'2px'} fontSize={'13.97px'} fontWeight={600} sx={{color:'#757575CC'}}>
          PRODUCTS
        </Typography>
        <Typography letterSpacing={'2px'} fontSize={'13.97px'} fontWeight={600} sx={{color:'#757575CC'}}>
          SOLUTIONS
        </Typography >
        <Typography letterSpacing={'2px'} fontSize={'13.97px'} fontWeight={600} sx={{color:'#757575CC'}}>
          RESOURCES
        </Typography>
        <Typography letterSpacing={'2px'} fontSize={'13.97px'} fontWeight={600} sx={{color:'#757575CC'}}>
          ABOUT
        </Typography>

        <Divider orientation='vertical' sx={{ borderColor: '#757575', height: '10px', borderWidth: '0.5px' }}/>

        <Button  sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 20px 6px'}}>
          <Typography fontSize={'11px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          GET A FREE DEMO!

          </Typography>
        </Button>

        <Button  sx={{backgroundColor:'white',borderRadius:'0px',padding:'8px 20px 6px',border:'1px solid #FF4954'}}>
          <Typography fontSize={'11px'} letterSpacing={'2px'} color='#FF4954' fontWeight={600}>
          LOG IN

          </Typography>
        </Button>

      </Stack>
    </Toolbar>
  </AppBar>
// </Box>
  )
}

export default Navbar