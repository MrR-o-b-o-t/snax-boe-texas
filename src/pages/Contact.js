import React from "react";
import ContactForm from "../components/ContactForm";
import BOEMap from "../components/BOEMap";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <MDBContainer style={{ marginTop: "100px" }}>
      <BOEMap />
      <ContactForm />
    </MDBContainer>
  );
}
