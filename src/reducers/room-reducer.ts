import { RoomCondition } from "@/types/room-condition";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IRoomState {
  roomName: string;
  roomCondition: RoomCondition;
  members: string[];
}

const initialState: IRoomState = {
  roomName: "",
  roomCondition: RoomCondition.Matching,
  members: [],
};

const roomSlice = createSlice({
  name: "roomInfo",
  initialState,
  reducers: {
    setRoomName: (state, action: PayloadAction<string>) => {
      state.roomName = action.payload;
    },
    setRoomCondition: (state, action: PayloadAction<RoomCondition>) => {
      state.roomCondition = action.payload;
    },
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

export const { setRoomName, setRoomCondition, addMembers, removeMembers } =
  roomSlice.actions;
export const roomReducer = roomSlice.reducer;
