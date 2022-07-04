import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

import Logo from "../../assets/image/logo-img.png";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="w-100 float-left header-con bg-3b3363 navbar-con main-box">
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link className="navbar-brand" to="/">
            <figure className="mb-0">
              <img src={Logo} alt="logo-img" className="img-fluid" />
            </figure>
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active pl-0">
                <Link className="nav-link p-0" to="/analytics/market-overview">
                  Analytics<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-0" to="#">
                  NFTs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-0" to="#">
                  Whales{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-0" to="/drops">
                  Drops
                </Link>
              </li>
              <li className="nav-item pr-xl-0">
                <Link className="nav-link p-0" to="#">
                  Resources
                </Link>
              </li>
            </ul>
            <form className="navbar-form d-flex">
              <input
                placeholder="Search Collections / Addresses / NFTs"
                className="border-0"
              />
              <select className="border-0">
                <option>En</option>
                <option>En</option>
                <option>En</option>
              </select>
              <div>
                <Link to="#">
                  <IconContext.Provider value={{ className: "user-icon" }}>
                    <BiUserCircle />
                  </IconContext.Provider>
                </Link>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
