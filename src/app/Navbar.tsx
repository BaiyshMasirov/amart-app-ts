import React from "react";
import { Button, Container, Grid} from "@mui/material";
import { useAppDispatch } from "../hooks/use-hooks";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slice/userSlice";
import { makeStyles } from "@mui/styles";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="space-between">
          <Grid alignItems="center" display="flex">
            <Grid sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Grid display="flex" alignItems="center">
                <div className={styles.txtStyle}>
                  <h2>Market</h2>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid alignItems="center" display="flex">
            {isAuth && (
              <>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => dispatch(removeUser())}>
                  Exit
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>

  );
};

const useStyles = makeStyles({
  header: {
    color: "#3BA6B3",
    boxShadow: "0px 2px 10px rgb(0 0 0 / 5%)",
    marginBottom: "50px",
    background: "white",
  },
  txtStyle: {
    "& span": {
      color: "#3BA6B3",
    },
  },
});

