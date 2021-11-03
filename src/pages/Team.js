import React, { useEffect, useState } from "react"

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
} from "mdb-react-ui-kit"

import abby from "../images/abigailD.jpg"
import ariel from "../images/arielC.jpg"
import ashley from "../images/ashleyC.jpg"
import chris from "../images/christopherH.jpg"
import cory from "../images/CoryRice4.jpg"
import david from "../images/davidR.jpg"
import deborah from "../images/deborahB.jpg"
import erin from "../images/erinW.jpg"
import frank from "../images/frankR.jpg"
import jeff from "../images/jeffreyM.jpg"
import jeron from "../images/jeronA.jpg"
import keri from "../images/keriG.jpg"
import marcus from "../images/marcusL.jpg"
import meghan from "../images/meghanS.jpg"
import ross from "../images/rossR.jpg"
import ryann from "../images/RyannCrain5.jpg"
import shawn from "../images/shawnF.jpg"
import mandy from "../images/Mandy.jpg"
import jill from "../images/Jill.jpg"
import luke from "../images/Luke Stamps.jpg"
import nicoleta from "../images/Nicoleta.jpg"

export default function Team() {
  const [teamMember, setTeamMember] = useState()

  useEffect(() => {
    localStorage.setItem("tm", teamMember)
  }, [teamMember])

  return (
    <MDBContainer style={{ marginTop: "150px" }}>
      <MDBTypography
        variant="h1"
        className="text-center"
        style={{ marginBottom: "80px", fontWeight: "bold" }}
      >
        Meet The Team
      </MDBTypography>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBAnimation
            animation="slide-in-left"
            start="onLoad"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Shawn Fehily`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={shawn} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Shawn Fehily</MDBCardTitle>
                <MDBCardText>
                  Branch Manager <br /> NMLS# 1072210
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-down"
            start="onLoad"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Marcus Lepp`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={marcus} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Marcus Lepp</MDBCardTitle>
                <MDBCardText>
                  Regional Manager <br /> NMLS# 715846
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-right"
            start="onLoad"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Ashley Cossio`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={ashley} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ashley Cossio</MDBCardTitle>
                <MDBCardText>
                  Mortgage Loan Officer <br /> NMLS# 2122522
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-left"
            start="onLoad"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Christopher Harding`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={chris} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Christopher Harding</MDBCardTitle>
                <MDBCardText>
                  Loan Officer <br /> NMLS# 1267827
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-up"
            start="onLoad"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              tag="a"
              href="/TeamBio"
              onClick={() => {
                setTeamMember(`David Restrepo`)
              }}
            >
              <MDBCardImage src={david} alt="David Restrepo" position="top" />
              <MDBCardBody>
                <MDBCardTitle>David Restrepo</MDBCardTitle>
                <MDBCardText>
                  Sr. Loan Officer <br /> NMLS# 496077 <br /> Bilingual/Spanish
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-right"
            start="onLoad"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Deb Byrd`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={deborah} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Deb Byrd</MDBCardTitle>
                <MDBCardText>
                  Production Partner & Sr. Mortgage Advisor <br /> NMLS# 1043719
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-left"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Erin Waddell`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={erin} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Erin Waddell</MDBCardTitle>
                <MDBCardText>
                  Residential Mortgage Loan Advisor <br /> Assistant
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-up"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Frank Rubalcava III`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={frank} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Frank Rubalcava lll</MDBCardTitle>
                <MDBCardText>
                  Mortgage Banker/Sr. Loan Officer <br /> NMLS# 183680 <br />{" "}
                  Bilingual/Spanish
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-right"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Jeffrey Murphy`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={jeff} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Jeffrey Murphy</MDBCardTitle>
                <MDBCardText>
                  Loan Officer lll <br /> NMLS# 9438
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-left"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`JeRon Allen`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={jeron} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>JeRon Allen</MDBCardTitle>
                <MDBCardText>
                  Loan Officer lll <br /> NMLS# 718431
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-up"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Keri Gaines`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={keri} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Keri Gaines</MDBCardTitle>
                <MDBCardText>Mortgage Loan Closer</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-right"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Ariel Carballo`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={ariel} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ariel Carballo</MDBCardTitle>
                <MDBCardText>
                  Residential Mortgage Loan Officer <br /> Assistant
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-left"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Meghan Stevenson`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={meghan} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Meghan Stevenson</MDBCardTitle>
                <MDBCardText>
                  Loan Officer <br /> NMLS# 1651872
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-up"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Ross Rhodes`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={ross} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ross Rhodes</MDBCardTitle>
                <MDBCardText>
                  Loan Officer <br /> NMLS# 2028927
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-right"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Ryann Crain`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={ryann} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ryann Crain</MDBCardTitle>
                <MDBCardText>Administrative Assistant</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-left"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Abby Dawson`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={abby} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Abby Dawson</MDBCardTitle>
                <MDBCardText>
                  Residential Mortgage Loan Officer <br /> Assistant
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-up"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Mandy Gomez`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={mandy} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Mandy Gomez</MDBCardTitle>
                <MDBCardText>
                  Sales Manager / Sr Loan Officer <br /> NMLS# 744341 <br />{" "}
                  Bilingual/Spanish
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-right"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Jill Bumgarner`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={jill} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Jill Bumgarner</MDBCardTitle>
                <MDBCardText>
                  Loan Officer <br /> NMLS# 1733019
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-left"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Cory Rice`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={cory} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Cory Rice</MDBCardTitle>
                <MDBCardText>
                  Sr. Mortgage Banker <br /> NMLS# 718893
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-up"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Luke Stamps`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={luke} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Luke Stamps</MDBCardTitle>
                <MDBCardText>Mortgage Loan Underwriter</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation
            animation="slide-in-right"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
            <MDBCard
              className="h-100"
              onClick={() => {
                setTeamMember(`Nicoleta Adam`)
              }}
              tag="a"
              href="/TeamBio"
            >
              <MDBCardImage src={nicoleta} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Nicoleta Adam</MDBCardTitle>
                <MDBCardText>Processing Manager</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      <MDBBtn
        id="m__btn"
        tag="a"
        className="m-2 p-3"
        style={{
          fontWeight: "600",
          fontSize: "16px",
          position: "fixed",
          bottom: "25px",
          right: "10px",
          zIndex: "2",
        }}
        target="_blank"
        href="https://boeedge.boemortgage.com/borrower/signup/infonow@boemortgage.com"
      >
        Apply Now
      </MDBBtn>
    </MDBContainer>
  )
}
