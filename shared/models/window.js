export const windowModel = {
	state: {
		width: null,
		isMobile: false
	},
	reducers: {
		setWidth(state, payload) {
			return {
				...state,
				width: payload
			};
		},
		setIsMobile(state, payload) {
			return {
				...state,
				isMobile: payload
			};
		}
	}
};
