import { AccountCircle } from "@mui/icons-material";
import { Box, Button, InputAdornment, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const AddList = () => {
  const [values, setValues] = useState({
    name: "",
    totalAmount: 0,
    status: 0,
    productsId: ["10ccb2b3-731b-4cac-a93d-3df24540a302"],
    // userId: localStorage.getItem("userId"),
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
    const productsId = {
      userId: localStorage.getItem("userId"),
      name: values.name,
      totalAmount: values.totalAmount,
      status: values.status,
      productsId: ["10ccb2b3-731b-4cac-a93d-3df24540a302"],
    };
    axios.post(
      `http://10.111.15.113:45100/api/Order/Create`,
      { ...productsId },
      { headers: { "Content-Type": "application/json" } }
    );
  };

  return (
    <Paper sx={{ p: 5 }} elevation={3}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <TextField
            id="name"
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
            id="status"
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
            id="totalAmount"
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
        </Box>
        {!values.name ? (
          <Button
            variant="contained"
            disabled
            type="submit"
            style={{ color: "white" }}>
            Add
          </Button>
        ) : (
          <Button variant="contained" type="submit" style={{ color: "white" }}>
            Add
          </Button>
        )}
      </form>
    </Paper>
  );
};

