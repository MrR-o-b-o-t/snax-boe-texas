import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import house from "../images/Bank-of-England-House-Illustration.png";

export default function Media() {
  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <MDBContainer fluid style={{ maxWidth: "2000px", marginTop: "100px" }}>
      <MDBContainer fluid style={{ backgroundColor: "#4e4e4e" }}>
        <MDBRow
          className="d-flex justify-content-center align-items-center p-5"
          style={{ color: "white" }}
        >
          <MDBCol sm="5">
            <h1 style={{ fontWeight: "bold" }}>Media</h1>
            <p>Browse our media collection & get to know your BOE staff.</p>
          </MDBCol>
          <MDBCol sm="5" className="text-center">
            <img src={house} class="img-fluid" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid>
        <MDBRow className="row-cols-1 row-cols-lg-3 g-1 mt-5">
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
