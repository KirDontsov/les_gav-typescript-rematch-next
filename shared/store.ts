import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import { models, RootModel } from "./models";

const exampleInitialState = {
	counter: 5
};

export const initializeStore = (initialState = exampleInitialState) =>
	init({
		models,
		redux: {
			initialState
		}
	});

export type Store = typeof initializeStore;
export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
