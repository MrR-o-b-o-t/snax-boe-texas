import React, { useState } from "react";
import ross from "../../images/rossR.jpg";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTypography,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function RossR() {
  return (
    <MDBContainer style={{}}>
      <MDBTypography
        variant="h1"
        className="text-center mb-5"
        style={{ fontWeight: "bold", marginTop: "150px" }}
      >
        <h2>Ross Rhodes</h2>
      </MDBTypography>
      <MDBRow>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <MDBCard
            border="primary"
            className="h-100"
            style={{ maxWidth: "44rem" }}
          >
            <MDBCardImage src={ross} alt="David Restrepo" position="top" />
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
            My name is Ross Rhodes. I relocated to Frisco, Texas from Memphis,
            Tennessee years back. I graduated from the University of North
            Texas. My wife and I live in Celina and had our first daughter in
            July of 2021. I am an avid golfer and have been playing ever since I
            could walk! I am obsessed with customer service and look forward to
            helping you purchase or refinance your home!
          </h5>
        </MDBCol>
        <MDBCol className="m-auto text-center">
          <h3>Email Address:</h3>
          <h5 className="mb-4">rrhodes@boemortgage.com</h5>
          <h3>Phone Number:</h3>
          <h5 className="mb-4">(214) 717-3483</h5>
          <h3>Address:</h3>
          <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
