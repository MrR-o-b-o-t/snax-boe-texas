import React, { useState } from "react";
import jeRon from "../../images/jeronA.jpg";

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

export default function JeRonA() {

  return(
  <MDBContainer style={{}}>
    <MDBTypography
      variant="h1"
      className="text-center mb-5"
      style={{ fontWeight: "bold", marginTop: "150px" }}
    >
      <h2>Jeron Allen</h2>
    </MDBTypography>
    <MDBRow>
      <MDBCol sm="12" className="d-flex justify-content-center">
        <MDBCard
          border="primary"
          className="h-100"
          style={{ maxWidth: "44rem" }}
        >
          <MDBCardImage src={jeRon} alt="David Restrepo" position="top" />
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
          In my 15 years of experience I take pride in helping homeowners
          accomplish their mortgage goals. Whether it is purchasing, refinancing
          rate/term or getting cash back. Over the years Ive learned that each
          and every client current situation and the goals they are looking to
          accomplish is different. I stand on customer service and feel each and
          every client I come across deserves to feel that they can fully trust
          and believe that I will deliver.
        </h5>
      </MDBCol>
      <MDBCol className="m-auto text-center">
        <h3>Email Address:</h3>
        <h5 className="mb-4">jeronallen@boemortgage.com</h5>
        <h3>Phone Number:</h3>
        <h5 className="mb-4">(214) 483-9209</h5>
        <h3>Address:</h3>
        <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  )}
