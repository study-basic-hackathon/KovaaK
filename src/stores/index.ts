import { configureStore } from "@reduxjs/toolkit";
import { roomReducer } from "../reducers/room-reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { answerReducer } from "@/reducers/answer-reducer";
import { guessReducer } from "@/reducers/guess-reducer";

export const store = configureStore({
  reducer: {
    roomInfo: roomReducer,
    answers: answerReducer,
    guesses: guessReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
