import { Stack, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import customerservice from './assets/customerservice.png'
import React from 'react'

const DailyAdOps = () => {
  return (
    <Stack marginLeft={10} gap={10} justifyContent={'center'} alignItems={'center'} direction={'row'} marginTop={10}>
        <img
src={customerservice}
width={'400px'}
height={'346px'}
        />

        <Stack   maxWidth={'695px'}>
            <Typography fontSize={'28px'} fontWeight={600} color='#323d47'>
            Your Personal Ad Ops Hotline
            </Typography>
            <Typography marginTop={2} color='#757575' fontSize={'16px'}>
            Our partners depend on us for solving their daily ad ops challenges as well as meeting long-term ad revenue goals. Whatever it us—we're here for you.
            </Typography>
            <Stack marginTop={5} direction={'row'} gap={10}>
                <Stack maxWidth={'295px'}>
                    <PhoneIcon fontSize='large' sx={{color:'#eb575c'}}/>
                <Typography color='#323d47' fontSize={'20px'} fontWeight={600} marginTop={3}>
                Dedicated Account <br/> Manager
</Typography>
<Typography fontSize={'16px'} color='#757575' marginTop={2}>
All our partners get a dedicated account manager; to assist with everything from the on-boarding to providing everyday ad ops support and technical troubleshooting.
</Typography>

                </Stack>
                <Stack maxWidth={'295px'}>
                    <CheckBoxIcon fontSize='large' sx={{color:'#eb575c'}}/>
                    <Typography color='#323d47' fontSize={'20px'} fontWeight={600} marginTop={3}>
                    Google Policy Compliance
                    </Typography>
                    <Typography fontSize={'16px'} color='#757575' marginTop={2}>
                    Our close relationship with Google and deep understanding of their ad products such as AdSense, AdX, and GAM allows us to deliver quick policy compliance assistance.
                    </Typography>
                </Stack>
                

            </Stack>

        </Stack>
    </Stack>
  )
}

export default DailyAdOps