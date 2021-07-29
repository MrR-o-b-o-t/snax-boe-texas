import React, { useState } from "react"

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"
import test1 from "../images/Testimonial-1.png"
import test2 from "../images/Testimonial-2.png"

export default function Reviews() {
  return (
    <>
      {/* Review display for desktop */}

      <MDBContainer className="d-none d-md-block">
        <MDBRow>
          <MDBCol sm="12" class="text-center">
            <h1 style={{ fontWeight: "bold", color:'black' }}>
              Our clients are some of the happiest in the industry.
            </h1>
            <h1 style={{ fontWeight: "bold", color:'black' }}>Here's what they're saying</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
          <MDBCol md="4" className="mb-4 text-end">
            <img
              style={{ maxWidth: "75%", maxHeight: "75%" }}
              src={test1}
              className="img-fluid rounded-circle"
              alt=""
            />
          </MDBCol>
          <MDBCol md="8" className="mb-4" style={{color:'black'}}>
            <h5>Some Name</h5>
            <p>06/30/2021</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="8" className="mb-4" style={{color:'black'}}>
            <h5 class="text-end">Some Name</h5>
            <p class="text-end">06/30/2021</p>
            <p class="text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBCol>
          <MDBCol md="4" className="">
            <img
              style={{ maxWidth: "75%", maxHeight: "75%" }}
              src={test2}
              className="img-fluid rounded-circle"
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Review display for Mobile */}

      <MDBContainer className="d-md-none mb-4">
        <MDBRow>
          <MDBCol sm="12" class="text-center">
            <h3 style={{ fontWeight: "bold" }}>
              Our clients are some of the happiest in the industry.
            </h3>
            <h3 style={{ fontWeight: "bold" }}>Here's what they're saying</h3>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5 shadow-4">
          <MDBCol
            sm="12"
            className="text-center"
            style={{ marginBottom: "0px" }}
          >
            <img
              style={{ maxWidth: "50%", maxHeight: "50%" }}
              src={test1}
              className="img-fluid rounded-circle"
              alt=""
            />
          </MDBCol>
          <MDBCol sm="12" className="mb-4">
            <h5>Some Name</h5>
            <p>06/30/2021</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5 shadow-4">
          <MDBCol
            sm="12"
            className="text-center"
            style={{ marginBottom: "0px" }}
          >
            <img
              style={{ maxWidth: "50%", maxHeight: "50%" }}
              src={test2}
              className="img-fluid rounded-circle"
              alt=""
            />
          </MDBCol>
          <MDBCol sm="12" className="mb-4">
            <h5>Some Name</h5>
            <p>06/30/2021</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
