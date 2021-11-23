import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdb-react-ui-kit";

export default function LightBanner() {
  return (
    <MDBContainer style={{ backgroundColor: "#f1f1f1" }} fluid className="mt-5">
      <MDBRow>
        <MDBCol sm="12">
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "52px",
              paddingBottom: "10px",
            }}
            className="text-center mt-5"
          >
            Our process puts you in control
          </h1>
          <h5
            class="text-center"
            style={{ color: "#2f2f2f", paddingBottom: "15px" }}
          >
            White glove customer service and support makes it a painless process
            to achieve your financial and home ownership goals
          </h5>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-5 pb-5">
        <MDBCol sm="12" md="3">
          <h5
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MDBAnimation animation="fade-in-up" start="onLoad" duration={1500}>
              <span
                style={{
                  color: "#215732",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingRight: "5px",
                }}
              >
                1.
              </span>
            </MDBAnimation>
            <MDBAnimation
              animation="fade-in-down"
              start="onLoad"
              duration={1500}
            >
              Apply Online
            </MDBAnimation>
          </h5>
          <p style={{ color: "#2f2f2f" }}>
            Our streamlined application syncs with your bank to get you accurate
            numbers fast.
          </p>
        </MDBCol>
        <MDBCol sm="12" md="3">
          <h5 style={{ color: "black", display: "flex", alignItems: "center" }}>
            <MDBAnimation
              animation="fade-in-up"
              start="onLoad"
              duration={1500}
              delay={500}
            >
              <span
                style={{
                  color: "#215732",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingRight: "5px",
                }}
              >
                2.
              </span>
            </MDBAnimation>
            <MDBAnimation
              animation="fade-in-down"
              start="onLoad"
              duration={1500}
              delay={500}
            >
              Get Approved
            </MDBAnimation>
          </h5>
          <p style={{ color: "#2f2f2f" }}>
            See how much you’re approved for, then shop for homes or move
            forward with your refinance.
          </p>
        </MDBCol>
        <MDBCol sm="12" md="3">
          <h5 style={{ color: "black", display: "flex", alignItems: "center" }}>
            <MDBAnimation
              animation="fade-in-up"
              start="onLoad"
              duration={1500}
              delay={1000}
            >
              <span
                style={{
                  color: "#215732",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingRight: "5px",
                }}
              >
                3.
              </span>
            </MDBAnimation>
            <MDBAnimation
              animation="fade-in-down"
              start="onLoad"
              duration={1500}
              delay={1000}
            >
              Close Your Loan
            </MDBAnimation>
          </h5>
          <p style={{ color: "#2f2f2f" }}>
            We guide you through verifying all of the details and get your
            application closed fast.
          </p>
        </MDBCol>
        <MDBCol sm="12" md="3">
          <h5 style={{ color: "black", display: "flex", alignItems: "center" }}>
            <MDBAnimation
              animation="fade-in-up"
              start="onLoad"
              duration={1500}
              delay={1500}
            >
              <span
                style={{
                  color: "#215732",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingRight: "5px",
                }}
              >
                4.
              </span>
            </MDBAnimation>
            <MDBAnimation
              animation="fade-in-down"
              start="onLoad"
              duration={1500}
              delay={1500}
            >
              Manage Your Mortgage
            </MDBAnimation>
          </h5>
          <p style={{ color: "#2f2f2f" }}>
            Make payments online and put our state of the art system to work for
            you.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
