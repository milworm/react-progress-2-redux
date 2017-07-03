// action types
export const START = 'REACT_PROGRESS/START'
export const END = 'REACT_PROGRESS/END'
export const END_ALL = 'REACT_PROGRESS/END_ALL'

// action creators
function show () {
	return {
		type: START	
	}
}

function hide () {
	return {
		type: END
	}
}

function hideAll () {
	return {
		type: END_ALL
	}
}

export const actions = {
	show,
	hide,
	hideAll
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
		case END_ALL:
			return {
				...state,
				action: 'hideAll'
			}
		default:
			return state
	}
}