import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

export default function CareerForm() {
  const [state, handleSubmit] = useForm("mgerjlpw");
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
    );
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
              <input type="file" name="attachment" />
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
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
