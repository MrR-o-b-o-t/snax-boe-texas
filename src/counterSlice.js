import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    teamId: 0,
    David: {
      name: "David Restrepo",
      bio: "David was raised in Florida and moved to the beautiful Lone Star State in September of 2006. He began his career in finance in the year 2005, and worked for Citi Bank, Washington Mutual and Chase Bank before joining Bank of England Mortgage as a Sr. Loan officer in 2016. His experience in bank management taught him the importance of exceptional customer service, and he applies that experience to every interaction he has with a client. He loves working with Bank of England Mortgage because as a boutique bank, they have great lending programs that can be tailored to fit each clients needs. I enjoy being part of the process and helping clients get the right financing for their homes.",
      email: 'drestrepo@boemortgage.com',
      phone: '(214) 483-9206'
    }
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.teamId += 1;
      console.log(state.teamId)
    },
    decrement: (state) => {
      state.value -= 1;
    },
    teamMember: (state) => {
      state.teamId += 9;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incTeamMember: (state, action) => {
      state.teamId += action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, teamMember, incrementByAmount, incTeamMember } = counterSlice.actions;

export default counterSlice.reducer;
