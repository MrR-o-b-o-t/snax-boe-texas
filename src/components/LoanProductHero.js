import React, {useState} from 'react'
import { MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit"

export default function LoanProductHero(props) {
    const image = useState(props.image)
    const productName = useState(props.name)
    const description = useState(props.description)

    return(
        <MDBRow
        className="d-flex align-items-end justify-content-center"
        style={{
          backgroundImage: `url({${image}})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
          <MDBRow
            style={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              width: "95%",
              padding: "30px",
            }}
            className="mb-8 m-auto"
          >
            <MDBCol
              md="8"
              className="d-flex justify-content-start align-items-end"
            >
              <div>
                <h4
                id="lpBannerText"
                >
                  {productName}
                </h4>
                <p className="">
                  {description}
                </p>
              </div>
            </MDBCol>
            <MDBCol md="4" className="text-center">
              <div>
                <p className="p-0 m-1">Contact us today to get started</p>
                <p className="p-0 m-1">214-396-6450</p>
                <p className="p-0 m-1">or</p>
                <MDBBtn
                  rippleColor="success"
                  color="white"
                  style={{
                    color: "black",
                    fontWeight: "600",
                    backgroundColor: "white",
                    padding: "11px 20px 11px 20px",
                    fontSize: "12px",
                    border: "2px solid grey",
                  }}
                >
                  Start an Application
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
      </MDBRow>
    )
}