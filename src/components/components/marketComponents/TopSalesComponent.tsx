import React, { useEffect, useState } from "react";
import MarketTabs from "./TabsComponent";
import { useQuery } from "react-query";
import { fetchSales } from "../../../apis/AnalyticsAPIs";
import { Progress } from "reactstrap";

const TopSales = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <div className="container p-0">
          <div className="banner-content text-center">
            <h1>Top Sales</h1>
            <p className="mb-0">
              Top NFT sales by last price over the selected time range.
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
          <div className="top-collections-input">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-left justify-content-center">
                <div className="top-collections-input-feild w-100">
                  <input type="text" placeholder="Search Collections" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
                <div className="top-collections-rt-input">
                  <span>Listed</span>
                  <i className="fas fa-info-circle ml-2"></i>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                  <div className="generic-btn d-inline-block">
                    <select className="bg-3b3363">
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </select>
                    <a href="#" className="bg-3b3363">
                      24H
                    </a>
                    <a href="#" className="bg-3b3363">
                      7D
                    </a>
                    <a href="#" className="bg-3b3363">
                      30D
                    </a>
                    <a href="#" className="bg-3b3363">
                      3M
                    </a>
                    <a href="#" className="bg-3b3363">
                      1Y
                    </a>
                    <a href="#" className="bg-3b3363">
                      All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table className="collections-table w-100">
            <thead>
              <tr>
                <th className="bg-5b5288">
                  <span>#</span> NFT
                </th>
                <th className="bg-5b5288">Collection</th>
                <th className="bg-5b5288">Owner</th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Last
                  Price
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Change{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Highest
                  Price
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i>{" "}
                  Sales(24H)
                </th>
                <th className="bg-5b5288">Last Deal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-3b3363">
                  <span>01</span>
                  <img
                    src="assets/image/top-sales-icon1.png"
                    alt="top-sales-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">dotdotdot 1189</p>
                </td>
                <td className="bg-3b3363">
                  {/*<img*/}
                  {/*  src="assets/image/message-icon.png"*/}
                  {/*  alt="message-icon"*/}
                  {/*/>*/}
                  <p className="d-inline-block mb-0">collection</p>
                </td>
                <td className="bg-3b3363">
                  {/*<img*/}
                  {/*  src="assets/image/small-fish-icon.png"*/}
                  {/*  alt="small-fish-icon"*/}
                  {/*  className="img-fluid"*/}
                  {/*/>*/}
                  <p className="d-inline-block mb-0">owner</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right">list_price</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={s.list_price}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{width: s.list_price, height: "8px"}}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  {/*<img*/}
                  {/*  src="assets/image/ETH-icon.png"*/}
                  {/*  alt="ETH-icon"*/}
                  {/*  className="img-fluid"*/}
                  {/*/>*/}
                  <p className="d-inline-block">change</p>
                </td>
                <td className="bg-3b3363">
                  {/*<img*/}
                  {/*  src="assets/image/ETH-icon.png"*/}
                  {/*  alt="ETH-icon"*/}
                  {/*  className="img-fluid "*/}
                  {/*/>*/}
                  <p className="text-right d-inline-block">highest_price</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={s.highest_price}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{*/}
                    {/*        width: s.highest_price,*/}
                    {/*        height: "8px",*/}
                    {/*    }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right">sales_24h</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={s.sales_24h}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{*/}
                    {/*        width: s.sales_24h,*/}
                    {/*        height: "8px",*/}
                    {/*    }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <span>last_deal</span>
                </td>
              </tr>
              <tr className="border-0">
                <td className="bg-3b3363">
                  <span>Showing 1 - 50 out of totalRecords</span>
                </td>
                <td className="bg-3b3363" colSpan={6}>
                  <ul className="list-unstyled mb-0 pagination-con">
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href={"#"}>1</a>
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
        </div>
      </div>
    </>
  );
};

export default TopSales;
