import React, { useState } from "react"

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
} from "mdb-react-ui-kit"

import { teamData } from "../teamData";

export default function TeamBio() {

    let bio1 = "";
    let phone1 = "";
    let email1 = "";
    let photo1;
    const name = localStorage.getItem("tm");

  {
    teamData.map((data) => {
      if (data.name === localStorage.getItem("tm")) {
        return (
          (phone1 = data.phone),
          (bio1 = data.bio),
          (email1 = data.email),
          (photo1 = data.photo)
        )
      }
    })
  }

  return (
    <MDBContainer style={{}}>
      <MDBTypography
        variant="h1"
        className="text-center mb-5"
        style={{ fontWeight: "bold", marginTop: "150px" }}
      >
        <h2>{name}</h2>
      </MDBTypography>
      <MDBRow>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <MDBCard
            border="primary"
            className="h-100"
            style={{ maxWidth: "44rem" }}
          >
            <MDBCardImage src={photo1} alt="Team Members" position="top" />
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
          <h5>{bio1}</h5>
        </MDBCol>
        <MDBCol className="m-auto text-center">
          <h3>Email Address:</h3>
          <h5 className="mb-4">{email1}</h5>
          <h3>Phone Number:</h3>
          <h5 className="mb-4">{phone1}</h5>
          <h3>Address:</h3>
          <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
