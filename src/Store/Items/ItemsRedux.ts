import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export declare namespace i {
	type createNewItem = {
		category_id: string;
		title: string;
		description: string;
		condition: string;
		address: string;
		cost: string;
		item_status: string;
		picture: Blob;
	};
	type user_picture = string | null;
	type item = {
		category_id: string;
		title: string;
		description: string;
		condition: string;
		address: string;
		cost: string;
		item_status: string;
		id: string;
	};
}

export interface AuthState {
	items: i.item[];
	getItemsStatus: "loading" | "success" | "error" | null;
}

const initialState: AuthState = {
	items: [],
	getItemsStatus: null,
};

export const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		getItems: (state) => {},
		createNewItem: (state, action: PayloadAction<i.createNewItem>) => {},
		setGetItemsStatus: (
			state,
			action: PayloadAction<"loading" | "success" | "error" | null>
		) => {
			state.getItemsStatus = action.payload;
		},
		setItems: (state, action: PayloadAction<i.item[]>) => {
			state.items = action.payload;
		},
	},
});

export const Actions = itemsSlice.actions;

export default itemsSlice.reducer;
