import { GuessIncrementData } from "@/app/api/guess/increment/route";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IGuessIncrementState {
  currentShowenAnswerIndex: number;
}

const initialState: IGuessIncrementState = {
  currentShowenAnswerIndex: 0,
};

const guessIncrementSlice = createSlice({
  name: "guesses",
  initialState,
  reducers: {
    incrementGuess: (state, action: PayloadAction<GuessIncrementData>) => {
      state.currentShowenAnswerIndex = action.payload.prevIndex + 1;
    },
  },
});

export const { incrementGuess } = guessIncrementSlice.actions;
export const guessIncrementReducer = guessIncrementSlice.reducer;
