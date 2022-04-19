import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import axios from "axios";
import { AccountCircle } from "@mui/icons-material";

interface Props {
    id: string;
  name: string;
  totalAmount: number;
  status: number;
}

export const EditList = ({ id, name, totalAmount, status }: Props) => {
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    name: name,
    totalAmount: totalAmount,
    status: status,
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    window.location.reload();

    e.preventDefault();
    const products = {
        orderId: id,
      userId: localStorage.getItem("userId"),
      name: values.name,
      totalAmount: values.totalAmount,
      status: values.status,
      productsId: ["10ccb2b3-731b-4cac-a93d-3df24540a302"],
    };
    axios.post(
      `http://10.111.15.113:45100/api/Order/Edit`,
      { ...products },
      { headers: { "Content-Type": "application/json" } }
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        color="primary"
        variant="outlined"
        onClick={handleClickOpen}
        size="small">
        Edit
      </Button>
      <Dialog maxWidth="md" open={open} fullWidth>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ mr: 2 }}
            label="Name"
            name="name"
            onChange={handleChange}
            value={values.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            sx={{ mr: 2 }}
            label="Status"
            type="number"
            name="status"
            onChange={handleChange}
            value={values.status}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            sx={{ mr: 2 }}
            label="Total"
            type="number"
            name="totalAmount"
            onChange={handleChange}
            value={values.totalAmount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            close
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}>
            edit
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};


