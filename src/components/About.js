import React, { } from 'react'
import Footer from './Footer';
import '../styles/About.css'
import awesome from '../images/about - awesome.jpeg'
import login from '../images/about - awesome.svg'
import jalaj from '../images/jalaj-dhoti.jpg'
import jalajp from '../images/me.jpg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';



const About = () => {

    return (
        <div>
            <div className="text-white aboutImg text-center">
                <div className="note-img">
                    <h1 className="display-4">Empowering  Students</h1>
                    <p style={{ paddingRight: "30px", fontSize:"23px" }}>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={{ color: "#2A8387" }}>Awesome</span> </h2>
                        <p>ideaSpotter is made from the pain of writing all the things in notebook which is very hectic :(, So we made an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbance.
                            you can also access your notes anywhere in your world, at anytime. So don't forget to create notes because creating anything is always important.
                        </p>
                        <div className="d-flex justify-content-center mt-2">
                            <Button className='button' component={Link} to="/" variant="contained" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-6  mt-3">
                        <img className="img-fluid awesome" src={awesome} alt="about-awesome" />
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "#2A8387" }}>internet's visuals</span> </h2>
                        <p>
                            How we started? The concept was simple. ideaSpotter was born from the pain of writing all the things in notebook which is very hectic :( .
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                            <Button className='button' component={Link} to="/signup" variant="contained" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Sign up now</Button>
                        </div>
                    </div>
                </div>

                {/* About section */}
                <div className="container mt-5 ">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h2 className="mb-3" style={{ fontWeight: "Bold" }}>About <span style={{ color: "#2A8387" }}>Jalaj Pandey</span> </h2>
                            <p >Jalaj Pandey, a 22-year-old student, is currently dedicatedly pursuing his Master's in Computer Applications (MCA) from Kamla Nehru Institute of Technology (KNIT).
                                What sets Jalaj apart is his enthusiasm for practical applications of his knowledge. His ability to think critically and apply his knowledge in creative ways has enabled him to develop projects that are not just academically sound but also have practical utility.
                            </p>
                            <div className="d-flex justify-content-center mt-2">
                                <Button className='button' component={Link} to="https://thejalaj.netlify.app/" variant="contained" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>More About Jalaj</Button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <div className="d-flex justify-content-center mb-3 " >
                                <img style={{ height: "20rem", scale: "1" }} className='img-fluid img-thumbnail img1' src={jalaj} alt="about-awesome" />
                                <img style={{ height: "20rem", scale: "1" }} className='img-fluid img-rounded img2' src={jalajp} alt="about-awesome" />
                            </div>
                        </div>
                    </div>
                    {/* End about section */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
