import { Button } from "@mui/base";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {};

const WhyChooseMyRide = (props: Props) => {
  return (
    <Box className="flex flex-col bg-cinzaEscuro pt-10 pb-20">
      <Typography className="font-roboto text-laranja uppercase  mx-auto">
        Why should you ride with us?
      </Typography>
      <Typography className="mx-auto mb-10 text-white font-bold text-[45px]">
        Best in class rides
      </Typography>
      <Box className="flex gap-10 mx-auto flex flex-col md:flex-row">

        <Card className="w-[307px] bg-cinzaCards pb-2" >
          <CardMedia
            sx={{ height: 214 }}
            image="basic-car.svg"
            title="basic car"
            aria-hidden
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="text-white">
              Basic
            </Typography>
            <Typography variant="body2" className="text-white">
              The best balance of price and comfort. You will not go wrong with
              our basic rides.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.google.com/search?q=basic+car" role="link" className="text-laranja ml-auto mr-2 uppercase mt-5 ">Learn More</Button>
          </CardActions>
        </Card>


        <Card className="w-[307px] bg-cinzaCards pb-2 " >
          <CardMedia
            sx={{ height: 214 }}
            image="comfort-car.svg"
            title="comfort car"
            aria-hidden
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="text-white">
              Comfort
            </Typography>
            <Typography variant="body2" className="text-white">
            If comfort is your priority, this is the ride for you. It's spacious and packed with features.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.google.com/search?q=comfort+car" role="link" className="text-laranja ml-auto mr-2 uppercase ">Learn More</Button>
          </CardActions>
        </Card>


        <Card className="w-[307px] bg-cinzaCards pb-2" >
          <CardMedia
            sx={{ height: 214 }}
            image="business-car.svg"
            title="business car"
            aria-hidden
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="text-white">
              Business
            </Typography>
            <Typography variant="body2" className="text-white">
            Do you want to travel around the city in style? Make sure to select or business class rides.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.google.com/search?q=business+car" role="link" className="text-laranja ml-auto mr-2 uppercase">Learn More</Button>
          </CardActions>
        </Card>


        <Card className="w-[307px] bg-cinzaCards pb-2" >
          <CardMedia
            sx={{ height: 214 }}
            image="deluxe-car.svg"
            title="deluxe car"
            aria-hidden
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="text-white">
              Deluxe
            </Typography>
            <Typography variant="body2" className="text-white">
            The best ride for luxury and comfort. No compromises here. You'll surely get what you pay for.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.google.com/search?q=deluxe+car" role="link" className="text-laranja ml-auto mr-2 uppercase">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default WhyChooseMyRide;
