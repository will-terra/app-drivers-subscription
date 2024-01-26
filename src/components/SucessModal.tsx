import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
} from "@mui/joy";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {};

const SucessModal = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const [formData, setFormData] = useState({ fullname: "", email: "" });

  useEffect(() => {
    async function fetchForm() {
      const url = "http://localhost:3000/form/c167";

      const response = await fetch(url);

      const formData = await response.json();

      return setFormData(formData);
    }
  }, []);

  return (
    <Modal open={true}>
      <ModalDialog color="neutral" layout="center" size="lg" variant="solid">
        <ModalClose />
        <DialogTitle>Welcome {formData.fullname}</DialogTitle>
        <DialogContent>
          <Typography>
            Your Full Name registered is: {formData.fullname}
          </Typography>
          <Typography>
            Your registered e-mail adress is: {formData.email}
          </Typography>
        </DialogContent>
      </ModalDialog>
    </Modal>
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
