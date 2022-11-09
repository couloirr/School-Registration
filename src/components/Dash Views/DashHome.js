import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DashboardCard from '../DashboardCard';
import Orders from './DashDataView';
export default function DashHome({ navState }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <DashboardCard />
          <DashboardCard />
        </Grid>
        <Grid item xs={12} md={4} lg={3}></Grid>
      </Grid>
    </Container>
  );
}
