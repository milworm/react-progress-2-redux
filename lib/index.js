'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.hideProgress = exports.showProgress = exports.reducer = exports.Progress = undefined;

var _component = require('./component.jsx');

var _component2 = _interopRequireDefault(_component);

var _reducer = require('./reducer.jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showProgress = _reducer.actions.showProgress,
    hideProgress = _reducer.actions.hideProgress;
exports.Progress = _component2.default;
exports.reducer = _reducer.reducer;
exports.showProgress = showProgress;
exports.hideProgress = hideProgress;