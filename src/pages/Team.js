import React, { useState } from "react";

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
} from "mdb-react-ui-kit";

import abigail from "../images/abigailD.jpg";
import ariel from "../images/arielC.jpg";
import ashley from "../images/ashleyC.jpg";
import chris from "../images/christopherH.jpg";
import david from "../images/davidR.jpg";
import deborah from "../images/deborahB.jpg";
import erin from "../images/erinW.jpg";
import frank from "../images/frankR.jpg";
import jeff from "../images/jeffreyM.jpg";
import jeron from "../images/jeronA.jpg";
import keri from "../images/keriG.jpg";
import marcus from "../images/marcusL.jpg";
import meghan from "../images/meghanS.jpg";
import ross from "../images/rossR.jpg";
import ryan from "../images/ryanR.jpg";
import shawn from "../images/shawnF.jpg";

export default function Team() {
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
            <MDBCard className="h-100">
              <MDBCardImage src={abigail} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Abigail Dawson</MDBCardTitle>
                <MDBCardText>
                  Redisdential Mortgage Loan Officer <br/> Assistant.
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
            <MDBCard className="h-100">
              <MDBCardImage src={ariel} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ariel Carballo</MDBCardTitle>
                <MDBCardText>
                  Redisdential Mortgage Loan Officer <br/> Assistant.
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
            <MDBCard className="h-100">
              <MDBCardImage src={ashley} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ashley Cossio</MDBCardTitle>
                <MDBCardText>
                  Mortgage Loan Officer <br/> NMLS# 2122522.
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
            <MDBCard className="h-100">
              <MDBCardImage src={chris} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Christopher Harding</MDBCardTitle>
                <MDBCardText>
                  Loan Officer <br/> NMLS# 1267827.
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
            <MDBCard className="h-100">
              <MDBCardImage src={david} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>David Restrepo</MDBCardTitle>
                <MDBCardText>
                  Sr. Loan Officer <br/> NMLS# 496077 <br/> Bilingual/Spanish
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
            <MDBCard className="h-100">
              <MDBCardImage src={deborah} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Deborah Byrd</MDBCardTitle>
                <MDBCardText>
                  Production Partner & Sr. Mortgage Advisor <br/> NMLS# 1043719.
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
            <MDBCard className="h-100">
              <MDBCardImage src={erin} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Erin Waddell</MDBCardTitle>
                <MDBCardText>
                  Redisdential Mortgage Loan Advisor <br/> Assistant
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
            <MDBCard className="h-100">
              <MDBCardImage src={frank} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Frank Rubalcava lll</MDBCardTitle>
                <MDBCardText>
                  Mortgage Banker/Sr. Loan Officer <br/> NMLS# 183680 <br/> Bilingual/Spanish
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
            <MDBCard className="h-100">
              <MDBCardImage src={jeff} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Jeffrey Murphy</MDBCardTitle>
                <MDBCardText>
                  Loan Officer lll <br/> NMLS# 9438
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
            <MDBCard className="h-100">
              <MDBCardImage src={jeron} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>JeRon Allen</MDBCardTitle>
                <MDBCardText>
                  Loan Officer lll <br/> NMLS# 718431
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
            <MDBCard className="h-100">
              <MDBCardImage src={keri} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Keri Gaines</MDBCardTitle>
                <MDBCardText>
                  Mortgage Loan Closer
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
            <MDBCard className="h-100">
              <MDBCardImage src={marcus} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Marcus Lepp</MDBCardTitle>
                <MDBCardText>
                  Regional Manager <br/> NMLS# 715846
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
            <MDBCard className="h-100">
              <MDBCardImage src={meghan} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Meghan Stevenson</MDBCardTitle>
                <MDBCardText>
                  Loan Officer <br/> NMLS# 1651872
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
            <MDBCard className="h-100">
              <MDBCardImage src={ross} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ross Rhodes</MDBCardTitle>
                <MDBCardText>
                  Loan Officer <br/> NMLS# 2028927
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
            <MDBCard className="h-100">
              <MDBCardImage src={ryan} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Ryan Crain</MDBCardTitle>
                <MDBCardText>
                  Administrative Assistant
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
            <MDBCard className="h-100">
              <MDBCardImage src={shawn} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Shawn Fehily</MDBCardTitle>
                <MDBCardText>
                  Branch Manager <br/> NMLS# 1072210
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
