import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type items = {
	[x: string]: any;
	items: i.item[];
	total: number;
};

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
	type setSelectedItem = {
		id: number;
	};
}

export interface AuthState {
	items: items | null;
	getItemsStatus: "loading" | "success" | "error" | null;
	selectedItem: number | null;
}

const initialState: AuthState = {
	items: null,
	getItemsStatus: null,
	selectedItem: null,
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
		setItems: (state, action: PayloadAction<items>) => {
			state.items = action.payload; // Теперь это правильно
		},
		setSelectedItem: (state, action: PayloadAction<i.setSelectedItem>) => {
			state.selectedItem = action.payload.id;
		},
	},
});

export const Actions = itemsSlice.actions;

export default itemsSlice.reducer;
