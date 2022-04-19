import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks/use-hooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slice/userSlice";
import axios from "axios";
import { Navbar } from "../../app/Navbar";

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate();
  const [formData, setFormData] = useState({ login: "", password: "" });

  const change = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e: any) => {
    e.preventDefault();
     await axios.post(`http://10.111.15.113:45100/api/Account/Login`, formData)
      .then((data) => {
        localStorage.setItem('userId', data.data.messages[0]);
        dispatch(
          setUser({
            data: data.config.data,
          })
        );

        push("/");
      })
      .catch(() => alert("Неверный логин или пароль"));
  };


  return (
    <>
      <Navbar />
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Box
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            height: "360px",
            width: "360px",
            borderRadius: "65px",
            border: "4px solid #1976d2",
          }}>
          <Stack
            component="form"
            sx={{
              width: "35ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
            onSubmit={onFormSubmit}>
            <TextField
              label="Login"
              onChange={change}
              value={formData.login}
              name="login"
              size="small"
            />
            <TextField
              label="Password"
              type="password"
              value={formData.password}
              onChange={change}
              name="password"
              size="small"
            />
            <Button
              variant="contained"
              type="submit"
              style={{ color: "white" }}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

