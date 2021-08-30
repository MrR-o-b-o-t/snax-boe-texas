import React, { useRef, useEffect } from "react"
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"

import house from "../images/Bank-of-England-House-Illustration.png"
import customer1 from "../images/Bank-of-England-Customer.jpg"
import signing from "../images/boe-office-front.jpg"
import Reviews from "../components/Reviews"
import LoanCards from "../components/LoanCards"
import LightBanner from "../components/LightBanner"
import VideoTest from "../components/VideoTest"
import ClientTest from "../components/ClientTest"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector("#move"),
      {
        opacity: -9,
        y: 240,
      },
      {
        opacity: 4,
        y: -50,
        scrollTrigger: {
          trigger: element.querySelector("#here"),
          start: "top top",
          end: "bottom center",
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
        opacity: 1,
        x: 450,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector("#here"),
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <div style={{ overflowX: "hidden" }}>
      <MDBContainer fluid style={{ maxWidth: "2000px" }}>
        <MDBContainer className="" style={{ marginTop: "100px" }}>
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
                  Bank of England Mortgage is the white glove home loan experiance
                  designed for you
                </h1>
                <h5 class="text-left">
                  The home buying experience shouldn't be a hassle. With BOE
                  Texas it won't be. Start an application to see what's
                  possible.
                </h5>
              </div>
              <div className="text-center">
                <MDBBtn
                  id="m__btn"
                  tag="a"
                  className="m-2 p-3"
                  style={{
                    fontWeight: "600",
                    width: "300px",
                    fontSize: "16px",
                  }}
                  target="_blank"
                  href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
                >
                  Apply For Home Purchase
                </MDBBtn>
              </div>
              <div className="text-center">
                <MDBBtn
                  id="m__btn"
                  tag="a"
                  className="m-2 p-3"
                  style={{
                    fontWeight: "600",
                    width: "300px",
                    fontSize: "16px",
                  }}
                  target="_blank"
                  href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
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
            <MDBCol lg="6" className="g-0" id="lb__parallax__img">
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
                  A mortgage broker can be your trusted guide close to home.
                  They can really get to know you and tailer loan options to
                  meet your needs.
                </h5>
              </div>
              <div className="text-center mt-4">
                <MDBBtn
                  id="s__btn"
                  tag="a"
                  rippleColor="success"
                  className="m-2"
                  href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
                  target="_blank"
                >
                  Connect With Local Lender
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
          <ClientTest />
          <LoanCards />
        </MDBContainer>
        <MDBContainer
          style={{ backgroundColor: "#4e4e4e", maxWidth: "2500px" }}
          className="mt-5 mb-5"
          ref={ref}
        >
          <MDBRow
            className="d-flex justify-content-center align-items-center p-5"
            style={{ color: "white" }}
          >
            <MDBCol sm="4">
              <h1 style={{ fontWeight: "bold" }} id="move">
                Your Mortgage Approval Starts Here
              </h1>
              <p>
                Our streamlined application syncs with your bank to get you
                accurate numbers fast.
              </p>
              <MDBBtn
                id="s__btn"
                tag="a"
                rippleColor="success"
                href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
                target="_blank"
              >
                Start My Approval
              </MDBBtn>
            </MDBCol>
            <MDBCol sm="4" className="text-center">
              <img src={house} class="img-fluid" id="ma__banner__house" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Reviews />
      </MDBContainer>
    </div>
  )
}
