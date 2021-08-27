import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

export default function VideoTest() {
  return (
    <MDBContainer style={{ marginTop: "50px", marginBottom: "50px" }}>
      <MDBRow className="mb-2"> 
        <MDBCol sm={12}><h1 className="text-center">See what our clients are saying</h1></MDBCol>
      </MDBRow>
      <hr style={{width:'70%', marginLeft:'auto', marginRight:'auto', height:'2px', backgroundColor:'rgb(33, 87, 50)',}}/>
      <MDBCarousel showIndicators showControls fade interval={false} pause>
        <MDBCarouselInner>
          <MDBCarouselItem itemId={0}>
            <MDBCarouselElement/>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement />
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/swqcc7I-slM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement />
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
