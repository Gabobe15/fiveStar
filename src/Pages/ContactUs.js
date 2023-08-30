import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Container,Box } from "@mui/material";

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ color: "#FDBC18" }}>
              Main Branch
            </Typography>
            <Typography variant="h6">
              <i
                class="fa fa-phone"
                aria-hidden="true"
                style={{ color: "#FDBC18" }}
              ></i>{" "}
              :8484884
            </Typography>
            <Typography>
              <i class="fa fa-envelope" style={{ color: "#FDBC18" }}></i>
              :info@fivestar.com
            </Typography>
            <Typography>
              <i
                class="fa fa-map-marker"
                aria-hidden="true"
                style={{ color: "#FDBC18" }}
              ></i>
                   : 3524 SILVERSIDE RD STE 35B3524 SILVERSIDE RD STE 35B WILMINGTON,
              DE 19810-4929
            </Typography>
          </Box>
          <Box sx={{ marginTop: "30px", padding: "20px" }}>
            <Typography variant="h4">Other Branch</Typography>
            <Typography variant="h6">
              <i
                class="fa fa-phone"
                aria-hidden="true"
                style={{ color: "#FDBC18" }}
              ></i>
              :8484884
            </Typography>
            <Typography>
              <i class="fa fa-envelope" style={{ color: "#FDBC18" }}></i>
                    :info@fivestar.com
            </Typography>
            <Typography>
              <i
                class="fa fa-map-marker"
                aria-hidden="true"
                style={{ color: "#FDBC18" }}
              ></i>
              : 3524 SILVERSIDE RD STE 35B3524 SILVERSIDE RD STE 35B WILMINGTON,
              DE 19810-4929
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid onSubmit={handleSubmit} sx={{ padding: "20px" }}>
            <Typography variant="h6" sx={{ color: "#FDBC18" }}>
              Send a Message
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ width: "100%" }}
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  value={contact.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ width: "100%" }}
                  name="email"
                  label="Your Email"
                  variant="outlined"
                  value={contact.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ width: "100%" }}
                  name="email"
                  label="Your Email"
                  variant="outlined"
                  value={contact.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ width: "100%" }}
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  value={contact.subject}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "100%" }}
                  name="message"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={contact.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "16px", background: "#fdbc18" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
