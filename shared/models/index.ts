import { shutter } from "./shutter";
import { windowModel } from "./window";
import { form } from "./form";
import { callBack } from "./callBack";

export interface RootModel {
	shutter: typeof shutter;
	form: typeof form;
	windowModel: typeof windowModel;
	callBack: typeof callBack;
}

export const models: RootModel = { shutter, windowModel, form, callBack };
