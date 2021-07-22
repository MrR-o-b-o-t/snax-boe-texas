import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBTypography,
  MDBCollapse,
  MDBAnimation,
  MDBIcon
} from "mdb-react-ui-kit";

export default function DosDontsFlip() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <MDBContainer
      className=""
      style={{
        marginTop: "100px",
        backgroundColor: "#4e4e4e",
        textAlign: "center",
        padding: "50px",
        minHeight:'400px'
      }}
    >
      <h2 style={{color:'white', marginBottom:'5%', marginTop:'3%'}}>Click the button bellow to reveal a few "Do's and Dont's" that are helpful to know before you close on your loan.</h2>
      <MDBAnimation
      animation='zoom-in'
      start='onScroll'
      duration={1000}
    >
      <MDBBtn
        rippleColor="success"
        style={{
          color: "black",
          fontWeight: "600",
          backgroundColor: "white",
          padding: "15px 20px 15px 20px",
          fontSize: "14px",
        }}
        onClick={toggleShow}
      >
        Do's & Dont's <MDBIcon className='' style={{paddingLeft:'5px', color:'#4e4e4e'}} icon='caret-down' size="lg" />
      </MDBBtn>
      </MDBAnimation>
      <MDBCollapse show={showShow} style={{ color: "white", marginTop:'50px' }}>
        <MDBRow>
          <MDBCol sm="6">
            {" "}
                <h1 className="text-center" style={{fontWeight: '600'}}>Do's</h1>
                <MDBTypography listUnStyled className="text-start">
                    <ul>
                    <li>Bring a cashier’s check made payable to the title company for the amount of your closing costs.</li>
                    <li>Alert us if your salary or other compensation changes from what is documented on your loan application.</li>
                    <li>Notify us if your address changes from what appears on your original loan application. We will complete rental and mortgage verification for all of your residences within the last two years.</li>
                    <li>Acquire homeowner’s insurance with minimum coverage equal to the amount of your total loan or the replacement value of the house.</li>
                    <li>Share the agent’s name and phone number with your PrimeLending Loan Officer at least 10 days prior to closing.</li>
                    <li>Keep documentation on any large and significant deposits into your bank accounts. This type of “paper trail” is compiled of copies of all paperwork necessary to prove a financial transaction: copies of all checks, deposit slips, loan paperwork, forms to liquidate assets, etc.</li>
                    <li>Report if you transfer funds from one account to another. Provide records on such transactions.</li>
                    <li>Verify that you have a clear termite inspection on the property. If the termite report is not clear, provide a receipt for treatment that shows the chemicals and the amount used for treatment.</li>
                    </ul>
                    </MDBTypography>
          </MDBCol>
          <MDBCol sm="6">
            {" "}
              <h1 className="text-center" style={{fontWeight: '600'}}>Dont's</h1>
              <MDBTypography listUnStyled className="text-start">
                <ul className="text-start">
                    <li>Acquire any additional lines of credit or make any large purchases on existing credit without first consulting your PrimeLending Loan Officer. As examples, purchasing a car or buying major appliances for your new home will negatively change your debt-to-income ratios.</li>
                    <li>Change jobs without consulting us. A change in compensation could affect your ability to qualify. Borrowers must have a two-year history of bonuses and/or commissions to be counted as income. As a quality control check, lenders may verify employment on the day of closing.</li>
                    <li>Co-sign with anyone to obtain a line of credit or make a purchase. The payment will show up on your credit report as an additional debt.</li>
                    <li>Negotiate your contract with an allowance and expect to get money back at closing. An allowance can be used to pay closing costs and/or prepaids. </li>
                </ul>
                </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBCollapse>
    </MDBContainer>
  );
}
