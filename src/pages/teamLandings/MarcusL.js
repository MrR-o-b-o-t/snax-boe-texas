import React, { useState } from "react";
import marcus from "../../images/marcusL.jpg";

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

export default function MarcusL() {
  return (
    <MDBContainer style={{}}>
      <MDBTypography
        variant="h1"
        className="text-center mb-5"
        style={{ fontWeight: "bold", marginTop: "150px" }}
      >
        <h2>Marcus Lepp</h2>
      </MDBTypography>
      <MDBRow>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <MDBCard
            border="primary"
            className="h-100"
            style={{ maxWidth: "44rem" }}
          >
            <MDBCardImage src={marcus} alt="David Restrepo" position="top" />
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
            In July of 2004 1 year after graduating from The University of North
            Texas with a degree in Applied Economics, I started as a Loan
            Officer Assistant. 1 month later I became Loan Officer and quickly
            became one of the top producers inthe company. After 2 years I was
            given the opportunity to run my own branch, and have since
            successfully navigated through the ups and downs of the mortgage
            industry. In November of 2016 our team joined Bank of England
            Mortgage. From the start I knew that we had finally found a place to
            call home! I believe that the difference between one lender to the
            next is NOT the company, interest rate, or closing costs. We all
            borrower from the same billionaires. The difference is the level of
            commitment to our clients, attention to detail, and the speed that
            we can get your loan ready for closing. Choosing the right lender is
            vital to having a great experience during the loan process and our
            commitment to our clients is our companys most important principal.
            We don't want to earn your business on only one mortgage
            transaction. We want to earn your business on ALL of your mortgage
            transactions now and in the future. Contact us today if you or
            anybody you know is interested in purchasing or refinancing a home.
            If youre interestedin coming to work for an excellent company and
            wanting to partner with a reliable FDIC member bank that lends in
            all 50 states, please contact me directly at; (214) 483 9201 or
            email: mlepp@boemortgage.com
          </h5>
        </MDBCol>
        <MDBCol className="m-auto text-center">
          <h3>Email Address:</h3>
          <h5 className="mb-4">mlepp@boemortgage.com</h5>
          <h3>Phone Number:</h3>
          <h5 className="mb-4">(214) 483-9201</h5>
          <h3>Address:</h3>
          <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
