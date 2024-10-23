import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const GetStarted = () => {
  return (
    <Stack marginTop={10} justifyContent={'center'} alignItems={'center'} maxHeight={'427px'} maxWidth={'1519px'} sx={{
        backgroundImage: 'linear-gradient(to right bottom, #eb575c 0%, #000 100%)',
      }}>

        <Typography marginTop={10} fontSize={'34px'} color='white' fontWeight={600}>
        Let's Get Started
        </Typography>
        <Typography textAlign={'center'} marginTop={3} fontSize={'16px'} color='#ffffffd9'>
        Over the years, we have helped more than 300 web publishers sustainably increase their ad CTRs, <br/> CPMs, and overall revenues without compromising on UX. If you want to learn how our technology can <br/> do the same for you, go ahead and request a demo.
        </Typography>

        <Button   sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 20px 6px',marginTop:'30px',width:'246px',height:'52px',marginBottom:10}}>
          <Typography fontSize={'16px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          GET A FREE DEMO!

          </Typography>
        </Button>

    </Stack>
  )
}

export default GetStarted