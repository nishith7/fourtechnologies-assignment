import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const GooglePartner = () => {
  return (
    <Stack paddingTop={5} paddingBottom={5} sx={{
        position: 'relative', // Position relative for overlay
        maxHeight: '477px',
        maxWidth: '1519.2px',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // White background with some opacity
        opacity: 0.95, // Apply 95% opacity to the whole stack
        borderRadius: 'inherit', 

    }} maxHeight={'477px'} maxWidth={'1519.2px'} marginTop={8} justifyContent={'center'} alignItems={'center'}>
         <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5, // 50% opacity
          backgroundImage: 'url(public/bg.jpg)', // Replace with your image path
          backgroundSize: 'cover', // Ensure the image covers the area
          backgroundPosition: 'center', // Center the background image
          backgroundRepeat: 'no-repeat',
          zIndex: 1, // Set the z-index to keep the overlay behind the content
          borderRadius: 'inherit', // Inherit the border radius from the parent
        }}
      />
        <img style={{ zIndex: 2 }} width={'195px'} height={'75px'} src='public/google.png'/>

<Typography zIndex={2}  marginTop={5} fontSize={'28px'} fontWeight={500} color='#323d47'>
Work With a Trusted Industry Leader

</Typography>


<Typography zIndex={2} maxWidth={'500px'}   marginTop={5} fontSize={'16px'} fontWeight={300} color='#868e96'>
AdPushup is hand-picked by Google for its track record of helping publishers succeed using value added services and technology, offering superior interaction and expert consulting, and maintaining a reputation for prioritizing a healthy advertising ecosystem.
</Typography>

<Button    sx={{backgroundColor:'#FF4954',borderRadius:'0px',padding:'8px 20px 6px',marginTop:'30px',width:'246px',height:'52px',zIndex:2}}>
          <Typography fontSize={'16px'} letterSpacing={'2px'} color='white' fontWeight={600}>
          GET A FREE DEMO!

          </Typography>
        </Button>
    </Stack>
  )
}

export default GooglePartner