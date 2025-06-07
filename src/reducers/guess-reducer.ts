import { GuessData } from "@/app/api/guess/route";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IGuessState {
  guesses: GuessData[];
}

const initialState: IGuessState = {
  guesses: [],
};

const guessSlice = createSlice({
  name: "guesses",
  initialState,
  reducers: {
    addGuess: (state, action: PayloadAction<GuessData>) => {
      state.guesses = [...state.guesses, action.payload];
    },
    resetGuesss: (state, action) => {
      state.guesses = [];
    },
  },
});

export const { addGuess, resetGuesss } = guessSlice.actions;
export const guessReducer = guessSlice.reducer;
