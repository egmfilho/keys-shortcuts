/*
* @Author: egmfilho
* @Date:   2017-05-29 13:39:44
* @Last Modified by:   egmfilho
* @Last Modified time: 2017-05-29 17:01:45
*/

(function () {
	'use strict';

	angular.module('egmfilho.keys', [])
		.constant('KEY_CODES', {
			BACKSPACE: 8,
			TAB: 9,
			ENTER: 13,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAUSE_BREAK: 19,
			CAPS_LOCK: 20,
			ESCAPE: 27,
			PAGE_UP: 33,
			PAGE_DOWN: 34,
			END: 35,
			HOME: 36,
			LEFT_ARROW: 37,
			UP_ARROW: 38,
			RIGHT_ARROW: 39,
			DOWN_ARROW: 40,
			INSERT: 45,
			DEL: 46,
			0: 48,
			1: 49,
			2: 50,
			3: 51,
			4: 52,
			5: 53,
			6: 54,
			7: 55,
			8: 56,
			9: 57,
			A: 65,
			B: 66,
			C: 67,
			D: 68,
			E: 69,
			F: 70,
			G: 71,
			H: 72,
			I: 73,
			J: 74,
			K: 75,
			L: 76,
			M: 77,
			N: 78,
			O: 79,
			P: 80,
			Q: 81,
			R: 82,
			S: 83,
			T: 84,
			U: 85,
			V: 86,
			W: 87,
			X: 88,
			Y: 89,
			Z: 90,
			LEFT_WINDOW_KEY: 91,
			RIGHT_WINDOW_KEY: 92,
			SELECT_KEY: 93,
			NUMPAD_0: 96,
			NUMPAD_1: 97,
			NUMPAD_2: 98,
			NUMPAD_3: 99,
			NUMPAD_4: 100,
			NUMPAD_5: 101,
			NUMPAD_6: 102,
			NUMPAD_7: 103,
			NUMPAD_8: 104,
			NUMPAD_9: 105,
			MULTIPLY: 106,
			ADD: 107,
			SUBTRACT: 109,
			DECIMAL_POINT: 110,
			DIVIDE: 111,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			NUM_LOCK: 144,
			SCROLL_LOCK: 145,
			SEMI_COLON: 186,
			EQUAL_SIGN: 187,
			COMMA: 188,
			DASH: 189,
			PERIOD: 190,
			FORWARD_SLASH: 191,
			GRAVE_ACCENT: 192,
			OPEN_BRACKET: 219,
			BACK_SLASH: 220,
			CLOSE_BRACKET: 221,
			SINGLE_QUOTE: 222
		})
		.factory('KeyBuffer', ['KEY_CODES', function (keys) {

			var map = {};

			angular.forEach(keys, function (value, key) {
				map[value] = false;
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

				function action(event, name) {
					if (!buffer.map[event.keyCode]) {
						buffer.map[event.keyCode] = true;

						if (buffer.map[keys.SHIFT] && attrs['shift' + capitalize(name)]) {
							scope.$apply(function () {
								scope.$eval(attrs['shift' + capitalize(name)], { $event: event });
							});
						} else if (buffer.map[keys.CTRL] && attrs['ctrl' + capitalize(name)]) {
							scope.$apply(function () {
								scope.$eval(attrs['ctrl' + capitalize(name)], { $event: event });
							});
						} else if (buffer.map[keys.ALT] && attrs['alt' + capitalize(name)]) {
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
							case keys.SHIFT:
								if (!buffer.map[event.keyCode]) {
									buffer.map[event.keyCode] = true;
								}
								break;

							case keys.CTRL:
								if (!buffer.map[event.keyCode]) {
									buffer.map[event.keyCode] = true;
								}
								break;

							case keys.ALT:
								if (!buffer.map[event.keyCode]) {
									buffer.map[event.keyCode] = true;
								}
								break;

							case keys.ENTER:
								action(event, 'enter');
								break;

							case keys.BACKSPACE:
								action(event, 'backspace');
								break;

							case keys.TAB:
								action(event, 'tab');
								break;

							case keys.ESCAPE:
								action(event, 'escape');
								break;

							case keys.F1:
								action(event, 'f1');
								break;

							case keys.F2:
								action(event, 'f2');
								break;

							case keys.F3:
								action(event, 'f3');
								break;

							case keys.F4:
								action(event, 'f4');
								break;

							case keys.F5:
								action(event, 'f5');
								break;

							case keys.F6:
								action(event, 'f6');
								break;

							case keys.F7:
								action(event, 'f7');
								break;

							case keys.F8:
								action(event, 'f8');
								break;

							case keys.F9:
								action(event, 'f9');
								break;

							case keys.F10:
								action(event, 'f10');
								break;

							case keys.F11:
								action(event, 'f11');
								break;

							case keys.F12:
								action(event, 'f12');
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
