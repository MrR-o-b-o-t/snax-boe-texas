import React from "react"
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit"
import equalHousingLending from "../images/equal-housing-lender.png"

export default function App() {
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
                <li>214-396-6450</li>
                <li>infonow@boetexas.com</li>
                <li>17250 Dallas Parkway</li>
                <li>Dallas, TX 75248</li>
              </MDBTypography>
            </div>
          </MDBCol>
          {/* Contact column display for mobile */}
          <MDBCol lg="3" md="12" className="mt-3 mb-md-0 d-lg-none" style={{}}>
            <div className="d-flex align-items-center justify-content-center">
              <MDBTypography listUnStyled className="mb-4 text-center">
                <li>
                  <h5>Contact</h5>
                </li>
                <li>214-396-6450</li>
                <li>infonow@boetexas.com</li>
                <li>17250 Dallas Parkway</li>
                <li>Dallas, TX 75248</li>
              </MDBTypography>
            </div>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-4 mb-md-0 text-center">
            <h5 className="">Resources</h5>
            <MDBTypography listInLine className="mb-0">
              <li className="list-inline-item">Privacy Links</li>
              <li className="list-inline-item">CCPA Policy</li>
              <li className="list-inline-item">Web Analytics Policy</li>
              <li className="list-inline-item">Security</li>
              <li className="list-inline-item">Preventing Identity Theft</li>
              <li className="list-inline-item">USA Patriot Act</li>
            </MDBTypography>
            <h5 className="" style={{ paddingTop: "20px" }}>
              Credit Bereaus
            </h5>
            <MDBTypography listInLine className="mb-0">
              <li className="list-inline-item">Experian</li>
              <li className="list-inline-item">Equifax</li>
              <li className="list-inline-item">TransUnion</li>
            </MDBTypography>
          </MDBCol>
          <MDBCol lg="3">
            <h6 className="text-center">Sign Up For Our Newsletter</h6>
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
      </MDBContainer>
    </MDBFooter>
  )
}
