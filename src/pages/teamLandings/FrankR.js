import React, { useState } from "react";
import frank from "../../images/frankR.jpg";

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

export default function FrankR() {

  return(
  <MDBContainer style={{}}>
    <MDBTypography
      variant="h1"
      className="text-center mb-5"
      style={{ fontWeight: "bold", marginTop: "150px" }}
    >
      <h2>Frank Rubalcava lll</h2>
    </MDBTypography>
    <MDBRow>
      <MDBCol sm="12" className="d-flex justify-content-center">
        <MDBCard
          border="primary"
          className="h-100"
          style={{ maxWidth: "44rem" }}
        >
          <MDBCardImage src={frank} alt="David Restrepo" position="top" />
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
          My career in the mortgage business began in 2002. I started as a
          business development manager for a local Loan Officer and saw
          first-hand the importance of making home buyers dreams come true. This
          lead me to start originating loans and I never looked back! I believe
          a mortgage should be about building relationships, and helping my
          customers achieve their home financing goals, not just a transaction.
          I specialize in FHA loans as well as first time home buyers, but I can
          help all borrowers with all type of loans. I have an extensive
          background assisting first time homebuyers and self-employed borrowers
          and a great deal of experience in: Conventional loans, FHA -
          Government lending, Investment property lending, Non-conventional
          Jumbo lending, Down Payment Assistance programs, Credit Expert
        </h5>
      </MDBCol>
      <MDBCol className="m-auto text-center">
        <h3>Email Address:</h3>
        <h5 className="mb-4">frubalcava@boemortgage.com</h5>
        <h3>Phone Number:</h3>
        <h5 className="mb-4">(956) 704-3400</h5>
        <h3>Address:</h3>
        <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  )}
