import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { action } from "mobx";

export declare namespace i {
	type user = {
		date_of_birth: string;
		email: string;
		full_name: string;
		id: string;
		picture_id: string;
	};
	type user_picture = string | null;
}

export interface AuthState {
	user: i.user | null;
	user_loading: boolean;
	user_picture: i.user_picture | null;
}

const initialState: AuthState = {
	user: null,
	user_loading: false,
	user_picture: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<i.user>) => {
			state.user = action.payload;
		},
		userLoading: (state, action: PayloadAction<boolean>) => {
			state.user_loading = action.payload;
		},
		setUserPicture: (state, action: PayloadAction<i.user_picture>) => {
			state.user_picture = action.payload;
		},
		eraseUser: (state) => {
			state.user = null;
			state.user_picture = null;
		},
	},
});

export const Actions = userSlice.actions;

export default userSlice.reducer;
