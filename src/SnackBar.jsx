import { Button, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";

/*
type:"success | warning | info | error"
*/
export const SnackBar = ({ message }) => {
  const [open, setOpen] = useState(message?.open ? message?.open : true);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={1000}
      onClose={() => setOpen(false)}
      key={message}
    >
      <Alert
        variant="filled"
        severity={message?.type}
        action={
          <Button color="inherit" size="small" onClick={message?.actionHandler}>
            {message?.actionMsg}
          </Button>
        }
      >
        {message?.message}
      </Alert>
    </Snackbar>
  );
};
