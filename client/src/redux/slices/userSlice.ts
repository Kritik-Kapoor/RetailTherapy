import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  token: string;
  name: string;
}

const initialState: UserState = {
  token: "",
  name: "",
};

export const userSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ token: string; name: string }>
    ) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
