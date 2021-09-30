import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import MpcModal from "../components/MpcModal";
import LacModal from "../components/LacModal";

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
        <MDBCol md="12" className="text-center">
          <h1 style={{ fontWeight: "bold" }}>Curious About The Numbers?</h1>
          <h6 className="mb-4">
            Call us today and talk to one of our team members about your
            potential loan.
          </h6>
          <MDBBtn href="tel:+12143966450" id="s__btn" className="p-3">
            214-396-6450
          </MDBBtn>
        </MDBCol>
        <MDBCol className="text-center mt-3">
          <LacModal />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
