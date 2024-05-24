import { useEffect } from "react";

import { Addshrink, OpenMenu, addActiveClass, moveSmooth } from "../../utils/";

import "./header.css";

import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";

const Header = () => {
  useEffect(() => {
    Addshrink();
  }, []);

  useEffect(() => {
    OpenMenu();
  }, []);

  useEffect(() => {
    moveSmooth();
  }, []);

  return (
    <>
      <Preloader />
      <header className="header-area wow fadeInDown" data-wow-delay="0.2s">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav
              className="classy-navbar justify-content-between"
              id="dreamNav"
            >
              <Link className="nav-brand !h-full" to="#">
                <img
                  src={"/assets/images/COT-01.png"}
                  className="!h-full"
                  alt="logo"
                />
              </Link>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler" onClick={addActiveClass}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap" onClick={addActiveClass}>
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                <div className="classynav">
                  <ul id="nav">
                    <li>
                      <a onClick={moveSmooth} href="#home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth} href="#about">
                        IAO Portal
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth} href="#services">
                        DEX
                      </a>
                    </li>
                    <li>
                      <a onClick={moveSmooth} href="#roadmap">
                        Asset Owners' Portal
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/COTRWAA">Twitter</a>
                    </li>
                    <li>
                      <a href="https://t.me/+r_3Vkn8YeCZjOWNl">Telegram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
