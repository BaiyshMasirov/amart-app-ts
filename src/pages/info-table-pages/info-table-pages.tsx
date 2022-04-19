import { Container, Grid } from "@mui/material";
import { Layout } from "../../app/Layout";
import InfoTable from "../../components/info-table/info-table";

function InfoTablePages() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          display="flex"
          justifyContent="center"
          rowSpacing={8}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          <Grid item xs={8} sx={{ pb: 8 }} lg={12} md={10} sm={12}>
            <InfoTable />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default InfoTablePages;

