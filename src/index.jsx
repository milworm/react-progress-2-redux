import Progress from './component.jsx'
import { reducer, actions } from './reducer.jsx'

const { show, hide, hideAll } = actions

export {
	Progress,
	reducer,
	show,
	hide,
	hideAll,
	showProgress: show,
	hideProgress: hide,
	hideProgressAll: hideAll,
}