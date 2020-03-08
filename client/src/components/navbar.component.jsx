import React from 'react'
import register from '../api/register'
import logo from '../asset/logo-big.png';
import btn_left from '../asset/Button_left.png';
import btn_right from '../asset/Button_right.png';
import ColumnGroup from 'antd/lib/table/ColumnGroup';

function Navbar(props) {

    const { user } = props

    const logout = () => {
        register.logout()
    }

    console.log("navbar", user)

    return (
      <div>
        <nav>
          <div id="nav" className="Nav-Row">
            <a
              data-scroll
              href="/"
              id="nav-home"
              className="Nav-Links nav-right Nav-Back">
              <i
                aria-label="icon: left"
                className="anticon anticon-left ant-select-arrow-icon">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  className=""
                  data-icon="left"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                </svg>
              </i>
              <span>Back to Home Page</span>
            </a>
            <a href="/" className="Logo">
              <div className="Nav-Logo">
                <img className="big-logo" src={logo} alt="Comcamp 32" />
              </div>
            </a>

            <div className="Nav-Links Nav-Name">
              <span>{user.displayName}</span>
            </div>

            <div className="Nav-Links Nav-Logout">
              <span onClick={logout}>Logout</span>
            </div>

            <div className="Button-Column right Nav-Btn">
              <div className="Button-Left-Image">
                <img src={btn_left} alt="Left button decoration" />
              </div>
              <div className="Button-Right-Image">
                <img src={btn_right} alt="Right button decoration" />
              </div>
              <div className="Button-BorderImage"></div>
              <button className="Button-Background nav-bg" htmlType="submit" onClick={logout}>
                <span className="Markdown">Log out</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar