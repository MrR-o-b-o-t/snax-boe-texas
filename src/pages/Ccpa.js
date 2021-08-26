import React, { } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ccpa1 from "../downloads/CCPA1.PNG"
import ccpa2 from "../downloads/CCPA2.PNG"

export default function Ccpa() {

  return (
    <div>
      <MDBContainer className="" style={{ marginTop: "200px" }}>
            <img src={ccpa1}></img>
            <img src={ccpa2}></img>
      </MDBContainer>
    </div>
  );
}
