import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GetProductsFace } from "../../interface/producs-interface";

export const ListInfo = () => {
  const [check, setCheck] = useState<GetProductsFace>();

  useEffect(() => {
    async function registerData() {
      const response = await axios.get(
        "http://10.111.15.113:45100/GetProducts"
      );
      setCheck(response.data);
    }

    registerData();
  }, []);
  return (
    <>
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{ p: 6, maxWidth: 1054, borderRadius: 2 }}>
        <Typography variant="h4" component="div" sx={{ pb: 4 }}>
          List
        </Typography>
        <hr />
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, fontSize: 17 }}>Name</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 17 }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {check?.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
