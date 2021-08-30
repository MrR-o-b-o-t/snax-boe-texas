import React, { useState } from "react"

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
} from "mdb-react-ui-kit"

import { teamData } from "../teamData"

export default function TeamBio() {
  let bio1 = ""
  let phone1 = ""
  let email1 = ""
  let photo1
  let link = ""
  const name = localStorage.getItem("tm")

  {
    teamData.map((data) => {
      if (data.name === localStorage.getItem("tm")) {
        console.log(data.email.substring(0,data.email.length-16))
        return (
          (phone1 = data.phone),
          (bio1 = data.bio),
          (email1 = data.email),
          (photo1 = data.photo),
          (link = data.email.substring(0,data.email.length-16))
        )
      }
    })
  }

  return (
    <MDBContainer style={{}}>
      <MDBTypography
        variant="h1"
        className="text-center mb-5"
        style={{ fontWeight: "bold", marginTop: "150px" }}
      >
        <h2>{name}</h2>
      </MDBTypography>
      <MDBRow>
        <MDBCol sm="12" className="d-flex justify-content-center">
          <MDBCard
            border="primary"
            className="h-100"
            style={{ maxWidth: "44rem" }}
          >
            <MDBCardImage src={photo1} alt="Team Members" position="top" />
            <MDBCardBody className="text-center">
              <MDBCardText>
                <MDBAnimation
                  animation="zoom-in
                "
                  start="onLoad"
                  duration={1500}
                >
                  <MDBBtn
                    id="s__btn"
                    target="_blank"
                    href={`https://boeedge.boemortgage.com/borrower/signup/${link}@boemortgage.com`}
                    color="secondary"
                    className="p-4"
                  >
                    Apply Now
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
          <h5>{bio1}</h5>
        </MDBCol>
        <MDBCol className="m-auto text-center">
          <h3>Email Address:</h3>
          <a
            id="footer__contact__section"
            href={`mailto:${email1}`}
            target="_blank"
          >
            <h5 className="mb-4">{email1}</h5>
          </a>
          <h3 href="">Phone Number:</h3>
          <a id="footer__contact__section" href={`tel:1${phone1}`}>
            <h5 className="mb-4">{phone1}</h5>
          </a>
          <h3>Address:</h3>
          <a
            id="footer__contact__section"
            href="https://g.page/BOETEXAS?share"
            target="_blank"
          >
            <h5>17250 Dallas Parkway Dallas, TX 75248</h5>
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
