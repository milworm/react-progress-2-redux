import Progress from './component'
import { reducer, actions } from './reducer'

const { show, hide, hideAll } = actions

export {
	Progress,
	reducer,
	show,
	hide,
	hideAll,
	show as showProgress,
	hide as hideProgress,
	hideAll as hideProgressAll
}