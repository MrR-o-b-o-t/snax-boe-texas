import React, { useState } from "react"
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"

import house from "../images/Bank-of-England-House-Illustration.png"
import customer1 from "../images/Bank-of-England-Customer.jpg"
import signing from "../images/Bank-of-England-Signing.jpg"
import Reviews from "../components/Reviews"
import LoanCards from "../components/LoanCards"
import LightBanner from "../components/LightBanner"

export default function Home() {
  return (
    <>
      <MDBContainer className="" style={{ maxWidth: "2500px", marginTop:'100px' }}>
        <MDBRow className="g-2">
          <MDBCol lg="6" className="user-select-none mb-3">
            <div style={{ paddingLeft: "15px" }}>
              <h1
                class="text-md-start"
                style={{ fontWeight: "bold", color: "black" }}
              >
                <div
                  style={{
                    color: "#215732",
                    width: "50px",
                    height: "7px",
                    background: "#215732",
                    marginBottom: "15px",
                  }}
                />
                Bank of Englad Texas is the white glove home loan experiance
                designed for you
              </h1>
              <h5 class="text-left">
                The home buying experience shouldn't be a hassle. With BOE Texas
                it won't be. Start an application to see what's possible.
              </h5>
            </div>
            <div className="text-center mt-4">
              <MDBBtn
                href="https://boetexas.floify.com/apply-now"
                size="lg"
                className="m-2"
                color="primary"
                style={{
                  color: "#f1f1f1",
                  backgroundColor: "#4e4e4e",
                  fontWeight: "600",
                  width: "300px",
                  padding: "20px",
                  fontSize: "16px",
                }}
              >
                Apply For Home Purchase
              </MDBBtn>
            </div>
            <div className="text-center">
              <MDBBtn
                href="#"
                size="lg"
                className="m-2"
                color="grey"
                style={{
                  color: "#f1f1f1",
                  fontWeight: "600",
                  backgroundColor: "#4e4e4e",
                  width: "300px",
                  padding: "20px",
                  fontSize: "16px",
                }}
              >
                Apply For Refinance
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol
            lg="6"
            style={{
              backgroundImage: `url(${customer1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              minHeight: "40vh",
            }}
          ></MDBCol>
        </MDBRow>
      </MDBContainer>
      <LightBanner />
      <MDBContainer className="mt-3" style={{ maxWidth: "2500px" }}>
        <MDBRow className="g-2">
          <MDBCol lg="6" className="g-0">
            <img src={signing} class="img-fluid mb-4"></img>
          </MDBCol>
          <MDBCol lg="6" className="">
            <div style={{ marginLeft: "15px" }}>
              <h1
                class="text-md-start"
                style={{ fontWeight: "bold", color: "black" }}
              >
                <div
                  style={{
                    color: "#215732",
                    width: "50px",
                    height: "7px",
                    background: "#215732",
                    marginBottom: "15px",
                  }}
                />
                Connect with a lender in your community.
              </h1>
              <h5 class="text-left">
                A mortgage broker can be your trusted guide close to home. They
                can really get to know you and tailer loan options to meet your
                needs.
              </h5>
            </div>
            <div className="text-center mt-4">
              <MDBBtn
                rippleColor="success"
                color="white"
                size="lg"
                className="m-2"
                style={{
                  color: "grey",
                  fontWeight: "600",
                  backgroundColor: "white",
                  border: "2px solid grey",
                  padding: "20px",
                  fontSize: "16px",
                }}
              >
                Connect With Local Lender
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <LoanCards />
      <MDBContainer
        style={{ backgroundColor: "#4e4e4e", maxWidth: "2500px" }}
        className="mt-5 mb-5"
      >
        <MDBRow
          className="d-flex justify-content-center align-items-center p-5"
          style={{ color: "white" }}
        >
          <MDBCol sm="4">
            <h1 style={{ fontWeight: "bold" }}>
              Your Mortgage Approval Starts Here
            </h1>
            <p>
              Our streamlined application syncs with your bank to get you
              accurate numbers fast.
            </p>
            <MDBBtn
              rippleColor="success"
              href="https://boetexas.floify.com/apply-now"
              style={{
                color: "black",
                fontWeight: "600",
                backgroundColor: "white",
                padding: "15px 20px 15px 20px",
                fontSize: "14px",
              }}
            >
              Start My Approval
            </MDBBtn>
          </MDBCol>
          <MDBCol sm="4" className="text-center">
            <img src={house} class="img-fluid" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Reviews />
    </>
  )
}
