import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box } from "@mui/material";
import { Filter7 } from "@mui/icons-material";

type Props = {};

const IconsRadio = (props: Props) => {
  const IconsAndTypes = [
    { icon: "sedan-icon.svg", type: "Sedan" },
    { icon: "suv-van-icon.svg", type: "SUV/Van" },
    { icon: "semy-luxury-icon.svg", type: "Semy Luxury" },
    { icon: "luxury-car-icon.svg", type: "Luxury Car" },
  ];

  return (
    <Box className="flex ">
      <RadioGroup
        aria-label="platform"
        defaultValue="Sedan"
        overlay
        name="platform"
        sx={{
          flexDirection: "row",
          gap: 2,
          [`& .${radioClasses.checked}`]: {
            [`& .${radioClasses.action}`]: {
              inset: -1,
              border: "3px solid",
              borderColor: "#ffffff",
            },
          },
          [`& .${radioClasses.radio}`]: {
            display: "contents",
            "& > svg": {
              zIndex: 2,
              position: "absolute",
              top: "-8px",
              right: "-8px",
              bgcolor: "background.surface",
              borderRadius: "50%",
            },
          },
        }}
      >
        <Box className="flex flex-col">
        <FormLabel className="pb-4 text-laranja font-medium text-xl">
          Select your car type
        </FormLabel>
        <Box className='flex flex-row gap-5'>
          {IconsAndTypes.map((value) => (
            <Sheet
              className="bg-cinzaForm"
              key={value.type}
              variant="outlined"
              sx={{
                borderRadius: "md",

                boxShadow: "sm",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
                p: 2,
                minWidth: 120,
              }}
            >
              <Radio
                id={value.type}
                value={value.type}
                checkedIcon={<CheckCircleRoundedIcon />}
              />
              <img src={value.icon} />
              <FormLabel className="text-white text-sm" htmlFor={value.type}>
                {value.type}
              </FormLabel>
            </Sheet>
          ))}
          </Box>
        </Box>
      </RadioGroup>
    </Box>
  );
};

export default IconsRadio;
