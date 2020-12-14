import React from 'react';
import { Navbar, Button } from "rbx";

import './style.css';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/logo.png';


const Header = (props) => {
    return (
        
        <div>

            <Navbar className="header">
                <Navbar.Brand>
                    <Navbar.Item href="react-portfolio.7zip">
                        <img src={logo}/>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Segment align="start">
                        <Navbar.Item>Home</Navbar.Item>
                        <Navbar.Item>Sobre</Navbar.Item>

                        <Navbar.Item dropdown hoverable>
                            <Navbar.Link>Serviços</Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item>About</Navbar.Item>
                                <Navbar.Item>Jobs</Navbar.Item>
                                <Navbar.Item>Contact</Navbar.Item>
                                <Navbar.Divider />
                                <Navbar.Item>Report an issue</Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>

                        <Navbar.Item dropdown hoverable>
                            <Navbar.Link>Portfólio</Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item>About</Navbar.Item>
                                <Navbar.Item>Jobs</Navbar.Item>
                                <Navbar.Item>Contact</Navbar.Item>
                                <Navbar.Divider />
                                <Navbar.Item>Report an issue</Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>

                        <Navbar.Item>Contato</Navbar.Item>

                    </Navbar.Segment>

                    <Navbar.Segment align="end">

                            <Navbar.Item>
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </Navbar.Item>

                            <Navbar.Item>
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </Navbar.Item>

                            <Navbar.Item>
                                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                            </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </div>
    );
}

export default Header;