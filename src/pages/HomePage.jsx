import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

// IMAGES
import MilkBoxImage from "../assets/image/milk-box-icon.png";
import FireIcon from "../assets/image/fire-icon.png";
import VPSIcon from "../assets/image/vps-icon1.png";
import EmojiIcon from "../assets/image/emoji-icon.png";
import Emoji1Icon from "../assets/image/emoji-icon2.png";
import DollarIcon from "../assets/image/doller-icon.png";
import MuertosIcon from "../assets/image/muertos-icon.png";
import IllogicsIcon from "../assets/image/illogics-icon.png";
import BearIcon from "../assets/image/bear-icon.png";
import Bear1Icon from "../assets/image/bear-icon2.png";
import FishIcon from "../assets/image/fish-icon.png";
import SmallFishIcon from "../assets/image/small-fish-icon.png";
import AuthorIcon from "../assets/image/auther-icon.png";
import DownloadBtn from "../assets/image/download-btn.png";
import MIcon from "../assets/image/M-icon.png";
import NIcon from "../assets/image/N-icon.png";
import CatIcon from "../assets/image/cat-icon.png";
import RushIcon from "../assets/image/rush-icon.png";
import SinnersgangIcon from "../assets/image/sinnersgang-icon.png";
import ResearchImage1 from "../assets/image/reaserch-img1.png";
import ResearchImage2 from "../assets/image/reaserch-img2.png";
import ResearchImage3 from "../assets/image/reaserch-img3.png";
import AlienverseImage from "../assets/image/alienverse-img.png";
import ETHIcon from "../assets/image/ETH-icon.png";
import ETHIcon1 from "../assets/image/ETH-icon2.png";
import WandernautsImage from "../assets/image/wandernauts-img.png";
import ShinesImage from "../assets/image/shines-img.png";
import FewoImage from "../assets/image/fewo-img.png";
import NubbiesIcon from "../assets/image/nubbies-icon.png";
import DropsVPSIcon from "../assets/image/drops-vps-icon.png";
import DropsIllogicsIcon from "../assets/image/drops-illogics-icon.png";
import DropsMuertosIcon from "../assets/image/drops-muertos-icon.png";
import BlogImage1 from "../assets/image/blog-img1.png";
import BlogImage2 from "../assets/image/blog-img2.png";
import BlogImage3 from "../assets/image/blog-img3.png";
import BlogImage4 from "../assets/image/blog-img4.png";
import BlogImage5 from "../assets/image/blog-img5.png";
import BlogImage6 from "../assets/image/blog-img6.png";
import BlogImage7 from "../assets/image/blog-img7.png";
import BlogImage8 from "../assets/image/blog-img8.png";
import BlogImage9 from "../assets/image/blog-img9.png";
import BlogImage10 from "../assets/image/blog-img10.png";
import BlogDemandImage from "../assets/image/blog-demond-icon.png";

// ICONS
import { IconContext } from "react-icons";
import { AiOutlineArrowRight, AiOutlineClockCircle } from "react-icons/ai";
import { BsTags, BsCalendarPlus, BsTwitter } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { FaGlobe, FaRegCalendarAlt } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Home = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <Container className="p-0">
          <div className="banner-content text-center">
            <h1>
              The best all-in-one <span className="color-ff4c41">NFT</span>
              <br />
              analytics platform
            </h1>
            <p>
              Spotting NFT alpha by ranking, rarity, whales tracking, drops and
              more!
            </p>
            <div className="generic-btn">
              <Link to="#" className="bg-ff4c41">
                Ranking{" "}
                <IconContext.Provider value={{ className: "next-icon" }}>
                  <AiOutlineArrowRight />
                </IconContext.Provider>
              </Link>
            </div>
            <span className="color-ff4c41">
              <i className="color-ff4c41"></i>
              During the last 24 hours:
            </span>
          </div>
        </Container>
      </section>
      <div className="w-100 float-left buyer-con padding-bottom main-box">
        <Container className="p-0">
          <div className="buyer-box-title">
            <ul className="list-unstyled p-0 d-flex align-items-center justify-content-center">
              <li className="d-inline-block bg-3b3363">
                <figure className="d-inline-block mb-0">
                  <img
                    src={MilkBoxImage}
                    className="img-fluid"
                    alt="milk-box-icon"
                  />
                </figure>
                <span>
                  <strong>The Carton</strong> is growing rapidly
                </span>
                <figure className="d-inline-block mb-0">
                  <img src={FireIcon} className="img-fluid" alt="fire-icon" />
                </figure>
              </li>
              <li className="d-inline-block bg-6418c3">
                <span>Most people bought</span>
                <figure className="d-inline-block mb-0">
                  <img src={VPSIcon} className="img-fluid" alt="vps-icon1" />
                </figure>
                <span>
                  <strong>VaynerSports Pass VSP</strong>
                </span>
                <figure className="d-inline-block mb-0">
                  <img src={EmojiIcon} className="img-fluid" alt="emoji-icon" />
                </figure>
              </li>
              <li className="d-inline-block bg-3b3363">
                <figure className="d-inline-block mb-0">
                  <img
                    src={Emoji1Icon}
                    className="img-fluid"
                    alt="emoji-icon"
                  />
                </figure>
                <span>
                  <strong>Meebits</strong> created the most volume
                </span>
                <figure className="d-inline-block mb-0">
                  <img
                    src={DollarIcon}
                    className="img-fluid"
                    alt="doller-icon"
                  />
                </figure>
              </li>
            </ul>
          </div>
          <div className="buyer-list-con">
            <div className="buyer-list-head bg-5b5288 w-100 float-left">
              <ul className="mb-0 list-unstyled w-100 float-left">
                <li className="float-left">
                  <figure className="mb-0 d-inline-block">
                    <img src="" alt="" className="img-fluid" />
                  </figure>
                  <h5 className="d-inline-block mb-0">Buyers (24H)</h5>
                </li>
                <li className="float-right">
                  <a href="#">More {">"}</a>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
            <div className="buyer-list-body bg-3b3363">
              <ul className="list-unstyled mb-0 w-100">
                <li className="mb-0 d-inline-block">
                  <span>#</span>Collection
                </li>
                <li className="mb-0 d-inline-block text-center">Market Cap</li>
                <li className="mb-0 d-inline-block text-center">Holders</li>
                <li className="mb-0 d-inline-block text-center">
                  Buyers (24H)
                </li>
              </ul>
              <ul className="list-unstyled mb-0 w-100">
                <li className="mb-0 d-inline-block">
                  <span>01</span>
                  <figure className="mb-0 d-inline-block">
                    <img src={VPSIcon} className="img-fluid" alt="vps-icon1" />
                  </figure>
                  VaynerSports Pass VSP
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $9,411,786.74
                </li>
                <li className="mb-0 d-inline-block text-center">
                  355
                  <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32
                </li>
              </ul>
              <ul className="list-unstyled mb-0 w-100">
                <li className="mb-0 d-inline-block">
                  <span>02</span>
                  <figure className="mb-0 d-inline-block">
                    <img
                      src={MuertosIcon}
                      className="img-fluid"
                      alt="muertos-icon"
                    />
                  </figure>
                  Los Muertos World
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32 <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
                <li className="mb-0 d-inline-block text-center">980</li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32
                  <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
              </ul>
              <ul className="list-unstyled mb-0 w-100">
                <li className="mb-0 d-inline-block">
                  <span>03</span>
                  <figure className="mb-0 d-inline-block">
                    <img
                      src={IllogicsIcon}
                      className="img-fluid"
                      alt="illogics"
                    />
                  </figure>
                  illogics
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32
                </li>
                <li className="mb-0 d-inline-block text-center">
                  578
                  <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32
                </li>
              </ul>
              <ul className="list-unstyled mb-0 w-100">
                <li className="mb-0 d-inline-block">
                  <span>04</span>
                  <figure className="mb-0 d-inline-block">
                    <img src={BearIcon} className="img-fluid" alt="bear" />
                  </figure>
                  Chill Bear Club Genesis
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32 <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
                <li className="mb-0 d-inline-block text-center">287</li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32
                  <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
              </ul>
              <ul className="list-unstyled mb-0 w-100 border-0">
                <li className="mb-0 d-inline-block">
                  <span>05</span>
                  <figure className="mb-0 d-inline-block">
                    <img src={Bear1Icon} className="img-fluid" alt="bear" />
                  </figure>
                  Chill Bear Club Genesis
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32 <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
                <li className="mb-0 d-inline-block text-center">
                  1028
                  <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
                <li className="mb-0 d-inline-block text-center">
                  $1,687,947.32
                  <br />
                  <span className="p-0 color-68cf29">+4,775.01%</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="tracking-con bg-3b3363">
            <Row>
              <Col lg={4}>
                <div className="tracking-left-con bg-2c254a text-center">
                  <figure>
                    <img src={FishIcon} alt="fish-icon" className="img-fluid" />
                  </figure>
                  <h3>Whale Tracking</h3>
                  <p>During the past 24 hours:</p>
                  <h4>
                    <span className="color-00baf0">13</span> Whales{" "}
                    <span className="color-b3b3b3">bought</span>
                  </h4>
                  <div className="auther-name w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img
                        src={AuthorIcon}
                        alt="auther-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <p className="float-left mb-0">FVCK_AVATAR//</p>
                  </div>
                  <div className="clearfix"></div>
                  <div className="generic-btn">
                    <a href="#" className="bg-6418c3">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={1}>
                <div className="tracking-design">
                  <span className="position-relative"></span>
                  <span className="position-relative"></span>
                  <span className="position-relative"></span>
                  <span className="position-relative"></span>
                </div>
              </Col>
              <Col lg={7} className="p-lg-0">
                <div className="tracking-right-con">
                  <ul className="list-unstyled">
                    <li>
                      <span className="d-block color-b3b3b3">1 hour ago</span>
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={SmallFishIcon}
                          alt="small-fish-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <p className="mb-0 d-inline-block">badussy.eth</p>
                      <a href="#" className="bought-btn bg-68cf29">
                        <figure className="mb-0 d-inline-block">
                          <img
                            src={DownloadBtn}
                            alt="download-btn"
                            className="img-fluid"
                          />
                        </figure>
                        Bought
                      </a>
                      <figure className="d-inline-block mb-0">
                        <img src={NIcon} alt="N-icon" className="img-fluid" />
                      </figure>
                      <p className="d-inline-block m-0">
                        Bobu Token (Azuki #40){" "}
                        <span className="color-b3b3b3">at</span> 0.21 ETH
                      </p>
                      <figure className="d-inline-block mb-0">
                        <img src={MIcon} alt="M-icon" className="img-fluid" />
                      </figure>
                      <a href="#">
                        <i className="fas fa-arrow-right"> </i>
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <span className="d-block color-b3b3b3">1 hour ago</span>
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={SmallFishIcon}
                          alt="small-fish-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <p className="mb-0 d-inline-block">cryptomorgs.eth</p>
                      <a href="#" className="bought-btn bg-68cf29">
                        <figure className="mb-0 d-inline-block">
                          <img
                            src={DownloadBtn}
                            alt="download-btn"
                            className="img-fluid"
                          />
                        </figure>
                        Bought
                      </a>
                      <figure className="d-inline-block mb-0">
                        <img src={NIcon} alt="N-icon" className="img-fluid" />
                      </figure>
                      <p className="d-inline-block m-0">
                        Shinsekai Portal #7908{" "}
                        <span className="color-b3b3b3">at</span> 0.618 ETH
                      </p>
                      <figure className="d-inline-block mb-0">
                        <img src={MIcon} alt="M-icon" className="img-fluid" />
                      </figure>
                      <a href="#">
                        <i className="fas fa-arrow-right"> </i>
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <span className="d-block color-b3b3b3">1 hour ago</span>
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={SmallFishIcon}
                          alt="small-fish-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <p className="mb-0 d-inline-block">cryptomorgs.eth</p>
                      <a href="#" className="bought-btn bg-68cf29">
                        <figure className="mb-0 d-inline-block">
                          <img
                            src={DownloadBtn}
                            alt="download-btn"
                            className="img-fluid"
                          />
                        </figure>
                        Bought
                      </a>
                      <figure className="d-inline-block mb-0">
                        <img src={NIcon} alt="N-icon" className="img-fluid" />
                      </figure>
                      <p className="d-inline-block m-0">
                        Shinsekai Portal #7908{" "}
                        <span className="color-b3b3b3">at</span> 0.618 ETH
                      </p>
                      <figure className="d-inline-block mb-0">
                        <img src={MIcon} alt="M-icon" className="img-fluid" />
                      </figure>
                      <a href="#">
                        <i className="fas fa-arrow-right"> </i>
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <span className="d-block color-b3b3b3">1 hour ago</span>
                      <figure className="mb-0 d-inline-block">
                        <img
                          src={SmallFishIcon}
                          alt="small-fish-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <p className="mb-0 d-inline-block">0x1E5CE6</p>
                      <a href="#" className="bought-btn bg-68cf29">
                        <figure className="mb-0 d-inline-block">
                          <img
                            src={DownloadBtn}
                            alt="download-btn"
                            className="img-fluid"
                          />
                        </figure>
                        Bought
                      </a>
                      <figure className="d-inline-block mb-0">
                        <img src={NIcon} alt="N-icon" className="img-fluid" />
                      </figure>
                      <p className="d-inline-block m-0">
                        Cool Pet #4016 <span className="color-b3b3b3">at</span>{" "}
                        1.6 ETH
                      </p>
                      <figure className="d-inline-block mb-0">
                        <img src={MIcon} alt="M-icon" className="img-fluid" />
                      </figure>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <section className="w-100 float-left servcie-con padding-top padding-bottom bg-282244 main-box">
        <div className="container p-0">
          <div className="generic-title text-center">
            <h2>NFT Drops</h2>
            <span className="d-block">
              Never miss an interesting NFT drop on NFTGo!
            </span>
          </div>
          <div className="service-box">
            <div className="row">
              <div className="col-lg-4">
                <div className="service-box-item bg-3b3363 w-100 float-left">
                  <div className="drop-img w-100 float-left">
                    <figure className="mb-0 float-left">
                      <img src={CatIcon} alt="cat-icon" className="img-fluid" />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>CatsCorporation</h6>
                      <a href="#" className="bg-6647bf">
                        Art
                      </a>
                    </div>
                  </div>
                  <span>
                    Cats Corporation is a project that combines cats lovers and
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
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left"></i>
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
                          <i>
                            <FaGlobe />
                          </i>
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
                        src={RushIcon}
                        alt="rush-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="drop-content-title float-left">
                      <h6>X Rush</h6>
                      <a href="#" className="bg-4a8cda">
                        Game
                      </a>
                    </div>
                  </div>
                  <span>
                    X Rush is a casual #Gamefi project powered by Unity 3D
                    engine
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
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left"></i>
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
                          <i>
                            <FaGlobe />
                          </i>
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
                        src={SinnersgangIcon}
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
                        <i className="fas fa-layer-group d-flex align-items-center justify-content-center float-left"></i>
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
                          <i>
                            <FaGlobe />
                          </i>
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
      <section className="w-100 float-left research-con padding-top padding-bottom bg-2c254a main-box">
        <div className="container p-0">
          <div className="generic-title text-center">
            <h2>NFT Drops</h2>
            <span className="d-block">
              Never miss an interesting NFT drop on NFTGo!
            </span>
          </div>
          <div className="research-box">
            <div className="row">
              <div className="col-lg-5">
                <div className="research-box-item">
                  <figure className="mb-0">
                    <img
                      src={ResearchImage1}
                      alt="reaserch-img"
                      className="w-100"
                    />
                  </figure>
                  <div className="research-box-body bg-3b3363">
                    <h6>Does Rarity Affect the Price of Blue Chip NFTs? </h6>
                    <span className="d-inline-block color-b3b3b3">TL; DR</span>
                    <ul className="list-unstyled">
                      <li className="color-b3b3b3 position-relative">
                        Holders of rare NFTs possess a pricing power that is
                        more than 10 times higher than that of holders of common
                        NFTs....
                      </li>
                    </ul>
                    <div className="research-date-box">
                      <span>
                        <i className="fas fa-calendar-alt"></i> Apr 02, 2022{" "}
                      </span>
                      <span>
                        <i className="far fa-clock"></i> 10 min read{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="research-box-item bg-3b3363 w-100 float-left research-box-item2">
                  <figure className="mb-0">
                    <img
                      src={ResearchImage2}
                      alt="reaserch-img"
                      className="img-fluid float-right"
                    />
                  </figure>
                  <div className="research-box-body">
                    <h6>From MVP to MVD: The Evolution of Web3 Mindset </h6>
                    <ul className="list-unstyled">
                      <li className="color-b3b3b3 position-relative">
                        From Minimum Viable Product (MVP) to Minimum Viable DAO
                        (MVD)...
                      </li>
                    </ul>
                    <div className="research-date-box">
                      <span>
                        <i className="fas fa-calendar-alt"></i> Apr 02, 2022{" "}
                      </span>
                      <span>
                        <i className="far fa-clock"></i> 10 min read{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="research-box-item bg-3b3363 w-100 float-left research-box-item2 mb-0">
                  <figure className="mb-0">
                    <img
                      src={ResearchImage3}
                      alt="reaserch-img"
                      className="img-fluid float-right"
                    />
                  </figure>
                  <div className="research-box-body">
                    <h6>Real-World Benefits Of NFTs </h6>
                    <span className="d-inline-block color-b3b3b3">
                      Introduction
                    </span>
                    <ul className="list-unstyled">
                      <li className="color-b3b3b3 position-relative">
                        The world of NFTs does not revolve only around art
                        and...
                      </li>
                    </ul>
                    <div className="research-date-box">
                      <span>
                        <i className="fas fa-calendar-alt"></i> Apr 02, 2022{" "}
                      </span>
                      <span>
                        <i className="far fa-clock"></i> 10 min read{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 float-left added-con bg-282244 padding-top padding-bottom main-box">
        <div className="container p-0">
          <div className="generic-title text-center">
            <h2>Newly Added</h2>
          </div>
          <div className="added-box">
            <div className="row">
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={AlienverseImage}
                        alt="alienverse-img"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">Alienverse - NFT</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={WandernautsImage}
                        alt="wandernauts-img"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">Wandernauts</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={ShinesImage}
                        alt="shines-img"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">Shines NFT</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={FewoImage}
                        alt="fewo-img"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">FEWOCiOUS x Fewo...</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={NubbiesIcon}
                        alt="nubbies-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">Nubbies Genesis</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={DropsVPSIcon}
                        alt="drops-vps-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">VaynerSports Pass...</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={DropsIllogicsIcon}
                        alt="drops-illogics-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">illogics</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pl-lg-0">
                <div className="added-box-item bg-3b3363 mb-0">
                  <div className="added-auther-con w-100 float-left">
                    <figure className="float-left mb-0">
                      <img
                        src={DropsMuertosIcon}
                        alt="drops-muertos-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="added-auther-content float-left">
                      <span className="d-block">Los Muertos World</span>
                      <figure className="d-inline-block mb-0">
                        <img
                          src={ETHIcon}
                          alt="ETH-icon"
                          className="img-fluid"
                        />
                      </figure>
                      <small>ETH</small>
                    </div>
                  </div>
                  <ul className="mb-0 list-unstyled">
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Market Cap</small>
                      <span className="d-block">
                        <strong>$316.47K</strong>
                      </span>
                    </li>
                    <li className="d-inline-block">
                      <small className="color-b3b3b3">Holders</small>
                      <span className="d-block">
                        <strong>972</strong>
                      </span>
                    </li>
                    <li className="d-inline-block mr-0">
                      <small className="color-b3b3b3">Volume(24H)</small>
                      <span className="d-block">
                        <strong>$10.2K</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-100 float-left added-btn text-center">
              <div className="generic-btn d-inline-block">
                <a href="#">
                  View All Collections <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="generic-btn d-inline-block">
                <a href="#" className="bg-6418c3">
                  Learn More <i className="fas fa-arrow-right"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 float-left blog-con padding-top padding-bottom main-box">
        <div className="container p-0">
          <div className="generic-title text-center">
            <h2>Explore NFTs</h2>
            <span className="d-block">Buyers (24H)</span>
          </div>
          <div className="blog-box">
            <div className="row">
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage1}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">Seasons #14017</span>
                    <div className="blog-item-list bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={Bear1Icon}
                              className="img-fluid"
                              alt="bear"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage2}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">Seasons #14017</span>
                    <div className="blog-item-list  bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={Bear1Icon}
                              className="img-fluid"
                              alt="bear"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage3}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">Seasons #14017</span>
                    <div className="blog-item-list  bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={Bear1Icon}
                              className="img-fluid"
                              alt="bear"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage4}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">Seasons #14017</span>
                    <div className="blog-item-list  bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={BlogDemandImage}
                              className="img-fluid"
                              alt="blog-demond-icon"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6 ml-auto mr-auto">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage5}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">Seasons #14017</span>
                    <div className="blog-item-list w-100 float-left bg-2c254a">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={BlogDemandImage}
                              className="img-fluid"
                              alt="blog-demond-icon"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-center">Recently Created</h5>
            <div className="row">
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage6}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">420.game Bud 19724/2...</span>
                    <div className="blog-item-list bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={Bear1Icon}
                              className="img-fluid"
                              alt="bear"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage7}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">420.game Bud 19724/2...</span>
                    <div className="blog-item-list  bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={Bear1Icon}
                              className="img-fluid"
                              alt="bear"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage8}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">420.game Bud 19724/2...</span>
                    <div className="blog-item-list  bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={Bear1Icon}
                              className="img-fluid"
                              alt="bear"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage9}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">420.game Bud 19724/2...</span>
                    <div className="blog-item-list  bg-2c254a w-100 float-left">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={BlogDemandImage}
                              className="img-fluid"
                              alt="blog-demond-icon"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg col-md-6 col-sm-6 ml-auto mr-auto col-sm-6">
                <div className="blog-item-box">
                  <figure className="mb-0">
                    <img
                      src={BlogImage10}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="blog-item-body bg-3b3363 d-inline-block w-100 text-center">
                    <span className="d-block">Seasons #14017</span>
                    <div className="blog-item-list w-100 float-left bg-2c254a">
                      <ul className="mb-0 list-unstyled">
                        <li className="float-left">
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={BlogDemandImage}
                              className="img-fluid"
                              alt="blog-demond-icon"
                            />
                          </figure>
                          <figure className="mb-0 d-inline-block">
                            <img
                              src={ETHIcon1}
                              alt="ETH-icon"
                              className="img-fluid"
                            />
                          </figure>
                        </li>
                        <li className="float-right">
                          <span>0.245 ETH</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 float-left text-center generic-btn blog-btn">
              <a href="#" className="bg-6418c3">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 float-left news-letter-con padding-bottom design-img main-box">
        <div className="container p-0">
          <div className="news-letter-box w-100 float-left bg-3b3363">
            <h3>Be the first to know about NFT news!</h3>
            <p>
              Get NFT drops, whales activities and updates right to your inbox!
              Never miss the first news!
            </p>
            <div className="input-feild bg-2c254a">
              <input type="text" placeholder="Enter your emial address" />
              <button className="bg-ff4c41 border-0 float-right">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
