import React, { useState } from "react";
import {
  MDBContainer,
} from "mdb-react-ui-kit";
import FpLpSections from "../components/FpLpSections";

export default function LoanProducts() {
  return (
      <MDBContainer fluid style={{maxWidth:'2000px'}}>
        <FpLpSections />
      </MDBContainer>
  );
}