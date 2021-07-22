import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import ContactForm from "../components/ContactForm"
import BOEMap from "../components/BOEMap"

export default function Contact() {
  const [state, handleSubmit] = useForm("mayabzlv")
  return (
    <>
      <BOEMap />
      <ContactForm />
    </>
  )
}
