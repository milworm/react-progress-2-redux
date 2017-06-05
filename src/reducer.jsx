// action types
export const START = 'REACT_PROGRESS/START'
export const END = 'REACT_PROGRESS/END'

// action creators
function showProgress () {
	return {
		type: START	
	}
}

function hideProgress () {
	return {
		type: END
	}
}

export const actions = {
	showProgress,
	hideProgress
}

// export const middleware = store => next => action => {
// 	if (action.type == START)
// 		showProgress()
// 	else if (action.type == END)
// 		hideProgress()
// 	else
// 		next(action)
// }

const initialState = {
	state: 'hidden'
}

export function reducer (state = initialState, action) {
	switch(action.type) {
		case START:
			return {
				...state,
				action: 'show'
			}
		case END:
			return {
				...state,
				action: 'hide'
			}
		default:
			return state
	}
}