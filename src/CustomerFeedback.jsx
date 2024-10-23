import React from 'react'

import { Avatar, Card, Rating, Stack, Typography } from '@mui/material'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpeg'
import p4 from './assets/p4.jpeg'

const CustomerFeedback = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} marginTop={10} sx={{backgroundColor:'#f9fafa'}} height={'820px'} maxWidth={'1519px'} >
        <Typography marginTop={8} color='#323d47' fontSize={'33px'} fontWeight={600}>
        What Our Customers Say
        </Typography>

        <Stack marginTop={5} gap={7} direction={'row'} >
            <Card   sx={{width:'540px',height:'232px',color:'white',padding:'20px 32px'}}>
            <Rating size='small' name="half-rating" defaultValue={5} precision={0.5} />
            <Typography marginTop={2} color='#757575' fontSize={'16px'} >
                "We found what works for us with our audience after integrating with AdPushup and saw an upward trend in revenue—all thanks to their competent platform and committed team"
            </Typography>
            <Stack marginTop={9}>
            <Stack gap={2} direction={'row'}>
            <Avatar sizes='34px 34px' alt="Remy Sharp" src={p1}/>
            <Stack>
                <Typography color='#757575' fontSize={'14px'}>
                    Vikas Yogi
                </Typography>
                <Typography color='#bfc5ca' fontSize={'13px'}>
                    Founding editor of IndiaCarNews
                </Typography>

            </Stack>
            </Stack>
            </Stack>
            


            </Card>
            <Card   sx={{width:'540px',height:'232px',color:'white',padding:'20px 32px'}}>
            <Rating size='small' name="half-rating" defaultValue={5} precision={0.5} />
            <Typography marginTop={2} color='#757575' fontSize={'16px'} >
               "Everything was up and running within a week. AdPushup helped us achieve significant uplift through strategic ad placements and by connecting us to demand that we couldn't access on our own."
            </Typography>
            <Stack marginTop={9}>
            <Stack gap={2}  direction={'row'}>
            <Avatar sizes='34px 34px' alt="Remy Sharp" src={p2} />
            <Stack>
                <Typography color='#757575' fontSize={'14px'}>
                    Matt Miller
                </Typography>
                <Typography color='#bfc5ca' fontSize={'13px'}>
                    Lead Developer at SummitPost
                </Typography>

            </Stack>
            </Stack>
            </Stack>
            


            </Card>

        </Stack>
        <Stack marginTop={5} gap={7} direction={'row'} >
        <Card   sx={{width:'540px',height:'232px',color:'white',padding:'20px 32px'}}>
            <Rating size='small' name="half-rating" defaultValue={5} precision={0.5} />
            <Typography marginTop={2} color='#757575' fontSize={'16px'} >
            "Just like any business owner, we're looking for additional ways to grow our revenue. If we hadn't worked with AdPushup, we would've been leaving money on the table."
            </Typography>
            <Stack marginTop={9}>
            <Stack gap={2} direction={'row'}>
            <Avatar sizes='34px 34px' alt="Remy Sharp" src={p3} />
            <Stack>
                <Typography color='#757575' fontSize={'14px'}>
                    Dan Laufer
                </Typography>
                <Typography color='#bfc5ca' fontSize={'13px'}>
                Co-founder and CEO, RentLingo
                </Typography>

            </Stack>
            </Stack>
            </Stack>
            


            </Card>

            <Card   sx={{width:'540px',height:'232px',color:'white',padding:'20px 32px'}}>
            <Rating size='small' name="half-rating" defaultValue={5} precision={0.5} />
            <Typography marginTop={2} color='#757575' fontSize={'16px'} >
           "AdPushup has been a reliable partner and their enterprise solution works like a charm, especially the support. We would recommend them to anyone looking to increase their revenue."
            </Typography>
            <Stack marginTop={9}>
            <Stack gap={2} direction={'row'}>
            <Avatar sizes='34px 34px' alt="Remy Sharp" src={p4} />
            <Stack>
                <Typography color='#757575' fontSize={'14px'}>
                Amit Qazi
                </Typography>
                <Typography color='#bfc5ca' fontSize={'13px'}>
                Programmatic and Ad Operations Head, Zee Entertainment
                </Typography>

            </Stack>
            </Stack>
            </Stack>
            


            </Card>
           

        </Stack>
    </Stack>
  )
}

export default CustomerFeedback