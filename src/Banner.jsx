import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <Stack marginTop={10} justifyContent={'center'} alignItems={'center'} maxWidth={'1519.2px'} maxHeight={'400px'} sx={{backgroundImage: 'linear-gradient(to right bottom, #eb575c 0%, #000 100%)'}}>
<Stack justifyContent={'center'} alignItems={'center'} spacing={10} direction={'row'} paddingTop={7} paddingBottom={7} maxWidth={'825px'} maxHeight={'73px'}> 
    <Typography color='white' fontSize={'24px'} fontWeight={'600'}>
    AdPushup's platform gives you the power to optimize for <br/> audience engagement and ad revenue.
    </Typography>
    <Stack>
    <Button sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 26px 6px',width:'auto',whiteSpace:'nowrap'}}>
          <Typography noWrap textAlign={'left'} fontSize={'11px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          GET FREE REVENUE ESTIMATE

          </Typography>
        </Button>

    </Stack>
    
</Stack>
    </Stack>
  )
}

export default Banner