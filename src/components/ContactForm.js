import React from "react"
import { MDBBtn, MDBRow, MDBCol, MDBContainer, MDBIcon } from "mdb-react-ui-kit"

export default function Contact() {
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="6" className="">
            <form>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="Name"
                required=""
              ></input>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <textarea id="message" name="message" placeholder="Message" />
              <div className="text-center mt-4">
                <MDBBtn
                  id="m__btn"
                  color="primary"
                  size="lg"
                  className="m-2"
                  style={{
                    fontWeight: "600",
                    width: "300px",
                    padding: "20px",
                    fontSize: "16px",
                    backgroundColor: "rgb(33, 87, 50)",
                  }}
                  type="submit"
                >
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6" className="mt-5">
            <h2 className="text-center pb-2" style={{ fontWeight: "bold" }}>
              Contact Us
            </h2>
            <MDBRow className="m-3" style={{ textAlign: "center" }}>
              <div className="d-inline">
                <MDBIcon
                  className="px-2"
                  icon="phone"
                  style={{ color: "#215732" }}
                />
                <a href="tel:+12143966450" id="footer__contact__section">
                  214-396-6450
                </a>
              </div>
            </MDBRow>
            <MDBRow className="m-3" style={{ textAlign: "center" }}>
              <div className="d-inline">
                <MDBIcon
                  className="px-2"
                  icon="envelope"
                  style={{ color: "#215732" }}
                />
                <a
                  href="mailto:InfoNow@boemortgage.com"
                  id="footer__contact__section"
                >
                  InfoNow@boemortgage.com
                </a>
              </div>
            </MDBRow>
            <MDBRow className="m-3 mb-3" style={{ textAlign: "center" }}>
              <div className="d-inline">
                <MDBIcon
                  className="px-2"
                  icon="map-marker-alt"
                  style={{ color: "#215732" }}
                />
                <a
                  href="https://g.page/BOETEXAS?share"
                  target="_blank"
                  id="footer__contact__section"
                >
                  17250 Dallas Parkway Dallas, TX 75248
                </a>
              </div>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
