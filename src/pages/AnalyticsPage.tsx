import React from "react";
import MarketTabs from "../components/components/marketComponents/TabsComponent";

const Analytics = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <div className="container p-0">
          <div className="banner-content text-center">
            <h1>Market Overview</h1>
            <p className="mb-0">
              Real time global NFT market data. We have listed 2,168 collections
              and 25,616,800 NFTs in total.
            </p>
          </div>
        </div>
      </section>
      <div className="w-100 float-left buyer-con main-box">
        <div className="container p-0">
          <div id="myBtnContainer">
            <MarketTabs />
          </div>
          <div>
            <div className="buyer-list-con">
              <div className="buyer-list-head bg-5b5288 w-100 float-left">
                <ul className="mb-0 list-unstyled w-100 float-left">
                  <li className="float-left">
                    <figure className="mb-0 d-inline-block">
                      <img src="" alt="" className="img-fluid" />
                    </figure>
                    <h5 className="d-inline-block mb-0">Barometer</h5>
                    <i className="fas fa-info-circle ml-2"></i>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
              <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con">
                <div className="overview-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a">
                        <span className="d-block">
                          Market Sentiment{" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a w-100 float-left">
                        <span className="d-block">
                          Traders(24H){" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                        <div className="line-bar w-100 float-left">
                          <div className="line-bar-progress"></div>
                          <div className="line-bar-progress"></div>
                        </div>
                        <div className="static-con w-100 float-left">
                          <ul className="list-unstyled mb-0 p-0 border-0">
                            <li className="float-left border-0">
                              <span className="pl-0">Buyers</span>
                              <h5 className="mb-0 text-white">25,028</h5>
                            </li>
                            <li className="float-right text-end">
                              <span className="pr-0">Sellers</span>
                              <h5 className="mb-0 text-white">26,333</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a w-100 float-left">
                        <span className="d-block">
                          30-days Profit & Loss{" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                        <div className="line-bar w-100 float-left">
                          <div className="line-bar-progress"></div>
                          <div className="line-bar-progress"></div>
                        </div>
                        <div className="static-con w-100 float-left">
                          <ul className="list-unstyled mb-0 p-0 border-0">
                            <li className="float-left border-0">
                              <figure>
                                <img
                                  src="assets/image/haha-icon2.png"
                                  alt="haha-icon"
                                  className="img-fluid"
                                />
                              </figure>
                              <h5 className="mb-0 text-white">657,373</h5>
                            </li>
                            <li className="float-right text-end">
                              <figure>
                                <img
                                  src="assets/image/sad-emoji.png"
                                  alt="sad-emoji"
                                  className="img-fluid"
                                />
                              </figure>
                              <h5 className="mb-0 text-white">183,179</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buyer-list-con">
              <div className="buyer-list-head bg-5b5288 w-100 float-left">
                <ul className="mb-0 list-unstyled w-100 float-left">
                  <li className="float-left">
                    <figure className="mb-0 d-inline-block">
                      <img src="" alt="" className="img-fluid" />
                    </figure>
                    <h5 className="d-inline-block mb-0">Market Cap & Volume</h5>
                    <i className="fas fa-info-circle ml-2"></i>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
              <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con">
                <div className="overview-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a">
                        <span className="d-block">
                          Market Sentiment{" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a w-100 float-left">
                        <span className="d-block">
                          Traders(24H){" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                        <div className="line-bar w-100 float-left">
                          <div className="line-bar-progress"></div>
                          <div className="line-bar-progress"></div>
                        </div>
                        <div className="static-con w-100 float-left">
                          <ul className="list-unstyled mb-0 p-0 border-0">
                            <li className="float-left border-0">
                              <span className="pl-0">Buyers</span>
                              <h5 className="mb-0 text-white">25,028</h5>
                            </li>
                            <li className="float-right text-end">
                              <span className="pr-0">Sellers</span>
                              <h5 className="mb-0 text-white">26,333</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a w-100 float-left">
                        <span className="d-block">
                          30-days Profit & Loss{" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                        <div className="line-bar w-100 float-left">
                          <div className="line-bar-progress"></div>
                          <div className="line-bar-progress"></div>
                        </div>
                        <div className="static-con w-100 float-left">
                          <ul className="list-unstyled mb-0 p-0 border-0">
                            <li className="float-left border-0">
                              <figure>
                                <img
                                  src="assets/image/haha-icon2.png"
                                  alt="haha-icon"
                                  className="img-fluid"
                                />
                              </figure>
                              <h5 className="mb-0 text-white">657,373</h5>
                            </li>
                            <li className="float-right text-end">
                              <figure>
                                <img
                                  src="assets/image/sad-emoji.png"
                                  alt="sad-emoji"
                                  className="img-fluid"
                                />
                              </figure>
                              <h5 className="mb-0 text-white">183,179</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buyer-list-con">
              <div className="buyer-list-head bg-5b5288 w-100 float-left">
                <ul className="mb-0 list-unstyled w-100 float-left">
                  <li className="float-left">
                    <h5 className="d-inline-block mb-0">Holders & Traders</h5>
                    <i className="fas fa-info-circle ml-2"></i>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
              <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con">
                <div className="overview-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a">
                        <span className="d-block">
                          Market Sentiment{" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a w-100 float-left">
                        <span className="d-block">
                          Traders(24H){" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                        <div className="line-bar w-100 float-left">
                          <div className="line-bar-progress"></div>
                          <div className="line-bar-progress"></div>
                        </div>
                        <div className="static-con w-100 float-left">
                          <ul className="list-unstyled mb-0 p-0 border-0">
                            <li className="float-left border-0">
                              <span className="pl-0">Buyers</span>
                              <h5 className="mb-0 text-white">25,028</h5>
                            </li>
                            <li className="float-right text-end">
                              <span className="pr-0">Sellers</span>
                              <h5 className="mb-0 text-white">26,333</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="overview-box-item bg-2c254a w-100 float-left">
                        <span className="d-block">
                          30-days Profit & Loss{" "}
                          <i className="fas fa-info-circle ml-2"></i>
                        </span>
                        <div className="line-bar w-100 float-left">
                          <div className="line-bar-progress"></div>
                          <div className="line-bar-progress"></div>
                        </div>
                        <div className="static-con w-100 float-left">
                          <ul className="list-unstyled mb-0 p-0 border-0">
                            <li className="float-left border-0">
                              <figure>
                                <img
                                  src="assets/image/haha-icon2.png"
                                  alt="haha-icon"
                                  className="img-fluid"
                                />
                              </figure>
                              <h5 className="mb-0 text-white">657,373</h5>
                            </li>
                            <li className="float-right text-end">
                              <figure>
                                <img
                                  src="assets/image/sad-emoji.png"
                                  alt="sad-emoji"
                                  className="img-fluid"
                                />
                              </figure>
                              <h5 className="mb-0 text-white">183,179</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con category-con">
              <div className="overview-box">
                <div className="overview-box-title w-100 float-left">
                  <ul className="mb-0 list-unstyled w-100 float-left border-0 p-0 d-sm-flex align-items-sm-center">
                    <li className="float-left">
                      <h5 className="d-inline-block mb-0 text-white">
                        Category Market Cap
                      </h5>
                      <i className="fas fa-info-circle ml-2"></i>
                    </li>
                    <li className="float-sm-right d-sm-flex justify-content-sm-end">
                      <div className="generic-btn">
                        <a href="#" className="bg-ff4c41">
                          Market Cap
                        </a>
                        <a href="#" className="bg-2c254a">
                          Volume
                        </a>
                        <a href="#" className="bg-2c254a">
                          Liquidity
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a">
                      <span className="d-block">
                        Market Sentiment{" "}
                        <i className="fas fa-info-circle ml-2"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a w-100 float-left">
                      <span className="d-block">
                        Traders(24H) <i className="fas fa-info-circle ml-2"></i>
                      </span>
                      <div className="line-bar w-100 float-left">
                        <div className="line-bar-progress"></div>
                        <div className="line-bar-progress"></div>
                      </div>
                      <div className="static-con w-100 float-left">
                        <ul className="list-unstyled mb-0 p-0 border-0">
                          <li className="float-left border-0">
                            <span className="pl-0">Buyers</span>
                            <h5 className="mb-0 text-white">25,028</h5>
                          </li>
                          <li className="float-right text-end">
                            <span className="pr-0">Sellers</span>
                            <h5 className="mb-0 text-white">26,333</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a w-100 float-left">
                      <span className="d-block">
                        30-days Profit & Loss{" "}
                        <i className="fas fa-info-circle ml-2"></i>
                      </span>
                      <div className="line-bar w-100 float-left">
                        <div className="line-bar-progress"></div>
                        <div className="line-bar-progress"></div>
                      </div>
                      <div className="static-con w-100 float-left">
                        <ul className="list-unstyled mb-0 p-0 border-0">
                          <li className="float-left border-0">
                            <figure>
                              <img
                                src="assets/image/haha-icon2.png"
                                alt="haha-icon"
                                className="img-fluid"
                              />
                            </figure>
                            <h5 className="mb-0 text-white">657,373</h5>
                          </li>
                          <li className="float-right text-end">
                            <figure>
                              <img
                                src="assets/image/sad-emoji.png"
                                alt="sad-emoji"
                                className="img-fluid"
                              />
                            </figure>
                            <h5 className="mb-0 text-white">183,179</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con category-con">
              <div className="overview-box">
                <div className="overview-box-title w-100 float-left">
                  <ul className="mb-0 list-unstyled w-100 float-left border-0 p-0 d-sm-flex align-items-sm-center">
                    <li className="float-left">
                      <h5 className="d-inline-block mb-0 text-white">
                        Collection Distribution
                      </h5>
                      <i className="fas fa-info-circle ml-2 text-white"></i>
                    </li>
                    <li className="float-sm-right d-sm-flex justify-content-sm-end">
                      <div className="generic-btn">
                        <a href="#" className="bg-2c254a">
                          Market Cap
                        </a>
                        <a href="#" className="bg-ff4c41">
                          Volume
                        </a>
                        <select className="bg-2c254a border-0">
                          <option>7D</option>
                          <option>7D</option>
                          <option>7D</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a">
                      <span className="d-block">
                        Market Sentiment{" "}
                        <i className="fas fa-info-circle ml-2"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a w-100 float-left">
                      <span className="d-block">
                        Traders(24H) <i className="fas fa-info-circle ml-2"></i>
                      </span>
                      <div className="line-bar w-100 float-left">
                        <div className="line-bar-progress"></div>
                        <div className="line-bar-progress"></div>
                      </div>
                      <div className="static-con w-100 float-left">
                        <ul className="list-unstyled mb-0 p-0 border-0">
                          <li className="float-left border-0">
                            <span className="pl-0">Buyers</span>
                            <h5 className="mb-0 text-white">25,028</h5>
                          </li>
                          <li className="float-right text-end">
                            <span className="pr-0">Sellers</span>
                            <h5 className="mb-0 text-white">26,333</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a w-100 float-left">
                      <span className="d-block">
                        30-days Profit & Loss{" "}
                        <i className="fas fa-info-circle ml-2"></i>
                      </span>
                      <div className="line-bar w-100 float-left">
                        <div className="line-bar-progress"></div>
                        <div className="line-bar-progress"></div>
                      </div>
                      <div className="static-con w-100 float-left">
                        <ul className="list-unstyled mb-0 p-0 border-0">
                          <li className="float-left border-0">
                            <figure>
                              <img
                                src="assets/image/haha-icon2.png"
                                alt="haha-icon"
                                className="img-fluid"
                              />
                            </figure>
                            <h5 className="mb-0 text-white">657,373</h5>
                          </li>
                          <li className="float-right text-end">
                            <figure>
                              <img
                                src="assets/image/sad-emoji.png"
                                alt="sad-emoji"
                                className="img-fluid"
                              />
                            </figure>
                            <h5 className="mb-0 text-white">183,179</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con category-con">
              <div className="overview-box">
                <div className="overview-box-title w-100 float-left">
                  <ul className="mb-0 list-unstyled w-100 float-left border-0 p-0 d-sm-flex align-items-sm-center">
                    <li className="float-left">
                      <h5 className="d-inline-block mb-0 text-white">
                        Top Collections
                      </h5>
                      <i className="fas fa-info-circle ml-2 text-white"></i>
                    </li>
                    <li className="float-sm-right d-sm-flex justify-content-sm-end">
                      <div className="generic-btn">
                        <a href="#" className="bg-ff4c41">
                          Market Cap
                        </a>
                        <a href="#" className="bg-2c254a">
                          Volume
                        </a>
                        <a href="#" className="bg-2c254a">
                          Liquidity
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a">
                      <span className="d-block">
                        Market Sentiment{" "}
                        <i className="fas fa-info-circle ml-2"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a w-100 float-left">
                      <span className="d-block">
                        Traders(24H) <i className="fas fa-info-circle ml-2"></i>
                      </span>
                      <div className="line-bar w-100 float-left">
                        <div className="line-bar-progress"></div>
                        <div className="line-bar-progress"></div>
                      </div>
                      <div className="static-con w-100 float-left">
                        <ul className="list-unstyled mb-0 p-0 border-0">
                          <li className="float-left border-0">
                            <span className="pl-0">Buyers</span>
                            <h5 className="mb-0 text-white">25,028</h5>
                          </li>
                          <li className="float-right text-end">
                            <span className="pr-0">Sellers</span>
                            <h5 className="mb-0 text-white">26,333</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="overview-box-item bg-2c254a w-100 float-left mb-0">
                      <span className="d-block">
                        30-days Profit & Loss{" "}
                        <i className="fas fa-info-circle ml-2"></i>
                      </span>
                      <div className="line-bar w-100 float-left">
                        <div className="line-bar-progress"></div>
                        <div className="line-bar-progress"></div>
                      </div>
                      <div className="static-con w-100 float-left">
                        <ul className="list-unstyled mb-0 p-0 border-0">
                          <li className="float-left border-0">
                            <figure>
                              <img
                                src="assets/image/haha-icon2.png"
                                alt="haha-icon"
                                className="img-fluid"
                              />
                            </figure>
                            <h5 className="mb-0 text-white">657,373</h5>
                          </li>
                          <li className="float-right text-end">
                            <figure>
                              <img
                                src="assets/image/sad-emoji.png"
                                alt="sad-emoji"
                                className="img-fluid"
                              />
                            </figure>
                            <h5 className="mb-0 text-white">183,179</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
