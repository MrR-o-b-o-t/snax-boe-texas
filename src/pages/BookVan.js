import React, { useRef, useEffect } from "react"
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"

import { InlineWidget } from "react-calendly"
import { PopupWidget } from "react-calendly"
import signing from "../images/boe-office-front.jpg"
import Reviews from "../components/Reviews"

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
      <MDBContainer
        fluid
        style={{ maxWidth: "2000px", margin: "0px", padding: "0px" }}
      >
        <header style={{ marginTop: "80px" }}>
          <div
            className="p-5 text-center bg-image"
            style={{
              backgroundImage:
                "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')",
              height: 500,
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">Heading</h1>
                  <h4 className="mb-3">Subheading</h4>
                  <a
                    className="btn btn-outline-light btn-lg"
                    href="#!"
                    role="button"
                  >
                    Call to action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <MDBContainer className="mt-3" style={{ maxWidth: "2500px" }}>
          <MDBRow className="g-2 mt-5">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <h5 class="text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer
          style={{ backgroundColor: "#4e4e4e", maxWidth: "2500px" }}
          className="mt-5 mb-5"
          ref={ref}
        >
          <PopupWidget
            color="#00a2ff"
            text="Book Now"
            textColor="#ffffff"
            url="https://calendly.com/samkautz"
          />
          <InlineWidget url="https://calendly.com/samkautz" />
        </MDBContainer>
        <Reviews />
      </MDBContainer>
    </div>
  )
}
