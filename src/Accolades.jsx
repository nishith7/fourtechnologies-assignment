import { Stack, Typography } from '@mui/material'
import React from 'react'

const Accolades = () => {
    const awards =['awardone','awardtwo','awardthree','awardfour']
    const anotherawards = ['awardnext','awardlast']
  return (
    <Stack marginTop={15} justifyContent={'center'} alignItems={'center'}>
        <Typography fontSize={'34px'} color='#323d47' fontWeight={600}>
            Accolades
        </Typography>

        <Stack marginTop={10} direction={'row'} gap={5}>
            {
                awards.map((item)=>(
                    <img src={`public/${item}.png`}  style={{ maxWidth: 'none', height: 'auto',objectFit:'contain' }}/>
                ))
            }


        </Stack>

        <Stack marginTop={3} direction={'row'} gap={5}>
            {
                anotherawards.map((item)=>(
                    <img src={`public/${item}.png`}  style={{ maxWidth: 'none', height: 'auto',objectFit:'contain' }}/>
                ))
            }


        </Stack>

    </Stack>
  )
}

export default Accolades