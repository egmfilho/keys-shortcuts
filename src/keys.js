/*
* @Author: egmfilho
* @Date:   2017-05-29 13:39:44
* @Last Modified by:   egmfilho
* @Last Modified time: 2017-07-17 17:42:00
*/

(function () {
	'use strict';

	angular.module('egmfilho.keys', [])
		.constant('KEY_CODES', {
			BACKSPACE: { code: 8, name: 'backspace' },
			TAB: { code: 9, name: 'tab' },
			ENTER: { code: 13, name: 'enter' },
			SHIFT: { code: 16, name: 'shift' },
			CTRL: { code: 17, name: 'ctrl' },
			ALT: { code: 18, name: 'alt' },
			PAUSE_BREAK: { code: 19, name: 'pauseBreak' },
			CAPS_LOCK: { code: 20, name: 'capsLock' },
			ESCAPE: { code: 27, name: 'escape' },
			PAGE_UP: { code: 33, name: 'pageUp' },
			PAGE_DOWN: { code: 34, name: 'pageDown' },
			END: { code: 35, name: 'end' },
			HOME: { code: 36, name: 'home' },
			LEFT_ARROW: { code: 37, name: 'leftArrow' },
			UP_ARROW: { code: 38, name: 'upArrow' },
			RIGHT_ARROW: { code: 39, name: 'rightArrow' },
			DOWN_ARROW: { code: 40, name: 'downArrow' },
			INSERT: { code: 45, name: 'insert' },
			DEL: { code: 46, name: 'del' },
			0: { code: 48, name: '0' },
			1: { code: 49, name: '1' },
			2: { code: 50, name: '2' },
			3: { code: 51, name: '3' },
			4: { code: 52, name: '4' },
			5: { code: 53, name: '5' },
			6: { code: 54, name: '6' },
			7: { code: 55, name: '7' },
			8: { code: 56, name: '8' },
			9: { code: 57, name: '9' },
			A: { code: 65, name: 'a' },
			B: { code: 66, name: 'b' },
			C: { code: 67, name: 'c' },
			D: { code: 68, name: 'd' },
			E: { code: 69, name: 'e' },
			F: { code: 70, name: 'f' },
			G: { code: 71, name: 'g' },
			H: { code: 72, name: 'h' },
			I: { code: 73, name: 'i' },
			J: { code: 74, name: 'j' },
			K: { code: 75, name: 'k' },
			L: { code: 76, name: 'l' },
			M: { code: 77, name: 'm' },
			N: { code: 78, name: 'n' },
			O: { code: 79, name: 'o' },
			P: { code: 80, name: 'p' },
			Q: { code: 81, name: 'q' },
			R: { code: 82, name: 'r' },
			S: { code: 83, name: 's' },
			T: { code: 84, name: 't' },
			U: { code: 85, name: 'u' },
			V: { code: 86, name: 'v' },
			W: { code: 87, name: 'w' },
			X: { code: 88, name: 'x' },
			Y: { code: 89, name: 'y' },
			Z: { code: 90, name: 'z' },
			LEFT_WINDOW_KEY: { code: 91, name: 'leftWindowKey' },
			RIGHT_WINDOW_KEY: { code: 92, name: 'rightWindowKey' },
			SELECT_KEY: { code: 93, name: 'selectKey' },
			NUMPAD_0: { code: 96, name: 'numpad0' },
			NUMPAD_1: { code: 97, name: 'numpad1' },
			NUMPAD_2: { code: 98, name: 'numpad2' },
			NUMPAD_3: { code: 99, name: 'numpad3' },
			NUMPAD_4: { code: 100, name: 'numpad4' },
			NUMPAD_5: { code: 101, name: 'numpad5' },
			NUMPAD_6: { code: 102, name: 'numpad6' },
			NUMPAD_7: { code: 103, name: 'numpad7' },
			NUMPAD_8: { code: 104, name: 'numpad8' },
			NUMPAD_9: { code: 105, name: 'numpad9' },
			MULTIPLY: { code: 106, name: 'multiply' },
			ADD: { code: 107, name: 'add' },
			SUBTRACT: { code: 109, name: 'subtract' },
			DECIMAL_POINT: { code: 110, name: 'decimalPoint' },
			DIVIDE: { code: 111, name: 'divide' },
			F1: { code: 112, name: 'f1' },
			F2: { code: 113, name: 'f2' },
			F3: { code: 114, name: 'f3' },
			F4: { code: 115, name: 'f4' },
			F5: { code: 116, name: 'f5' },
			F6: { code: 117, name: 'f6' },
			F7: { code: 118, name: 'f7' },
			F8: { code: 119, name: 'f8' },
			F9: { code: 120, name: 'f9' },
			F10: { code: 121, name: 'f10' },
			F11: { code: 122, name: 'f11' },
			F12: { code: 123, name: 'f12' },
			NUM_LOCK: { code: 144, name: 'numLock' },
			SCROLL_LOCK: { code: 145, name: 'scrollLock' },
			SEMI_COLON: { code: 186, name: 'semiColon' },
			EQUAL_SIGN: { code: 187, name: 'equalSign' },
			COMMA: { code: 188, name: 'comma' },
			DASH: { code: 189, name: 'dash' },
			PERIOD: { code: 190, name: 'period' },
			FORWARD_SLASH: { code: 191, name: 'forwardSlash' },
			GRAVE_ACCENT: { code: 192, name: 'graveAccent' },
			OPEN_BRACKET: { code: 219, name: 'openBracket' },
			BACK_SLASH: { code: 220, name: 'backSlash' },
			CLOSE_BRACKET: { code: 221, name: 'closeBracket' },
			SINGLE_QUOTE: { code: 222, name: 'singleQuote' }
		})
		.factory('KeyBuffer', ['KEY_CODES', function (keys) {

			var map = {};

			angular.forEach(keys, function (value, key) {
				map[value.code] = false;
			});

			function clear() {
				angular.forEach(map, function (value, key) {
					map[key] = false;
				});
			}

			return {
				map: map,
				clear: clear
			};

		}])
		.directive('keysShortcuts', ['KEY_CODES', 'KeyBuffer', function (keys, buffer) {

			function link(scope, element, attrs) {

				function capitalize(string) {
					return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
				}

				function getKeyByCode(code) {
					return Object.values(keys).find(function(k) {
						return k.code == code;
					});
				}

				function action(event, name) {
					if (!buffer.map[event.keyCode]) {
						buffer.map[event.keyCode] = true;

						if (buffer.map[keys.SHIFT.code] && attrs['shift' + capitalize(name)]) {
							scope.$apply(function () {
								scope.$eval(attrs['shift' + capitalize(name)], { $event: event });
							});
						} else if (buffer.map[keys.CTRL.code] && attrs['ctrl' + capitalize(name)]) {
							scope.$apply(function () {
								scope.$eval(attrs['ctrl' + capitalize(name)], { $event: event });
							});
						} else if (buffer.map[keys.ALT.code] && attrs['alt' + capitalize(name)]) {
							scope.$apply(function () {
								scope.$eval(attrs['alt' + capitalize(name)], { $event: event });
							});
						} else {
							scope.$apply(function () {
								scope.$eval(attrs[name.toLowerCase()], { $event: event });
							});
						}

						if (attrs.preventDefault) event.preventDefault();
					}
				}

				element.bind('keydown', function (event) {
					if (event.keyCode in buffer.map) {

						switch (event.keyCode) {
							case keys.SHIFT.code:
								if (!buffer.map[event.keyCode]) {
									buffer.map[event.keyCode] = true;
								}
								break;

							case keys.CTRL.code:
								if (!buffer.map[event.keyCode]) {
									buffer.map[event.keyCode] = true;
								}
								break;

							case keys.ALT.code:
								if (!buffer.map[event.keyCode]) {
									buffer.map[event.keyCode] = true;
								}
								break;

							default:
								var keyName = getKeyByCode(event.keyCode).name;

								if (attrs[keyName] || attrs['shift' + capitalize(keyName)] || attrs['ctrl' + capitalize(keyName)] || attrs['alt' + capitalize(keyName)]) {
									action(event, keyName);
								}
								break;
						}
					}
				});

				element.bind('keyup', function (event) {
					if (event.keyCode in buffer.map) {
						buffer.map[event.keyCode] = false;
					}
				});

				element.bind('blur', function() {
					buffer.clear();
				});
			}

			return {
				restrict: 'AE',
				link: link
			}

		}]);

} ());
