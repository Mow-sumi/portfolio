import React from 'react';
import Typewriter from 'typewriter-effect';
import './About.css'

const About = () => {
    return (
        <div className="container mt-5 py-5">

         
            <div className="row mt-3 ">
            <h1 className="text-type">
                    <Typewriter
                        options={{

                            autoStart: true,
                            loop: true,
                            dealy: 40,
                            strings: ["Representing Thyself..."],
                        }}
                    />
                </h1>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pt-5 ">
                <h2>Web Developer</h2>
                <p > Broad design and development knowledge including HTML, CSS, JavaScript,
                Bootstrap, specialist on React, express js, Node js, Mongodb, Photoshop.
                 Good understanding of Object Oriented Programming. Confident in C and
                java coding.
                 Industry aware and technically up to speed with current software
                development tools.</p>   
                    
                 </div>
                  <div className="col-md-6 col-lg-6  col-sm-12 col-xs-12 pt-5 " >

                          <h2 className="offset-md-4">Personal Information</h2>

                    
                         <ul className="offset-md-4" >
                           <li>
                           
                            <strong>Name:  </strong>
                            <span>Mowsumi Akter</span>
                        </li>

                        <li>
                            <strong>Phone:  </strong>
                            <span>01796952646</span><br/>
                           
                        </li>
                        <li>
                            <strong >Email: </strong>
                            <span>mow.csediu@gmail.com</span>
                        </li>
                        
                    </ul> 
                   
                </div>
            </div>  
            

              <div className="row text-center mt-3">

                <h2 className="mt-5">Technical Skills</h2> <br/>

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i className="fas fa-code"></i>
                <h4 className="pt-3">Wev Design</h4>
                <p>Front End Development With HTML CSS..</p>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-reacteurope"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Front End Development With HTML CSS and React ,,</p>
                </div>
                
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5" >
                <i class="fab fa-js-square"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Front End Development With HTML CSS and React ,,</p>
                </div>
            </div>

          {/* //////Technical skills er second row/////// */}


              <div className="row text-center mt-3">

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i className="fas fa-code"></i>
                <h4 className="pt-3">Wev Design</h4>
                <p>Front End Development With HTML CSS..</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-reacteurope"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Front End Development With HTML CSS and React ,,</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-js-square"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Front End Development With HTML CSS and React ,,</p>
                </div>
            </div>


            {/* ////////third row technical skills//// */}


            <div className="row text-center mt-3">

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i className="fas fa-code"></i>
                <h4 className="pt-3">Wev Design</h4>
                <p>Front End Development With HTML CSS..</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-reacteurope"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Front End Development With HTML CSS and React ,,</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-js-square"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Front End Development With HTML CSS and React ,,</p>
                </div>
                </div>


            
            </div> 
    );
};

export default About;