/*!
 * App v0.1.0 (https://github.com/denisbrodbeck/scss-js-starter-kit)
 * Copyright 2017 Denis Brodbeck (https://github.com/denisbrodbeck)
 * Licensed under MIT (https://github.com/denisbrodbeck/scss-js-starter-kit/LICENSE)
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.app = factory());
}(this, (function () { 'use strict';

var foo = 'hello world!';

var index = function () {
  console.log(foo);
};

return index;

})));
//# sourceMappingURL=app.js.map
