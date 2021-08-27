import React, { useState } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit"
import house from "../images/TeamBanner.jpg"

export default function Media() {
  function handleClick(e) {
    e.preventDefault()
    console.log("You clicked submit.")
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
          <MDBCol sm="5">
            <h1 style={{ fontWeight: "bold", fontSize: "48px" }}>Media</h1>
            <h4 style={{ fontWeight: "bold" }}>
              Browse our media collection & get to know your BOE staff.
            </h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid>
        <MDBRow className="g-1 mt-5">
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://boeassets.com/videos/boetexas/BOE-Golf-1.mp4"
                title="YouTube video"
                allowfullscreen={true}
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/BOE-Golf-2.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Advice_to_new_loan_officers.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/BOETexas_Leadership.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Bulding_Relationships.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Buying_in_a_sellers_market.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Customer_Testemony.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Meet_Abigail.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Meet_Ashley.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://boeassets.com/videos/boetexas/Meet_Keri.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Trust_with_first_time_home_buyers.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/What_is_your_roll_at_BOE_Texas.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/01-BOE_Live_full_interview_with_-_Deborah_Byrd.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/02-Good_vs._GREAT_service_Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/03-How_do_you_deal_with_changes_Shawn_Fehily.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/04-Meet_Marcus_Lepp.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/2021-02-10-16-30-59-Live.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/About_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://boeassets.com/videos/boetexas/About_Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Battle-of-the-Branches.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Best_Part_About_BOETexas.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/BOE-LIVE_TEXAS.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/BOE_Live_with_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/BOE_Texas_Flight.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/BOE_Texas_Office_Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Community.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Customer_Service_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Day_in_the_Office_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Deborah-5.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Dont_Rent_Buy_Walker_Jones.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://boeassets.com/videos/boetexas/Eyes_and_Ears_of_the_Office_Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/FIrst_Loan_Walker_Jones.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/First_Time_Home_Buyers.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Giving_the_Best_Service.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Health_vs_mortgages_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_college_affect_your_career_Shawn_Fehily.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_you_and_Marcus_Lepp_meet_Shawn_Fehily.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_you_get_started_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_you_get_started_David_Restrepo_1.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_you_get_started_Meghan_Stevenson.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_you_get_started_Ross.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_you_get_started.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_do_you_balance_work_and_family_Meghan_Stevenson.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://boeassets.com/videos/boetexas/How_is_change_good_Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Is_change_good_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Keeping_it_local_David_Restrepo.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Keys_to_Success_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Learning_the_mortgage_business_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Living_in_your_shoes_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Meet_Jeffrey_Murphy.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/New_to_Home_Buying.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Not_your_typical_9_to_5_ Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://boeassets.com/videos/boetexas/Preparing_for_the_future_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Refi_with_Shawn.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Relationships_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Self_Employed_Borrowers_Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Selling_boats_vs_Mortgages_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Selling_memories_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Servant_Leadership_Ariel_Carballo.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Success_Stories_Meghan_Stevenson.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/What_are_the_first_steps_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/What_are_your_strengths_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/What_challenges_you_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/What_is_your_favorite_part_about_BOE_Meghan_Stevenson.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/What_makes_it_worthwhile_Chris_Harding.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                onClick={handleClick}
                src="https://boeassets.com/videos/boetexas/What_means_the_most_to_you_Meghan_Stevenson.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Who_is_Mandy_Gomez.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Who-is-Deborah-Byrd.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Why_do_you_enjoy_the_workspace_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Why_do_you_like_BOE_David_Restrepo_1.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Why_do_you_like_it.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Why_do_you_like_mortgages_Ross_Rhodes.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/How_did_you_get_started_Cory_Rice.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Why_have_a_unique_office_Shawn_Fehily.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
          <MDBCol lg="4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://boeassets.com/videos/boetexas/Why_Mortgages_Ariel_Carballo.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  )
}
