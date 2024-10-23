import { Stack, Typography } from '@mui/material'
import React from 'react'

const Memberships = () => {
    const members=['memberOne','memberTwo','memberThree','memberFour','memberFive','memberSix']
  return (
    <Stack justifyContent={'center'} alignItems={'center'} marginTop={15}>
        <Typography fontSize={'34px'} color='#323d47' fontWeight={600}>
        Memberships
        </Typography>

        <Stack marginTop={10} gap={9} direction={'row'}>
            {
                members.map((item=>(
                    <img src={`public/${item}.png`} style={{ maxWidth: 'none', height: 'auto',objectFit:'contain' }}/>
                )))
            }

        </Stack>
    </Stack>
  )
}

export default Memberships