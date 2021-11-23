import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBLightbox,
  MDBLightboxItem,
} from "mdb-react-ui-kit";
import house from "../images/TeamBanner.jpg";

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
          style={{
            color: "white",
            backgroundImage: `url(${house})`,
            height: "600px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <MDBCol sm="4">
            <h1 style={{ fontWeight: "bold", fontSize: "48px" }}>Media</h1>
            <h4 style={{ fontWeight: "bold" }}>
              Browse our media collection & get to know your BOE staff.
            </h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid>
        <div className="mt-4">
          <div className="ratio ratio-21x9">
            <iframe
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          <div className="ratio ratio-21x9 mt-3">
            <iframe
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
          <div className="ratio ratio-21x9 mt-3">
            <iframe
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </MDBContainer>
    </MDBContainer>
  );
}
