import React, { useState } from "react";
import {
  MDBContainer,
} from "mdb-react-ui-kit";
import FpLpSections from "../components/FpLpSections";
import LpParallaxSection from "../components/LpParallaxSection";

export default function LoanProducts() {
  return (
    <>
      {/* <MDBContainer fluid className="d-lg-none d-md-block d-sm-block">
        <LpParallaxSection/>
      </MDBContainer> */}
      <MDBContainer fluid>
        <FpLpSections />
      </MDBContainer>
    </>
  );
}
