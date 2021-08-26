import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit"

export default function Contact() {
  const [state, handleSubmit] = useForm("mayabzlv")
  if (state.succeeded) {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="12" className="text-center mt-5">
              <h2 style={{ color: "black", fontWeight: "bold" }}>
                Thanks for reaching out!
              </h2>
              <h6>
                Someone will reply to your message within 48 business hours.
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="6" className="">
            <form onSubmit={handleSubmit}>
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea id="message" name="message" placeholder="Message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
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
                  }}
                  type="submit"
                  disabled={state.submitting}
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
                (214) 396-6450
              </div>
            </MDBRow>
            <MDBRow className="m-3" style={{ textAlign: "center" }}>
              <div className="d-inline">
                <MDBIcon
                  className="px-2"
                  icon="envelope"
                  style={{ color: "#215732" }}
                />
                infoNow@BOEtexas.com
              </div>
            </MDBRow>
            <MDBRow className="m-3 mb-3" style={{ textAlign: "center" }}>
              <div className="d-inline">
                <MDBIcon
                  className="px-2"
                  icon="map-marker-alt"
                  style={{ color: "#215732" }}
                />
                17250 Dallas Parkway Dallas, TX 75248
              </div>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
