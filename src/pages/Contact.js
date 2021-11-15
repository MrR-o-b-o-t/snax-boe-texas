import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import ContactForm from "../components/ContactForm"
import BOEMap from "../components/BOEMap"
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit"

export default function Contact() {
  const [state, handleSubmit] = useForm("mayabzlv")
  return (
    <MDBContainer style={{ marginTop: "100px" }}>
      <BOEMap />
      <ContactForm />
      {/* <MDBBtn
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
      </MDBBtn> */}
    </MDBContainer>
  )
}
