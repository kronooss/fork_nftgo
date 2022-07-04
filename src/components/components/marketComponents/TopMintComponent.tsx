import React, { useEffect, useState } from "react";
import MarketTabs from "./TabsComponent";
import { fetchMints } from "../../../apis/AnalyticsAPIs";
import { useQuery } from "react-query";

import FriendIcon from "../../../assets/image/friend-search-icon.png";
import ETHIcon from "../../../assets/image/ETH-icon.png";
import { Progress } from "reactstrap";

const TopMint = () => {
  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <div className="container p-0">
          <div className="banner-content text-center">
            <h1>Top Mints</h1>
            <p className="mb-0">
              Top mints by marketcap and other key indicators.
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
                    <a href="#" className="bg-3b3363">
                      15Min
                    </a>
                    <a href="#" className="bg-3b3363">
                      30Min
                    </a>
                    <a href="#" className="bg-3b3363">
                      1H
                    </a>
                    <a href="#" className="bg-3b3363">
                      6H
                    </a>
                    <a href="#" className="bg-3b3363">
                      12H
                    </a>
                    <a href="#" className="bg-3b3363">
                      24H
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
                  <span>#</span> Collection
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Minted{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Mint
                  Volume <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Minters{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Whales{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Total
                  Gas <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> First
                  Mint <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> FOMO{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-3b3363">
                  <span>01</span>
                  <img
                    src={FriendIcon}
                    alt="friend-search-icon"
                    className="img-fluid"
                  />
                  <p className="d-inline-block mb-0">collection</p>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right">minted</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={m.minted}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{*/}
                    {/*        width: m.minted,*/}
                    {/*        height: "8px",*/}
                    {/*    }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <img src={ETHIcon} alt="ETH-icon" className="img-fluid" />
                  <p className="d-inline-block">mint_volume</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={m.mint_volume}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{*/}
                    {/*        width: m.mint_volume,*/}
                    {/*        height: "8px",*/}
                    {/*    }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right">minters</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={m.minters}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{*/}
                    {/*        width: m.minters,*/}
                    {/*        height: "8px",*/}
                    {/*    }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right">whales</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={m.whales}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{*/}
                    {/*        width: m.whales,*/}
                    {/*        height: "8px",*/}
                    {/*    }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <p className="text-right">total_gas</p>
                  <div className="bg-5b5288 table-progress-bar">
                    {/*<Progress*/}
                    {/*    className="bg-5b5288"*/}
                    {/*    value={m.total_gas}*/}
                    {/*    color={"ff4c41"}*/}
                    {/*    style={{*/}
                    {/*        width: m.total_gas,*/}
                    {/*        height: "8px",*/}
                    {/*    }}*/}
                    {/*/>*/}
                  </div>
                </td>
                <td className="bg-3b3363">
                  <span>first_mint</span>
                </td>
                <td className="bg-3b3363">
                  <span>fomo</span>
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
                    <select className="bg-2c254a border-0">
                      <option>Rows 50</option>
                      <option>Rows 50</option>
                      <option>Rows 50</option>
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

export default TopMint;
