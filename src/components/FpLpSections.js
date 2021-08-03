import React, { useState } from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ReactFullpage from "@fullpage/react-fullpage";

import img1 from "../images/Bank-of-England-Customer.jpg";
import img2 from "../images/lp-2.jpg";
import img3 from "../images/lp-3.jpg";
import img4 from "../images/lp-4.jpg";
import img5 from "../images/lp-5.jpg";
import img6 from "../images/lp-6.jpg";
import img7 from "../images/lp-7.jpg";

export default function FpLpSections() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      responsiveWidth={490}
      responsiveSlides={true}
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper
          >
            <div className="section">
              <MDBRow
                className="d-flex align-items-end justify-content-end"
                style={{
                  backgroundImage: `url(${img4})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                  paddingRight: "80px",
                }}
              >
                <MDBRow
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .75)",
                    width: "85%",
                    padding: "30px",
                    borderRadius: "15px",
                    marginBottom: "",
                  }}
                  className="mb-4"
                >
                  <MDBCol sm="12">
                    <div>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                        className=""
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
