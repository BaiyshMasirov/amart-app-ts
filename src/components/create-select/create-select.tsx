import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GetProductsFace,
} from "../../interface/producs-interface";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export const CreateSelect = () => {
  const [names, setNames] = useState<GetProductsFace>();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    );
  };


  const handleSubmit = (e: any) => {
try{
    e.preventDefault();
    const productsId = {
      userId: localStorage.getItem("userId"),
      name: '',
      totalAmount: 0,
      status: 0,
      productsId: ["e205d96e-e66d-4bdc-8456-a9ae4abb529a"],
    };
    axios.post(
      `http://10.111.15.113:45100/api/Order/Create`,
      { ...productsId },
      { headers: { "Content-Type": "application/json" } }
    );
}catch{

}
  };


  useEffect(() => {
    async function registerData() {
      const response = await axios.get(
        "http://10.111.15.113:45100/GetProducts"
      );
      setNames(response.data);
    }

    // async function paramData() {
    //   const response = await axios.get(
    //     `http://10.111.15.113:45100/api/Order/GetOrders?UserId=${localStorage.getItem(
    //       "userId"
    //     )}`
    //   );
    //   setCheck(response.data);
    // }

    // paramData()

    registerData();
  }, []);
  return (
   
        <Paper sx={{ p: 5 }} elevation={3}>
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Data</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value, index) => (
                      <Chip key={index} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}>
                {names?.map((name, index) => (
                  <MenuItem key={index} value={name.id}>
                    {`name:${name.name} price:${name.price}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Button size="small"  variant="contained" onClick={handleSubmit}>Submit</Button>
          </Paper>

  );
};
