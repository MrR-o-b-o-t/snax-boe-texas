import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBStepper,
  MDBStepperStep,
  MDBStepperHead,
  MDBStepperContent,
} from "mdb-react-ui-kit";

import house from "../images/Bank-of-England-House-Illustration.png";
import customer1 from "../images/Bank-of-England-Customer.jpg";
import Modal from "../components/Modal";
import LoanCards from "../components/LoanCards";
import HbGuide from "../components/HbGuide";
import Calculators from "../components/Calculators";
import DosDontsFlip from "../components/DosDontsFlip";

export default function Resources() {
  return (
    <>
      <MDBContainer
        className=""
        style={{ maxWidth: "2500px", marginTop: "100px" }}
      >
        <MDBRow className="g-2" style={{ maxWidth: "2500px" }}>
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
                We take pride in being there when our borrowers need us, day and
                night.
              </h1>
              <h5 class="text-left">
                Our mission is to deliver total value to our customers.
              </h5>
            </div>
            <div className="text-center" style={{ marginTop: "50px" }}>
              <MDBBtn
                size="lg"
                className="m-2"
                style={{
                  color: "#f1f1f1",
                  backgroundColor: "#215732",
                  fontWeight: "600",
                  width: "300px",
                  padding: "20px",
                  fontSize: "16px",
                }}
              >
                Contact Us
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
      <HbGuide />
      <MDBContainer
        style={{ backgroundColor: "#4e4e4e" }}
        fluid
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
              color="white"
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
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="6" className="text-start m-auto">
            <div className="">
              <h1>Closing Costs.</h1>
              <h1>What should I expect?</h1>
            </div>
            <h5 className="mt-4">
              Although they tend to vary from lender to lender, closing costs
              generally are considered any costs tied to the purchases of a new
              home.
            </h5>
          </MDBCol>
          <MDBCol md="6">
            <MDBStepper vertical>
              <MDBStepperStep itemId={1}>
                <MDBStepperHead icon="1" text="PREPAID EXPENSES" />
                <MDBStepperContent>
                  Prepaid expenses include homeowner’s insurance, mortgage
                  insurance and the costs to set up an escrow account. An escrow
                  account is when a lender will pay the annual insurance
                  premiums and various taxes on the borrower’s behalf. The
                  amount that goes into this account is based on the first
                  year’s premiums; an additional amount also is included to pay
                  for future premiums. Because they vary based on the type of
                  property and the time of the closing, prepaid expenses are
                  difficult to determine.
                </MDBStepperContent>
              </MDBStepperStep>
              <MDBStepperStep itemId={2}>
                <MDBStepperHead icon="2" text="MORTGAGE POINTS" />
                <MDBStepperContent>
                  A mortgage point is equal to 1 percent of the mortgage loan
                  amount and actually helps reduce the loan’s interest rate.
                  Scenarios differ per loan. Contact me for more info.
                </MDBStepperContent>
              </MDBStepperStep>
              <MDBStepperStep itemId={3}>
                <MDBStepperHead icon="3" text="OUT-OF-POCKET EXPENSES" />
                <MDBStepperContent>
                  Fees for appraisals, attorneys, credit reports, deed
                  recording, tax services and other miscellaneous expenses make
                  up the out-of-pocket expenses. Usually performed by a third
                  party, these fees for services are directly charged to the
                  borrower. The majority of out-of-pocket fees are necessary and
                  legitimate; however, if the borrower encounters a fee that
                  causes confusion, he or she should ask the mortgage
                  professional about it. Purchasing a home is one of the largest
                  financial investments you can make. It’s vital that you
                  understand it fully and completely so that you avoid unwelcome
                  surprises and are confident in every step you take towards
                  your new home.
                </MDBStepperContent>
              </MDBStepperStep>
            </MDBStepper>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Calculators />
      <LoanCards />
      <DosDontsFlip />
      <MDBContainer className="mt-5 d-flex justify-content-center">
        <MDBRow className="mt-5">
          <MDBCol className="" sm="6" style={{}}>
            <h1>Moving can be a daunting task</h1>
            <h6>
              Review our moving checklist for great tips on making your move go
              smooth
            </h6>
          </MDBCol>
          <MDBCol className="text-center" sm="6">
            <Modal />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
