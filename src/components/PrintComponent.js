import React, { useRef } from "react";
import { MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import ReactToPrint from "react-to-print";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <MDBBtn id="s__btn">Print</MDBBtn>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <h2>4 WEEKS PRIOR TO MOVE</h2>
        <MDBTypography listUnStyled className="text-start">
          <ul>
            <li>
              Make a “Move” file folder to keep track of documentation and
              records of the moving process.
            </li>
            <li>
              Set up a calendar for your move to mark deadlines and reminders.
            </li>
            <li>
              Hold a garage sale to rid yourself of furniture, clothes and other
              items you’d prefer not to move.
            </li>
            <li>
              Contact a local charity to donate any unneeded furniture and items
              not sold in the garage sale.
            </li>
            <li>
              Collect boxes, tape, rope, wrapping/padding material and other
              moving supplies.
            </li>
            <li>
              Line up a moving company (or make reservations to rent a moving
              truck if you plan to move yourself).
            </li>
            <li>Gather doctors, dentists, other medical and school records.</li>
            <li>
              Put together (and keep accessible) all financial, tax, and
              employment documentation that may be needed during your loan
              process.
            </li>
            <li>
              Contact your insurance company to transfer your policies (life,
              auto, homeowners).
            </li>
          </ul>
        </MDBTypography>
        <h2>3 WEEKS PRIOR TO MOVE</h2>
        <MDBTypography listUnStyled className="text-start">
          <ul>
            <li>
              Set a cutoff date with your current utility providers (this can
              include telephone, gas, electric, water, garage, and cable).
            </li>
            <li>
              Establish a start date for utility services at your new home.
            </li>
            <li>Let friends and relatives know of your upcoming move.</li>
            <li>
              Donate canned goods and other non-perishable food items to a local
              charity to save the expense of moving them.
            </li>
            <li>
              Verify your Voter Registration information and make any necessary
              changes in light of your move.
            </li>
            <li>
              Register your new address with your subscriptions to newspapers,
              magazines, and association memberships.
            </li>
            <li>
              Complete a change of address card with your local post office.
            </li>
            <li>
              Research and keep record of tax deductions on moving expenses.
            </li>
          </ul>
        </MDBTypography>
        <h2>2 WEEKS PRIOR TO MOVE</h2>
        <MDBTypography listUnStyled className="text-start">
          <ul>
            <li>
              Transfer stocks, bonds, bank accounts, and contents of safety
              deposit boxes to a trusted financial institution near your new
              home.
            </li>
            <li>
              Organize the clothes you will be moving; separate them into
              suitcases, keeping those you need readily available.
            </li>
            <li>
              Review the moving checklist so far, making sure you are still on
              track for the move.
            </li>
          </ul>
        </MDBTypography>
        <h2>1 WEEKS PRIOR TO MOVE</h2>
        <MDBTypography listUnStyled className="text-start">
          <ul>
            <li>
              Drain outdoor equipment: water from hoses, propane tanks from
              barbecue grills, and gas and oil from lawn mowers.
            </li>
            <li>
              Discard any aerosol, paint, oils, and all flammable and/or toxic
              chemicals.
            </li>
            <li>
              Label items you need to easily access and place them in a separate
              room or closet.
            </li>
            <li>
              Schedule a pest control company to service your home before moving
              — especially on new construction.
            </li>
            <li>
              Clean your refrigerator and let it air out at least 24 hours
              before moving.
            </li>
          </ul>
        </MDBTypography>
        <h2>Move Out Day</h2>
        <MDBTypography listUnStyled className="text-start">
          <ul>
            <li>RELAX.</li>
            <li>
              Load items and boxes that you’ll need first last. (Those items
              packed last will be unloaded first.)
            </li>
            <li>
              Label items you need to easily access and place them in a separate
              room or closet.
            </li>
            <li>
              Conduct a final walk through of your home once everything is out
              of the house; check cupboards, closets, behind doors, attics,
              stairwells, overhead in the garage, outside the home, and any
              storage sheds.
            </li>
          </ul>
        </MDBTypography>
        <h2>Move In Day</h2>
        <MDBTypography listUnStyled className="text-start">
          <ul>
            <li>
              Prepare your new home before the moving trucks arrive; have it
              clean and be prepared to instruct where you’d like items placed.
            </li>
            <li>Take some time, sit back, and enjoy your new home!</li>
          </ul>
        </MDBTypography>
      </div>
    );
  }
}
