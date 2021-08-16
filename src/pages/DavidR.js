import React, { useState } from "react";

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

import david from "../images/davidR.jpg";

export default function DavidR() {
  return (
    <MDBContainer style={{}}>
      <MDBTypography
        variant="h1"
        className="text-center mb-5"
        style={{ fontWeight: "bold", marginTop: "150px" }}
      >
        {name}
      </MDBTypography>
      <MDBRow>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <MDBCard
            border="primary"
            className="h-100"
            style={{ maxWidth: "44rem" }}
          >
            <MDBCardImage src={david} alt="David Restrepo" position="top" />
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
                <br/>
                <MDBAnimation
                animation="zoom-in
                "
                start="onLoad"
                duration={1500}
              >
              <MDBBtn className="p-4" style={{ fontWeight:'600', fontSize:"16px", marginTop:'20px' }}>
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
            David was raised in Florida and moved to the beautiful Lone Star
            State in September of 2006. He began his career in finance in the
            year 2005, and worked for Citi Bank, Washington Mutual and Chase
            Bank before joining Bank of England Mortgage as a Sr. Loan officer
            in 2016. His experience in bank management taught him the importance
            of exceptional customer service, and he applies that experience to
            every interaction he has with a client. He loves working with Bank
            of England Mortgage because as a boutique bank, they have great
            lending programs that can be tailored to fit each clients needs. I
            enjoy being part of the process and helping clients get the right
            financing for their homes.
          </h5>
        </MDBCol>
        <MDBCol className="m-auto text-center">
          <h3>Email Address:</h3>
          <h5 className="mb-4">drestrepo@boemortgage.com</h5>
          <h3>Phone Number:</h3>
          <h5 className="mb-4">(214) 483-9206</h5>
          <h3>Address:</h3>
          <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
