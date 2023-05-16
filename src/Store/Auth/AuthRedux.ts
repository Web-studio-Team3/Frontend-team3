import { iApi } from "@api/Account/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
	token: string | null;
	user_id: string | null;
}

declare namespace i {
	type setData = {
		jwt_token: string;
		user_id: string;
	};
}

const initialState: AuthState = {
	token: null,
	user_id: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<i.setData>) => {
			state.token = action.payload.jwt_token;
			state.user_id = action.payload.user_id;
		},
		eraseData: (state) => {
			state.token = null;
			state.user_id = null;
		},
		authorization: (state, action: PayloadAction<iApi.Login>) => {},
		registration: (state, action: PayloadAction<iApi.Registration>) => {},
	},
});

// Action creators are generated for each case reducer function
export const Actions = authSlice.actions;

export default authSlice.reducer;
