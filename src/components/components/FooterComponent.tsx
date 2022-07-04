import React from "react";
import FooterLogo from "../../assets/image/footer-logo.png";
import FireIcon from "../../assets/image/fire-icon.png";
import { Link } from "react-router-dom";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { SiDiscord, SiTelegram, SiWechat } from "react-icons/si";

const Footer = () => {
  return (
    <section className="weigth-footer-con w-100 float-left main-box ">
      <div className="container p-0">
        <div className="row text-center text-md-left">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="weigth-footer-content copyright-con text-md-left text-center">
              <figure>
                <img src={FooterLogo} alt="footer-logo" className="img-fluid" />
              </figure>
              <p className="color-b3b3b3">
                Copyright © 2022 wegmit.io <br />
                All rights reserved
              </p>
              <span className="d-block color-b3b3b3">Join OUr Community</span>
              <ul className="list-unstyled footer-social-icon mb-0">
                <li className="d-inline-block">
                  <Link to="#">
                    <i className="color-b3b3b3">
                      <BsTwitter />
                    </i>
                  </Link>
                </li>
                <li className="d-inline-block">
                  <Link to="#">
                    <i className="color-b3b3b3">
                      <SiDiscord />
                    </i>
                  </Link>
                </li>
                <li className="d-inline-block">
                  <Link to="#">
                    <i className="color-b3b3b3">
                      <BsInstagram />
                    </i>
                  </Link>
                </li>
                <li className="d-inline-block">
                  <Link to="#">
                    <i className="color-b3b3b3">
                      <FaYoutube />
                    </i>
                  </Link>
                </li>
                <li className="d-inline-block">
                  <Link to="#">
                    <i className="color-b3b3b3">
                      <SiTelegram />
                    </i>
                  </Link>
                </li>
                <li className="d-inline-block">
                  <Link to="#">
                    <i className="color-b3b3b3">
                      <SiWechat />
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-6">
            <div className="weigth-footer-content sitemap-con">
              <h6>Sitemap</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Ranking</Link>
                </li>
                <li>
                  <Link to="#">Analytics</Link>
                </li>
                <li>
                  <Link to="#">NFTs</Link>
                </li>
                <li>
                  <Link to="#">Whales</Link>
                </li>
                <li>
                  <Link to="/drops">Drops</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-6">
            <div className="weigth-footer-content sitemap-con">
              <h6>Links</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="#">Opensea</Link>
                </li>
                <li>
                  <Link to="#">Rarible</Link>
                </li>
                <li>
                  <Link to="#">Super Rare</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-6">
            <div className="weigth-footer-content sitemap-con">
              <h6>Support</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Docs</Link>
                </li>
                <li>
                  <Link to="#">Metrics</Link>
                </li>
                <li>
                  <Link to="#">Listing Request</Link>
                </li>
                <li>
                  <Link to="#">Media Ki</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-6">
            <div className="weigth-footer-content sitemap-con">
              <h6>Company</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li className="hiring-con">
                  <figure className="mb-0 d-inline-block">
                    <img src={FireIcon} alt={"fire-icon"} />
                  </figure>
                  <span>We're hiring!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
