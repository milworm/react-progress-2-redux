'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.hideProgressAll = exports.hideProgress = exports.showProgress = exports.hideAll = exports.hide = exports.show = exports.reducer = exports.Progress = undefined;

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _reducer = require('./reducer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = _reducer.actions.show,
    hide = _reducer.actions.hide,
    hideAll = _reducer.actions.hideAll;
exports.Progress = _component2.default;
exports.reducer = _reducer.reducer;
exports.show = show;
exports.hide = hide;
exports.hideAll = hideAll;
exports.showProgress = show;
exports.hideProgress = hide;
exports.hideProgressAll = hideAll;