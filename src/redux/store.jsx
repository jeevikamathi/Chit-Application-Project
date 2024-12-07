import { configureStore } from "@reduxjs/toolkit";
import monthsReducer from "./monthSlice";

const store = configureStore({
  reducer: {
    months: monthsReducer,
  },
});
export default store;
