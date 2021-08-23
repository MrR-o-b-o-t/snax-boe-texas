import React, { useState } from "react";
import chris from "../../images/christopherH.jpg"

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

export default function ChrisH() {

return(
<MDBContainer style={{}}>
<MDBTypography
  variant="h1"
  className="text-center mb-5"
  style={{ fontWeight: "bold", marginTop: "150px" }}
>
  <h2>Christopher Harding</h2>
</MDBTypography>
<MDBRow>
  <MDBCol sm="12" className="d-flex justify-content-center">
    <MDBCard
      border="primary"
      className="h-100"
      style={{ maxWidth: "44rem" }}
    >
      <MDBCardImage src={chris} alt="David Restrepo" position="top" />
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
    <h5>Chris was born in West Texas growing up in the oil and gas industry and on the lakes out west spending time with his family. While attending college he found a love for helping families find the boat that was right for them to create their own family memories and he spent 20 years making their dreams come true. Chris recently, after 20 years in the boating industry, changed careers with a new passion for helping home buyers live their dream of owning a home for their families to grow in and make memories. Chris is married with 3 sons, 2 of which play college baseball and the 3rd in middle school, and 2 German Shepherds. Chris enjoys his time away from helping families find their dream home running with his dogs, watching all 3 of his sons play baseball, traveling and being on the lake.</h5>
  </MDBCol>
  <MDBCol className="m-auto text-center">
    <h3>Email Address:</h3>
    <h5 className="mb-4">charding@boemortgage.com</h5>
    <h3>Phone Number:</h3>
    <h5 className="mb-4">(972) 433-0122</h5>
    <h3>Address:</h3>
    <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
  </MDBCol>
</MDBRow>
</MDBContainer>
)}