import React from "react";
import './Page.css'
import ReactTooltip from  'react-tooltip'
const Page = () => {
  return (
    <>
      <div className="pricingnew--sell" id="selling-your-home">
        <div className="odkni--container">
          <div className="text-wrap">
            <h2>Sell your home. It's safe and stress-free.</h2>
            <p>
              You can sell your home directly to us, or get help listing it.
              Either way, we streamline the process to make it easy.
            </p>
          </div>

          <div className="">
            <h6>compare selling options</h6>
          </div>

          <div className="pn-table-wrap">
            <div className="col-l">
              <div className="pn-table-row top">
                <h3 className="colored-text">Sell to Opendoor</h3>
                <p>
                  Pay a service charge to get a stress free sale. We’ll make
                  repairs after you move, and the cost is deducted at closing so
                  you pay nothing out of pocket.
                </p>
                <ul>
                  <li>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L7.25 12L16 2"
                        stroke="#65C6AC"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Get a cash offer{" "}
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L7.25 12L16 2"
                        stroke="#65C6AC"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Skip showings and repairs{" "}
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L7.25 12L16 2"
                        stroke="#65C6AC"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Choose your close date{" "}
                  </li>
                </ul>
              </div>

              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>Example sale price</p>
                </div>
                <div className="cell-r">
                  <h4 className="">$250,000</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Service charge
                   

                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip1'
                        data-tip='' 
                        data-event='click focus'
                      >
                        
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                      <ReactTooltip id='svgTooltip1' globalEventOff='click'   getContent={() => 
                       <span className="tooltips-box is-left">
                       We collect a service charge that enables us to give you
                       a stress-free sale and expert support.{" "}
                     </span>
        
                }
                 />
                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <h4 className="colored-text">5%*</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Estimated closing costs
                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip2'
                        data-tip='' 
                        data-event='click focus'
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                      <ReactTooltip id='svgTooltip2' globalEventOff='click'   getContent={() => 
                      <span class="tooltips-box is-left">
                      These are costs you pay in any real estate transaction.
                      They vary depending on where you live, and include items
                      like title insurance, escrow fees, and HOA fees.{" "}
                    </span>
        
                }
                 />
                 
                      
                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <h4 className="">1%</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Estimated seller concessions
                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip3'
                        data-tip='' 
                        data-event='click focus'
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                      


                      <ReactTooltip id='svgTooltip3' globalEventOff='click'   getContent={() => 
                    <span className="tooltips-box is-left">
                    Buyers may ask you to cover their costs to close the
                    deal. When you sell to Opendoor, we only ask for repair
                    costs.{" "}
                  </span>
        
                }
                 />


                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <h4 className="">—</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Repairs
                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip4'
                        data-tip='' 
                        data-event='click focus'
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                     
                      
                      


                      <ReactTooltip id='svgTooltip4' globalEventOff='click'   getContent={() => 
                     <span className="tooltips-box is-left">
                     We’ll assess your home and give you a detailed estimate
                     of any needed repairs. Instead of dealing with the
                     repairs yourself, you can deduct the costs from your net
                     proceeds and let us handle the work.{" "}
                   </span>
        
                }
                 />
                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <p className="">Based on Opendoor assessment</p>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>Upgrades</p>
                </div>
                <div className="cell-r">
                  <p className="">—</p>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>Est. net proceeds</p>
                </div>
                <div className="cell-r">
                  <h4 className="colored-text">$237,500</h4>
                </div>
              </div>
            </div>
            <div className="col-r">
              <div className="pn-table-row top">
                <h3 className="colored-text">List with Opendoor</h3>
                <p>
                  Pay 1% less than you would listing your home the traditional
                  way. That's thousands in savings. Plus, we’ll advance $10k
                  interest-free to make high-return upgrades.
                </p>
                <ul>
                  <li>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                     
                    >
                      <path
                        d="M2 7L7.25 12L16 2"
                        stroke="#65C6AC"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Maximize your sale price{" "}
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-for='svgTooltip5'
                      data-tip='' 
                      data-event='click focus'
                    >
                      <path
                        d="M2 7L7.25 12L16 2"
                        stroke="#65C6AC"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                 
                    <ReactTooltip id='svgTooltip5' globalEventOff='click'   getContent={() => 
                    <span className="tooltips-box is-left">
                    Buyers may ask you to cover their costs to close the
                    deal. When you sell to Opendoor, we only ask for repair
                    costs.{" "}
                  </span>
        
                }
                 />
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
          
                    >
                      <path
                        d="M2 7L7.25 12L16 2"
                        stroke="#65C6AC"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Get expertise at every step{" "}
                  </li>
                </ul>
              </div>

              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>Example sale price</p>
                </div>
                <div className="cell-r">
                  <h4 className="">$240k - 260k</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Commission fee
                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip6'
                        data-tip='' 
                        data-event='click focus'
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                      

                      <ReactTooltip id='svgTooltip6' globalEventOff='click'   getContent={() => 
                    <span className="tooltips-box is-left">
                        Pay just 5% to list with a local real estate expert.
                        That’s thousands in savings compared to the traditional
                        6% commission.{" "}
                      </span>
        
                }
                 />

                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <h4 className="colored-text">5%</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Estimated closing costs
                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip7'
                        data-tip='' 
                        data-event='click focus'
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                     

                      <ReactTooltip id='svgTooltip7' globalEventOff='click'   getContent={() => 
                    <span className="tooltips-box is-left">
                    These are costs you pay in any real estate transaction.
                    They vary depending on where you live, and include items
                    like title insurance, escrow fees, and HOA fees.{" "}
                  </span>
        
                }
                 />



                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <h4 className="">1%</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Estimated seller concessions
                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip8'
                        data-tip='' 
                        data-event='click focus'
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                     

                      <ReactTooltip id='svgTooltip8' globalEventOff='click'   getContent={() => 
                    <span className="tooltips-box is-left">
                    Buyers may ask you to cover their costs to close the
                    deal. When you list with us, your agent will help you
                    negotiate these costs with the buyer.{" "}
                  </span>
        
                }
                 />



           
                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <h4 className="">0-2%</h4>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>
                    Repairs
                    <span className="tooltip-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-for='svgTooltip'
                        data-tip='' 
                        data-event='click focus'
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40965 10.3056V10.6256H7.69445V10.2416C7.69445 9.26629 8.32964 8.6452 8.91985 8.0681C8.93381 8.05445 8.94775 8.04082 8.96165 8.02721C9.42245 7.57921 9.83205 7.16961 9.83205 6.65761C9.83205 6.06881 9.52485 5.71041 8.84645 5.71041C8.14245 5.71041 7.66885 6.22241 7.57925 7.02881H5.80005C5.87685 5.24961 7.14405 4.20001 8.96165 4.20001C10.8432 4.20001 11.8032 5.14721 11.8032 6.50401C11.8032 7.38721 11.304 7.97601 10.7536 8.51361C10.6762 8.5878 10.5982 8.66096 10.5208 8.73355C9.9839 9.23709 9.47677 9.71268 9.40965 10.3056ZM9.70405 12.4944C9.70405 13.1088 9.17925 13.5952 8.53925 13.5952C7.88645 13.5952 7.36165 13.1088 7.36165 12.4944C7.36165 11.8672 7.88645 11.3808 8.53925 11.3808C9.17925 11.3808 9.70405 11.8672 9.70405 12.4944Z"
                          fill="#1C85E8"
                        />
                        <path
                          opacity="0.4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                          stroke="#7F92A4"
                          stroke-width="1.2"
                        />
                      </svg>
                   

                      <ReactTooltip id='svgTooltip' globalEventOff='click'   getContent={() => 
                      <span className="tooltips-box is-left">
                      After you agree to an offer from a buyer, they’ll
                      typically have the home inspected for defects. They may
                      ask you to make repairs yourself or they may request a
                      credit for the estimated cost.{" "}
                    </span>
        
                }
                 />

                      
                    </span>
                  </p>
                </div>
                <div className="cell-r">
                  <p className="">Based on buyer inspection</p>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>Upgrades</p>
                </div>
                <div className="cell-r">
                  <p className="">Get a $10k advance </p>
                </div>
              </div>
              <div className="pn-table-row list">
                <div className="cell-l">
                  <p>Est. net proceeds</p>
                </div>
                <div className="cell-r">
                  <h4 className="colored-text">$220k - 244k</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="pn-table-note">
            <p>
              These numbers are examples provided for educational purposes.
              Offer eligibility and price will vary and, when listing, market
              conditions and results will vary. Estimated net proceeds shown do
              not yet account for customer’s mortgage payoff, if any.
              <br />
              <br />* Beginning on September 30, 2020, for new offers,
              Opendoor’s service charge will be no more than 5%. Service charge
              is subject to change, and has historically been as high as 14%.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
