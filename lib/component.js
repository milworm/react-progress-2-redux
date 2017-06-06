'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = (_dec = (0, _reactRedux.connect)(function (state) {
	return state.progressRedux;
}), _dec(_class = (_temp2 = _class2 = function (_React$PureComponent) {
	_inherits(Component, _React$PureComponent);

	function Component() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Component);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref, [this].concat(args))), _this), _this.count = 0, _this.runningTimerId = null, _this.hidingTimerId = null, _this.toHiddenState = function () {
			_this.refs.element.setAttribute('data-state', 'hidden');
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Component, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.action == 'show') this.show();else if (nextProps.action == 'hide') this.hide();
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return nextProps.action == this.props.action;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    cls = _props.cls,
			    style = _props.style;


			return _react2.default.createElement(
				'div',
				{ className: 'loader-60devs ' + cls, style: style, 'data-state': 'hidden', ref: 'element' },
				_react2.default.createElement('div', { className: 'loader-60devs-progress' })
			);
		}
	}, {
		key: 'show',
		value: function show() {
			if (++this.count > 1) return;

			clearTimeout(this.hidingTimerId);

			var element = this.refs.element;

			var progressEl = element.querySelector('.loader-60devs-progress');

			element.setAttribute('data-state', 'hidden'
			// the only working way to restart a transition on firefox
			);progressEl.outerHTML = progressEl.outerHTML;
			element.offsetHeight;
			element.setAttribute('data-state', '');
			element.offsetHeight;
			element.setAttribute('data-state', 'running');
		}
	}, {
		key: 'hide',
		value: function hide() {
			if (--this.count > 0) return;

			this.refs.element.setAttribute('data-state', 'finishing');
			this.hidingTimerId = setTimeout(this.toHiddenState, 500);
		}
	}, {
		key: 'hideAll',
		value: function hideAll() {
			this.count = 1;
			this.hide();
		}
	}, {
		key: 'isVisible',
		value: function isVisible() {
			return this.refs.element.getAttribute('data-state') != 'hidden';
		}
	}]);

	return Component;
}(_react2.default.PureComponent), _class2.propTypes = {
	cls: _propTypes2.default.string,
	style: _propTypes2.default.object,
	state: _propTypes2.default.string
}, _class2.defaultProps = {
	cls: '',
	style: {}
}, _temp2)) || _class);
exports.default = Component;