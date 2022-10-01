/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", sans-serif;\n  text-align: center;\n  justify-content: center;\n  background-color: #000;\n}\n\na,\nbutton,\ninput {\n  font-family: inherit;\n}\n\ninput {\n  outline: none;\n  border: none;\n  font-size: 1rem;\n}\n\n.header {\n  top: 25px;\n  right: 0;\n  left: 0;\n  color: greenyellow;\n}\n\n.header span {\n  color: antiquewhite;\n}\n\n.header div {\n  display: flex;\n  color: rgba(128, 128, 128, 0.598);\n  flex-direction: column;\n}\n\n.section--today {\n  margin: 80px 0;\n  margin-bottom: 30px;\n}\n\n.todo-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  margin: 100px 20px;\n  border-radius: 0.9rem;\n  overflow: hidden;\n}\n\n.todo-container input {\n  background-color: transparent;\n}\n\n.todo-container .icon {\n  padding: 0.4em;\n  cursor: pointer;\n  color: rgb(177, 177, 177);\n}\n\n.todo-container .icon.move {\n  cursor: move;\n}\n\n.todo-container .icon:hover {\n  color: rgb(85, 85, 85);\n}\n\n.todo-container .title {\n  display: flex;\n  align-items: center;\n  color: antiquewhite;\n  text-align: center;\n  justify-content: space-between;\n  padding: 6px;\n  border: 1px solid rgb(83, 83, 83);\n  margin: 13px 0;\n}\n\n#refresh-todo-icon {\n  padding: 0.4em;\n  color: greenyellow;\n  opacity: 0;\n  transition: opacity 120ms;\n  animation: refresh-rotation 1s infinite linear;\n}\n\n#refresh-todo-icon.active {\n  opacity: 1;\n}\n\n#refresh-todo-icon i {\n  vertical-align: middle;\n}\n\n@keyframes refresh-rotation {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.todo-container .title p {\n  flex-grow: 1;\n  font-weight: 600;\n}\n\n.add-todo {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  padding-left: 1rem;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n  margin-top: 0;\n  border: 1px solid rgb(83, 83, 83);\n}\n\n.add-todo input {\n  flex-grow: 1;\n  background-color: white;\n  font-style: italic;\n  width: 90%;\n  height: 50px;\n  padding: 0 12px;\n  margin: 0;\n  border-radius: 50px;\n}\n\n.todo-container .add-todo .icon {\n  justify-content: center;\n  align-items: center;\n  color: greenyellow;\n  padding: 0 10px;\n  margin: 0;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.todo-items-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  position: relative;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  border: 2px solid rgb(228, 225, 225);\n}\n\n.todo-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  height: 3rem;\n  background-color: white;\n  padding-left: 1rem;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.todo-item.selected {\n  visibility: hidden;\n}\n\n.todo-item.highlight {\n  background-color: #f4f5cc;\n}\n\n.todo-item .input-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n  height: 100%;\n  position: relative;\n}\n\n.todo-item .input-box input {\n  height: 100%;\n  flex-grow: 1;\n}\n\n.todo-item .input-box input.checked {\n  text-decoration: line-through;\n  color: gray;\n}\n\n.clear-completed-container {\n  background-color: whitesmoke;\n}\n\n.todo-item .input-box .delete {\n  position: absolute;\n  display: none;\n  right: 0;\n}\n\n.todo-item .input-box:focus-within .delete {\n  display: block;\n}\n\n.todo-item .input-box .delete:hover {\n  color: crimson;\n}\n\n.clear-btn {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0 auto;\n  display: block;\n  padding: 0.8em;\n}\n\n.clear-btn:hover {\n  text-decoration: underline;\n}\n\n@media (min-width: 600px) {\n  body {\n    justify-content: center;\n  }\n\n  .header {\n    font-size: 28px;\n  }\n\n  .header div {\n    font-size: 14px;\n  }\n\n  .todo-container {\n    width: 45rem;\n    margin: 100px auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,sDAAsD;EACtD,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;;;EAGE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,QAAQ;EACR,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;EAC9B,YAAY;EACZ,iCAAiC;EACjC,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;EACd,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,eAAe;EACf,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,SAAS;EACT,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,uBAAuB;EACvB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,cAAc;EACd,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE;IACE,uBAAuB;EACzB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,kBAAkB;EACpB;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", sans-serif;\n  text-align: center;\n  justify-content: center;\n  background-color: #000;\n}\n\na,\nbutton,\ninput {\n  font-family: inherit;\n}\n\ninput {\n  outline: none;\n  border: none;\n  font-size: 1rem;\n}\n\n.header {\n  top: 25px;\n  right: 0;\n  left: 0;\n  color: greenyellow;\n}\n\n.header span {\n  color: antiquewhite;\n}\n\n.header div {\n  display: flex;\n  color: rgba(128, 128, 128, 0.598);\n  flex-direction: column;\n}\n\n.section--today {\n  margin: 80px 0;\n  margin-bottom: 30px;\n}\n\n.todo-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  margin: 100px 20px;\n  border-radius: 0.9rem;\n  overflow: hidden;\n}\n\n.todo-container input {\n  background-color: transparent;\n}\n\n.todo-container .icon {\n  padding: 0.4em;\n  cursor: pointer;\n  color: rgb(177, 177, 177);\n}\n\n.todo-container .icon.move {\n  cursor: move;\n}\n\n.todo-container .icon:hover {\n  color: rgb(85, 85, 85);\n}\n\n.todo-container .title {\n  display: flex;\n  align-items: center;\n  color: antiquewhite;\n  text-align: center;\n  justify-content: space-between;\n  padding: 6px;\n  border: 1px solid rgb(83, 83, 83);\n  margin: 13px 0;\n}\n\n#refresh-todo-icon {\n  padding: 0.4em;\n  color: greenyellow;\n  opacity: 0;\n  transition: opacity 120ms;\n  animation: refresh-rotation 1s infinite linear;\n}\n\n#refresh-todo-icon.active {\n  opacity: 1;\n}\n\n#refresh-todo-icon i {\n  vertical-align: middle;\n}\n\n@keyframes refresh-rotation {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.todo-container .title p {\n  flex-grow: 1;\n  font-weight: 600;\n}\n\n.add-todo {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  padding-left: 1rem;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n  margin-top: 0;\n  border: 1px solid rgb(83, 83, 83);\n}\n\n.add-todo input {\n  flex-grow: 1;\n  background-color: white;\n  font-style: italic;\n  width: 90%;\n  height: 50px;\n  padding: 0 12px;\n  margin: 0;\n  border-radius: 50px;\n}\n\n.todo-container .add-todo .icon {\n  justify-content: center;\n  align-items: center;\n  color: greenyellow;\n  padding: 0 10px;\n  margin: 0;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.todo-items-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  position: relative;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  border: 2px solid rgb(228, 225, 225);\n}\n\n.todo-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  height: 3rem;\n  background-color: white;\n  padding-left: 1rem;\n  justify-content: space-between;\n  text-align: center;\n}\n\n.todo-item.selected {\n  visibility: hidden;\n}\n\n.todo-item.highlight {\n  background-color: #f4f5cc;\n}\n\n.todo-item .input-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n  height: 100%;\n  position: relative;\n}\n\n.todo-item .input-box input {\n  height: 100%;\n  flex-grow: 1;\n}\n\n.todo-item .input-box input.checked {\n  text-decoration: line-through;\n  color: gray;\n}\n\n.clear-completed-container {\n  background-color: whitesmoke;\n}\n\n.todo-item .input-box .delete {\n  position: absolute;\n  display: none;\n  right: 0;\n}\n\n.todo-item .input-box:focus-within .delete {\n  display: block;\n}\n\n.todo-item .input-box .delete:hover {\n  color: crimson;\n}\n\n.clear-btn {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0 auto;\n  display: block;\n  padding: 0.8em;\n}\n\n.clear-btn:hover {\n  text-decoration: underline;\n}\n\n@media (min-width: 600px) {\n  body {\n    justify-content: center;\n  }\n\n  .header {\n    font-size: 28px;\n  }\n\n  .header div {\n    font-size: 14px;\n  }\n\n  .todo-container {\n    width: 45rem;\n    margin: 100px auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/marked.js":
/*!***********************!*\
  !*** ./src/marked.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _savelist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savelist.js */ "./src/savelist.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((e, item, inputBox) => {
  item.completed = e.currentTarget.checked;
  if (e.currentTarget.checked) {
    inputBox.classList.add('checked');
  } else {
    inputBox.classList.remove('checked');
  }

  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data);
});

/***/ }),

/***/ "./src/savelist.js":
/*!*************************!*\
  !*** ./src/savelist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORAGE_NAME": () => (/* binding */ STORAGE_NAME),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage),
/* harmony export */   "todoList": () => (/* binding */ todoList),
/* harmony export */   "getItem": () => (/* binding */ getItem)
/* harmony export */ });
const STORAGE_NAME = 'todo-list';

let timeout;
const refreshIcon = document.getElementById('refresh-todo-icon');
const updateStorage = (newList) => {
  clearTimeout(timeout);
  refreshIcon.classList.add('active');
  // update todo items indexes
  newList.forEach((item, idx) => {
    item.index = idx;
  });
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
  timeout = setTimeout(() => {
    refreshIcon.classList.remove('active');
  }, 400);
};

const createTodoList = () => {
  const prevStorage = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (prevStorage && prevStorage.length) {
    return prevStorage;
  }
  const data = [];
  updateStorage(data);
  return data;
};

const todoList = {
  data: createTodoList(),
};

const getItem = (id) => todoList.data.find((item) => item.index === parseInt(id, 10));

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTodoItem": () => (/* binding */ removeTodoItem),
/* harmony export */   "editTodoItem": () => (/* binding */ editTodoItem),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "onSubmit": () => (/* binding */ onSubmit),
/* harmony export */   "removeCompleted": () => (/* binding */ removeCompleted)
/* harmony export */ });
/* harmony import */ var _marked_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marked.js */ "./src/marked.js");
/* harmony import */ var _savelist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savelist.js */ "./src/savelist.js");



const todoContainerElement = document.querySelector('.todo-container .todo-items-container');

const removeTodoItem = (todoElem) => {
  _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.splice(todoElem.id, 1);
  todoElem.remove();
  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
};

const editTodoItem = (e, todoElem) => {
  const item = (0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.getItem)(todoElem.id);
  const newValue = e.currentTarget.value.trim();
  item.description = newValue;
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
  e.currentTarget.value = newValue;
};

let active = false;
let offsetLeft;
let offsetTop;
let offsetFromMoveBtnX;
let offsetFromMoveBtnY;

const PLACEHOLDER = document.createElement('div');
PLACEHOLDER.id = 'placeholder';
PLACEHOLDER.style.position = 'absolute';
PLACEHOLDER.style.width = '384px';
PLACEHOLDER.style.outline = '1px solid black';
// PLACEHOLDER.style.height = '52px';

const createTodo = (item) => {
  const todoElem = document.createElement('div');
  todoElem.id = item.index;
  todoElem.classList.add('todo-item');
  const innerHtml = `
      <input type="checkbox">
      <div class="input-box">
        <input type="text">
        <div class="icon delete">
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
      <div class="icon move">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      `;

  todoElem.innerHTML = innerHtml;
  const inputBox = todoElem.querySelector('.input-box input');
  const checkboxInput = todoElem.querySelector('input[type="checkbox"]');
  const deleteBtn = todoElem.querySelector('.icon.delete');
  const moveBtn = todoElem.querySelector('.icon.move');

  inputBox.addEventListener('change', (e) => editTodoItem(e, todoElem));
  inputBox.addEventListener('focus', () => {
    todoElem.classList.add('highlight');
    inputBox.classList.remove('checked');
  });
  inputBox.addEventListener('blur', () => {
    todoElem.classList.remove('highlight');
    if ((0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.getItem)(todoElem.id).completed) {
      inputBox.classList.add('checked');
    }
  });

  inputBox.value = item.description;
  if (item.completed) {
    inputBox.classList.add('checked');
  }

  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    (0,_marked_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, (0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.getItem)(todoElem.id), inputBox);
  });

  deleteBtn.addEventListener('mousedown', () => {
    removeTodoItem(todoElem);
  });

  let lastIndex = null;

  const mouseMoved = (e) => {
    e.preventDefault();
    if (!active) return;
    offsetLeft = e.pageX - (todoContainerElement.getBoundingClientRect().left + window.scrollX);
    offsetTop = e.pageY - (todoContainerElement.getBoundingClientRect().top + window.scrollY);
    PLACEHOLDER.style.left = `${offsetLeft - offsetFromMoveBtnX}px`;
    PLACEHOLDER.style.top = `${offsetTop - offsetFromMoveBtnY}px`;

    const todoItemIndex = Math.floor(offsetTop / 52);

    if (lastIndex !== todoItemIndex && todoItemIndex >= 0) {
      todoElem.remove();
      todoContainerElement.insertBefore(todoElem, todoContainerElement.children[todoItemIndex]);
      lastIndex = todoItemIndex;

      const elements = Array.from(document.querySelectorAll('.todo-item:not(#placeholder)'));
      _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data = elements.map((elem, idx) => {
        elem.id = idx;
        return {
          description: elem.querySelector('input[type="text"]').value,
          complted: elem.querySelector('input[type="checkbox"]').checked,
          index: idx,
        };
      });
      (0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
    }
  };

  moveBtn.addEventListener('mousedown', (e) => {
    e.preventDefault();
    active = true;
    document.addEventListener('mousemove', mouseMoved);
    offsetFromMoveBtnX = e.pageX - (todoElem.getBoundingClientRect().left + window.scrollX);
    offsetFromMoveBtnY = e.pageY - (todoElem.getBoundingClientRect().top + window.scrollY);

    offsetLeft = e.pageX - (todoContainerElement.getBoundingClientRect().left + window.scrollX);
    offsetTop = e.pageY - (todoContainerElement.getBoundingClientRect().top + window.scrollY);
    PLACEHOLDER.style.left = `${offsetLeft - offsetFromMoveBtnX}px`;
    PLACEHOLDER.style.top = `${offsetTop - offsetFromMoveBtnY}px`;

    // const newNode = todoElem.cloneNode(true);
    PLACEHOLDER.innerHTML = todoElem.innerHTML;
    PLACEHOLDER.querySelector('input[type="text"]').value = inputBox.value;
    PLACEHOLDER.classList.add('todo-item');
    todoElem.classList.add('selected');
    todoContainerElement.appendChild(PLACEHOLDER);
  });

  document.addEventListener('mouseup', () => {
    active = false;
    todoElem.classList.remove('selected');
    document.removeEventListener('mousemove', mouseMoved);
    PLACEHOLDER.remove();
  });

  todoContainerElement.appendChild(todoElem);
};

// NOTE: disable drag start for firefox
todoContainerElement.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

const onSubmit = () => {
  const addTodoInput = document.getElementById('add-todo-input');
  if (!addTodoInput.value) {
    return;
  }
  const newItem = {
    description: addTodoInput.value,
    completed: false,
    index: _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.length,
  };
  _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.push(newItem);
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);
  createTodo(newItem, _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.length - 1);
  addTodoInput.value = '';
  addTodoInput.focus();
};

const removeCompleted = () => {
  const notCompletedList = _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.filter((i) => !i.completed);
  const todoElements = document.querySelectorAll('.todo-item');
  _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.filter((item) => item.completed)
    .map((item) => Array.from(todoElements).find((i) => parseInt(i.id, 10) === item.index))
    .forEach((element) => element.remove());

  _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data = notCompletedList;
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data);

  // reset todo elements indexes
  todoContainerElement.querySelectorAll('.todo-item')
    .forEach((item, idx) => { item.id = idx; });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _savelist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savelist.js */ "./src/savelist.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.js */ "./src/script.js");




window.addEventListener('load', () => {
  const populate = () => {
    _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.forEach((item) => {
      (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(item);
    });
  };

  populate();

  const addTodoBtn = document.getElementById('add-todo-btn');
  const submitBtn = document.querySelector('form');
  const clearCompletedBtn = document.getElementById('clear-completed-btn');

  addTodoBtn.addEventListener('click', _script_js__WEBPACK_IMPORTED_MODULE_2__.onSubmit);
  submitBtn.addEventListener('submit', (e) => e.preventDefault() || (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.onSubmit)());

  clearCompletedBtn.addEventListener('click', () => {
    (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.removeCompleted)();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFya2VkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2F2ZWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb21pYyBTYW5zIE1TXFxcIiwgXFxcIkNvbWljIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG5hLFxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB0b3A6IDI1cHg7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi5oZWFkZXIgc3BhbiB7XFxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41OTgpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNlY3Rpb24tLXRvZGF5IHtcXG4gIG1hcmdpbjogODBweCAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcHg7XFxuICBtYXJnaW46IDEwMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjlyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaWNvbiB7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaWNvbi5tb3ZlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDgzLCA4MywgODMpO1xcbiAgbWFyZ2luOiAxM3B4IDA7XFxufVxcblxcbiNyZWZyZXNoLXRvZG8taWNvbiB7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEyMG1zO1xcbiAgYW5pbWF0aW9uOiByZWZyZXNoLXJvdGF0aW9uIDFzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuI3JlZnJlc2gtdG9kby1pY29uLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jcmVmcmVzaC10b2RvLWljb24gaSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlZnJlc2gtcm90YXRpb24ge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAudGl0bGUgcCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDgzLCA4MywgODMpO1xcbn1cXG5cXG4uYWRkLXRvZG8gaW5wdXQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5hZGQtdG9kbyAuaWNvbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWl0ZW1zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyOCwgMjI1LCAyMjUpO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWl0ZW0uc2VsZWN0ZWQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udG9kby1pdGVtLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWNjO1xcbn1cXG5cXG4udG9kby1pdGVtIC5pbnB1dC1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWdyb3c6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCBpbnB1dCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCBpbnB1dC5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZWQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi50b2RvLWl0ZW0gLmlucHV0LWJveCAuZGVsZXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnRvZG8taXRlbSAuaW5wdXQtYm94OmZvY3VzLXdpdGhpbiAuZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kby1pdGVtIC5pbnB1dC1ib3ggLmRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLmNsZWFyLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjhlbTtcXG59XFxuXFxuLmNsZWFyLWJ0bjpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgfVxcblxcbiAgLmhlYWRlciBkaXYge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogNDVyZW07XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29taWMgU2FucyBNU1xcXCIsIFxcXCJDb21pYyBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuYSxcXG5idXR0b24sXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4uaGVhZGVyIHNwYW4ge1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLmhlYWRlciBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTk4KTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zZWN0aW9uLS10b2RheSB7XFxuICBtYXJnaW46IDgwcHggMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXB4O1xcbiAgbWFyZ2luOiAxMDBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmljb24ge1xcbiAgcGFkZGluZzogMC40ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmljb24ubW92ZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaWNvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MywgODMsIDgzKTtcXG4gIG1hcmdpbjogMTNweCAwO1xcbn1cXG5cXG4jcmVmcmVzaC10b2RvLWljb24ge1xcbiAgcGFkZGluZzogMC40ZW07XFxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMjBtcztcXG4gIGFuaW1hdGlvbjogcmVmcmVzaC1yb3RhdGlvbiAxcyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbiNyZWZyZXNoLXRvZG8taWNvbi5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI3JlZnJlc2gtdG9kby1pY29uIGkge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuQGtleWZyYW1lcyByZWZyZXNoLXJvdGF0aW9uIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4udG9kby1jb250YWluZXIgLnRpdGxlIHAge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MywgODMsIDgzKTtcXG59XFxuXFxuLmFkZC10b2RvIGlucHV0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuYWRkLXRvZG8gLmljb24ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1pdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjgsIDIyNSwgMjI1KTtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1pdGVtLnNlbGVjdGVkIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG8taXRlbS5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVjYztcXG59XFxuXFxuLnRvZG8taXRlbSAuaW5wdXQtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1pdGVtIC5pbnB1dC1ib3ggaW5wdXQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udG9kby1pdGVtIC5pbnB1dC1ib3ggaW5wdXQuY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGVkLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4udG9kby1pdGVtIC5pbnB1dC1ib3ggLmRlbGV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi50b2RvLWl0ZW0gLmlucHV0LWJveDpmb2N1cy13aXRoaW4gLmRlbGV0ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvZG8taXRlbSAuaW5wdXQtYm94IC5kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5jbGVhci1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC44ZW07XFxufVxcblxcbi5jbGVhci1idG46aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIgZGl2IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLnRvZG8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDQ1cmVtO1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSwgdG9kb0xpc3QgfSBmcm9tICcuL3NhdmVsaXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKGUsIGl0ZW0sIGlucHV0Qm94KSA9PiB7XG4gIGl0ZW0uY29tcGxldGVkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG4gIGlmIChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dEJveC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gIH1cblxuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xufTsiLCJleHBvcnQgY29uc3QgU1RPUkFHRV9OQU1FID0gJ3RvZG8tbGlzdCc7XG5cbmxldCB0aW1lb3V0O1xuY29uc3QgcmVmcmVzaEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaC10b2RvLWljb24nKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gKG5ld0xpc3QpID0+IHtcbiAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICByZWZyZXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgLy8gdXBkYXRlIHRvZG8gaXRlbXMgaW5kZXhlc1xuICBuZXdMaXN0LmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgIGl0ZW0uaW5kZXggPSBpZHg7XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX05BTUUsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3QpKTtcbiAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJlZnJlc2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9LCA0MDApO1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByZXZTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX05BTUUpKTtcbiAgaWYgKHByZXZTdG9yYWdlICYmIHByZXZTdG9yYWdlLmxlbmd0aCkge1xuICAgIHJldHVybiBwcmV2U3RvcmFnZTtcbiAgfVxuICBjb25zdCBkYXRhID0gW107XG4gIHVwZGF0ZVN0b3JhZ2UoZGF0YSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvZG9MaXN0ID0ge1xuICBkYXRhOiBjcmVhdGVUb2RvTGlzdCgpLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEl0ZW0gPSAoaWQpID0+IHRvZG9MaXN0LmRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pbmRleCA9PT0gcGFyc2VJbnQoaWQsIDEwKSk7IiwiaW1wb3J0IHNldENvbXBsZXRlZCBmcm9tICcuL21hcmtlZC5qcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCwgdXBkYXRlU3RvcmFnZSwgZ2V0SXRlbSB9IGZyb20gJy4vc2F2ZWxpc3QuanMnO1xuXG5jb25zdCB0b2RvQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lciAudG9kby1pdGVtcy1jb250YWluZXInKTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gKHRvZG9FbGVtKSA9PiB7XG4gIHRvZG9MaXN0LmRhdGEuc3BsaWNlKHRvZG9FbGVtLmlkLCAxKTtcbiAgdG9kb0VsZW0ucmVtb3ZlKCk7XG4gIC8vIHJlc2V0IHRvZG8gZWxlbWVudHMgaW5kZXhlc1xuICB0b2RvQ29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJylcbiAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7IGl0ZW0uaWQgPSBpZHg7IH0pO1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRUb2RvSXRlbSA9IChlLCB0b2RvRWxlbSkgPT4ge1xuICBjb25zdCBpdGVtID0gZ2V0SXRlbSh0b2RvRWxlbS5pZCk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgaXRlbS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xuICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSBuZXdWYWx1ZTtcbn07XG5cbmxldCBhY3RpdmUgPSBmYWxzZTtcbmxldCBvZmZzZXRMZWZ0O1xubGV0IG9mZnNldFRvcDtcbmxldCBvZmZzZXRGcm9tTW92ZUJ0blg7XG5sZXQgb2Zmc2V0RnJvbU1vdmVCdG5ZO1xuXG5jb25zdCBQTEFDRUhPTERFUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuUExBQ0VIT0xERVIuaWQgPSAncGxhY2Vob2xkZXInO1xuUExBQ0VIT0xERVIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuUExBQ0VIT0xERVIuc3R5bGUud2lkdGggPSAnMzg0cHgnO1xuUExBQ0VIT0xERVIuc3R5bGUub3V0bGluZSA9ICcxcHggc29saWQgYmxhY2snO1xuLy8gUExBQ0VIT0xERVIuc3R5bGUuaGVpZ2h0ID0gJzUycHgnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kbyA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IHRvZG9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FbGVtLmlkID0gaXRlbS5pbmRleDtcbiAgdG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gIGNvbnN0IGlubmVySHRtbCA9IGBcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGRlbGV0ZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uIG1vdmVcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdlwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcblxuICB0b2RvRWxlbS5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gIGNvbnN0IGlucHV0Qm94ID0gdG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLmlucHV0LWJveCBpbnB1dCcpO1xuICBjb25zdCBjaGVja2JveElucHV0ID0gdG9kb0VsZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IHRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5pY29uLmRlbGV0ZScpO1xuICBjb25zdCBtb3ZlQnRuID0gdG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLmljb24ubW92ZScpO1xuXG4gIGlucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiBlZGl0VG9kb0l0ZW0oZSwgdG9kb0VsZW0pKTtcbiAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgdG9kb0VsZW0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgaW5wdXRCb3guY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICB9KTtcbiAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICB0b2RvRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICBpZiAoZ2V0SXRlbSh0b2RvRWxlbS5pZCkuY29tcGxldGVkKSB7XG4gICAgICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgfVxuICB9KTtcblxuICBpbnB1dEJveC52YWx1ZSA9IGl0ZW0uZGVzY3JpcHRpb247XG4gIGlmIChpdGVtLmNvbXBsZXRlZCkge1xuICAgIGlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IGl0ZW0uY29tcGxldGVkO1xuXG4gIGNoZWNrYm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBzZXRDb21wbGV0ZWQoZSwgZ2V0SXRlbSh0b2RvRWxlbS5pZCksIGlucHV0Qm94KTtcbiAgfSk7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICByZW1vdmVUb2RvSXRlbSh0b2RvRWxlbSk7XG4gIH0pO1xuXG4gIGxldCBsYXN0SW5kZXggPSBudWxsO1xuXG4gIGNvbnN0IG1vdXNlTW92ZWQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuICAgIG9mZnNldExlZnQgPSBlLnBhZ2VYIC0gKHRvZG9Db250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCk7XG4gICAgb2Zmc2V0VG9wID0gZS5wYWdlWSAtICh0b2RvQ29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgUExBQ0VIT0xERVIuc3R5bGUubGVmdCA9IGAke29mZnNldExlZnQgLSBvZmZzZXRGcm9tTW92ZUJ0blh9cHhgO1xuICAgIFBMQUNFSE9MREVSLnN0eWxlLnRvcCA9IGAke29mZnNldFRvcCAtIG9mZnNldEZyb21Nb3ZlQnRuWX1weGA7XG5cbiAgICBjb25zdCB0b2RvSXRlbUluZGV4ID0gTWF0aC5mbG9vcihvZmZzZXRUb3AgLyA1Mik7XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSB0b2RvSXRlbUluZGV4ICYmIHRvZG9JdGVtSW5kZXggPj0gMCkge1xuICAgICAgdG9kb0VsZW0ucmVtb3ZlKCk7XG4gICAgICB0b2RvQ29udGFpbmVyRWxlbWVudC5pbnNlcnRCZWZvcmUodG9kb0VsZW0sIHRvZG9Db250YWluZXJFbGVtZW50LmNoaWxkcmVuW3RvZG9JdGVtSW5kZXhdKTtcbiAgICAgIGxhc3RJbmRleCA9IHRvZG9JdGVtSW5kZXg7XG5cbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtOm5vdCgjcGxhY2Vob2xkZXIpJykpO1xuICAgICAgdG9kb0xpc3QuZGF0YSA9IGVsZW1lbnRzLm1hcCgoZWxlbSwgaWR4KSA9PiB7XG4gICAgICAgIGVsZW0uaWQgPSBpZHg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246IGVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZSxcbiAgICAgICAgICBjb21wbHRlZDogZWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGVja2VkLFxuICAgICAgICAgIGluZGV4OiBpZHgsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHVwZGF0ZVN0b3JhZ2UodG9kb0xpc3QuZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIG1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVkKTtcbiAgICBvZmZzZXRGcm9tTW92ZUJ0blggPSBlLnBhZ2VYIC0gKHRvZG9FbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCk7XG4gICAgb2Zmc2V0RnJvbU1vdmVCdG5ZID0gZS5wYWdlWSAtICh0b2RvRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSk7XG5cbiAgICBvZmZzZXRMZWZ0ID0gZS5wYWdlWCAtICh0b2RvQ29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgd2luZG93LnNjcm9sbFgpO1xuICAgIG9mZnNldFRvcCA9IGUucGFnZVkgLSAodG9kb0NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkpO1xuICAgIFBMQUNFSE9MREVSLnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRMZWZ0IC0gb2Zmc2V0RnJvbU1vdmVCdG5YfXB4YDtcbiAgICBQTEFDRUhPTERFUi5zdHlsZS50b3AgPSBgJHtvZmZzZXRUb3AgLSBvZmZzZXRGcm9tTW92ZUJ0bll9cHhgO1xuXG4gICAgLy8gY29uc3QgbmV3Tm9kZSA9IHRvZG9FbGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBQTEFDRUhPTERFUi5pbm5lckhUTUwgPSB0b2RvRWxlbS5pbm5lckhUTUw7XG4gICAgUExBQ0VIT0xERVIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZSA9IGlucHV0Qm94LnZhbHVlO1xuICAgIFBMQUNFSE9MREVSLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIHRvZG9FbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgdG9kb0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoUExBQ0VIT0xERVIpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIHRvZG9FbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlZCk7XG4gICAgUExBQ0VIT0xERVIucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHRvZG9Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRvZG9FbGVtKTtcbn07XG5cbi8vIE5PVEU6IGRpc2FibGUgZHJhZyBzdGFydCBmb3IgZmlyZWZveFxudG9kb0NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgY29uc3QgYWRkVG9kb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWlucHV0Jyk7XG4gIGlmICghYWRkVG9kb0lucHV0LnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgZGVzY3JpcHRpb246IGFkZFRvZG9JbnB1dC52YWx1ZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiB0b2RvTGlzdC5kYXRhLmxlbmd0aCxcbiAgfTtcbiAgdG9kb0xpc3QuZGF0YS5wdXNoKG5ld0l0ZW0pO1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xuICBjcmVhdGVUb2RvKG5ld0l0ZW0sIHRvZG9MaXN0LmRhdGEubGVuZ3RoIC0gMSk7XG4gIGFkZFRvZG9JbnB1dC52YWx1ZSA9ICcnO1xuICBhZGRUb2RvSW5wdXQuZm9jdXMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdENvbXBsZXRlZExpc3QgPSB0b2RvTGlzdC5kYXRhLmZpbHRlcigoaSkgPT4gIWkuY29tcGxldGVkKTtcbiAgY29uc3QgdG9kb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbScpO1xuICB0b2RvTGlzdC5kYXRhXG4gICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQpXG4gICAgLm1hcCgoaXRlbSkgPT4gQXJyYXkuZnJvbSh0b2RvRWxlbWVudHMpLmZpbmQoKGkpID0+IHBhcnNlSW50KGkuaWQsIDEwKSA9PT0gaXRlbS5pbmRleCkpXG4gICAgLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xuXG4gIHRvZG9MaXN0LmRhdGEgPSBub3RDb21wbGV0ZWRMaXN0O1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xuXG4gIC8vIHJlc2V0IHRvZG8gZWxlbWVudHMgaW5kZXhlc1xuICB0b2RvQ29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJylcbiAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7IGl0ZW0uaWQgPSBpZHg7IH0pO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4vc2F2ZWxpc3QuanMnO1xuaW1wb3J0IHsgb25TdWJtaXQsIGNyZWF0ZVRvZG8sIHJlbW92ZUNvbXBsZXRlZCB9IGZyb20gJy4vc2NyaXB0LmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnN0IHBvcHVsYXRlID0gKCkgPT4ge1xuICAgIHRvZG9MaXN0LmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY3JlYXRlVG9kbyhpdGVtKTtcbiAgICB9KTtcbiAgfTtcblxuICBwb3B1bGF0ZSgpO1xuXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tYnRuJyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItY29tcGxldGVkLWJ0bicpO1xuXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblN1Ym1pdCk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpIHx8IG9uU3VibWl0KCkpO1xuXG4gIGNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUNvbXBsZXRlZCgpO1xuICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==