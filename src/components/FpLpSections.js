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
      scrollingSpeed={1000}
      responsiveWidth={490}
      responsiveSlides={true}
      navigation
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
                      <h3
                        style={{
                          color: "black",
                          fontWeight: "600",
                          textAlign: "start",
                        }}
                        className=""
                      >
                        An Individual Approach
                      </h3>
                      <p className="pt-2" style={{fontSize:"18px", fontWeight:'600'}}>
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
                        Conventional
                      </h4>
                      <p className="text-start pt-2" style={{fontSize:"18px", fontWeight:'600'}}>
                        A conventional mortgage or conventional loan is a home
                        buyers loan that is not offered or secured by a
                        government entity. It is available through or guaranteed
                        by a private lender or the two government sponsored
                        enterprises - Fannie Mae and Freddie Mac.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto">
                    <div>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>Contact us today to get started</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>214-396-6450</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>or</p>
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
                        FHA
                      </h4>
                      <p className="text-start pt-2" style={{fontSize:"18px", fontWeight:'600'}}>
                        A Federal Housing Administration (FHA) loan is a
                        mortgage that is insured by the Federal Housing
                        Administration and issued by an FHA-aprroved lender. FHA
                        loans are designed for middle-income borrowers; they
                        require a lower minimum down payment and lower credit
                        scores than many conventional loans.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto">
                    <div>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>Contact us today to get started</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>214-396-6450</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>or</p>
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
                        VA
                      </h4>
                      <p className="text-start pt-2" style={{fontSize:"18px", fontWeight:'600'}}>
                        A VA loan is a mortgage loan available through a program
                        established by the United States Department of Veterans
                        Affairs. The VA sets the qualifying standars, dictates,
                        and terms of the mortgages offered, and guarantees a
                        portion of the loan, but doesn't actually offer the
                        financing.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto">
                    <div>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>Contact us today to get started</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>214-396-6450</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>or</p>
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
                        USDA
                      </h4>
                      <p className="text-start pt-2" style={{fontSize:"18px", fontWeight:'600'}}>
                        USDA home loans open up the dream of owning a home to
                        people in pow-polulation areas who otherwise could not
                        afford it. If you live in a place with a population of
                        less than 35,000 and you can't qualify for a
                        conventional loan, you may qualify for a USDA guaranteed
                        loan or a USDA direct loan.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto">
                    <div>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>Contact us today to get started</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>214-396-6450</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>or</p>
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
                      <p className="text-start pt-2" style={{fontSize:"18px", fontWeight:'600'}}>
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto">
                    <div>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>Contact us today to get started</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>214-396-6450</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>or</p>
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
                          paddingBottom: '10px'
                        }}
                        className="m-0"
                      >
                        Jumbo
                      </h4>
                      <p className="text-start pt-2" style={{fontSize:"18px", fontWeight:'600'}}>
                        A jumbo loan is a type of financing that exceeds the
                        limits set by the Federal Housing Finance Agency and
                        cannot be purchased, guaranteed, or securitized by
                        Fannie Mae or Freddie Mac. Homeowners must undergo more
                        rigorous credit requirements than those applying for a
                        conventional loan.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto">
                    <div>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>Contact us today to get started</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>214-396-6450</p>
                      <p className="p-0 m-1" style={{fontSize:"16px", fontWeight:'600'}}>or</p>
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
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
