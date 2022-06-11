import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  memories: [],
  bestMemories: [],
};

const GlobalState = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.currentUser = payload;
    },

   
    /*sign out does not need payload*/
    signOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  createUser,
  signOut,
 
} = GlobalState.actions;

export default GlobalState.reducer;
