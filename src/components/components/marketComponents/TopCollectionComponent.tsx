import React, { useEffect, useState } from "react";
import { fetchCollections } from "../../../apis/AnalyticsAPIs";
import { useQuery } from "react-query";
import { Progress } from "reactstrap";
import dayjs from "dayjs";

import MarketTabs from "./TabsComponent";
import BarChart from "../charts/BarChartComponent";
import LineChart from "../charts/LineChartComponent";

import ETHIcon from "../../../assets/image/ETH-icon.png";
import TableAdminImage from "../../../assets/image/table-admin-img1.png";

const TopCollection = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <div className="container p-0">
          <div className="banner-content text-center">
            <h1>Top Collections</h1>
            <p className="mb-0">
              Top collections by marketcap and other key indicators.
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
                  <span>Rarity</span>
                  <i className="fas fa-info-circle ml-2"></i>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round bg-3b3363"></span>
                  </label>
                  <div className="generic-btn d-inline-block">
                    <a href="#" className="bg-3b3363">
                      Customize
                    </a>
                    <select className="border-0 bg-3b3363">
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </select>
                    <select className="borer-0 bg-3b3363">
                      <option>24H</option>
                      <option>24H</option>
                      <option>24H</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table id={"table-datatables"} className="collections-table w-100">
            <thead>
              <tr>
                <th className="bg-5b5288">
                  {/*<span>#</span> */}
                  Collection
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Market
                  Cap <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Market
                  Cap (24H) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Volume
                  (24H)
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Volume
                  (7D) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Floor
                  Price <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  Floor Price (7D) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Whales{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-3b3363">
                  {/*<span>01</span>*/}
                  <img
                    src={TableAdminImage}
                    alt="table-admin-img1"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">collection</p>
                </td>
                <td className="bg-3b3363">
                  <p>market_cap</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*  className="bg-ff4c41"*/}
                    {/*  value={c.market_cap_24}*/}
                    {/*  style={{*/}
                    {/*    width: c.market_cap_24,*/}
                    {/*    height: "8px",*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <span className="d-block  color-68cf29">market_cap_24</span>
                </td>
                <td className="bg-3b3363">
                  <p>volume</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*  className="bg-ff4c41"*/}
                    {/*  value={c.volume}*/}
                    {/*  style={{*/}
                    {/*    width: c.volume,*/}
                    {/*    height: "8px",*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363"></td>
                <td className="bg-3b3363">
                  <img src={ETHIcon} alt="ETH-icon" className="img-fluid" />
                  <p className="d-inline-block">floor_price</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*  className="bg-5b5288"*/}
                    {/*  value={c.floor_price}*/}
                    {/*  color={"ff4c41"}*/}
                    {/*  style={{*/}
                    {/*    width: c.floor_price,*/}
                    {/*    height: "8px",*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363"></td>
                <td className="bg-3b3363">
                  <p>whales</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*  className="bg-5b5288"*/}
                    {/*  value={c.whales}*/}
                    {/*  color={"ff4c41"}*/}
                    {/*  style={{*/}
                    {/*    width: c.whales,*/}
                    {/*    height: "8px",*/}
                    {/*  }}*/}
                    {/*/>*/}
                  </div>
                </td>
              </tr>
              <tr className="border-0">
                <td className="bg-3b3363">
                  <span>Showing 1 - 50 out of totalRecords</span>
                </td>
                <td className="bg-3b3363" colSpan={6}>
                  <ul className="list-unstyled mb-0 pagination-con">
                    <li className="d-inline-block">
                      <a href={"#"}>
                        <i className="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href={"#"}>1</a>
                    </li>
                    <li className="d-inline-block">
                      <a href={"#"}>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </td>
                <td className="bg-3b3363">
                  <div className="generic-btn">
                    {/*<select*/}
                    {/*  className="bg-2c254a border-0"*/}
                    {/*  value={data.pageSize}*/}
                    {/*  onChange={(e) => {*/}
                    {/*    setRowsPerPage(Number(e.target.value));*/}
                    {/*  }}*/}
                    {/*>*/}
                    {/*  {[10, 30, 50].map((pageSize) => (*/}
                    {/*    <option key={pageSize} value={pageSize}>*/}
                    {/*      Rows {pageSize}*/}
                    {/*    </option>*/}
                    {/*  ))}*/}
                    {/*</select>*/}
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

export default TopCollection;
