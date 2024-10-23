import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Demands = () => {
  return (
    <Stack spacing={10} marginTop={5} direction={'row'} justifyContent={'center'} alignItems={'center'} >
<Stack maxWidth={'540px'}>
    
<Typography fontSize={'33px'} fontWeight={600} color='#323d47'>
Access Top-Tier Demand
</Typography>

<Typography color='#757575' fontSize={'16px'} marginTop={4}>
In 2014, we launched our proprietary A/B testing tool to help web <br/> publishers increase their ad revenue by optimizing ad layouts.
</Typography>

<Typography color='#757575' fontSize={'16px'} marginTop={4}>
Since then, we’ve expanded our product portfolio and partnered with multiple top-tier networks and exchanges such as OpenX, Rubicon Project, Media.net, Index Exchange, Pubmatic, and District M
</Typography>

<Typography color='#757575' fontSize={'16px'} marginTop={4}>
These partnerships allow us to reduce barriers of entry and bring the best global brands, campaigns, and ads to our publisher partners.
</Typography>
<Stack maxWidth={'fit-content'} marginTop={4}>

<Button  sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 20px 6px'}}>
          <Typography fontSize={'11px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          GET A FREE DEMO!

          </Typography>
        </Button>
</Stack>


</Stack>

<img src='public/demands.png' width={'300px'} height={'400px'}/>
        



    </Stack>
  )
}

export default Demands