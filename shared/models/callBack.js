export const callBack = {
	state: {
		active: false,
		addClass: false
	},
	reducers: {
		changeClass: (state, payload) => ({
			...state,
			addClass: payload
		}),
		changeActive: (state, payload) => ({
			...state,
			active: payload
		})
	}
};
