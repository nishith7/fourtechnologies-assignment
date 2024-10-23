import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'

const Footer = () => {
    const buttons = [
        <Button  key="one">
            <Typography fontSize={'15px'} color='#757575'>
About
            </Typography>
        </Button>,
        
        <Button key="two">
            <Typography fontSize={'15px'} color='#757575'>
Careers
            </Typography>
        </Button>,
        <Button key="three">
            <Typography fontSize={'15px'} color='#757575'>
Contact
            </Typography>
        </Button>,
        <Button key="three">
        <Typography fontSize={'15px'} color='#757575'>
FAQS
        </Typography>
    </Button>,
    <Button key="three">
    <Typography fontSize={'15px'} color='#757575'>
Privacy Policy
    </Typography>
</Button>,
<Button key="three">
            <Typography fontSize={'15px'} color='#757575'>
Referral Program
            </Typography>
        </Button>,
        <Button key="three">
        <Typography fontSize={'15px'} color='#757575'>
ToS
        </Typography>
    </Button>

      ];
  return (
    <Stack
    maxWidth={'1519px'} maxHeight={'362px'} marginTop={5}
    paddingBottom={'48px'}
    >

        <Stack gap={3} justifyContent={'center'} alignItems={'center'} direction={'row'}>
            <Stack maxWidth={'349px'}>
                <img width={'100px'} height={'27px'} src='public/logo.png' style={{ maxWidth: 'none', height: 'auto',objectFit:'contain' }}/>
                <Typography marginTop={2} fontSize={'16px'} color='#757575'>
                AdPushup, a part of Zelto Inc is a market leader in the ad revenue optimization and publisher solutions space. Join thousands of satisfied customers using our products globally.
                </Typography>
                <Typography marginTop={3} fontSize={'12px'} color='#4f4f4f'>
                © 2023 Zelto Inc. All rights reserved.
                </Typography>

            </Stack>

            <Stack justifyContent={'left'}>
                <Typography color='#323d47' fontSize={'16px'} fontWeight={500} letterSpacing={'0.75px'}>
                    Company
                </Typography>
                <ButtonGroup
                sx={{
                    '& .MuiButton-root': {
                      border: 'none',  // Remove the border between buttons
                    },
                    
                  }}
        orientation="vertical"
        variant="text"
        
      >
        {buttons}
      </ButtonGroup>


            </Stack>

            <Stack>
                <Typography color='#323d47' fontSize={'16px'} fontWeight={500} letterSpacing={'0.75px'}>
                Products
                   
                </Typography>
                <ButtonGroup
                sx={{
                    '& .MuiButton-root': {
                      border: 'none',  // Remove the border between buttons
                    }
                  }}
        orientation="vertical"
        variant="text"
      >
        {buttons}
      </ButtonGroup>


            </Stack>
            <Stack>
                <Typography color='#323d47' fontSize={'16px'} fontWeight={500} letterSpacing={'0.75px'}>
                    Solutions
                </Typography>
                <ButtonGroup
                sx={{
                    '& .MuiButton-root': {
                      border: 'none',  // Remove the border between buttons
                    }
                  }}
        orientation="vertical"
        variant="text"
      >
        {buttons}
      </ButtonGroup>


            </Stack>
            <Stack>
            <Button  sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 20px 6px'}}>
          <Typography fontSize={'11px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          GET A FREE DEMO!

          </Typography>
        </Button>
        <Stack direction={'row'}>
            <Button>
                <FacebookIcon/>
            </Button>
            <Button>
<TwitterIcon/>
            </Button>
            <Button>
                <YouTubeIcon/>
            </Button>
            <Button>
<LinkedInIcon/>
            </Button>
        </Stack>
            </Stack>
        </Stack>

    </Stack>
  )
}

export default Footer