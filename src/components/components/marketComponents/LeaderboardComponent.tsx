import React, { useEffect, useState } from "react";
import MarketTabs from "./TabsComponent";
import { fetchLeadership } from "../../../apis/AnalyticsAPIs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Progress } from "reactstrap";

const Leaderboard = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <div className="container p-0">
          <div className="banner-content text-center">
            <h1>Leaderboard</h1>
            <p className="mb-0">
              Leaderboard for overall profit and top traders over the selected
              time range.
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
          <div className="leaderboard-title bg-3b3363 mb-0">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-start align-items-center justify-content-center">
                <div className="">
                  <h5 className="mb-0">
                    Profit Leaderboard{" "}
                    <i className="fas fa-info-circle ml-2"></i>
                  </h5>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
                <div className="top-collections-rt-input">
                  <span>Contract</span>
                  <i className="fas fa-info-circle ml-2"></i>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <table className="collections-table w-100 leaderboard-table">
            <thead>
              <tr>
                <th className="bg-5b5288">
                  <span>#</span> Address
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> PnL{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Buy
                  Volume <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Sell
                  Volume <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Sent{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Received{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Minted{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-3b3363">
                  {/*<span>01</span>*/}
                  {/*<img*/}
                  {/*  src="assets/image/small-fish-icon.png"*/}
                  {/*  alt="small-fish-icon"*/}
                  {/*  className="img-fluid"*/}
                  {/*/>*/}
                  <p className="d-inline-block mb-0">
                    <Link to={"#"}>Address</Link>
                  </p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">PNL</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/* <Progress
                            className="bg-ff4c41"
                            value={l.pnl}
                            style={{ width: l.pnl, height: "8px" }}
                          /> */}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">BUY VOLUME</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/* <Progress
                            className="bg-ff4c41"
                            value={l.buy_volume}
                            style={{ width: l.buy_volume, height: "8px" }}
                          /> */}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">SELL VOLUME</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/* <Progress
                            className="bg-ff4c41"
                            value={l.sell_volume}
                            style={{ width: l.sell_volume, height: "8px" }}
                          /> */}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">SENT</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/* <Progress
                            className="bg-5b5288"
                            color={"ff4c41"}
                            value={l.sent}
                            style={{ width: l.sent, height: "8px" }}
                          /> */}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">RECIEVEED</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/* <Progress
                            className="bg-5b5288"
                            value={l.received}
                            color={"ff4c41"}
                            style={{ width: l.received, height: "8px" }}
                          /> */}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right d-block">MINTED</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/* <Progress
                            className="bg-5b5288"
                            value={l.minted}
                            color={"ff4c41"}
                            style={{ width: l.minted, height: "8px" }}
                          /> */}
                  </div>
                </td>
              </tr>
              <tr className="border-0">
                <td className="bg-3b3363">
                  <span>Showing 1-10 out of 90</span>
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
                      <a href="#">3</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">4</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">5</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">...</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">9</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </td>
                <td className="bg-3b3363">
                  <div className="generic-btn">
                    <select className="bg-2c254a border-0">
                      <option>
                        Rows <strong>50</strong>
                      </option>
                      <option>
                        Rows <strong>50</strong>
                      </option>
                      <option>
                        Rows <strong>50</strong>
                      </option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row leaderboard-buyers-table">
            <div className="col-lg-6">
              <div className="leaderboard-title bg-3b3363 mb-0">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-left justify-content-center">
                    <div className="">
                      <h5 className="mb-0">Top Buyers</h5>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
                    <div className="generic-btn d-inline-block">
                      <a href="#" className="bg-2c254a">
                        1H
                      </a>
                      <a href="#" className="bg-2c254a">
                        6H
                      </a>
                      <a href="#" className="bg-2c254a">
                        12H
                      </a>
                      <a href="#" className="bg-2c254a">
                        24H
                      </a>
                      <a href="#" className="bg-2c254a">
                        7D
                      </a>
                      <a href="#" className="bg-2c254a">
                        30D
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <table className="collections-table w-100 leaderboard-table">
                <thead>
                  <tr>
                    <th className="bg-5b5288">
                      {/*<span>#</span> */}
                      Address
                    </th>
                    <th className="bg-5b5288">
                      <i className="fas fa-caret-down mr-2 text-white"></i> Buy
                      Volume <i className="fas fa-info-circle ml-2"></i>
                    </th>
                    <th className="bg-5b5288">
                      <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                      Bought <i className="fas fa-info-circle ml-2"></i>
                    </th>
                    <th className="bg-5b5288">
                      <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                      Collections <i className="fas fa-info-circle ml-2"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-3b3363">
                      {/*<span>01</span>*/}
                      <Link to={"#"} className="d-inline-block mb-0">
                        ADDRESS
                      </Link>
                    </td>
                    <td className="bg-3b3363">
                      <p className="text-right d-block">BUY VOLUME</p>
                      <div className="bg-5b5288 table-progress-bar">
                        {/* <Progress
                                  className="bg-ff4c41"
                                  value={t.buy_volume}
                                  style={{ width: t.buy_volume, height: "8px" }}
                                /> */}
                      </div>
                    </td>
                    <td className="bg-3b3363">
                      <p className="text-center d-block mb-0">
                        {/* {t.bought} */}
                      </p>
                    </td>
                    <td className="bg-3b3363">
                      <p className="text-center d-block mb-0">
                        {/* {t.collections} */}
                      </p>
                    </td>
                  </tr>
                  <tr className="border-0">
                    <td className="bg-3b3363">
                      <span>Showing 1-10 out of 90</span>
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
                          <a href="#">3</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">4</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">5</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">...</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">9</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">
                            <i className="fas fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6">
              <div className="leaderboard-title bg-3b3363 mb-0">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-left justify-content-center">
                    <div className="">
                      <h5 className="mb-0">Top Sellers</h5>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
                    <div className="generic-btn d-inline-block">
                      <a href="#" className="bg-2c254a">
                        1H
                      </a>
                      <a href="#" className="bg-2c254a">
                        6H
                      </a>
                      <a href="#" className="bg-2c254a">
                        12H
                      </a>
                      <a href="#" className="bg-2c254a">
                        24H
                      </a>
                      <a href="#" className="bg-2c254a">
                        7D
                      </a>
                      <a href="#" className="bg-2c254a">
                        30D
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <table className="collections-table w-100 leaderboard-table">
                <thead>
                  <tr>
                    <th className="bg-5b5288">
                      {/*<span>#</span> */}
                      Address
                    </th>
                    <th className="bg-5b5288">
                      <i className="fas fa-caret-down mr-2 text-white"></i> Buy
                      Volume <i className="fas fa-info-circle ml-2"></i>
                    </th>
                    <th className="bg-5b5288">
                      <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                      Bought <i className="fas fa-info-circle ml-2"></i>
                    </th>
                    <th className="bg-5b5288">
                      <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                      Collections <i className="fas fa-info-circle ml-2"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-3b3363">
                      {/*<span>01</span>*/}
                      <Link to={"#"} className="d-inline-block mb-0"></Link>
                    </td>
                    <td className="bg-3b3363">
                      <p className="text-right d-block"></p>
                      <div className="bg-5b5288 table-progress-bar">
                        {/* <Progress
                                  className="bg-ff4c41"
                                  value={t.sell_volume}
                                  style={{
                                    width: t.sell_volume,
                                    height: "8px",
                                  }}
                                /> */}
                      </div>
                    </td>
                    <td className="bg-3b3363">
                      <p className="text-center d-block mb-0">
                        {/* {t.sold} */}
                      </p>
                    </td>
                    <td className="bg-3b3363">
                      <p className="text-center d-block mb-0">
                        {/* {t.collections} */}
                      </p>
                    </td>
                  </tr>

                  <tr className="border-0">
                    <td className="bg-3b3363">
                      <span>Showing 1-10 out of 90</span>
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
                          <a href="#">3</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">4</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">5</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">...</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">9</a>
                        </li>
                        <li className="d-inline-block">
                          <a href="#">
                            <i className="fas fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
