import React from 'react'
import './contact.css';


function Contact() {


    
    return (
        <div  id="ContactUs">
            <section className="all">
                <h1 className="do">Message me</h1>
                <section className="contact_container">
                    <div class="contact_icons">
                        <div class="row">
                            {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                            <div class="info">
                                <div class="sub-title">Main Address</div>
                            </div>

                        </div>
                        <div class="row">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <div class="info">
                                {/* <div class="head">Phone</div> */}
                                <div class="sub-title">+1 (302) 425-93-15</div>
                            </div>


                        </div>
                        <div class="row">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <div class="info">
                                {/* <div class="head">Address</div> */}
                                <div class="sub-title">3524 SILVERSIDE RD STE 35B3524 SILVERSIDE RD STE 35B WILMINGTON, DE 19810-4929</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fa fa-envelope"></i>
                            <div class="info">
                                {/* <div class="head">Email</div> */}
                                <div class="sub-title">info@fivestar.com</div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="row">
                            {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                            <div class="info">
                                <div class="sub-title">Other branch</div>
                            </div>

                        </div>
                        <div class="row">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <div class="info">
                                {/* <div class="head">Phone</div> */}
                                <div class="sub-title">+1 (302) 425-93-15</div>
                            </div>


                        </div>
                        <div class="row">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <div class="info">
                                {/* <div class="head">Address</div> */}
                                <div class="sub-title">3524 SILVERSIDE RD STE 35B3524 SILVERSIDE RD STE 35B WILMINGTON, DE 19810-4929</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fa fa-envelope"></i>
                            <div class="info">
                                {/* <div class="head">Email</div> */}
                                <div class="sub-title">ahmed@fivestar.com</div>
                            </div>
                        </div>
                    </div>

                    <section className="form" id="talk">
                        <div>
                            <h3 className="get">Get in <span>Touch</span></h3>
                            <p>For any information or help about website you can contact with me. </p>
                            <p> would love to hear from you!</p>
                        </div>
                        <form>
                             
                         <div class="inputBox">

                               
                           
        
                                <input type="text" name="Name" placeholder="name" id="jina"/>
                         <label id='name'></label>

        
                             
                                <input type="email" name="Email" placeholder="email" id="mailing"/>
                                <label id='mail'></label>
                               
                         </div> 

                            <div class="inputBox">
                                      
                        
                                <input type="number" name="Phone"placeholder="number" id="phone"/>
                                <label id='tel'></label>
                               
                         

                                <input type="text" name="Locate" placeholder="location" id="meel"/>
                                <label id='locateLabel'></label>
                            </div> 
                              
                         <div class="inputBox">

                             <textarea placeholder="write message" name="Message"/>
                         </div>
                        
                        <input type="submit" value="Submit" class="btn"/>

                        <p id='pa'></p>
                             

                        </form>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Contact
