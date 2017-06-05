import { showProgress, hideProgress } from 'progress-dev/index.jsx'

export const LOAD_USERS = 'APP/LOAD_USERS'
export const LOAD_USERS_SUCCESS = 'APP/LOAD_USERS_SUCCESS'

function request (time) {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

export function loadUsers (delay) {
	return async (dispatch, getState) => {
		let items = [{
			first_name: 'John',
			last_name: 'Doe',
			id: 1
		}]

		dispatch(showProgress())
		await request(delay)
		dispatch({ type: LOAD_USERS_SUCCESS, items })
		dispatch(hideProgress())
	}
}

export const initialState = {
	items: []
}

export const actions = {
	loadUsers
}

export function reducer (state = initialState, action = {}) {
	switch (action.type) {
		case LOAD_USERS_SUCCESS:
			return {
				items: action.items
			}

		default:
			return state
	}
}