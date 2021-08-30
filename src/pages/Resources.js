import React, { useRef, useEffect } from "react"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBStepper,
  MDBStepperStep,
  MDBStepperHead,
  MDBStepperContent,
} from "mdb-react-ui-kit"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import house from "../images/Bank-of-England-House-Illustration.png"
import BOE1 from "../images/BOE1.jpg"
import Modal from "../components/Modal"
import LoanCards from "../components/LoanCards"
import HbGuide from "../components/HbGuide"
import Calculators from "../components/Calculators"
import DosDontsFlip from "../components/DosDontsFlip"

export default function Resources() {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector("#move"),
      {
        opacity: 0,
        y: -140,
      },
      {
        opacity: 1,
        y: -10,
        scrollTrigger: {
          trigger: element.querySelector("#here"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    )
  }, [])

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector("#ma__banner__house"),
      {
        opacity: 0,
        x: 150,
      },
      {
        opacity: 1,
        x: 50,
        scrollTrigger: {
          trigger: element.querySelector("#ma__banner__house__1"),
          start: "top top",
          end: "center center",
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <div ref={ref} style={{ overflowX: "hidden" }}>
      <MDBContainer
        className=""
        style={{ maxWidth: "2500px", marginTop: "100px" }}
        ref={ref}
      >
        <MDBRow className="g-2" style={{ maxWidth: "2500px" }}>
          <MDBCol lg="5" className="user-select-none mb-3">
            <div style={{ paddingLeft: "15px" }}>
              <h1
                className="text-md-start"
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
              <h5 className="text-left">
                Our mission is to deliver total value to our customers.
              </h5>
            </div>
            <div className="text-center" style={{ marginTop: "50px" }}>
              <MDBBtn
                id="m__btn"
                size="lg"
                className="m-2"
                href="/Contact"
                style={{
                  fontWeight: "600",
                  width: "300px",
                  padding: "20px",
                  fontSize: "16px",
                  backgroundColor: "rgb(33, 87, 50)",
                }}
                href="/Contact"
              >
                Contact Us
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol
            lg="7"
            style={{
              backgroundImage: `url(${BOE1})`,
              backgroundRepeat: "no-repeat",
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
          id="ma__banner__house_1"
        >
          <MDBCol md="4">
            <h1 style={{ fontWeight: "bold" }} id="move">
              Your Mortgage Approval Starts Here
            </h1>
            <p>
              Our streamlined application syncs with your bank to get you
              accurate numbers fast.
            </p>
            <MDBBtn
              id="s__btn"
              rippleColor="success"
              href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
              target="_blank"
            >
              Start My Approval
            </MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="text-center">
            <img src={house} class="img-fluid" id="ma__banner__house" />
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
    </div>
  )
}
