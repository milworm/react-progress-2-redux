'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var START = 'REACT_PROGRESS_2/START';
var END = 'REACT_PROGRESS_2/END';

var middleware = exports.middleware = function middleware(store) {
	return function (next) {
		return function (action) {
			if (action.type == START) handleStart();else if (action.type == END) handleEnd();else next(action);
		};
	};
};