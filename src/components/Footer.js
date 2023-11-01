import React from 'react';
import '../styles/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#2A8387" }}>Idea</span>Spotter</span>
                        </div>
                        <div className="media-icons">
                            <Link to="https://www.facebook.com/jalajpandey15"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="https://twitter.com/thejalajpandey"><i className="fab fa-twitter"></i></Link>
                            <Link to="https://www.instagram.com/thejalajpandey/"><i className="fab fa-instagram"></i></Link>
                            <Link to="https://www.linkedin.com/in/jalaj-pandey/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="https://www.youtube.com/@JalajPandey/"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/signin">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/">Your Notes</Link></li>
                            <li><Link to="/new">New Note</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/login">Sign-in</Link></li>
                            <li><Link to="/signup">Join Free</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Other Projects</li>
                            <li><Link to="https://jalajpandey.netlify.app/">Portfolio</Link></li>                            <li><Link to="https://jalaj-textwiz.netlify.app/">TextWiz App</Link></li>
                           <li><Link to="https://jalaj-pandey.github.io/DrumKit/">DrumApp</Link></li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">About ideaSpotter</li>
                            <li style={{ color: "#F7FFFF" }}>
                                An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2023 <Link to="/">IdeaSpotter</Link></span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer