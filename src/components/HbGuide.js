import React, { useState } from "react"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
} from "mdb-react-ui-kit"

import HbAccordian from "./HbAccordian"

export default function HbGuide() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="mt-5 mb-3">
          <h1 className="mb-3 text-center">
            Purchasing a home is the largest investment you can make
          </h1>
        </MDBCol>
        <MDBCol md="6" style={{ marginRight: "-20px" }}>
          <MDBAnimation
            animation="slide-in-left"
            start="onLoad"
            duration={1500}
          >
            <h2 className="text-md-end mx-2 text-nowrap text-sm-center text-center">
              We are with you
            </h2>
          </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
          <MDBAnimation
            animation="fade-in"
            start="onLoad"
            duration={1500}
            delay={1500}
          >
            <h2 className="text-nowrap text-md-start text-sm-center text-center">
              every step of the way
            </h2>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      <HbAccordian />
    </MDBContainer>
  )
}
