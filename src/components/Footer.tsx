import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box className="bg-cinzaEscuro pt-16 pb-10 px-24 flex gap-28">
      <Box>
        <img src="footer-logo.svg" alt="My ride logo" />
        <Typography className="text-cinzaText mt-4">
          MyRide Inc., 2nd Floor, New York, NY 10016
        </Typography>
        <img className="mt-6" src="social-media.svg" alt="Social media icons" />
      </Box>
      <Box className="flex gap-24">
        <Box>
            <Typography className="text-white font-medium text-xl mb-4"> Company</Typography>
            <Typography className="text-white mb-2"> Abouts Us</Typography>
            <Typography className="text-white  mb-2"> News</Typography>
            <Typography className="text-white  mb-2"> Carrers</Typography>
            <Typography className="text-white  mb-2"> How we work</Typography>
        </Box>
        <Box>
            <Typography className="text-white font-medium text-xl mb-4"> Support</Typography>
            <Typography className="text-white mb-2"> FAQ</Typography>
            <Typography className="text-white  mb-2"> US Office</Typography>
            <Typography className="text-white  mb-2"> Asia Office</Typography>
            <Typography className="text-white  mb-2"> Help Center</Typography>
        </Box>
        <Box>
            <Typography className="text-white font-medium text-xl mb-4"> More</Typography>
            <Typography className="text-white mb-1 "> Become a partner</Typography>
            <Typography className="text-white mb-1"> Partner Support</Typography>
            <Typography className="text-white mb-1"> Mobile app links</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
