import React from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBContainer,
} from "mdb-react-ui-kit"

export default function ClientTest() {
  return (
    <MDBContainer fluid>
      <h1 className="text-center mb-4 mt-3" style={{ fontWeight: "600" }}>
        See why our clients love working with us
      </h1>
      <MDBCarousel showControls showIndicators fade interval={false}>
        <MDBCarouselInner interval={false}>
          <MDBCarouselItem itemId={0} interval={false}>
            <MDBCarouselElement />
            <div className="ratio ratio-21x9">
              <iframe
                src="https://player.vimeo.com/video/592288789?h=c9ded79ce1"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={1} interval={false}>
            <MDBCarouselElement />
            <div className="ratio ratio-21x9">
              <iframe
                src="https://player.vimeo.com/video/592294469?h=82f1b7e6a5"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}
