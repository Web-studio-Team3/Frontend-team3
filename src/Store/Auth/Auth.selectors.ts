import { RootState } from "../store";

export const authTokenSelector = (state: RootState) => state.Auth.token;
