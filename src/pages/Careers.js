import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import boeFront from "../images/boe-office-front.jpg";

import {
  MDBContainer,
  MDBAnimation,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Contact() {
  const [state, handleSubmit] = useForm("mayabzlv");
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <MDBContainer
      fluid
      style={{
        marginTop: "78px",
        padding: "0px",
        backgroundColor: "#4e4e4e",
        marginBottom: "-47px",
        paddingBottom: "20px",
      }}
    >
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
      <div style={{ backgroundColor: "white" }}>
        <MDBRow>
          <MDBCol sm="12" className="text-center mt-5">
            <h3 style={{ fontWeight: "600", fontSize: "32px" }}>
              What we offer
            </h3>
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
            <MDBAnimation
              animation="slide-in-up"
              start="onLoad"
              duration={1500}
            >
              <i class="far fa-building fa-3x mb-3"></i>
              <h4>Fun Work Environment</h4>
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
        <hr
          style={{
            marginTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "white",
          }}
        />
      </div>
      <MDBRow style={{ marginBottom: "200px" }}>
        <MDBCol sm="12" className="text-center" style={{ marginTop: "100px" }}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "40px",
              marginBottom: "30px",
              color: "white",
            }}
          >
            Current Positions
          </h3>
        </MDBCol>
        <MDBCol sm="12 d-flex align-items-center justify-content-center mt-5">
          <MDBCard
            id="careersCard"
            alignment="center"
            style={{ maxWidth: "52rem", border: "1px solid grey" }}
          >
            <MDBCardHeader>Mortgage Underwriter</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Senior Mortgage Underwriter</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content. With supporting text below as a natural
                lead-in to additional content. With supporting text below as a
                natural lead-in to additional content. With supporting text
                below as a natural lead-in to additional content. With
                supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBBtn
                id="m__btn"
                style={{ padding: "20px 40px 20px 40px" }}
                onClick={toggleShow}
              >
                Apply
              </MDBBtn>
              <MDBModal
                show={basicModal}
                getOpenState={(e: any) => setBasicModal(e)}
                tabIndex="-1"
              >
                <MDBModalDialog>
                  <MDBModalContent>
                    <form
                      onSubmit={handleSubmit}
                      style={{ border: "2px solid black", padding: "45px" }}
                    >
                      <input
                        type="text"
                        name="name"
                        id="full-name"
                        placeholder="Name"
                        required=""
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      ></input>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      />
                      <input
                        type="file"
                        name="attachment"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "normal",
                          borderRadius: "4px",
                        }}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Cover Letter"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />
                      <MDBBtn
                        type="submit"
                        isabled={state.submitting}
                        id="m__btn"
                      >
                        Submit
                      </MDBBtn>
                    </form>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="12 d-flex align-items-center justify-content-center mt-5">
          <MDBCard
            id="careersCard"
            alignment="center"
            style={{ maxWidth: "52rem", border: "1px solid grey" }}
          >
            <MDBCardHeader>Mortgage Underwriter</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Senior Mortgage Underwriter</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content. With supporting text below as a natural
                lead-in to additional content. With supporting text below as a
                natural lead-in to additional content. With supporting text
                below as a natural lead-in to additional content. With
                supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBBtn
                id="m__btn"
                style={{ padding: "20px 40px 20px 40px" }}
                onClick={toggleShow}
              >
                Apply
              </MDBBtn>
              <MDBModal
                show={basicModal}
                getOpenState={(e: any) => setBasicModal(e)}
                tabIndex="-1"
              >
                <MDBModalDialog>
                  <MDBModalContent>
                    <form
                      onSubmit={handleSubmit}
                      style={{ border: "2px solid black", padding: "45px" }}
                    >
                      <input
                        type="text"
                        name="name"
                        id="full-name"
                        placeholder="Name"
                        required=""
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      ></input>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      />
                      <input
                        type="file"
                        name="attachment"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "normal",
                          borderRadius: "4px",
                        }}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Cover Letter"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />
                      <MDBBtn
                        type="submit"
                        isabled={state.submitting}
                        id="m__btn"
                      >
                        Submit
                      </MDBBtn>
                    </form>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="12 d-flex align-items-center justify-content-center mt-5">
          <MDBCard
            id="careersCard"
            alignment="center"
            style={{ maxWidth: "52rem", border: "1px solid grey" }}
          >
            <MDBCardHeader>Mortgage Underwriter</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Senior Mortgage Underwriter</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content. With supporting text below as a natural
                lead-in to additional content. With supporting text below as a
                natural lead-in to additional content. With supporting text
                below as a natural lead-in to additional content. With
                supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBBtn
                id="m__btn"
                style={{ padding: "20px 40px 20px 40px" }}
                onClick={toggleShow}
              >
                Apply
              </MDBBtn>
              <MDBModal
                show={basicModal}
                getOpenState={(e: any) => setBasicModal(e)}
                tabIndex="-1"
              >
                <MDBModalDialog>
                  <MDBModalContent>
                    <form
                      onSubmit={handleSubmit}
                      style={{ border: "2px solid black", padding: "45px" }}
                    >
                      <input
                        type="text"
                        name="name"
                        id="full-name"
                        placeholder="Name"
                        required=""
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      ></input>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      />
                      <input
                        type="file"
                        name="attachment"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "normal",
                          borderRadius: "4px",
                        }}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Cover Letter"
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "4px",
                        }}
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        style={{
                          border: "2px solid black",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />
                      <MDBBtn
                        type="submit"
                        isabled={state.submitting}
                        id="m__btn"
                      >
                        Submit
                      </MDBBtn>
                    </form>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <hr />
      <ContactForm />
    </MDBContainer>
  );
}
