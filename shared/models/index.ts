import { shutter } from "./shutter";
import { windowModel } from "./window";
import { form } from "./form";

export interface RootModel {
	shutter: typeof shutter;
	form: typeof form;
	windowModel: typeof windowModel;
}

export const models: RootModel = { shutter, windowModel, form };
