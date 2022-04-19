import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { LastChecksInfoFace } from "../../interface/info-table-interface";
import { Grid, Typography } from "@mui/material";
import { AddList } from "../add-list/add-list";
import { EditList } from "../edit-list/edit-list";
import { CreateSelect } from "../create-select/create-select";

export default function InfoTable() {
  const [check, setCheck] = useState<LastChecksInfoFace>();

  useEffect(() => {
    async function registerData() {
      const response = await axios.get(
        `http://10.111.15.113:45100/api/Order/GetOrders?UserId=${localStorage.getItem(
          "userId"
        )}`
      );
      setCheck(response.data);
    }

    registerData();
  }, []);

  return (
    <>
      <Grid item xs={12} lg={12} sx={{ pb: 8 }}>
        <AddList />
      </Grid>
      <Grid item xs={12} lg={12} sx={{ pb: 8 }}>
        <CreateSelect />
      </Grid>
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
                Status
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 17 }}>
                Total
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontSize: 17 }}>
                Edit
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {check?.map((row, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.totalAmount}</TableCell>
                <TableCell align="right">
                  {
                    <EditList
                      name={row.name}
                      totalAmount={row.totalAmount}
                      status={row.status}
                      id={row.id}
                    />
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

