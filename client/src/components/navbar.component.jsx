import React from 'react'
import register from '../api/register'
import logo from '../asset/logo-small.png';

function Navbar() {

    const logout = () => {
        register.logout()
    }

    return (
        
        <div>
            <nav >
                        <div id="nav" class="Nav-Row">
                            <a data-scroll href="#intro" class="Logo">
                                <div class="Nav-Logo">
                                    <img src={logo} alt="Comcamp 32" />
                                </div>
                            </a>
                            <a data-scroll href="#intro" id="nav-home" class="Nav-Links">
                                <span>Home</span></a>
                            <a data-scroll href="#about" id="nav-about" class="Nav-Links">
                                <span>About</span></a>
                            <a data-scroll href="#subject" id="nav-subject" class="Nav-Links">
                                <span>Learning</span></a>
                            <a data-scroll href="#timeline" id="nav-timeline" class="Nav-Links">
                                <span>Schedule</span></a>
                            <a data-scroll href="#faq" id="nav-faq" class="Nav-Links">
                                <span>FAQ</span></a>
                            <a data-scroll href="#contact" id="nav-contact" class="Nav-Links">
                                <span>Contact</span></a>
                        </div>
                    </nav>
        </div>
    )
}

export default Navbar