import React, { useState } from "react"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBAnimation,
} from "mdb-react-ui-kit"

export default function LoanCards() {
  return (
    <>
      {/* LoanCards for desktop displays (Animations included) */}
      <MDBContainer
        className="d-none d-md-block overflow-hidden pb-4"
        id="loanCards"
      >
        <MDBRow>
          <MDBCol sm="12" className="text-center mt-4 mb-4">
            <h2 style={{ fontWeight: "bold", color: "black" }}>
              Understand Your Mortgage Options
            </h2>
          </MDBCol>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol md="4">
            <MDBAnimation
              animation="slide-in-left"
              start="onScroll"
              duration={1000}
              className="h-100"
            >
              <MDBCard
                style={{ padding: "10px", cursor: "default" }}
                alignment="center"
                className="h-100 shadow-4-strong"
              >
                <MDBCardBody>
                  <MDBCardTitle>Conventional</MDBCardTitle>
                  <MDBCardText class="text-start">
                    A conventional mortgage or conventional loan is a home
                    buyers loan that is not offered or secured by a government
                    entity. It is available through or guaranteed by a private
                    lender or the two government sponsored enterprises - Fannie
                    Mae and Freddie Mac.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4">
            <MDBAnimation
              animation="slide-in-down"
              start="onScroll"
              duration={1200}
              className="h-100"
            >
              <MDBCard
                style={{ padding: "10px" }}
                alignment="center"
                className="h-100 shadow-4-strong"
              >
                <MDBCardBody>
                  <MDBCardTitle>FHA</MDBCardTitle>
                  <MDBCardText class="text-start">
                    A Federal Housing Administration (FHA) loan is a mortgage
                    that is insured by the Federal Housing Administration and
                    issued by an FHA-aprroved lender. FHA loans are designed for
                    middle-income borrowers; they require a lower minimum down
                    payment and lower credit scores than many conventional
                    loans.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4">
            <MDBAnimation
              animation="slide-in-right"
              start="onScroll"
              duration={1000}
              className="h-100"
            >
              <MDBCard
                style={{ padding: "10px", cursor: "default" }}
                alignment="center"
                className="h-100 shadow-4-strong"
              >
                <MDBCardBody>
                  <MDBCardTitle>VA</MDBCardTitle>
                  <MDBCardText class="text-start">
                  VA loans are a type of military loan that mortgage lenders issue to qualified veterans, active service members and spouses. They’re backed by the government through the Department of Veterans Affairs (VA).
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 mt-3">
          <MDBCol md="4">
            <MDBAnimation
              animation="slide-in-left"
              start="onScroll"
              duration={1000}
              className="h-100"
            >
              <MDBCard
                style={{ padding: "10px", height: "23vh", cursor: "default" }}
                alignment="center"
                className="h-100 shadow-4-strong"
              >
                <MDBCardBody>
                  <MDBCardTitle>USDA</MDBCardTitle>
                  <MDBCardText class="text-start">
                    USDA home loans open up the dream of owning a home to people
                    in pow-polulation areas who otherwise could not afford it.
                    If you live in a place with a population of less than 35,000
                    and you can't qualify for a conventional loan, you may
                    qualify for a USDA guaranteed loan or a USDA direct loan.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4">
            <MDBAnimation
              animation="slide-in-up"
              start="onScroll"
              duration={1200}
              className="h-100"
            >
              <MDBCard
                style={{ padding: "10px", height: "23vh", cursor: "default" }}
                alignment="center"
                className="h-100 shadow-4-strong"
              >
                <MDBCardBody>
                  <MDBCardTitle>BOND</MDBCardTitle>
                  <MDBCardText class="text-start">
                    A mortgage revenue bond (MRB) is a type of municipal bond
                    that is issues by local housing authorities to finance
                    mortgages for qualified, usually people whose self-reported
                    incomes were in the lowest income bracket, first-time home
                    buyers.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4">
            <MDBAnimation
              animation="slide-in-right"
              start="onScroll"
              duration={1000}
              className="h-100"
            >
              <MDBCard
                style={{ padding: "10px", height: "23vh", cursor: "default" }}
                alignment="center"
                className="h-100 shadow-4-strong"
              >
                <MDBCardBody>
                  <MDBCardTitle>JUMBO</MDBCardTitle>
                  <MDBCardText class="text-start">
                    A jumbo loan is a type of financing that exceeds the limits
                    set by the Federal Housing Finance Agency and cannot be
                    purchased, guaranteed, or securitized by Fannie Mae or
                    Freddie Mac. Homeowners must undergo more rigorous credit
                    requirements than those applying for a conventional loan.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* LoanCards for mobile displays (Animations removed) */}
      <MDBContainer className="d-md-none overflow-hidden pb-4">
        <MDBRow>
          <MDBCol sm="12" className="text-center mt-4 mb-4">
            <h2 style={{ fontWeight: "bold", color: "black" }}>
              Understand Your Mortgage Options
            </h2>
          </MDBCol>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol md="4">
            <MDBCard
              style={{ padding: "10px", cursor: "default" }}
              alignment="center"
              className="h-100 shadow-4-strong"
            >
              <MDBCardBody>
                <MDBCardTitle>Conventional</MDBCardTitle>
                <MDBCardText class="text-start">
                  A conventional mortgage or conventional loan is a home buyers
                  loan that is not offered or secured by a government entity. It
                  is available through or guaranteed by a private lender or the
                  two government sponsored enterprises - Fannie Mae and Freddie
                  Mac.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard
              style={{ padding: "10px" }}
              alignment="center"
              className="h-100 shadow-4-strong"
            >
              <MDBCardBody>
                <MDBCardTitle>FHA</MDBCardTitle>
                <MDBCardText class="text-start">
                  A Federal Housing Administration (FHA) loan is a mortgage that
                  is insured by the Federal Housing Administration and issued by
                  an FHA-aprroved lender. FHA loans are designed for
                  middle-income borrowers; they require a lower minimum down
                  payment and lower credit scores than many conventional loans.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard
              style={{ padding: "10px", cursor: "default" }}
              alignment="center"
              className="h-100 shadow-4-strong"
            >
              <MDBCardBody>
                <MDBCardTitle>VA</MDBCardTitle>
                <MDBCardText class="text-start">
                  A VA loan is a mortgage loan available through a program
                  established by the United States Department of Veterans
                  Affairs. The VA sets the qualifying standards, dictates, and
                  terms of the mortgages offered, and guarantees a portion of
                  the loan, but doesn't actually offer the financing.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 mt-3">
          <MDBCol md="4">
            <MDBCard
              style={{ padding: "10px", height: "23vh", cursor: "default" }}
              alignment="center"
              className="h-100 shadow-4-strong"
            >
              <MDBCardBody>
                <MDBCardTitle>USDA</MDBCardTitle>
                <MDBCardText class="text-start">
                  USDA home loans open up the dream of owning a home to people
                  in low-population areas who otherwise could not afford it. If
                  you live in a place with a population of less than 35,000 and
                  you can't qualify for a conventional loan, you may qualify for
                  a USDA guaranteed loan or a USDA direct loan.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard
              style={{ padding: "10px", height: "23vh", cursor: "default" }}
              alignment="center"
              className="h-100 shadow-4-strong"
            >
              <MDBCardBody>
                <MDBCardTitle>BOND</MDBCardTitle>
                <MDBCardText class="text-start">
                  A mortgage revenue bond (MRB) is a type of municipal bond that
                  is issues by local housing authorities to finance mortgages
                  for qualified, usually people whose self-reported incomes were
                  in the lowest income bracket, first-time home buyers.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard
              style={{ padding: "10px", height: "23vh", cursor: "default" }}
              alignment="center"
              className="h-100 shadow-4-strong"
            >
              <MDBCardBody>
                <MDBCardTitle>JUMBO</MDBCardTitle>
                <MDBCardText class="text-start">
                  A jumbo loan is a type of financing that exceeds the limits
                  set by the Federal Housing Finance Agency and cannot be
                  purchased, guaranteed, or securitized by Fannie Mae or Freddie
                  Mac. Homeowners must undergo more rigorous credit requirements
                  than those applying for a conventional loan.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
