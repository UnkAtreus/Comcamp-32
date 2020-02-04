import React from 'react'
import register from '../api/register'
import logo from '../asset/logo-big.png';
import btn_left from '../asset/Button_left.png';
import btn_right from '../asset/Button_right.png';

function Navbar() {

    const logout = () => {
        register.logout()
    }

    return (
        
        <div>
            <nav >
                        <div id="nav" class="Nav-Row">
                            
                            <a data-scroll href="#intro" id="nav-home" class="Nav-Links nav-right">
                                <span>Back to Home Page</span></a>
                                <a href="#intro" class="Logo">
                                <div className="Nav-Logo">
                                    <img className="big-logo" src={logo} alt="Comcamp 32" />
                                </div>
                            </a>

                                <div className="Nav-Links"><span>Test User</span></div>
                                

                                <div className="Button-Column right">
                                <div className="Button-Left-Image">
                                    <img
                                        src={btn_left}
                                        alt="Left button decoration"
                                    />
                                </div>
                                <div className="Button-Right-Image">
                                    <img
                                        src={btn_right}
                                        alt="Right button decoration"
                                    />
                                </div>
                                <div className="Button-BorderImage"></div>
                                <button className="Button-Background nav-bg" htmlType="submit">
                                    <span className="Markdown">Log out</span>
                                </button>
                            </div>
                        </div>
                    </nav>
        </div>
    )
}

export default Navbar