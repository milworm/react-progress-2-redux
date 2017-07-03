'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.reducer = reducer;
// action types
var START = exports.START = 'REACT_PROGRESS/START';
var END = exports.END = 'REACT_PROGRESS/END';
var END_ALL = exports.END_ALL = 'REACT_PROGRESS/END_ALL';

// action creators
function show() {
	return {
		type: START
	};
}

function hide() {
	return {
		type: END
	};
}

function hideAll() {
	return {
		type: END_ALL
	};
}

var actions = exports.actions = {
	show: show,
	hide: hide,
	hideAll: hideAll

	// export const middleware = store => next => action => {
	// 	if (action.type == START)
	// 		showProgress()
	// 	else if (action.type == END)
	// 		hideProgress()
	// 	else
	// 		next(action)
	// }

};var initialState = {
	state: 'hidden'
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case START:
			return _extends({}, state, {
				action: 'show'
			});
		case END:
			return _extends({}, state, {
				action: 'hide'
			});
		case END_ALL:
			return _extends({}, state, {
				action: 'hideAll'
			});
		default:
			return state;
	}
}