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

import abigail from "../images/abigailD.jpg";
import ariel from "../images/arielC.jpg";
import ashley from "../images/ashleyC.jpg";
import chris from "../images/christopherH.jpg";
import david from "../images/davidR.jpg";
import deborah from "../images/deborahB.jpg";
import erin from "../images/erinW.jpg";
import frank from "../images/frankR.jpg";
import jeff from "../images/jeffreyM.jpg";
import jeron from "../images/jeronA.jpg";
import keri from "../images/keriG.jpg";
import marcus from "../images/marcusL.jpg";
import meghan from "../images/meghanS.jpg";
import ross from "../images/rossR.jpg";
import ryan from "../images/ryanR.jpg";
import shawn from "../images/shawnF.jpg";

import { teamData } from "../teamData";

export default function DavidR() {

    let bio1 = "";
    let phone1 = "";
    let email1 = "";
    let photo1;

  console.log(localStorage.getItem('tm')) || "Not available";
  const name = localStorage.getItem("tm");

  {
    teamData.map((data) => {
      console.log(data.name);
      if (data.name === localStorage.getItem("tm")) {
        return(
            phone1 = data.phone,
            bio1 = data.bio,
            email1 = data.email,
            photo1 = data.photo
        )
      }
    });
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
            <MDBCardImage src={photo1} alt="David Restrepo" position="top" />
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
  );
}
