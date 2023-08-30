import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAiOutlineMenu } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { NavLink } from "react-router-dom";
function Footer() {
  // console.log(date)
  // const [state, setState] = useState(2023 );
  let date = new Date();
  return (
    <div
      style={{
        // position: "fixed",
        // left: 0,
        // bottom: 0,
        backgroundColor: "black",
        width: "100%",
        // height:200,
        // display:"flex",
        // justifyContent:"center",
        // color:'white',
        // fontSize:40,
        // zIndex:-1
        paddingLeft: "30px",
      }}
    >
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={4} xs={12}>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                border: "2px solid white",
                marginTop: "30px",
              }}
            >
              About Us
            </Button>
            <Box>
              <Typography sx={{ color: "white" }}>Contact us</Typography>
              <Typography sx={{ color: "white" }}>Services</Typography>
              <Typography sx={{ color: "white" }}>Truck Types</Typography>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12}>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                border: "2px solid white",
                marginTop: "30px",
              }}
            >
              +1(302) 425-93-15
            </Button>
            <Box>
              <Typography sx={{ color: "white" }}>info@fivestar.com</Typography>
              <Typography sx={{ color: "white" }}>FIVE STAR</Typography>
              <Typography sx={{ color: "white" }}>
                3524 SILVERSIDE RD STE 35B 3524
              </Typography>
              <Typography sx={{ color: "white" }}>
                SILVERSIDE RD STE 35B
              </Typography>
              <Typography sx={{ color: "white" }}>
                WILMINGTON, DE 19810-4929 WILMINGTON
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                border: "2px solid white",
                marginTop: "30px",
              }}
            >
              +1(302) 425-93-15
            </Button>
            <Box>
              <Typography sx={{ color: "white" }}>info@fivestar.com</Typography>
              <Typography sx={{ color: "white" }}>FIVE STAR</Typography>
              <Typography sx={{ color: "white" }}>
                3524 SILVERSIDE RD STE 35B 3524
              </Typography>
              <Typography sx={{ color: "white" }}>
                SILVERSIDE RD STE 35B
              </Typography>
              <Typography sx={{ color: "white" }}>
                WILMINGTON, DE 19810-4929 WILMINGTON
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginTop: "20px" }}
        >
          <Grid item xs={4}>
            <Typography
              sx={{ width: "70%", color: "white", marginTop: "20px" }}
            >
              © {date.getFullYear()} Five Star. All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button sx={{ fontSize: "50px" }}>
              <FaFacebookF />
            </Button>

            <Button sx={{ fontSize: "50px" }}>
              <FaTwitter />
            </Button>
            <Button sx={{ fontSize: "50px" }}>
              <FaInstagramSquare />
            </Button>
            <Button sx={{ fontSize: "50px" }}>
              <FaLinkedin />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button>
              
                <KeyboardArrowUpIcon
                  id="#home"
                  sx={{ fontSize: "50px", background: "#dd8d12" }}
                />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
