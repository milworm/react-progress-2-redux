import Progress from './component.jsx'
import { reducer, actions } from './reducer.jsx'

const { showProgress, hideProgress } = actions

export {
	Progress,
	reducer,
	showProgress,
	hideProgress
}