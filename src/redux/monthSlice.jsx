import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  months: [],
};

const monthSlice = createSlice({
  name: "months",
  initialState,
  reducers: {
    setMonths: (state, action) => {
      const { startDate, numMonths } = action.payload;
      const monthsArray = [];
      for (let i = 0; i < numMonths; i++) {
        const month = {
          id: i + 1,
          date: startDate,
        };
        monthsArray.push(month);
      }
      state.months = monthsArray;
    },

    updateMonthDate: (state, action) => {
      const { id, date } = action.payload;
      const monthIndex = state.months.findIndex((month) => month.id === id);
      if (monthIndex !== -1) {
        state.months[monthIndex].date = date;
      }
    },
  },
});

export const { setMonths, updateMonthDate } = monthSlice.actions;
export default monthSlice.reducer;
