import React from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";

const Navs = () => {
  return (
    <>
      <header className="mainBody">
        {/* Navbar Starts here */}
        <nav className="navbar menubar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand mainLogo">CovidX</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 rightLinks">
                <li className="nav-item">
                  <Link to="/" className="nav-link navlink" aria-current="page">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link navlink"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-link navlink"
                    aria-current="page"
                  >
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link navlink"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/tracker"
                    className="nav-link navlink"
                    aria-current="page"
                  >
                    Tracker
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar Ends Here */}
        <section className="hero__seciton">
          {/* ImgStuff */}
          <img
            src="https://media.discordapp.net/attachments/840103940405985319/852543547504721981/1.png?width=771&height=434"
            className="mainImg"
            alt="img1"
          />
          <img
            src="https://cdn.discordapp.com/attachments/840103940405985319/852543549730717737/2.png"
            className="mainImg img2img"
            alt="img2"
          />
          <img
            src="https://cdn.discordapp.com/attachments/840103940405985319/852543551618809866/3.png"
            className="mainImg img3img"
            alt="img3"
          />
          <img
            src="https://cdn.discordapp.com/attachments/840103940405985319/852543553771012096/4.png"
            className="mainImg img4img"
            alt="img4"
          />
          <img
            src="https://cdn.discordapp.com/attachments/840103940405985319/852543555183312916/5.png"
            className="mainImg img5img"
            alt="img5"
          />
          <img
            src="https://cdn.discordapp.com/attachments/840103940405985319/852543564373688350/10.png"
            className="mainImg img10img"
            alt="img10"
          />
          {/* ImgStuff */}
          <p className="mainText">
            <span className="logoTextMain">CovidX</span>{" "}
            <span className="typeText">Open Source </span> <br /> Tracker
          </p>
          <p className="introText">
            CovidX Tracker. Open source Covid 19
            <br /> Tracker Made With ReactJs
          </p>
          <div className="btnContainer">
            <a href="https://github.com" target="blank" className="btn">
              Github
            </a>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navs;
