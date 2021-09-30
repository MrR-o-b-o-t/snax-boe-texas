import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ContactForm from "../components/ContactForm";
import { MDBContainer, MDBAnimation, MDBRow, MDBCol } from "mdb-react-ui-kit";
import boeFront from "../images/boe-office-front.jpg";

export default function Contact() {
  const [state, handleSubmit] = useForm("mayabzlv");
  return (
    <MDBContainer fluid style={{ marginTop: "100px" }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${boeFront})`,
          height: 500,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <MDBAnimation
                animation="slide-in-down"
                start="onLoad"
                duration={1500}
              >
                <h1
                  style={{ fontSize: "62px", fontWeight: "600" }}
                  className="mb-3"
                >
                  Careers
                </h1>
              </MDBAnimation>
            </div>
          </div>
        </div>
      </div>
      <MDBRow>
        <MDBCol sm="12" className="text-center mt-5">
          <h3 style={{ fontWeight: "600", fontSize: "32px" }}>What we offer</h3>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-3">
        <MDBCol sm="4" className="text-center mt-3">
          <MDBAnimation
            animation="slide-in-left"
            start="onLoad"
            duration={1500}
          >
            <i className="fas fa-file-invoice-dollar fa-3x mb-3"></i>
            <h4>Competitive Pay</h4>
          </MDBAnimation>
        </MDBCol>
        <MDBCol sm="4" className="text-center mt-3">
          <MDBAnimation animation="slide-in-up" start="onLoad" duration={1500}>
            <i class="far fa-building fa-3x mb-3"></i>
            <h4>Charming Work Environment</h4>
          </MDBAnimation>
        </MDBCol>
        <MDBCol sm="4" className="text-center mt-3">
          <MDBAnimation
            animation="slide-in-right"
            start="onLoad"
            duration={1500}
          >
            <i class="fas fa-piggy-bank fa-3x mb-3"></i>
            <h4>Competitive Benifits</h4>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      <ContactForm />
    </MDBContainer>
  );
}
