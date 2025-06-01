import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IRoomState {
  members: string[];
}

const initialState: IRoomState = {
  members: [],
};

const roomSlice = createSlice({
  name: "roomInfo",
  initialState,
  reducers: {
    addMembers: (state, action: PayloadAction<string>) => {
      state.members = [...state.members, action.payload];
    },
    removeMembers: (state, action: PayloadAction<string>) => {
      state.members = state.members.filter(
        (_, i) => i !== state.members.indexOf(action.payload)
      );
    },
  },
});

export const { addMembers, removeMembers } = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
