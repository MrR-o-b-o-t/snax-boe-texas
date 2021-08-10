import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import house from "../images/Bank-of-England-House-Illustration.png";

export default function Media() {
  return (
    <MDBContainer fluid style={{ maxWidth: "2000px", marginTop: "100px" }}>
      <MDBContainer
        fluid
        style={{ backgroundColor: "#4e4e4e" }}
      >
        <MDBRow
          className="d-flex justify-content-center align-items-center p-5"
          style={{ color: "white" }}
        >
          <MDBCol sm="5">
            <h1 style={{ fontWeight: "bold" }}>
              Media
            </h1>
            <p>
              Browse our media collection & get to know your BOE staff.
            </p>
          </MDBCol>
          <MDBCol sm="5" className="text-center">
            <img src={house} class="img-fluid" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
          </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
