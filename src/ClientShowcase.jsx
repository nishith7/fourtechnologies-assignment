import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import clientone from './assets/clientone.png';
import clienttwo from './assets/clienttwo.png';
import clientthree from './assets/clientthree.png';
import clientfour from './assets/clientfour.png';
import clientfive from './assets/clientfive.png';
import clientsix from './assets/clientsix.png';

const ClientShowcase = () => {
    const images = [clientone,clienttwo,clientthree,clientfour,clientfive,clientsix]
    const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        if (prevIndex + 4 >= images.length) {
          return 0; 
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
    <Stack marginTop={20} justifyContent={'center'} alignItems={'center'} gap={3} direction={'row'}>
        {
        // Display 4 images starting from the current startIndex
        images.slice(startIndex, startIndex + 4).map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`client ${index + 1}`}
            // style={{ width: '150px', height: 'auto' }}
          />
        ))
      }


    </Stack>
    <Stack marginTop={6} justifyContent={'center'} alignItems={'center'}>
        
    <Typography   fontSize={'13px'} fontWeight={700} color='#323d47' letterSpacing={'0.5px'}>

TRUSTED BY MORE THAN 300 PUBLISHERS ACROSS 50+ COUNTRIES
</Typography>

    </Stack>
    </>
    
    
  )
}

export default ClientShowcase