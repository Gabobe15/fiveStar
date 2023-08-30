import { Box, Button, Container, Grid, Paper ,Typography } from '@mui/material'
import { margin } from '@mui/system';

import React from 'react'

import { styled } from '@mui/material/styles';
import WhyUs from './WhyUs';



function About() {
  return (
    // <Box sx={{ width: '100%', maxWidth: 500 }}>
    <Container>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ paddingLeft: "30px" }}
      >
        <Grid>
          <Typography variant="h1" sx={{ color: "#FDBC18" }}>
            About us
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ marginTop: "30px" }}>
            FiveStar Dispatch
          </Typography>
          <Typography sx={{ marginTop: "30px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. industry's standard dummy text ever since the 1500s, when
            an unknown and scrambled it to make a type specimen book. It has
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. industry's standard dummy text ever since the 1500s, when
            an unknown and scrambled it to make a type specimen book. It has
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: "30px" }}
      >
        <Grid lg={6} xs={12}>
          <Typography variant="h5">Best for: Owner-operators</Typography>
          <Typography variant="h3" sx={{ marginTop: "30px" }}>
            Trucks available
          </Typography>
          <Typography component="div">
            <ul>
              <li> Dry vans</li>
              <li> Reefer</li>
              <li>Flatbeds</li>
            </ul>
          </Typography>
          <Typography sx={{ marginTop: "20px", backgroundColor: "#E18012" }}>
            4% to 5% of load value based on the number of trucks
          </Typography>
          <Typography sx={{ marginTop: "20px" }}>
            Dedicated dispatcher: Yes, for fleets with five or more trucks
          </Typography>
          <Typography sx={{ marginTop: "20px" }}>
            Broker credit check: Yes
          </Typography>
          <Typography sx={{ marginTop: "20px" }}>
            Contract requirements: No
          </Typography>
        </Grid>
        <Grid lg={6} xs={12}>
          <Typography sx={{ marginTop: "20px" }}>
            Special features and Benefits
          </Typography>
          <Typography component="div">
            <ul>
              <li> Back office support for paperwork</li>
              <li>Layovers</li>
              <li>Lumper fees</li>
              <li>Set-up packers</li>
              <li>Detentions</li>
              <li>Higher paying loads</li>
              <li>One of the most affordable options</li>
              <li sx={{ color: "red" }}>Fast, easy sign-up process</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      {/* <WhyUs/> */}
    </Container>
  );
}

export default About