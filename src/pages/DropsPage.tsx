import React from "react";

// IMAGES
import SinnerIcon from "../assets/image/sinnersgang-icon.png";
import LFTIcon from "../assets/image/LFT-icon.png";
import YkuzaIcon from "../assets/image/ykuza-icon.png";
import AmateurIcon from "../assets/image/Amateur-icon.png";
import BitcrushIcon from "../assets/image/Bitcrush-icon.png";
import MetazensIcon from "../assets/image/Metazens-icon.png";
import WatchIcon from "../assets/image/watches-icon.png";
import LastknownIcon from "../assets/image/lastknown-icon.png";
import ChiptosIcon from "../assets/image/chiptos-icon.png";
import FireIcon from "../assets/image/fire-icon.png";

// ICONS
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegCalendarAlt,
  FaGlobe,
} from "react-icons/fa";
import { BsTags, BsCalendarPlus, BsTwitter } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";

const Drops = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box sub-banner">
        <div className="container p-0">
          <div className="banner-content text-center">
            <div className="banner-title bg-3b3363 w-100 float-left text-center">
              *DISCLAIMER:All information is provided merely for informational
              purposes. NFTGo does not provide any investment advice{" "}
              <span className="color-ff4c41">(more)</span>
            </div>
            <div className="generic-btn submit-btn">
              <a href="#" className="bg-3b3363 mb-0">
                <i className="ml-0">
                  <AiOutlinePlusSquare />
                </i>{" "}
                Submit
              </a>
              <a href="#" className="bg-ff4c41 mb-0">
                <i className="ml-0">
                  <BiShareAlt />
                </i>{" "}
                Share
              </a>
            </div>
            <h1>NFT Drops</h1>
            <div className="banner-date">
              <span>From</span>
              <span className="color-ff4c41">
                <i>
                  <FaAngleLeft />
                </i>
                <i></i> April 09, 2022
                <i>
                  <FaAngleRight />
                </i>
              </span>
            </div>
            <div className="generic-btn">
              <a href="#" className="bg-ff4c41 mb-0">
                Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 float-left servcie-con padding-bottom main-box drops-service">
        <div className="container p-0">
          <div className="service-box">
            <div className="row">
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left drops-page-price">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={SinnerIcon}
                        alt="sinnersgang-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>SinnersGang</h6>
                      <a href="#" className="bg-ec8153">
                        Metaverse
                      </a>
                    </div>
                  </div>
                  <span>
                    The SinnersGang is an exclusively custom created collection
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left text-center">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative w-100 m-0">
                        Expired
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left drops-page-price">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img src={LFTIcon} alt="LFT-icon" className="img-fluid" />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>LFT by Lupe Fiasco</h6>
                      <a href="#" className="bg-6647bf">
                        Utility
                      </a>
                    </div>
                  </div>
                  <span>
                    LFT is not the usual VIP fan pass. Holders will enjoy
                    unique, ever...
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left text-center">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative w-100 m-0">
                        Expired
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left drops-page-price">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={YkuzaIcon}
                        alt="ykuza-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>Yakuza Kumiai</h6>
                      <a href="#" className="bg-4a8cda">
                        Art
                      </a>
                    </div>
                  </div>
                  <span>
                    A Japan based NFT project with 8930art- works that is
                    developing...
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left text-center">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative w-100 m-0">
                        <figure className="mb-0 d-inline-block">
                          <img
                            src={FireIcon}
                            alt="fire-icon"
                            className="img-fluid pr-1"
                          />
                        </figure>
                        Live
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={AmateurIcon}
                        alt="Amateur-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>Amateur Guardian...</h6>
                      <a href="#" className="bg-ec8153">
                        Collectibles
                      </a>
                    </div>
                  </div>
                  <span>
                    Amateur Guardians of Ethereum (A.G.E) is an alliance of
                    10,000 unique...{" "}
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative">
                        <span className="d-block color-ff4c41">00</span>
                        <small>Day</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">12</span>
                        <small>Hrs</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">37</span>
                        <small>Min</small>
                      </li>
                      <li className="d-inline-block mr-0 position-relative">
                        <span className="d-block color-ff4c41">22</span>
                        <small>Sec</small>
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={BitcrushIcon}
                        alt="Bitcrush-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>Bitcrush Official</h6>
                      <a href="#" className="bg-6647bf">
                        Metaverse
                      </a>
                    </div>
                  </div>
                  <span>
                    This is where our games live. Play, win, earn (coming soon),
                    and have...{" "}
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative">
                        <span className="d-block color-ff4c41">00</span>
                        <small>Day</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">12</span>
                        <small>Hrs</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">37</span>
                        <small>Min</small>
                      </li>
                      <li className="d-inline-block mr-0 position-relative">
                        <span className="d-block color-ff4c41">22</span>
                        <small>Sec</small>
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={MetazensIcon}
                        alt="Metazens-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>Metazens</h6>
                      <a href="#" className="bg-4a8cda ">
                        PFP
                      </a>
                    </div>
                  </div>
                  <span>
                    "A diverse and vibrant collection of randomly generated PFPs
                    to...
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative">
                        <span className="d-block color-ff4c41">00</span>
                        <small>Day</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">12</span>
                        <small>Hrs</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">37</span>
                        <small>Min</small>
                      </li>
                      <li className="d-inline-block mr-0 position-relative">
                        <span className="d-block color-ff4c41">22</span>
                        <small>Sec</small>
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={WatchIcon}
                        alt="watches-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>Cats and Watches...</h6>
                      <a href="#" className="bg-ec8153">
                        DeFi
                      </a>
                    </div>
                  </div>
                  <span>
                    Each NFT is randomly generated from over 230 traits and each
                    cat...{" "}
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative">
                        <span className="d-block color-ff4c41">00</span>
                        <small>Day</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">12</span>
                        <small>Hrs</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">37</span>
                        <small>Min</small>
                      </li>
                      <li className="d-inline-block mr-0 position-relative">
                        <span className="d-block color-ff4c41">22</span>
                        <small>Sec</small>
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={LastknownIcon}
                        alt="lastknown-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>LastKnown Market...</h6>
                      <a href="#" className="bg-4a8cda">
                        Collectibles
                      </a>
                    </div>
                  </div>
                  <span>
                    Highly revered & award-winning artist Andrew Skuja is
                    dropping his...
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative">
                        <span className="d-block color-ff4c41">00</span>
                        <small>Day</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">12</span>
                        <small>Hrs</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">37</span>
                        <small>Min</small>
                      </li>
                      <li className="d-inline-block mr-0 position-relative">
                        <span className="d-block color-ff4c41">22</span>
                        <small>Sec</small>
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left mb-0">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={ChiptosIcon}
                        alt="chiptos-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>Chiptos</h6>
                      <a href="#" className="bg-4a8cda">
                        Art
                      </a>
                    </div>
                  </div>
                  <span>
                    "The Chiptos team are back with their flag-ship collection
                    on the...
                  </span>
                  <a href="#" className="veiw-btn">
                    View All
                  </a>
                  <div className="w-100 float-left price-con">
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-tags d-flex align-items-center justify-content-center float-left"></i>
                        <span>Price</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">
                          <strong>0.13 ETH</strong>
                        </span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left">
                          <FiLayers />
                        </i>
                        <span>Total</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">599</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled w-100 float-left">
                      <li className="d-inline-block">
                        <i className="fas fa-calendar-alt d-flex align-items-center justify-content-center float-left"></i>
                        <span>Date</span>
                      </li>
                      <li className="d-inline-block">
                        <span className="pl-0">Apr 08,2022 00:00:00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="time-con bg-2c254a w-100 float-left">
                    <ul className="list-unstyled mb-0">
                      <li className="d-inline-block ml-0 position-relative">
                        <span className="d-block color-ff4c41">00</span>
                        <small>Day</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">12</span>
                        <small>Hrs</small>
                      </li>
                      <li className="d-inline-block position-relative">
                        <span className="d-block color-ff4c41">37</span>
                        <small>Min</small>
                      </li>
                      <li className="d-inline-block mr-0 position-relative">
                        <span className="d-block color-ff4c41">22</span>
                        <small>Sec</small>
                      </li>
                    </ul>
                  </div>
                  <div className="service-bottom-box w-100 float-left d-flex align-items-center justify-content-between">
                    <ul className="mb-0 list-unstyled float-left social-icon">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-globe"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">
                          <i>
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="d-inline-block mr-0">
                        <a href="#" className="mr-0">
                          <i>
                            <SiDiscord />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-0 list-unstyled float-right date-con">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fas fa-calendar-plus bg-2c254a d-flex align-items-center justify-content-center"></i>
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a href="#">Mint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Drops;
