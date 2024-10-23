import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const HighlightedClient = () => {
  return (
    <Stack gap={15} marginTop={10} direction={'row'} maxHeight={'562px'} maxWidth={'1519px'} sx={{
        backgroundImage: 'linear-gradient(to right bottom, #eb575c 0%, #000 100%)',
      }}>
        <img style={{paddingTop:25,paddingBottom:25}} src='public/highlightclient.jpg' width={'759px'} height={'466px'}/>

        <Stack textAlign={'left'} maxWidth={'506px'} justifyContent={'center'} >
            <Typography  fontSize={'24px'} fontWeight={600} color='white'>
            How We Delivered a 534% Ad Revenue <br/> Uplift in 6 Months for CCNA7
            </Typography>

            <Typography  marginTop={3} color={'#ffffffd9'} fontSize={'16px'}>
            CCNA7 is a niche educational website that publishes in-depth learning modules and exams targeted towards people interested in preparing for the IT certification. It follows a Q&A theme and regularly updates content with the latest information and insights. CCNA7 had explored other ad tech vendors in the past, before switching to AdPushup
            </Typography>
<Stack marginTop={2} maxWidth={'fit-content'}>
<Button  sx={{backgroundColor:'#f8f9fa',borderRadius:'0px',padding:'8px 20px 6px',width:'auto'}}>
          <Typography  fontSize={'11px'} letterSpacing={'2px'} color='#757575' fontWeight={600}>
          VIEW CASE STUDY

          </Typography>
        </Button>

</Stack>
            

        </Stack>


    </Stack>
  )
}

export default HighlightedClient