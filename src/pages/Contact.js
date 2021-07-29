import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import ContactForm from "../components/ContactForm"
import BOEMap from "../components/BOEMap"
import {
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Contact() {
  const [state, handleSubmit] = useForm("mayabzlv")
  return (
    <MDBContainer style={{marginTop:'100px'}}>
      <BOEMap />
      <ContactForm />
    </MDBContainer>
  )
}
