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

				function action(keyCode, attr, callback) {
					if (attr) {
						if (!buffer.map[keyCode]) {
							buffer.map[keyCode] = true;
							scope.$apply(function () {
								scope.$eval(callback);
							});

							if (attrs.preventDefault) {
								event.preventDefault();
							}
						}
					}
				}

				element.bind('keydown', function (event) {
					if (event.keyCode in buffer.map) {

						switch (event.keyCode) {
							case keys.BACKSPACE:
								action(event.keyCode, attrs.backspace, scope.backspace);
								break;

							case keys.TAB:
								action(event.keyCode, attrs.tab, scope.tab);
								break;

							case keys.ENTER:
								if (!buffer.map[event.keyCode] && (attrs.enter || attrs.shiftEnter)) {
									buffer.map[event.keyCode] = true;
									scope.$apply(function () {
										buffer.map[keys.SHIFT] ? scope.$eval(scope.shiftEnter) : scope.$eval(scope.enter);
									});
									event.preventDefault();
								}
								break;

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

							case keys.ESCAPE:
								action(event.keyCode, attrs.escape, scope.escape);
								break;

							case keys.F1:
								action(event.keyCode, attrs.f1, scope.f1);
								break;

							case keys.F2:
								action(event.keyCode, attrs.f2, scope.f2);
								break;

							case keys.F3:
								action(event.keyCode, attrs.f3, scope.f3);
								break;

							case keys.F4:
								action(event.keyCode, attrs.f4, scope.f4);
								break;

							case keys.F5:
								action(event.keyCode, attrs.f5, scope.f5);
								break;

							case keys.F6:
								action(event.keyCode, attrs.f6, scope.f6);
								break;

							case keys.F7:
								action(event.keyCode, attrs.f7, scope.f7);
								break;

							case keys.F8:
								action(event.keyCode, attrs.f8, scope.f8);
								break;

							case keys.F9:
								action(event.keyCode, attrs.f9, scope.f9);
								break;

							case keys.F10:
								action(event.keyCode, attrs.f10, scope.f10);
								break;

							case keys.F11:
								action(event.keyCode, attrs.f11, scope.f11);
								break;

							case keys.F12:
								action(event.keyCode, attrs.f12, scope.f12);
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
				scope: {
					preventDefault: '=',

					shiftEnter: '&',

					backspace: '&',
					tab: '&',
					enter: '&',
					shift: '&',
					ctrl: '&',
					alt: '&',
					pause_break: '&',
					caps_lock: '&',
					escape: '&',
					page_up: '&',
					page_down: '&',
					end: '&',
					home: '&',
					left_arrow: '&',
					up_arrow: '&',
					right_arrow: '&',
					down_arrow: '&',
					insert: '&',
					del: '&',
					0: '&',
					1: '&',
					2: '&',
					3: '&',
					4: '&',
					5: '&',
					6: '&',
					7: '&',
					8: '&',
					9: '&',
					a: '&',
					b: '&',
					c: '&',
					d: '&',
					e: '&',
					f: '&',
					g: '&',
					h: '&',
					i: '&',
					j: '&',
					k: '&',
					l: '&',
					m: '&',
					n: '&',
					o: '&',
					p: '&',
					q: '&',
					r: '&',
					s: '&',
					t: '&',
					u: '&',
					v: '&',
					w: '&',
					x: '&',
					y: '&',
					z: '&',
					left_window_key: '&',
					right_window_key: '&',
					select_key: '&',
					numpad_0: '&',
					numpad_1: '&',
					numpad_2: '&',
					numpad_3: '&',
					numpad_4: '&',
					numpad_5: '&',
					numpad_6: '&',
					numpad_7: '&',
					numpad_8: '&',
					numpad_9: '&',
					multiply: '&',
					add: '&',
					subtract: '&',
					decimal_point: '&',
					divide: '&',
					f1: '&',
					f2: '&',
					f3: '&',
					f4: '&',
					f5: '&',
					f6: '&',
					f7: '&',
					f8: '&',
					f9: '&',
					f10: '&',
					f11: '&',
					f12: '&',
					num_lock: '&',
					scroll_lock: '&',
					semi_colon: '&',
					equal_sign: '&',
					comma: '&',
					dash: '&',
					period: '&',
					forward_slash: '&',
					grave_accent: '&',
					open_bracket: '&',
					back_slash: '&',
					close_bracket: '&',
					single_quote: '&'
				},
				link: link
			}

		}]);

} ());
