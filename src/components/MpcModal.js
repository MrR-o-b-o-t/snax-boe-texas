import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTypography,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from "mdb-react-ui-kit";

export default function MpcModal() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBBtn
        size="lg"
        className="m-2"
        style={{
          fontWeight: "600",
          padding: "20px 50px 20px 50px",
          fontSize: "16px",
        }}
        onClick={() => setScrollableModal(!scrollableModal)}
      >
        Mortgage Calculator
      </MDBBtn>
      <MDBModal
        show={scrollableModal}
        getOpenState={(e: any) => setScrollableModal(e)}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent style={{ color: "black" }}>
            <MDBModalHeader>
              <MDBModalTitle>Mortgage Payment Calculator</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBInputGroup className="mb-3">
                <MDBInputGroupElement
                  type="text"
                  placeholder="Mortgage Amount"
                />
              </MDBInputGroup>
              <MDBInputGroup className="mb-3">
                <MDBInputGroupElement
                  type="text"
                  placeholder="Interest Rate %"
                />
              </MDBInputGroup>
              <MDBInputGroup className="mb-3">
                <MDBInputGroupElement
                  type="text"
                  placeholder="Mortgage Term"
                />
              </MDBInputGroup>
              <MDBInputGroup>
              <MDBInputGroupElement
                  type="text"
                  placeholder="Down Payment"
                />
                </MDBInputGroup>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                }}
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Submit
              </MDBBtn>
              <MDBBtn
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                }}
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
