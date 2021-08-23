import React, { useState } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import test1 from "../images/Testimonial-1.png";
import test2 from "../images/Testimonial-2.png";

import revback from "../images/revback.jpg";

export default function Reviews() {
  return (
    <>
      {/* Review display for desktop */}

      <MDBContainer className="d-none d-md-block">
        <MDBRow>
          <MDBCol sm="12" class="text-center">
            <h1 style={{ fontWeight: "bold", color: "black" }}>
              Our clients are some of the happiest in the industry.
            </h1>
            <h1 style={{ fontWeight: "bold", color: "black" }}>
              Here's what they're saying
            </h1>
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
          <MDBCol md="8" className="mb-4" style={{ color: "black" }}>
            <h5>NIcholas Powell</h5>
            <p>2021</p>
            <p>
              Had and amazing first home buying experience with Shawn and the
              whole team. Stephanie and Brittany did a fantastic job as well.
              The online platform utilized during the whole process was simple,
              direct, and enabled quick turn around. Happy we got to connect
              with BOE during for this purchase.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="8" className="mb-4" style={{ color: "black" }}>
            <h5 class="text-end">Stephen Lackey</h5>
            <p class="text-end">2021</p>
            <p class="text-end">
              Thanks to Shawn and team, the refinancing of my home was
              incredibly easy. BOE were able to accommodate my refinancing needs
              which set them apart from the other financial institutions which I
              had been shopping. Highly recommend BOE and would definitely work
              with them again in the future.
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
        <MDBRow>
          <MDBCarousel showControls showIndicators dark fade>
            <MDBCarouselInner>
              <MDBCarouselItem itemId={0}>
                <MDBCarouselElement
                  style={{ width: "696px", height: "307px" }}
                />
                <MDBCarouselCaption>
                  <h3>Rich Gaffney</h3>
                  <h5>
                    Shawn was excellent in every aspect of enabling my wife and
                    I to qualify for a loan. He is an excellent communicator and
                    truly cares for his clients! We were prepared for every step
                    in this process. I especially like his positive attitude and
                    great work ethic. His two assistants, Monika and Stephanie,
                    were so easy to work with and very professional in all their
                    interactions with us! Wow - it was just an excellent
                    experience and we qualified for the loan! I would not
                    hesitate a moment to recommend Shawn to anyone!
                  </h5>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={1}>
                <MDBCarouselElement
                  style={{ width: "696px", height: "307px"}}
                />
                <MDBCarouselCaption>
                  <h3>Andrew Braden</h3>
                  <h5>
                    Shawn and his team are great to work with and very on top of
                    the ongoing trends in the mortgage industry. Definitely
                    should be your first and only stop when needing a mortgage
                    lender. Highly recommend.
                  </h5>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <MDBCarouselElement
                  style={{ width: "696px", height: "307px" }}
                />
                <MDBCarouselCaption className="m-auto">
                  <h3>Sandi Brooks</h3>
                  <h5>
                    Have you ever had that thought... "I don't want to deal with
                    the bank for my house?" Well I will tell you I WANTED to
                    deal with Courtney and her team! You ask... do they care?
                    ABSOLUTELY! When they MAKE MAGIC HAPPEN they really do make
                    it happen. Never have I worked with a bank that actually
                    said "I WILL GET THIS DONE" and actually DO IT! THANK YOU
                    Courtney Gutierrez for all the hard work that you did for me
                    on my home loan and continue to be there after the fact to
                    answer questions if needed!
                  </h5>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
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
            style={{ marginBottom: "20px" }}
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
            style={{ marginBottom: "20px" }}
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
        {/* <MDBCarousel showControls showIndicators>
          <MDBCarouselInner>
            <MDBCarouselItem itemId={0}>
              <MDBCarouselElement
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={1}>
              <MDBCarouselElement
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.jpg"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <MDBCarouselElement
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.jpg"
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel> */}
      </MDBContainer>
    </>
  );
}
