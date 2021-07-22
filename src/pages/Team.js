import React, { useState } from "react"

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBContainer, MDBTypography, MDBAnimation } from 'mdb-react-ui-kit';

import abigail from '../images/abigailD.jpg'
import ariel from '../images/arielC.jpg'
import ashley from '../images/ashleyC.jpg'
import chris from '../images/christopherH.jpg'
import david from '../images/davidR.jpg'
import deborah from '../images/deborahB.jpg'
import erin from '../images/erinW.jpg'
import frank from '../images/frankR.jpg'
import jeff from '../images/jeffreyM.jpg'
import jeron from '../images/jeronA.jpg'
import keri from '../images/keriG.jpg'
import marcus from '../images/marcusL.jpg'
import meghan from '../images/meghanS.jpg'
import ross from '../images/rossR.jpg'
import ryan from '../images/ryanR.jpg'
import shawn from '../images/shawnF.jpg'

export default function Team() {
  return (
      <MDBContainer style={{marginTop:'150px'}}>
          <MDBTypography variant="h1" className="text-center" style={{marginBottom:'80px', fontWeight:'bold'}}>Meet The Team</MDBTypography>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
      <MDBAnimation
            animation="slide-in-left"
            start="onLoad"
            duration={2000}
            className="h-100"
          >
        <MDBCard>
          <MDBCardImage
            src={abigail}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={ariel}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={ashley}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={chris}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={david}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={deborah}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={erin}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={frank}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={jeff}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={jeron}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={keri}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={marcus}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={meghan}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={ross}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={ryan}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src={shawn}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>      
      {/* <MDBCol>
      <MDBAnimation
            animation="slide-in-up"
            start="onScroll"
            duration={2000}
            className="h-100"
          >
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
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
        <MDBCard>
          <MDBCardImage
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>       */}
    </MDBRow>
    </MDBContainer>
  );
}
