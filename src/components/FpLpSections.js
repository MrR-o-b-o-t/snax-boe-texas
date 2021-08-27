import React, { useState } from "react"
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTypography,
  MDBInput,
  MDBIcon,
  MDBFooter,
} from "mdb-react-ui-kit"
import ReactFullpage from "@fullpage/react-fullpage"
import equalHousingLending from "../images/boeLogo.png"

import img1 from "../images/Bank-of-England-Customer.jpg"
import img2 from "../images/lp-2.jpg"
import img3 from "../images/lp-3.jpg"
import img4 from "../images/lp-4.jpg"
import img5 from "../images/lp-5.jpg"
import img6 from "../images/lp-6.jpg"
import img7 from "../images/lp-7.jpg"

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
                      <p
                        className="pt-2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
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
                      <p
                        className="text-start pt-2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        A conventional mortgage or conventional loan is a home
                        buyers loan that is not offered or secured by a
                        government entity. It is available through or guaranteed
                        by a private lender or the two government sponsored
                        enterprises - Fannie Mae and Freddie Mac.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto" id="lpAnchor">
                    <div>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        Contact us today to get started
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        <a href="tel:+12143966450">214-396-6450</a>
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        or
                      </p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        target="_blank"
                        href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
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
                    id="lpAnchor"
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
                      <p
                        className="text-start pt-2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        A Federal Housing Administration (FHA) loan is a
                        mortgage that is insured by the Federal Housing
                        Administration and issued by an FHA-aprroved lender. FHA
                        loans are designed for middle-income borrowers; they
                        require a lower minimum down payment and lower credit
                        scores than many conventional loans.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto" id="lpAnchor">
                    <div>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        Contact us today to get started
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <a href="tel:+12143966450">214-396-6450</a>
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        or
                      </p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        target="_blank"
                        href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
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
                      <p
                        className="text-start pt-2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        A VA loan is a mortgage loan available through a program
                        established by the United States Department of Veterans
                        Affairs. The VA sets the qualifying standars, dictates,
                        and terms of the mortgages offered, and guarantees a
                        portion of the loan, but doesn't actually offer the
                        financing.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto" id="lpAnchor">
                    <div>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        Contact us today to get started
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <a href="tel:+12143966450">214-396-6450</a>
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        or
                      </p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        target="_blank"
                        href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
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
                      <p
                        className="text-start pt-2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        USDA home loans open up the dream of owning a home to
                        people in pow-polulation areas who otherwise could not
                        afford it. If you live in a place with a population of
                        less than 35,000 and you can't qualify for a
                        conventional loan, you may qualify for a USDA guaranteed
                        loan or a USDA direct loan.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto" id="lpAnchor">
                    <div>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        Contact us today to get started
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <a href="tel:+12143966450">214-396-6450</a>
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        or
                      </p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        target="_blank"
                        href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
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
                      <p
                        className="text-start pt-2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        A mortgage revenue bond (MRB) is a type of municipal
                        bond that is issues by local housing authorities to
                        finance mortgages for qualified, usually people whose
                        self-reported incomes were in the lowest income bracket,
                        first-time home buyers.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto" id="lpAnchor">
                    <div>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        Contact us today to get started
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <a href="tel:+12143966450">214-396-6450</a>
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        or
                      </p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        target="_blank"
                        href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
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
                          paddingBottom: "10px",
                        }}
                        className="m-0"
                      >
                        Jumbo
                      </h4>
                      <p
                        className="text-start pt-2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        A jumbo loan is a type of financing that exceeds the
                        limits set by the Federal Housing Finance Agency and
                        cannot be purchased, guaranteed, or securitized by
                        Fannie Mae or Freddie Mac. Homeowners must undergo more
                        rigorous credit requirements than those applying for a
                        conventional loan.
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" className="text-center m-auto" id="lpAnchor">
                    <div>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        Contact us today to get started
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <a href="tel:+12143966450">214-396-6450</a>
                      </p>
                      <p
                        className="p-0 m-1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        or
                      </p>
                      <MDBBtn
                        rippleColor="success"
                        color="white"
                        target="_blank"
                        href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
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
                style={{
                  backgroundImage: `url(${img6})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <MDBFooter
                  backgroundColor="light"
                  className="mt-5"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    paddingTop: "20px",
                    position: "fixed",
                    bottom: "0",
                    backgroundColor: "white",
                    marginLeft: "10px",
                  }}
                >
                  <MDBContainer className="" fluid>
                    <MDBRow>
                      {/* Contact display for desktop */}
                      <MDBCol
                        lg="3"
                        md="12"
                        className="mb-4 mb-md-0 d-none d-lg-block"
                        style={{}}
                        id="lpAnchor"
                      >
                        <div className="d-flex align-items-center justify-content-center">
                          <MDBTypography
                            listUnStyled
                            className="mb-0"
                            id="footer-contact-div"
                          >
                            <li>
                              <h5>Contact</h5>
                            </li>
                            <li>
                              <a href="tel:+12143966450">214-396-6450</a>
                            </li>
                            <li>
                              <a href="mailto:name@email.com">
                                InfoNow@boetexas.com
                              </a>
                            </li>
                            <a
                              href="https://g.page/BOETEXAS?share"
                              target="_blank"
                            >
                              <li>17250 Dallas Parkway</li>
                              <li>Dallas, TX 75248</li>
                            </a>
                          </MDBTypography>
                        </div>
                      </MDBCol>
                      {/* Contact column display for mobile */}
                      <MDBCol
                        lg="3"
                        md="12"
                        className="mt-3 mb-md-0 d-lg-none"
                        style={{}}
                        id="lpAnchor"
                      >
                        <div className="d-flex align-items-center justify-content-center">
                          <MDBTypography
                            listUnStyled
                            className="mb-4 text-center"
                          >
                            <li>
                              <h5>Contact</h5>
                            </li>
                            <li>
                              {" "}
                              <a href="tel:+12143966450">214-396-6450</a>
                            </li>
                            <li>infonow@boetexas.com</li>
                            <li>17250 Dallas Parkway</li>
                            <li>Dallas, TX 75248</li>
                          </MDBTypography>
                        </div>
                      </MDBCol>

                      <MDBCol
                        lg="6"
                        md="12"
                        className="mb-4 mb-md-0 text-center"
                      >
                        <h5 className="">Resources</h5>
                        <MDBTypography listInLine className="mb-0">
                          <li className="list-inline-item">
                            <a href="/PrivacyPolicy">Privacy Links</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/Ccpa">CCPA Policy</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/Policies/#web__policy">
                              Web Analytics Policy
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/Policies/#security">Security</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/Policies/#identity__theft">
                              Preventing Identity Theft
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="/Policies/#patriot__act">
                              USA Patriot Act
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://continentalcredit.com/"
                              target="_blank"
                            >
                              Credit Counciling
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://www.nmlsconsumeraccess.org/"
                              target="_blank"
                            >
                              NMLS Identifier
                            </a>
                          </li>
                        </MDBTypography>
                        <h5 className="" style={{ paddingTop: "20px" }}>
                          Credit Bereaus
                        </h5>
                        <MDBTypography listInLine className="mb-0">
                          <li className="list-inline-item">
                            <a href="https://www.experian.com/" target="_blank">
                              Experian
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://www.equifax.com/personal/"
                              target="_blank"
                            >
                              Equifax
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="https://www.transunion.com/"
                              target="_blank"
                            >
                              TransUnion
                            </a>
                          </li>
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol lg="3">
                        <h6 className="text-center">
                          Sign Up For Our Newsletter
                        </h6>
                        <div className="d-flex align-items-center justify-content-center">
                          <MDBInput
                            type="text"
                            id="form5Example2"
                            label="Email address"
                            style={{ width: "150px" }}
                          />
                          <MDBIcon
                            far
                            size="2x"
                            icon="check-circle"
                            className="m-2"
                            style={{ color: "#215732" }}
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow
                      className="mt-3"
                      style={{
                        backgroundColor: "#4e4e4e",
                        color: "white",
                        paddingTop: "20px",
                      }}
                    >
                      <MDBCol
                        md="2"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <img
                          src={equalHousingLending}
                          style={{
                            width: "90px",
                            height: "95px",
                            marginBottom: "15px",
                          }}
                        />
                      </MDBCol>
                      <MDBCol md="9">
                        <p>
                          Bank of England Mortgage has tried to provide accurate
                          and timely information; however, the content of this
                          site may not be accurate, complete or current and may
                          include technical inaccuracies or typographical
                          errors. From time to time changes may be made to the
                          content of this site without notice. Bank of England
                          Mortgage may change the products, services, and any
                          other information described on this site at any time.
                          The information published on this site is provided as
                          a convenience to visitors and is for informational
                          purposes only. You should verify all information
                          before relying on it and decisions based on
                          information contained in our site are your sole
                          responsibility. If you are an individual with
                          disabilities who needs accommodation, or you are
                          having difficulty using our website to apply for a
                          loan, please contact us at (214) 396-6450. This
                          contact information is for accommodation requests
                          only.
                        </p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow
                      className=""
                      style={{
                        backgroundColor: "#4e4e4e",
                        color: "white",
                        paddingTop: "20px",
                      }}
                    >
                      <MDBCol
                        md="12"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <p>
                          Bank of England Mortgage is a division of 
                          <a
                            href="http://www.bankofengland-ar.com/"
                            target="_blank"
                            style={{
                              color: "white",
                              textDecoration: "underline",
                            }}
                          >
                            Bank of England
                          </a>{" "}
                          and is not affiliated with any government agency. NMLS
                          418481. {" "}
                          <a
                            href="https://research.fdic.gov/bankfind/detail.html?bank=13303&name=Bank+of+England&tabId=3&searchName=Bank+of+England"
                            target="_blank"
                            style={{
                              color: "white",
                              textDecoration: "underline",
                            }}
                          >
                            Member FDIC
                          </a>
                          .
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="12"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <p>
                          © 2021 Bank of England Mortgage Marketing. All Rights
                          Reserved.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBFooter>
              </MDBRow>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
