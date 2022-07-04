import React from "react";
import MarketTabs from "./TabsComponent";

const Marketplace = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <div className="container p-0">
          <div className="banner-content text-center">
            <h1>Marketplaces</h1>
            <p className="mb-0">
              The statistics and leaderboard of the marketplaces included by
              NFTGo.
            </p>
          </div>
        </div>
      </section>
      <div className="w-100 float-left buyer-con padding-bottom main-box">
        <div className="container p-0">
          <div id="myBtnContainer">
            <MarketTabs />
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="buyer-list-con">
                <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con category-con w-100">
                  <div className="overview-box w-100 ">
                    <div className="overview-box-title w-100">
                      <ul className="mb-0 list-unstyled w-100 border-0 p-0 d-sm-flex align-items-sm-center">
                        <li>
                          <h5 className="d-inline-block mb-0 text-white">
                            Trading Size
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="buyer-list-con">
                <div className="buyer-list-body bg-3b3363 buyer-list-con overview-box-main-con category-con w-100 ">
                  <div className="overview-box w-100 ">
                    <div className="overview-box-title w-100 ">
                      <ul className="mb-0 list-unstyled w-100  border-0 p-0 d-sm-flex align-items-sm-center">
                        <li className="">
                          <h5 className="d-inline-block mb-0 text-white">
                            Trading Size
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="leaderboard-title bg-3b3363 mb-0">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-start align-items-center justify-content-center">
                <div className="">
                  <h5 className="mb-0">
                    Top Marketplaces <i className="fas fa-info-circle ml-2"></i>
                  </h5>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
                <div className="top-collections-rt-input">
                  <div className="generic-btn d-inline-block">
                    <a href="#" className="bg-2c254a">
                      24H
                    </a>
                    <a href="#" className="bg-2c254a">
                      7D
                    </a>
                    <a href="#" className="bg-2c254a">
                      30D
                    </a>
                    <a href="#" className="bg-ff4c41">
                      3M
                    </a>
                    <a href="#" className="bg-2c254a">
                      1Y
                    </a>
                    <a href="#" className="bg-2c254a">
                      All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table className="collections-table w-100 leaderboard-table">
            <thead>
              <tr>
                <th className="bg-5b5288">Marketplace</th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                  Volume(7D) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                  Sales(7D) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                  Traders(7D) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                  Buyers(7D) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                  Sellers(7D) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  Free Rate <i className="fas fa-info-circle ml-2"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>
              <tr>
                <td className="bg-3b3363">
                  <img
                    src="assets/image/small-fish-icon.png"
                    alt="small-fish-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">LooksRare</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">$3,902,290.12</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "100%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">7,897</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "0" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">6,092</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">2,756</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">3,900</p>
                  <div className="bg-5b5288 table-progress-bar">
                    <div
                      className="bg-ff4c41"
                      style={{ height: "8px", width: "8%" }}
                    ></div>
                  </div>
                </td>
                <td className="bg-3b3363">2.00%</td>
              </tr>

              <tr className="border-0">
                <td className="bg-3b3363">
                  <span>Showing 1-10 out of 12</span>
                </td>
                <td className="bg-3b3363" colSpan={5}>
                  <ul className="list-unstyled mb-0 pagination-con">
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">1</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">2</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </td>
                <td className="bg-3b3363"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
