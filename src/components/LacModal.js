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

export default function LacModal() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBBtn
        id="s__btn"
        size="lg"
        className="m-2"
        onClick={() => setScrollableModal(!scrollableModal)}
      >
        Loan Affordability Calculator
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
                id="m__btn"
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Submit
              </MDBBtn>
              <MDBBtn
                id="m__btn"
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
