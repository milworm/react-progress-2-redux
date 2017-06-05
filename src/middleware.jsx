const START = 'REACT_PROGRESS_2/START'
const END = 'REACT_PROGRESS_2/END'

export const middleware = store => next => action => {
	if (action.type == START)
		handleStart()
	else if (action.type == END)
		handleEnd()
	else
		next(action)
}
