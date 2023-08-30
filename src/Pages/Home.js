import * as React from "react";

import { styled } from "@mui/system";
import { Box, Typography,Grid,Button, Container} from "@mui/material";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import Images from "../Images";
import About from "./About";
import Service from "./Service";
import TruckTypes from "./TruckTypes";
// import Contact from "./Contact";
import WhyUs from "./WhyUs";
import DrawerAppBar from "./DrawerAppBar.js";
import ContactUs from "./ContactUs";

const imageURL = "https://images.pexels.com/photos/9895973/pexels-photo-9895973.jpeg?auto=compress&cs=tinysrgb&w=600";
const Background = styled("div")({
  // position: "absolute",
  width: "95vw",
  height: "100vh",
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // paddingLeft:"30px"
  margin:"0 auto"
});
// slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};

export default function Home() {
  return (
  <div id="home">
        <Background>
                <Container>
                      <Grid lg={12} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                            <Grid lg={8}>
                                <Typography sx={{paddingTop:10,marginTop:"10",fontSize:100,color:"white",fontWeight:"bold"}}>
                                FREIGHT
                                DISPATCH
                                SERVICE
                                </Typography>
                                          
                                        
                            </Grid>  
                            <Grid lg={4} sx={{textAlign:'center',marginTop:10}}>
                                <Typography sx={{paddingTop:10,marginTop:"20",fontSize:20,color:"white",fontWeight:"bold"}}>
                                Improve fleet management with truck
                                dispatch service by partnering with a
                                freight dispatcher, navigating the
                                numerous companies available. 
                                </Typography>
                                <Button variant="contained" sx={ {color:'white',border:'2px solid white',background:'#dd8d12',marginTop:'40px',padding:"20px",fontWeight:"bold"}}>+1(210) 963-52-08</Button>

                                          
                                        
                            </Grid>       

                      </Grid>  
                      
            </Container>   
        </Background>

             <About/>
             <WhyUs/>

             <Service/>
             <TruckTypes/> 
           
            <ContactUs/>
             
             {/* <Form/> */}
             
  </div>

        
        
  )

  
  


}