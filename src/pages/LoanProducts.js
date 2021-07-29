import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
} from "mdb-react-ui-kit";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import ReactFullpage from "@fullpage/react-fullpage";

import img1 from "../images/Bank-of-England-Customer.jpg";
import img2 from "../images/lp-2.jpg";
import img3 from "../images/lp-3.jpg";
import img4 from "../images/lp-4.jpg";
import img5 from "../images/lp-5.jpg";
import img6 from "../images/lp-6.jpg";
import img7 from "../images/lp-7.jpg";

import LoanProductHero from "../components/LoanProductHero";

export default function LoanProducts() {
  return (
    // <ParallaxProvider>
    //   <MDBContainer className="" fluid>
    //     <MDBRow style={{ background: "#fff" }}>
    //       <MDBCol sm="12" style={{ color: "black" }}>
    //         <div>
    //           <h3 className="mt-4 mb-0" style={{ fontWeight: "bold" }}>
    //             Loan Types
    //           </h3>
    //         </div>
    //         <p className="mb-1">
    //           Understand the different loan types to figure out which one is
    //           right for you.
    //         </p>
    //       </MDBCol>
    //     </MDBRow>
    //     <MDBRow className="m-2 mb-3">
    //       <MDBCol
    //         className="d-flex justify-content-end align-items-end"
    //         style={{
    //           backgroundImage: `url(${img1})`,
    //           backgroundRepeat: "no-repeat",
    //           backgroundPosition: "top",
    //           backgroundSize: "cover",
    //           width: "100%",
    //           height: "60vh",
    //         }}
    //         sm="12"
    //       >
    //         <Parallax y={[80, -150]} className="d-none d-md-block">
    //           <div
    //             style={{
    //               backgroundColor: "rgba(255, 255, 255, 0.75)",
    //               width: "600px",
    //               margin: "20px",
    //               padding: "20px",
    //               borderRadius: "15px",
    //             }}
    //           >
    //             <h4
    //               style={{
    //                 color: "black",
    //                 fontWeight: "bold",
    //                 textAlign: "center",
    //               }}
    //             >
    //               An Individual Approach
    //             </h4>
    //             <p className="text-start">
    //               At BOE Texas we take a community focused approach, meaning we
    //               get to know our customers before suggesting a specific type of
    //               loan Loan product. Our goal is to understand your needs so we
    //               can match you with the right type of loan.
    //             </p>
    //           </div>
    //         </Parallax>
    //         <div
    //           className="d-block d-md-none"
    //           style={{
    //             backgroundColor: "rgba(255, 255, 255, 0.75)",
    //             width: "600px",
    //             margin: "20px",
    //             padding: "20px",
    //             borderRadius: "15px",
    //           }}
    //         >
    //           <h4
    //             style={{
    //               color: "black",
    //               fontWeight: "bold",
    //               textAlign: "center",
    //             }}
    //           >
    //             An Individual Approach
    //           </h4>
    //           <p className="text-start">
    //             At BOE Texas we take a community focused approach, meaning we
    //             get to know our customers before suggesting a specific type of
    //             loan Loan product. Our goal is to understand your needs so we
    //             can match you with the right type of loan.
    //           </p>
    //         </div>
    //       </MDBCol>
    //     </MDBRow>
    //     <MDBRow
    //       className="m-2 mb-3 d-flex align-items-end justify-content-center"
    //       style={{
    //         backgroundImage: `url(${img2})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "top",
    //         backgroundSize: "cover",
    //         height: "60vh",
    //       }}
    //     >
    //       <Parallax x={[-2, 3]} className="">
    //         <MDBRow
    //           style={{
    //             backgroundColor: "rgba(255, 255, 255, 1)",
    //             width: "97%",
    //             padding: "30px",
    //           }}
    //           className="m-2"
    //         >
    //           <MDBCol
    //             md="8"
    //             className="d-flex justify-content-center align-items-end"
    //           >
    //             <div>
    //               <h4
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "bold",
    //                   textAlign: "start",
    //                 }}
    //                 className="m-0"
    //               >
    //                 Bond Loans
    //               </h4>
    //               <p className="text-start">
    //                 A mortgage revenue bond (MRB) is a type of municipal bond
    //                 that is issues by local housing authorities to finance
    //                 mortgages for qualified, usually people whose self-reported
    //                 incomes were in the lowest income bracket, first-time home
    //                 buyers.
    //               </p>
    //             </div>
    //           </MDBCol>
    //           <MDBCol md="4" className="text-center">
    //             <div>
    //               <p className="p-0 m-1">Contact us today to get started</p>
    //               <p className="p-0 m-1">214-396-6450</p>
    //               <p className="p-0 m-1">or</p>
    //               <MDBBtn
    //                 rippleColor="success"
    //                 color="white"
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "600",
    //                   backgroundColor: "white",
    //                   padding: "11px 20px 11px 20px",
    //                   fontSize: "12px",
    //                   border: "2px solid grey",
    //                 }}
    //               >
    //                 Start an Application
    //               </MDBBtn>
    //             </div>
    //           </MDBCol>
    //         </MDBRow>
    //       </Parallax>
    //     </MDBRow>
    //     <MDBRow
    //       className="m-2 mb-3 d-flex align-items-end justify-content-center"
    //       style={{
    //         backgroundImage: `url(${img3})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "top",
    //         backgroundSize: "cover",
    //         height: "60vh",
    //       }}
    //     >
    //       <Parallax x={[2, -3]} className="">
    //         <MDBRow
    //           style={{
    //             backgroundColor: "rgba(255, 255, 255, 1)",
    //             width: "97%",
    //             padding: "30px",
    //           }}
    //           className="m-2"
    //         >
    //           <MDBCol
    //             md="8"
    //             className="d-flex justify-content-center align-items-end"
    //           >
    //             <div>
    //               <h4
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "bold",
    //                   textAlign: "start",
    //                 }}
    //                 className="m-0"
    //               >
    //                 Conventional
    //               </h4>
    //               <p className="text-start">
    //                 A conventional mortgage or conventional loan is a home
    //                 buyers loan that is not offered or secured by a government
    //                 entity. It is available through or guaranteed by a private
    //                 lender or the two government sponsored enterprises - Fannie
    //                 Mae and Freddie Mac.
    //               </p>
    //             </div>
    //           </MDBCol>
    //           <MDBCol md="4" className="text-center">
    //             <div>
    //               <p className="p-0 m-1">Contact us today to get started</p>
    //               <p className="p-0 m-1">214-396-6450</p>
    //               <p className="p-0 m-1">or</p>
    //               <MDBBtn
    //                 rippleColor="success"
    //                 color="white"
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "600",
    //                   backgroundColor: "white",
    //                   padding: "11px 20px 11px 20px",
    //                   fontSize: "12px",
    //                   border: "2px solid grey",
    //                 }}
    //               >
    //                 Start an Application
    //               </MDBBtn>
    //             </div>
    //           </MDBCol>
    //         </MDBRow>
    //       </Parallax>
    //     </MDBRow>
    //     <MDBRow
    //       className="m-2 mb-3 d-flex align-items-end justify-content-center"
    //       style={{
    //         backgroundImage: `url(${img4})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "top",
    //         backgroundSize: "cover",
    //         height: "60vh",
    //       }}
    //     >
    //       <Parallax x={[-2, 3]} className="">
    //         <MDBRow
    //           style={{
    //             backgroundColor: "rgba(255, 255, 255, 1)",
    //             width: "97%",
    //             padding: "30px",
    //           }}
    //           className="m-2"
    //         >
    //           <MDBCol
    //             md="8"
    //             className="d-flex justify-content-center align-items-end"
    //           >
    //             <div>
    //               <h4
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "bold",
    //                   textAlign: "start",
    //                 }}
    //                 className="m-0"
    //               >
    //                 FHA
    //               </h4>
    //               <p className="text-start">
    //                 A Federal Housing Administration (FHA) loan is a mortgage
    //                 that is insured by the Federal Housing Administration and
    //                 issued by an FHA-aprroved lender. FHA loans are designed for
    //                 middle-income borrowers; they require a lower minimum down
    //                 payment and lower credit scores than many conventional
    //                 loans.
    //               </p>
    //             </div>
    //           </MDBCol>
    //           <MDBCol md="4" className="text-center">
    //             <div>
    //               <p className="p-0 m-1">Contact us today to get started</p>
    //               <p className="p-0 m-1">214-396-6450</p>
    //               <p className="p-0 m-1">or</p>
    //               <MDBBtn
    //                 rippleColor="success"
    //                 color="white"
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "600",
    //                   backgroundColor: "white",
    //                   padding: "11px 20px 11px 20px",
    //                   fontSize: "12px",
    //                   border: "2px solid grey",
    //                 }}
    //               >
    //                 Start an Application
    //               </MDBBtn>
    //             </div>
    //           </MDBCol>
    //         </MDBRow>
    //       </Parallax>
    //     </MDBRow>
    //     <MDBRow
    //       className="m-2 mb-3 d-flex align-items-end justify-content-center"
    //       style={{
    //         backgroundImage: `url(${img5})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "top",
    //         backgroundSize: "cover",
    //         height: "60vh",
    //       }}
    //     >
    //       <Parallax x={[2, -3]} className="">
    //         <MDBRow
    //           style={{
    //             backgroundColor: "rgba(255, 255, 255, 1)",
    //             width: "97%",
    //             padding: "30px",
    //           }}
    //           className="m-2"
    //         >
    //           <MDBCol
    //             md="8"
    //             className="d-flex justify-content-center align-items-end"
    //           >
    //             <div>
    //               <h4
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "bold",
    //                   textAlign: "start",
    //                 }}
    //                 className="m-0"
    //               >
    //                 VA Loans
    //               </h4>
    //               <p className="text-start">
    //                 A VA loan is a mortgage loan available through a program
    //                 established by the United States Department of Veterans
    //                 Affairs. The VA sets the qualifying standars, dictates, and
    //                 terms of the mortgages offered, and guarantees a portion of
    //                 the loan, but doesn't actually offer the financing.
    //               </p>
    //             </div>
    //           </MDBCol>
    //           <MDBCol md="4" className="text-center">
    //             <div>
    //               <p className="p-0 m-1">Contact us today to get started</p>
    //               <p className="p-0 m-1">214-396-6450</p>
    //               <p className="p-0 m-1">or</p>
    //               <MDBBtn
    //                 rippleColor="success"
    //                 color="white"
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "600",
    //                   backgroundColor: "white",
    //                   padding: "11px 20px 11px 20px",
    //                   fontSize: "12px",
    //                   border: "2px solid grey",
    //                 }}
    //               >
    //                 Start an Application
    //               </MDBBtn>
    //             </div>
    //           </MDBCol>
    //         </MDBRow>
    //       </Parallax>
    //     </MDBRow>
    //     <MDBRow
    //       className="m-2 mb-3 d-flex align-items-end justify-content-center"
    //       style={{
    //         backgroundImage: `url(${img6})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "top",
    //         backgroundSize: "cover",
    //         height: "60vh",
    //       }}
    //     >
    //       <Parallax x={[-2, 3]} className="">
    //         <MDBRow
    //           style={{
    //             backgroundColor: "rgba(255, 255, 255, 1)",
    //             width: "97%",
    //             padding: "30px",
    //           }}
    //           className="m-2"
    //         >
    //           <MDBCol
    //             md="8"
    //             className="d-flex justify-content-center align-items-end"
    //           >
    //             <div>
    //               <h4
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "bold",
    //                   textAlign: "start",
    //                 }}
    //                 className="m-0"
    //               >
    //                 USDA Loans
    //               </h4>
    //               <p className="text-start">
    //                 USDA home loans open up the dream of owning a home to people
    //                 in pow-polulation areas who otherwise could not afford it.
    //                 If you live in a place with a population of less than 35,000
    //                 and you can't qualify for a conventional loan, you may
    //                 qualify for a USDA guaranteed loan or a USDA direct loan.
    //               </p>
    //             </div>
    //           </MDBCol>
    //           <MDBCol md="4" className="text-center">
    //             <div>
    //               <p className="p-0 m-1">Contact us today to get started</p>
    //               <p className="p-0 m-1">214-396-6450</p>
    //               <p className="p-0 m-1">or</p>
    //               <MDBBtn
    //                 rippleColor="success"
    //                 color="white"
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "600",
    //                   backgroundColor: "white",
    //                   padding: "11px 20px 11px 20px",
    //                   fontSize: "12px",
    //                   border: "2px solid grey",
    //                 }}
    //               >
    //                 Start an Application
    //               </MDBBtn>
    //             </div>
    //           </MDBCol>
    //         </MDBRow>
    //       </Parallax>
    //     </MDBRow>
    //     <MDBRow
    //       className="m-2 d-flex align-items-end justify-content-center"
    //       style={{
    //         backgroundImage: `url(${img7})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "top",
    //         backgroundSize: "cover",
    //         height: "60vh",
    //       }}
    //     >
    //       <Parallax x={[2, -3]} className="">
    //         <MDBRow
    //           style={{
    //             backgroundColor: "rgba(255, 255, 255, 1)",
    //             width: "97%",
    //             padding: "30px",
    //           }}
    //           className="m-2"
    //         >
    //           <MDBCol
    //             md="8"
    //             className="d-flex justify-content-center align-items-end"
    //           >
    //             <div>
    //               <h4
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "bold",
    //                   textAlign: "start",
    //                 }}
    //                 className="m-0"
    //               >
    //                 JUMBO Loans
    //               </h4>
    //               <p className="text-start">
    //                 A jumbo loan is a type of financing that exceeds the limits
    //                 set by the Federal Housing Finance Agency and cannot be
    //                 purchased, guaranteed, or securitized by Fannie Mae or
    //                 Freddie Mac. Homeowners must undergo more rigorous credit
    //                 requirements than those applying for a conventional loan.
    //               </p>
    //             </div>
    //           </MDBCol>
    //           <MDBCol md="4" className="text-center">
    //             <div>
    //               <p className="p-0 m-1">Contact us today to get started</p>
    //               <p className="p-0 m-1">214-396-6450</p>
    //               <p className="p-0 m-1">or</p>
    //               <MDBBtn
    //                 rippleColor="success"
    //                 color="white"
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "600",
    //                   backgroundColor: "white",
    //                   padding: "11px 20px 11px 20px",
    //                   fontSize: "12px",
    //                   border: "2px solid grey",
    //                 }}
    //               >
    //                 Start an Application
    //               </MDBBtn>
    //             </div>
    //           </MDBCol>
    //         </MDBRow>
    //       </Parallax>
    //     </MDBRow>
    //   </MDBContainer>
    // </ParallaxProvider>

    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      navigation
      Parallax={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-end"
                style={{
                  backgroundImage: `url(${img4})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                  paddingRight:'80px'
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "60%",
                    padding: "30px",
                    borderRadius: "15px",
                  }}
                  className="mb-md-5 mb-10"
                >
                  <MDBCol
                    sm="12"
                  >
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className="mb-3"
                      >
                        An Individual Approach
                      </h4>
                      <p className="">
                        At BOE Texas we take a community focused approach,
                        meaning we get to know our customers before suggesting a
                        specific type of loan Loan product. Our goal is to
                        understand your needs so we can match you with the right
                        type of loan.
                      </p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </div>
            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "95%",
                    padding: "30px",
                  }}
                  className="mb-md-5 mb-10"
                >
                  <MDBCol
                    md="8"
                    className="d-flex justify-content-center align-items-end"
                  >
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className="m-0"
                      >
                        Bond Loans
                      </h4>
                      <p className="text-start">
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <div>
                      <p className="p-0 m-1">Contact us today to get started</p>
                      <p className="p-0 m-1">214-396-6450</p>
                      <p className="p-0 m-1">or</p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        style={{
                          color: "black",
                          fontWeight: "600",
                          backgroundColor: "white",
                          padding: "11px 20px 11px 20px",
                          fontSize: "12px",
                          border: "2px solid grey",
                        }}
                      >
                        Start an Application
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </div>

            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "95%",
                    padding: "30px",
                  }}
                  className="mb-md-5 mb-10"
                >
                  <MDBCol
                    md="8"
                    className="d-flex justify-content-center align-items-end"
                  >
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className="m-0"
                      >
                        Bond Loans
                      </h4>
                      <p className="text-start">
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <div>
                      <p className="p-0 m-1">Contact us today to get started</p>
                      <p className="p-0 m-1">214-396-6450</p>
                      <p className="p-0 m-1">or</p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        style={{
                          color: "black",
                          fontWeight: "600",
                          backgroundColor: "white",
                          padding: "11px 20px 11px 20px",
                          fontSize: "12px",
                          border: "2px solid grey",
                        }}
                      >
                        Start an Application
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </div>
            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${img5})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "95%",
                    padding: "30px",
                  }}
                  className="mb-md-5 mb-10"
                >
                  <MDBCol
                    md="8"
                    className="d-flex justify-content-center align-items-end"
                  >
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className="m-0"
                      >
                        Bond Loans
                      </h4>
                      <p className="text-start">
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <div>
                      <p className="p-0 m-1">Contact us today to get started</p>
                      <p className="p-0 m-1">214-396-6450</p>
                      <p className="p-0 m-1">or</p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        style={{
                          color: "black",
                          fontWeight: "600",
                          backgroundColor: "white",
                          padding: "11px 20px 11px 20px",
                          fontSize: "12px",
                          border: "2px solid grey",
                        }}
                      >
                        Start an Application
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </div>
            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${img7})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "95%",
                    padding: "30px",
                  }}
                  className="mb-md-5 mb-10"
                >
                  <MDBCol
                    md="8"
                    className="d-flex justify-content-center align-items-end"
                  >
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className="m-0"
                      >
                        Bond Loans
                      </h4>
                      <p className="text-start">
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <div>
                      <p className="p-0 m-1">Contact us today to get started</p>
                      <p className="p-0 m-1">214-396-6450</p>
                      <p className="p-0 m-1">or</p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        style={{
                          color: "black",
                          fontWeight: "600",
                          backgroundColor: "white",
                          padding: "11px 20px 11px 20px",
                          fontSize: "12px",
                          border: "2px solid grey",
                        }}
                      >
                        Start an Application
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </div>
            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${img6})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "95%",
                    padding: "30px",
                  }}
                  className="mb-md-5 mb-10"
                >
                  <MDBCol
                    md="8"
                    className="d-flex justify-content-center align-items-end"
                  >
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className="m-0"
                      >
                        Bond Loans
                      </h4>
                      <p className="text-start">
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <div>
                      <p className="p-0 m-1">Contact us today to get started</p>
                      <p className="p-0 m-1">214-396-6450</p>
                      <p className="p-0 m-1">or</p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        style={{
                          color: "black",
                          fontWeight: "600",
                          backgroundColor: "white",
                          padding: "11px 20px 11px 20px",
                          fontSize: "12px",
                          border: "2px solid grey",
                        }}
                      >
                        Start an Application
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </div>
            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "95%",
                    padding: "30px",
                  }}
                  className="mb-md-5 mb-10"
                >
                  <MDBCol
                    md="8"
                    className="d-flex justify-content-center align-items-end"
                  >
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className="m-0"
                      >
                        Bond Loans
                      </h4>
                      <p className="text-start">
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <div>
                      <p className="p-0 m-1">Contact us today to get started</p>
                      <p className="p-0 m-1">214-396-6450</p>
                      <p className="p-0 m-1">or</p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        style={{
                          color: "black",
                          fontWeight: "600",
                          backgroundColor: "white",
                          padding: "11px 20px 11px 20px",
                          fontSize: "12px",
                          border: "2px solid grey",
                        }}
                      >
                        Start an Application
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </div>
            {/* <div className="section">
            <LoanProductHero image={img1} description="Random description" name="Conventional"/>
          </div> */}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
