import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Calculators() {
  return (
    <MDBContainer
      style={{ backgroundColor: "#4e4e4e" }}
      fluid
      className="mt-5 mb-5"
    >
      <MDBRow
        className="d-flex justify-content-center align-items-center p-5"
        style={{ color: "white" }}
      >
        <MDBCol md="4">
          <h1 style={{ fontWeight: "bold" }}>Curious About The Numbers?</h1>
          <p>
            Use one of our calculators to estimate a mortgage payment, loan
            affordability or compare the cost of renting vs. buying.
          </p>
        </MDBCol>
        <MDBCol md="5" className="" >
            <MDBRow>
            <MDBCol md="12" className="text-center m-2">
        <MDBBtn
            rippleColor="success"
            color="white"
            style={{
              color: "black",
              fontWeight: "600",
              backgroundColor: "white",
              padding: "15px 20px 15px 20px",
              fontSize: "14px",
              minWidth:"220px"
            }}
          >
            Mortgage Payment
          </MDBBtn>
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="12" className="text-center m-2">
          <MDBBtn
            rippleColor="success"
            color="white"
            style={{
              color: "black",
              fontWeight: "600",
              backgroundColor: "white",
              padding: "15px 20px 15px 20px",
              fontSize: "14px",
              minWidth:"220px"
            }}
          >
            Loan Affordability
          </MDBBtn>
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="12" className="text-center m-2">
          <MDBBtn
            rippleColor="success"
            color="white"
            style={{
              color: "black",
              fontWeight: "600",
              backgroundColor: "white",
              padding: "15px 20px 15px 20px",
              fontSize: "14px",
              minWidth:"220px"
            }}
          >
            Rent vs Buy
          </MDBBtn>
          </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
