import React, { useState } from "react";
import shawn from "../../images/shawnF.jpg";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTypography,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function ShawnF() {
  return (
    <MDBContainer style={{}}>
      <MDBTypography
        variant="h1"
        className="text-center mb-5"
        style={{ fontWeight: "bold", marginTop: "150px" }}
      >
        <h2>Shawn Fehily</h2>
      </MDBTypography>
      <MDBRow>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <MDBCard
            border="primary"
            className="h-100"
            style={{ maxWidth: "44rem" }}
          >
            <MDBCardImage src={shawn} alt="David Restrepo" position="top" />
            <MDBCardBody className="text-center">
              <MDBCardText>
                <MDBBtn
                  className="m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn
                  className="m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>
                <MDBBtn
                  className="m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="#"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
                <br />
                <MDBAnimation
                  animation="zoom-in
          "
                  start="onLoad"
                  duration={1500}
                >
                  <MDBBtn
                    id="s__btn"
                    color="secondary"
                    className="p-4"
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      marginTop: "20px",
                    }}
                  >
                    Schedule Appointment
                  </MDBBtn>
                </MDBAnimation>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-5">
        <MDBCol>
          <h2 className="text-center mb-3">Biography</h2>
          <hr />
          <h5>
            Shawn was born near Philadelphia and moved to the DFW area at age 5
            with his family. At Marcus High School, Shawn played football on the
            5A Texas State Championship team, graduating with honors in 1998.
            Having applied to only one college, Penn State, and being
            immediately accepted, Shawn called the dean and asked for a
            deferment of 1 year in order to work and study in Germany where he
            became fluent in the German language. During his summers at Penn
            State, he interned in the mortgage industry, which laid the
            foundation for his wealth of knowledge in the mortgage world. Upon
            graduation from Penn State, he accepted a full time position as a
            loan officer. Now a Branch Manager Loan specialist, Shawn has almost
            20 years of high level corporate experience in the home loan
            industry. He has closed over 250 Million dollars in self-generated
            loan volume. Shawn loves to enjoy life with his wife, son, dogs, as
            well as playing an active role in the community. His hobbies include
            traveling, cooking, and hitting the golf course! Please see
            www.ShawnFehily.com for more info
          </h5>
        </MDBCol>
        <MDBCol className="m-auto text-center">
          <h3>Email Address:</h3>
          <h5 className="mb-4">sfehily@boemortgage.com</h5>
          <h3>Phone Number:</h3>
          <h5 className="mb-4">(469) 737-5733</h5>
          <h3>Address:</h3>
          <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
