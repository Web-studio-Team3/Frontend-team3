import { RootState } from "../store";

export const foundItemsSelector = (state: RootState) => state.Items.items;
