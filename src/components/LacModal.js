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
  MDBInputGroup,
  MDBInputGroupElement,
} from "mdb-react-ui-kit";

export default function LacModal() {
  const [scrollableModal, setScrollableModal] = useState(false);
  const [state, setState] = useState();
  const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });

  const [userValues, setUserValues] = useState({
    amount: "",
    interest: "",
    years: "",
    downPayment: "",
  });

  const [results, setResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
    isResult: false,
  });

  const handleSubmitValues = (e) => {
    e.preventDefault();
    calculateResults(userValues);
  };

  // Clear input fields
  const clearFields = () => {
    setUserValues({
      amount: "",
      interest: "",
      years: "",
      downPayment: "",
    });

    setResults({
      monthlyPayment: "",
      totalPayment: "",
      totalInterest: "",
      isResult: false,
    });
  };

  const calculateResults = ({ amount, interest, years, downPayment }) => {
    const userAmount = Number(amount - downPayment);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }

    const isValid = () => {
      const { amount, interest, years } = userValues;
      let actualError = "";
      // Validate if there are values
      if (!amount || !interest || !years) {
        actualError = "All the values are required";
      }
      // Validade if the values are numbers
      if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
        actualError = "All the values must be a valid number";
      }
      // Validade if the values are positive numbers
      if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
        actualError = "All the values must be a positive number";
      }
      // if (actualError) {
      //   setError(actualError);
      //   return false;
      // }
      return true;
    };

    return;
  };

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
              <form onSubmit={handleSubmitValues}>
                <MDBInputGroup className="mb-3">
                  <MDBInputGroupElement
                    type="text"
                    name="amount"
                    placeholder="Mortgage Amount"
                    value={userValues.amount}
                    onChange={handleInputChange}
                  />
                </MDBInputGroup>
                <MDBInputGroup className="mb-3">
                  <MDBInputGroupElement
                    type="text"
                    name="interest"
                    placeholder="Interest Rate %"
                    value={userValues.interest}
                    onChange={handleInputChange}
                  />
                </MDBInputGroup>
                <MDBInputGroup className="mb-3">
                  <MDBInputGroupElement
                    type="text"
                    name="years"
                    placeholder="Mortgage Term"
                    value={userValues.years}
                    onChange={handleInputChange}
                  />
                </MDBInputGroup>
                <MDBInputGroup>
                  <MDBInputGroupElement
                    type="text"
                    name="downPayment"
                    placeholder="Down Payment"
                    value={userValues.downPayment}
                    onChange={handleInputChange}
                  />
                </MDBInputGroup>
                <div>
                  <div>
                    <label>Monthly Payment:</label>
                    <input
                      style={{ color: "black" }}
                      type="text"
                      value={results.monthlyPayment}
                      disabled
                      onSubmit={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Total Payment: </label>
                    <input
                      type="text"
                      value={results.totalPayment}
                      disabled
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Total Interest:</label>
                    <input
                      type="text"
                      value={results.totalInterest}
                      disabled
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                id="m__btn"
                type="submit"
                onClick={() => setScrollableModal(!setScrollableModal)}
                onClick={handleSubmitValues}
              >
                Submit
              </MDBBtn>
              <MDBBtn
                id="m__btn"
                onClick={() => setScrollableModal(!setScrollableModal)}
                onClick={clearFields}
              >
                Clear
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
