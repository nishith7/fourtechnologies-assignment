import { Button, Stack, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react'

const Services = () => {
    const services = [
        {
          imgSrc: 'public/serviceone.png',
          title: 'Improve Clickthrough Rates',
          description: `Our visual ad manager allows point- and-click creation of new ad units and layouts, while our machine learning-based layout optimizer drives ad revenue growth using automated A/B testing.`
        },
        {
          imgSrc: 'public/servicetwo.png',
          title: 'Maximize Revenue',
          description: `Advanced revenue tracking and reporting provide insights to maximize your ad revenues with performance-driven decisions and strategies.`
        },
        {
          imgSrc: 'public/servicethree.png',
          title: 'Real-Time Bidding',
          description: `We implement cutting-edge real-time bidding solutions that increase competition among advertisers, ultimately leading to higher returns.`
        },
        {
          imgSrc: 'public/servicefour.png',
          title: 'Ad Fraud Prevention',
          description: `Our technology helps detect and prevent ad fraud, ensuring that you only pay for legitimate traffic and engagements.`
        },
        {
          imgSrc: 'public/servicefive.png',
          title: 'Audience Targeting',
          description: `Sophisticated audience segmentation helps you reach the right audience, maximizing engagement and conversion.`
        },
        {
          imgSrc: 'public/servicesix.png',
          title: 'Detailed Analytics',
          description: `Our analytics dashboard provides real-time insights on ad performance, helping you refine your strategy for better results.`
        },
      ];
  return (
    <Stack marginTop={10} justifyContent={'center'} alignItems={'center'}>
        <Typography textAlign={'center'} maxWidth={'744px'} boxSizing={'border-box'} fontSize={'33px'} fontWeight={700} color='#323d47' letterSpacing={'0.5px'}>
        Maximize yield from every single ad <br/> impression on your website using a single <br/> platform

        </Typography>

        <Stack direction={'column'} spacing={6} marginTop={8}>
      { // Group services in pairs of two (three rows in total)
        [0, 3].map((startIndex) => (
          <Stack direction={'row'} justifyContent={'center'} spacing={5} key={startIndex}>
            {services.slice(startIndex, startIndex + 3).map((service, index) => (
              <Stack key={index} alignItems={'center'} marginTop={8}>
                <img width={'200px'} height={'200px'} src={service.imgSrc} alt={service.title} />
                <Typography fontSize={'19px'} fontWeight={600} color='#323d47' marginTop={3}>
                  {service.title}
                </Typography>
                <Typography textAlign={'center'} fontSize={'16px'} fontWeight={400} color='#868e96' marginTop={2} maxWidth={'290px'}>
                  {service.description}
                </Typography>
                <Button endIcon={<ArrowRightAltIcon sx={{color:'#ff4954'}}/>} sx={{color:'#ff4954'}} variant='text'>
                    <Typography fontSize={'16px'} fontWeight={700}>
                        LEARN MORE
                    </Typography>
                </Button>
              </Stack>
            ))}
          </Stack>
        ))
      }
    </Stack>

    </Stack>
  )
}

export default Services