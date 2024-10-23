import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Stack direction={'row'} gap={6} >
            <Stack marginTop={15} marginLeft={22}>
                <Typography fontSize={'40px'} fontWeight={600} color='#323d47' letterSpacing={'0.5px'}>
                    Ad Revenue
                </Typography>
                <Typography fontSize={'40px'} fontWeight={600} color='#323d47' letterSpacing={'0.5px'}>
                    Optimization Platform
                </Typography>

                <Typography marginTop={5} fontWeight={300} textAlign={'left'} fontSize={'16px'}  color='#757575' letterSpacing={'0.5px'}>
                We help content creators across the globe generate more revenue <br/> by connecting them to 50+ premium advertising exchanges,<br/> deploying cutting-edge ad serving technology, and providing <br/>hands-on ad operations expertise

                </Typography>

                <Stack marginTop={4} direction={'row'} gap={2}>
            <Button  sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 20px 6px'}}>
          <Typography fontSize={'11px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          GET A FREE DEMO!

          </Typography>
        </Button>
        <Button  sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 20px 6px'}}>
          <Typography fontSize={'11px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          WATCH DEMO

          </Typography>
        </Button>

            </Stack>
            </Stack>
            <Stack marginTop={2}>
            <Box>
                <img width={'445px'} height={'442px'} src='public/homepage.png'/>
            </Box>

            </Stack>

            



    </Stack>
  )
}

export default Home