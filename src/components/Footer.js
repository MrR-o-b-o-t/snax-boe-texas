import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBInput,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import equalHousingLending from "../images/boeLogo.png";

export default function App() {
  const [state, handleSubmit] = useForm("mayabzlv");
  if (state.succeeded) {
    return (
      <MDBFooter
        backgroundColor="light"
        className="mt-5"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          paddingTop: "20px",
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
                    <a id="footer__contact__section" href="tel:+12143966450">
                      214-396-6450
                    </a>
                  </li>
                  <li>
                    <a
                      id="footer__contact__section"
                      href="mailto:InfoNow@boemortgage.com"
                    >
                      InfoNow@boemortgage.com
                    </a>
                  </li>
                  <a
                    id="footer__contact__section"
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
            >
              <div className="d-flex align-items-center justify-content-center">
                <MDBTypography
                  listUnStyled
                  className="mb-0 text-center"
                  id="footer-contact-div"
                >
                  <li>
                    <h5>Contact</h5>
                  </li>
                  <li>
                    <a id="footer__contact__section" href="tel:+12143966450">
                      214-396-6450
                    </a>
                  </li>
                  <li>
                    <a
                      id="footer__contact__section"
                      href="mailto:InfoNow@Bboemortgage.com"
                    >
                      InfoNow@boemortgage.com
                    </a>
                  </li>
                  <a
                    id="footer__contact__section"
                    href="https://g.page/BOETEXAS?share"
                    target="_blank"
                  >
                    <li>17250 Dallas Parkway</li>
                    <li>Dallas, TX 75248</li>
                  </a>
                </MDBTypography>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-4 mt-3 mb-md-0 text-center">
              <h5 className="">Resources</h5>
              <MDBTypography listInLine className="mb-0">
                <li className="list-inline-item">
                  <a href="/PrivacyPolicy">Privacy Links</a>
                </li>
                <li className="list-inline-item">
                  <a href="/Ccpa">CCPA Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="/Policies/#web__policy">Web Analytics Policy</a>
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
                  <a href="/Policies/#patriot__act">USA Patriot Act</a>
                </li>
                <li className="list-inline-item">
                  <a href="https://continentalcredit.com/" target="_blank">
                    Credit Counciling
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.nmlsconsumeraccess.org/" target="_blank">
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
                  <a href="https://www.equifax.com/personal/" target="_blank">
                    Equifax
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.transunion.com/" target="_blank">
                    TransUnion
                  </a>
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol lg="3" className="sm-mt-3 lg-3 mt-lg-5 mt-md-4">
              <h6 className="text-center">Thanks for joining!</h6>
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
                style={{ width: "90px", height: "95px", marginBottom: "15px" }}
              />
            </MDBCol>
            <MDBCol md="9">
              <p>
                Bank of England Mortgage has tried to provide accurate and
                timely information; however, the content of this site may not be
                accurate, complete or current and may include technical
                inaccuracies or typographical errors. From time to time changes
                may be made to the content of this site without notice. Bank of
                England Mortgage may change the products, services, and any
                other information described on this site at any time. The
                information published on this site is provided as a convenience
                to visitors and is for informational purposes only. You should
                verify all information before relying on it and decisions based
                on information contained in our site are your sole
                responsibility. If you are an individual with disabilities who
                needs accommodation, or you are having difficulty using our
                website to apply for a loan, please contact us at (214)
                396-6450. This contact information is for accommodation requests
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
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Bank of England
                </a>{" "}
                and is not affiliated with any government agency. NMLS 418481. {" "}
                <a
                  href="https://research.fdic.gov/bankfind/detail.html?bank=13303&name=Bank+of+England&tabId=3&searchName=Bank+of+England"
                  target="_blank"
                  style={{ color: "white", textDecoration: "underline" }}
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
                © 2021 Bank of England Mortgage Marketing. All Rights Reserved.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    );
  }
  return (
    <MDBFooter
      backgroundColor="light"
      className="mt-5"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        paddingTop: "20px",
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
                  <a id="footer__contact__section" href="tel:+12143966450">
                    214-396-6450
                  </a>
                </li>
                <li>
                  <a
                    id="footer__contact__section"
                    href="mailto:InfoNow@boemortgage.com"
                  >
                    InfoNow@boemortgage.com
                  </a>
                </li>
                <a
                  id="footer__contact__section"
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
          <MDBCol lg="3" md="12" className="mt-3 mb-md-0 d-lg-none" style={{}}>
            <div className="d-flex align-items-center justify-content-center">
              <MDBTypography
                listUnStyled
                className="mb-0 text-center"
                id="footer-contact-div"
              >
                <li>
                  <h5>Contact</h5>
                </li>
                <li>
                  <a id="footer__contact__section" href="tel:+12143966450">
                    214-396-6450
                  </a>
                </li>
                <li>
                  <a
                    id="footer__contact__section"
                    href="mailto:InfoNow@boemortgage.com"
                  >
                    InfoNow@boemortgage.com
                  </a>
                </li>
                <a
                  id="footer__contact__section"
                  href="https://g.page/BOETEXAS?share"
                  target="_blank"
                >
                  <li>17250 Dallas Parkway</li>
                  <li>Dallas, TX 75248</li>
                </a>
              </MDBTypography>
            </div>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-4 mt-3 mb-md-0 text-center">
            <h5 className="">Resources</h5>
            <MDBTypography listInLine className="mb-0">
              <li className="list-inline-item">
                <a href="/PrivacyPolicy">Privacy Links |</a>
              </li>
              <li className="list-inline-item">
                <a href="/Ccpa">CCPA Policy |</a>
              </li>
              <li className="list-inline-item">
                <a href="/Policies/#web__policy">Web Analytics Policy |</a>
              </li>
              <li className="list-inline-item">
                <a href="/Policies/#security">Security</a>
              </li>
              <li className="list-inline-item">
                <a href="/Policies/#identity__theft">
                  Preventing Identity Theft |
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/Policies/#patriot__act">USA Patriot Act |</a>
              </li>
              <li className="list-inline-item">
                <a href="https://continentalcredit.com/" target="_blank">
                  Credit Counciling |
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.nmlsconsumeraccess.org/" target="_blank">
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
                  Experian |
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.equifax.com/personal/" target="_blank">
                  Equifax |
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.transunion.com/" target="_blank">
                  TransUnion
                </a>
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol lg="3" className="sm-mt-3 lg-3 mt-lg-5 mt-md-4">
            {/* <form onSubmit={handleSubmit}>
              <h6 className="text-center">Sign Up For Our Newsletter</h6>
              <div className="d-flex align-items-center justify-content-center">
                <input
                  id="email"
                  type="email"
                  name="email"
                  label="Email address"
                  style={{
                    width: "150px",
                    maxHeight: "30px",
                    marginTop: "25px",
                  }}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <MDBBtn
                  floating
                  tag="a"
                  className="mx-2"
                  style={{ backgroundColor: "#215732" }}
                  type="submit"
                  disabled={state.submitting}
                >
                  <MDBIcon far icon="check-circle" fa-3x />
                </MDBBtn>
              </div>
            </form> */}
            <h6 className="text-center" style={{ fontWeight: "bold" }}>
              Sign Up For Our Newsletter
            </h6>
            <form
              onSubmit={handleSubmit}
              className="d-flex align-items-center justify-content-center"
            >
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                style={{
                  width: "150px",
                  borderRadius: "8px",
                  height: "45px",
                  boxShadow:
                    "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <div className="text-center">
                <MDBBtn
                  color="primary"
                  size="lg"
                  className="mb-4"
                  style={{
                    backgroundColor: "rgb(33, 87, 50)",
                    marginLeft: "10px",
                  }}
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </MDBBtn>
              </div>
            </form>
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
              style={{ width: "90px", height: "95px", marginBottom: "15px" }}
            />
          </MDBCol>
          <MDBCol md="9">
            <p>
              Bank of England Mortgage has tried to provide accurate and timely
              information; however, the content of this site may not be
              accurate, complete or current and may include technical
              inaccuracies or typographical errors. From time to time changes
              may be made to the content of this site without notice. Bank of
              England Mortgage may change the products, services, and any other
              information described on this site at any time. The information
              published on this site is provided as a convenience to visitors
              and is for informational purposes only. You should verify all
              information before relying on it and decisions based on
              information contained in our site are your sole responsibility. If
              you are an individual with disabilities who needs accommodation,
              or you are having difficulty using our website to apply for a
              loan, please contact us at (214) 396-6450. This contact
              information is for accommodation requests only.
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
                style={{ color: "white", textDecoration: "underline" }}
              >
                Bank of England
              </a>{" "}
              and is not affiliated with any government agency. NMLS 418481. {" "}
              <a
                href="https://research.fdic.gov/bankfind/detail.html?bank=13303&name=Bank+of+England&tabId=3&searchName=Bank+of+England"
                target="_blank"
                style={{ color: "white", textDecoration: "underline" }}
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
              © 2021 Bank of England Mortgage Marketing. All Rights Reserved.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
