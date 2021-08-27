import React, { useRef, useEffect } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import pp1 from "../downloads/PP1.PNG"
import pp2 from "../downloads/PP2.PNG"

export default function PrivacyPolicy() {

  return (
    <div>
      <MDBContainer className="" style={{ marginTop: "200px" }}>
            <img src={pp1}></img>
            <img src={pp2}></img>
      </MDBContainer>
    </div>
  );
}
