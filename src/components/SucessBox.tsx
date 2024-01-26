import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Props = {};

const SucessModal = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    country: "",
    city: "",
    referralcode: "",
    myowncar: false,
    cartype: "",
  });

  useEffect(() => {
    async function fetchForm() {
      const url = "http://localhost:3000/form/c167";

      const response = await fetch(url);

      const formData = await response.json();

      return setFormData(formData);
    }
  }, []);

  return (
    <Box className="w-full flex gap-4 flex-col ml-10 pb-20">
      <Typography className="text-white font-bold text-5xl mx-auto mb-4">
        {" "}
        <CheckCircleIcon className="text-6xl mb-1 text-[#478426]" />
        &nbsp;Welcome, {formData.fullname}
      </Typography>

      <Typography className="text-white text-2xl">
        Your full name is {formData.fullname}
      </Typography>
      <Typography className="text-white text-2xl">
        Your e-mail adress is {formData.email}
      </Typography>
      <Typography className="text-white text-2xl">
        You live in {formData.city}, {formData.country}
      </Typography>
      <Typography className="text-white text-2xl">
        Your referral code is {formData.referralcode}
      </Typography>
      {formData.myowncar && (
        <Typography className="text-white text-2xl">
          You drive a {formData.cartype}
        </Typography>
      )}
      
      <Typography className="text-laranja font-medium text-3xl mt-14 mx-auto">
        Our team will assess and get back to you within 48 hours.
      </Typography>
    </Box>
  );
};

export default SucessModal;

//   if (!response.ok) {
//     const error = new Error(
//       "An error occurred while fetching the form data"
//     );
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }
