import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "./assets/logo.png";
import React from "react";

const Footer = () => {
  const buttons = [
    <Button key="one">
      <Typography fontSize={"15px"} color="#757575">
        About
      </Typography>
    </Button>,

    <Button key="two">
      <Typography fontSize={"15px"} color="#757575">
        Careers
      </Typography>
    </Button>,
    <Button key="three">
      <Typography fontSize={"15px"} color="#757575">
        Contact
      </Typography>
    </Button>,
    <Button key="three">
      <Typography fontSize={"15px"} color="#757575">
        FAQS
      </Typography>
    </Button>,
    <Button key="three">
      <Typography fontSize={"15px"} color="#757575">
        Privacy Policy
      </Typography>
    </Button>,
    <Button key="three">
      <Typography fontSize={"15px"} color="#757575">
        Referral Program
      </Typography>
    </Button>,
    <Button key="three">
      <Typography fontSize={"15px"} color="#757575">
        ToS
      </Typography>
    </Button>,
  ];
  return (
    <Stack
      maxWidth={"1519px"}
      maxHeight={"362px"}
      marginTop={5}
      paddingBottom={"48px"}
      marginLeft={20}
    >
      <Stack
        gap={3}
        // justifyContent={"center"}
        // alignItems={"center"}
        direction={"row"}
      >
        <Stack maxWidth={"349px"}>
          <img
            width={"100px"}
            height={"27px"}
            src={logo}
            style={{ maxWidth: "none", height: "auto", objectFit: "contain" }}
          />
          <Typography marginTop={2} fontSize={"16px"} color="#757575">
            AdPushup, a part of Zelto Inc is a market leader in the ad revenue
            optimization and publisher solutions space. Join thousands of
            satisfied customers using our products globally.
          </Typography>
          <Typography marginTop={3} fontSize={"12px"} color="#4f4f4f">
            © 2023 Zelto Inc. All rights reserved.
          </Typography>
        </Stack>

        <Stack direction={"column"} alignItems={"flex-start"}>
          <Typography
            color="#323d47"
            fontSize={"16px"}
            fontWeight={500}
            letterSpacing={"0.75px"}
          >
            Company
          </Typography>
          <Button key="one">
            <Typography fontSize={"15px"} color="#757575">
              About
            </Typography>
          </Button>

          <Button key="two">
            <Typography fontSize={"15px"} color="#757575">
              Careers
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
              Contact
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
              FAQS
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
              Privacy Policy
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
              Referral Program
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
              ToS
            </Typography>
          </Button>
        </Stack>

        <Stack direction={"column"} alignItems={"flex-start"}>
          <Typography
            color="#323d47"
            fontSize={"16px"}
            fontWeight={500}
            letterSpacing={"0.75px"}
          >
            Products
          </Typography>
          {/* Ad Layout Optimization
Ad Mediation
Adblock Recovery
AMP Ads
Innovative Ad Formats
Header Bidding */}
          <Button key="one">
            <Typography fontSize={"15px"} color="#757575">
            Ad Layout Optimization
            </Typography>
          </Button>

          <Button key="two">
            <Typography fontSize={"15px"} color="#757575">
            Ad Mediation
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
            Adblock Recovery
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
            AMP Ads
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
            Innovative Ad Formats
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
            Header Bidding
            </Typography>
          </Button>
         
          
        </Stack>
        <Stack direction={"column"} alignItems={"flex-start"}>
          <Typography
            color="#323d47"
            fontSize={"16px"}
            fontWeight={500}
            letterSpacing={"0.75px"}
          >
            Solutions
          </Typography>

          {/* AdSense Publishers
Independent Publishers
Enterprise Media */}
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
            AdSense Publishers
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
            Independent Publishers
            </Typography>
          </Button>
          <Button key="three">
            <Typography fontSize={"15px"} color="#757575">
            Enterprise Media
            </Typography>
          </Button>
          
        </Stack>
        <Stack alignItems={'center'} direction={'column'}>
          <Button
            sx={{
              backgroundColor: "#FF4954",
              borderRadius: "0px",
              width:'180px',
              height:'60px'
            }}
          >
            <Typography
              fontSize={"11px"}
              letterSpacing={"2px"}
              color="white"
              fontWeight={600}
            >
              GET A FREE <br/> DEMO!
            </Typography>
          </Button>
          <Stack marginTop={4} direction={"row"} gap={1}>
  <Button
    sx={{
      // display: 'inline-block',
      minWidth: '32px',
      minHeight: '32px',
      // lineHeight: '32px',
      // marginRight: '4px',
      // marginBottom: '4px',
      padding:'0px',
      // textAlign: 'center',
      color: '#757575',
      fontSize: '1rem',
      borderRadius: '3px',
      opacity: 0.8,
      transition: '0.4s ease-out',
      '&:hover': {
        opacity: 1, // Increase opacity on hover
      },
    }}
  >
    <FacebookIcon />
  </Button>
  <Button
    sx={{
      // display: 'inline-block',
      minWidth: '32px',
      minHeight: '32px',
      // lineHeight: '32px',
      // marginRight: '4px',
      // marginBottom: '4px',
      padding:'0px',
      // textAlign: 'center',
      color: '#757575',
      fontSize: '1rem',
      borderRadius: '3px',
      opacity: 0.8,
      transition: '0.4s ease-out',
      '&:hover': {
        opacity: 1, // Increase opacity on hover
      },
    }}
  >
    <TwitterIcon />
  </Button>
  <Button
    sx={{
      // display: 'inline-block',
      minWidth: '32px',
      minHeight: '32px',
      // lineHeight: '32px',
      // marginRight: '4px',
      // marginBottom: '4px',
      padding:'0px',
      // textAlign: 'center',
      color: '#757575',
      fontSize: '1rem',
      borderRadius: '3px',
      opacity: 0.8,
      transition: '0.4s ease-out',
      '&:hover': {
        opacity: 1, // Increase opacity on hover
      },
    }}
  >
    <YouTubeIcon />
  </Button>
  <Button
    sx={{
      // display: 'inline-block',
      minWidth: '32px',
      minHeight: '32px',
      // lineHeight: '32px',
      // marginRight: '4px',
      // marginBottom: '4px',
      padding:'0px',
      // textAlign: 'center',
      color: '#757575',
      fontSize: '1rem',
      borderRadius: '3px',
      opacity: 0.8,
      transition: '0.4s ease-out',
      '&:hover': {
        opacity: 1, // Increase opacity on hover
      },
    }}
  >
    <LinkedInIcon />
  </Button>
</Stack>


        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
