import { Container, Grid } from "@mui/material";
import { Layout } from "../../app/Layout";
import { ListInfo } from "../../components/list-info/list-info";

function ListInfoPage() {
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
            <ListInfo />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default ListInfoPage;