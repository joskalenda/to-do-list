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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", sans-serif;\n  text-align: center;\n  justify-content: center;\n  padding: 30px;\n  background-color: #000;\n}\n\n.header {\n  position: fixed;\n  top: 25px;\n  right: 0;\n  left: 0;\n  color: greenyellow;\n}\n\n.header span {\n  color: antiquewhite;\n}\n\n.section--today {\n  margin: 80px 0;\n  margin-bottom: 30px;\n}\n\n.today-div {\n  display: flex;\n  color: antiquewhite;\n  text-align: center;\n  justify-content: space-between;\n  padding: 0 12px;\n  border: 1px solid rgb(83, 83, 83);\n}\n\n.today-div i {\n  display: block;\n  color: greenyellow;\n  padding: 12px 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.section--add {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  margin: 0;\n  border: 1px solid rgb(83, 83, 83);\n}\n\n.add--div {\n  color: antiquewhite;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n}\n\n.add--div input {\n  width: 90%;\n  height: 50px;\n  padding: 0 12px;\n  margin: 0;\n  border-radius: 50px;\n}\n\n.add--div i {\n  color: greenyellow;\n  padding: 0 10px;\n  margin: 0;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.task--div .trash {\n  display: none;\n}\n\n.add--div input::placeholder {\n  font-size: 20px;\n  color: rgb(146, 146, 146);\n  font-style: italic;\n}\n\n/* LIST SECTION TASK */\n.section--task {\n  color: #000;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  margin: 40px 0;\n  border: 2px solid rgb(228, 225, 225);\n}\n\n.task--div {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  align-items: center;\n  margin: 3px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.task--div i {\n  padding: 0 10px;\n  margin: 0;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.input--div {\n  width: 100%;\n  gap: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  outline: none;\n}\n\n#text--tast {\n  color: rgb(68, 68, 68);\n  width: 90%;\n  height: 50px;\n  padding: 0 12px;\n  margin: 0;\n  border: 0;\n  background: #fff;\n  font-size: 24px;\n  border-bottom: 2px solid rgb(4, 241, 4);\n}\n\n#text--tast:focus {\n  outline: none;\n}\n\n.section--clear {\n  border: 2px solid whitesmoke;\n  background-color: white;\n}\n\n.section--clear button {\n  border: none;\n  background-color: white;\n  color: rgb(146, 146, 146);\n  font-size: 20px;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 24px;\n  color: rgb(236, 230, 230);\n  background-color: rgb(66, 65, 65);\n}\n\n@media (min-width: 600px) {\n  body {\n    justify-content: center;\n    width: 700px;\n    margin: 0 auto;\n  }\n\n  .header {\n    top: 70px;\n    font-size: 28px;\n  }\n\n  .section--today {\n    margin: 180px 0;\n    margin-bottom: 30px;\n  }\n\n  #text--tast {\n    width: 90%;\n  }\n\n  .task--div {\n    background: none;\n  }\n\n  .task--div i {\n    color: greenyellow;\n  }\n\n  .input--div {\n    justify-content: left;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,sDAAsD;EACtD,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,QAAQ;EACR,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,uBAAuB;EACvB,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,SAAS;AACX;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;EACf,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,SAAS;EACT,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,uBAAuB;EACvB,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,eAAe;EACf,SAAS;EACT,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,4BAA4B;EAC5B,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,QAAQ;EACR,OAAO;EACP,aAAa;EACb,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE;IACE,uBAAuB;IACvB,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,SAAS;IACT,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,qBAAqB;EACvB;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", sans-serif;\n  text-align: center;\n  justify-content: center;\n  padding: 30px;\n  background-color: #000;\n}\n\n.header {\n  position: fixed;\n  top: 25px;\n  right: 0;\n  left: 0;\n  color: greenyellow;\n}\n\n.header span {\n  color: antiquewhite;\n}\n\n.section--today {\n  margin: 80px 0;\n  margin-bottom: 30px;\n}\n\n.today-div {\n  display: flex;\n  color: antiquewhite;\n  text-align: center;\n  justify-content: space-between;\n  padding: 0 12px;\n  border: 1px solid rgb(83, 83, 83);\n}\n\n.today-div i {\n  display: block;\n  color: greenyellow;\n  padding: 12px 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.section--add {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  margin: 0;\n  border: 1px solid rgb(83, 83, 83);\n}\n\n.add--div {\n  color: antiquewhite;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n}\n\n.add--div input {\n  width: 90%;\n  height: 50px;\n  padding: 0 12px;\n  margin: 0;\n  border-radius: 50px;\n}\n\n.add--div i {\n  color: greenyellow;\n  padding: 0 10px;\n  margin: 0;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.task--div .trash {\n  display: none;\n}\n\n.add--div input::placeholder {\n  font-size: 20px;\n  color: rgb(146, 146, 146);\n  font-style: italic;\n}\n\n/* LIST SECTION TASK */\n.section--task {\n  color: #000;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  margin: 40px 0;\n  border: 2px solid rgb(228, 225, 225);\n}\n\n.task--div {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  align-items: center;\n  margin: 3px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.task--div i {\n  padding: 0 10px;\n  margin: 0;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.input--div {\n  width: 100%;\n  gap: 10px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  outline: none;\n}\n\n#text--tast {\n  color: rgb(68, 68, 68);\n  width: 90%;\n  height: 50px;\n  padding: 0 12px;\n  margin: 0;\n  border: 0;\n  background: #fff;\n  font-size: 24px;\n  border-bottom: 2px solid rgb(4, 241, 4);\n}\n\n#text--tast:focus {\n  outline: none;\n}\n\n.section--clear {\n  border: 2px solid whitesmoke;\n  background-color: white;\n}\n\n.section--clear button {\n  border: none;\n  background-color: white;\n  color: rgb(146, 146, 146);\n  font-size: 20px;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 24px;\n  color: rgb(236, 230, 230);\n  background-color: rgb(66, 65, 65);\n}\n\n@media (min-width: 600px) {\n  body {\n    justify-content: center;\n    width: 700px;\n    margin: 0 auto;\n  }\n\n  .header {\n    top: 70px;\n    font-size: 28px;\n  }\n\n  .section--today {\n    margin: 180px 0;\n    margin-bottom: 30px;\n  }\n\n  #text--tast {\n    width: 90%;\n  }\n\n  .task--div {\n    background: none;\n  }\n\n  .task--div i {\n    color: greenyellow;\n  }\n\n  .input--div {\n    justify-content: left;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/completeTask.js":
/*!*****************************!*\
  !*** ./src/completeTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _savelist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savelist.js */ "./src/savelist.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((e, id, inputBox) => {
  _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data[parseInt(id, 10)].completed = e.currentTarget.checked;
  inputBox.style.textDecoration = (e.currentTarget.checked && 'line-through') || 'none';
  inputBox.style.color = (e.currentTarget.checked && 'gray') || 'black';
  inputBox.disabled = e.currentTarget.checked;

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
/* harmony export */   "ClearStorage": () => (/* binding */ ClearStorage),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
const STORAGE_NAME = 'todo-list';
const updateStorage = (newList) => {
  newList.forEach((item, idx) => {
    item.index = idx;
  });
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
};

const ClearStorage = () => {
  localStorage.clear();
  localStorage.reload();
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

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "onSubmit": () => (/* binding */ onSubmit),
/* harmony export */   "removeCompleted": () => (/* binding */ removeCompleted)
/* harmony export */ });
/* harmony import */ var _savelist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savelist.js */ "./src/savelist.js");
/* harmony import */ var _completeTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completeTask.js */ "./src/completeTask.js");



const taskSection = document.querySelector('.section--task');
const removeTodoItem = (taskDiv) => {
  _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data.splice(taskDiv.id, 1);
  taskDiv.remove();
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data);
};
const displayTrash = (taskDiv) => {
  const trash = taskDiv.querySelector('.task--div .trash');
  const ellipsis = taskDiv.querySelector('#elips');
  trash.style.display = 'block';
  ellipsis.style.display = 'none';
};

const editTodoItem = (id, newValue) => {
  _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data[parseInt(id, 10)].description = newValue;
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data);
};

const createTodo = (item) => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task--div');
  taskDiv.id = item.index;
  taskDiv.innerHTML = `
  <div class="input--div">
    <input id="check--box" type="checkbox">
    <input id="text--tast" type="text">
  </div>
  <div class="trash">
    <i class="fa fa-trash-o"></i>
  </div>

  <div id="elips">
  <i class="fa fa-ellipsis-v"></i>
  </div>`;

  const inputBox = taskDiv.querySelector('#text--tast');
  const checkboxInput = taskDiv.querySelector('#check--box');
  const ellipsis = taskDiv.querySelector('#elips');
  const trash = taskDiv.querySelector('.task--div .trash');

  inputBox.addEventListener('change', (e) => {
    editTodoItem(taskDiv.id, e.currentTarget.value);
  });

  inputBox.value = item.description;
  inputBox.style.textDecoration = (item.completed && 'line-through') || 'none';
  inputBox.style.color = (item.completed && 'gray') || 'black';
  inputBox.disabled = item.completed;

  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    (0,_completeTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e, taskDiv.id, inputBox);
  });

  ellipsis.addEventListener('mousedown', () => {
    displayTrash(taskDiv);
  });

  trash.addEventListener('mousedown', () => {
    removeTodoItem(taskDiv);
  });
  taskSection.appendChild(taskDiv);
};

const onSubmit = () => {
  const addTodoInput = document.querySelector('.add--div input');
  if (!addTodoInput.value) {
    return;
  }
  const newItem = {
    description: addTodoInput.value,
    completed: false,
    index: _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data.length,
  };

  _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data.push(newItem);
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data);
  createTodo(newItem, _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data.length - 1);
  addTodoInput.value = '';
  addTodoInput.focus();
};

const removeCompleted = () => {
  const notCompletedList = _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data.filter((i) => !i.completed);
  _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data.filter((item) => item.completed)
    .map((item) => document.querySelectorAll('div.task--div')[item.index])
    .map((element) => element.remove());
  _savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data = notCompletedList;
  (0,_savelist_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_savelist_js__WEBPACK_IMPORTED_MODULE_0__.todoList.data);
  taskSection.querySelectorAll('.task--div').forEach((item, idx) => { item.id = idx; });
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




const populate = () => {
  _savelist_js__WEBPACK_IMPORTED_MODULE_1__.todoList.data.forEach((item) => {
    (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(item);
  });
};

populate();

const addTodoBtn = document.querySelector('.add--div i');
const refresh = document.querySelector('.today-div i');
const clearCompletedBtn = document.querySelector('.section--clear button');
refresh.addEventListener('click', _savelist_js__WEBPACK_IMPORTED_MODULE_1__.ClearStorage);
addTodoBtn.addEventListener('click', _script_js__WEBPACK_IMPORTED_MODULE_2__.onSubmit);

document.querySelector('.add--task').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.onSubmit)();
  }
});

clearCompletedBtn.addEventListener('click', () => {
  (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.removeCompleted)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDJCQUEyQixjQUFjLGVBQWUsR0FBRyxVQUFVLCtEQUErRCx1QkFBdUIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsR0FBRyxhQUFhLG9CQUFvQixjQUFjLGFBQWEsWUFBWSx1QkFBdUIsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLG1CQUFtQix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHdCQUF3Qix1QkFBdUIsbUNBQW1DLG9CQUFvQixzQ0FBc0MsR0FBRyxrQkFBa0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsY0FBYyxvQkFBb0IsR0FBRyxtQkFBbUIsZ0JBQWdCLGlCQUFpQixlQUFlLHVCQUF1Qiw0QkFBNEIsY0FBYyxzQ0FBc0MsR0FBRyxlQUFlLHdCQUF3QixrQkFBa0IsdUJBQXVCLHdCQUF3QixtQ0FBbUMsZUFBZSxjQUFjLEdBQUcscUJBQXFCLGVBQWUsaUJBQWlCLG9CQUFvQixjQUFjLHdCQUF3QixHQUFHLGlCQUFpQix1QkFBdUIsb0JBQW9CLGNBQWMsb0JBQW9CLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxrQ0FBa0Msb0JBQW9CLDhCQUE4Qix1QkFBdUIsR0FBRyw2Q0FBNkMsZ0JBQWdCLGdCQUFnQixpQkFBaUIsZUFBZSx1QkFBdUIsNEJBQTRCLG1CQUFtQix5Q0FBeUMsR0FBRyxnQkFBZ0Isa0JBQWtCLG1DQUFtQyx1QkFBdUIsd0JBQXdCLGdCQUFnQixlQUFlLDJCQUEyQixHQUFHLGtCQUFrQixvQkFBb0IsY0FBYyxvQkFBb0Isb0JBQW9CLEdBQUcsaUJBQWlCLGdCQUFnQixjQUFjLGtCQUFrQix1QkFBdUIsNEJBQTRCLHdCQUF3QixpQkFBaUIsa0JBQWtCLEdBQUcsaUJBQWlCLDJCQUEyQixlQUFlLGlCQUFpQixvQkFBb0IsY0FBYyxjQUFjLHFCQUFxQixvQkFBb0IsNENBQTRDLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLHFCQUFxQixpQ0FBaUMsNEJBQTRCLEdBQUcsNEJBQTRCLGlCQUFpQiw0QkFBNEIsOEJBQThCLG9CQUFvQixrQkFBa0Isb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IsY0FBYyxhQUFhLFlBQVksa0JBQWtCLDhCQUE4QixzQ0FBc0MsR0FBRywrQkFBK0IsVUFBVSw4QkFBOEIsbUJBQW1CLHFCQUFxQixLQUFLLGVBQWUsZ0JBQWdCLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsMEJBQTBCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLGtCQUFrQix1QkFBdUIsS0FBSyxvQkFBb0IseUJBQXlCLEtBQUssbUJBQW1CLDRCQUE0QixLQUFLLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sNEJBQTRCLDJCQUEyQixjQUFjLGVBQWUsR0FBRyxVQUFVLCtEQUErRCx1QkFBdUIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsR0FBRyxhQUFhLG9CQUFvQixjQUFjLGFBQWEsWUFBWSx1QkFBdUIsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLG1CQUFtQix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHdCQUF3Qix1QkFBdUIsbUNBQW1DLG9CQUFvQixzQ0FBc0MsR0FBRyxrQkFBa0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsY0FBYyxvQkFBb0IsR0FBRyxtQkFBbUIsZ0JBQWdCLGlCQUFpQixlQUFlLHVCQUF1Qiw0QkFBNEIsY0FBYyxzQ0FBc0MsR0FBRyxlQUFlLHdCQUF3QixrQkFBa0IsdUJBQXVCLHdCQUF3QixtQ0FBbUMsZUFBZSxjQUFjLEdBQUcscUJBQXFCLGVBQWUsaUJBQWlCLG9CQUFvQixjQUFjLHdCQUF3QixHQUFHLGlCQUFpQix1QkFBdUIsb0JBQW9CLGNBQWMsb0JBQW9CLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxrQ0FBa0Msb0JBQW9CLDhCQUE4Qix1QkFBdUIsR0FBRyw2Q0FBNkMsZ0JBQWdCLGdCQUFnQixpQkFBaUIsZUFBZSx1QkFBdUIsNEJBQTRCLG1CQUFtQix5Q0FBeUMsR0FBRyxnQkFBZ0Isa0JBQWtCLG1DQUFtQyx1QkFBdUIsd0JBQXdCLGdCQUFnQixlQUFlLDJCQUEyQixHQUFHLGtCQUFrQixvQkFBb0IsY0FBYyxvQkFBb0Isb0JBQW9CLEdBQUcsaUJBQWlCLGdCQUFnQixjQUFjLGtCQUFrQix1QkFBdUIsNEJBQTRCLHdCQUF3QixpQkFBaUIsa0JBQWtCLEdBQUcsaUJBQWlCLDJCQUEyQixlQUFlLGlCQUFpQixvQkFBb0IsY0FBYyxjQUFjLHFCQUFxQixvQkFBb0IsNENBQTRDLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLHFCQUFxQixpQ0FBaUMsNEJBQTRCLEdBQUcsNEJBQTRCLGlCQUFpQiw0QkFBNEIsOEJBQThCLG9CQUFvQixrQkFBa0Isb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IsY0FBYyxhQUFhLFlBQVksa0JBQWtCLDhCQUE4QixzQ0FBc0MsR0FBRywrQkFBK0IsVUFBVSw4QkFBOEIsbUJBQW1CLHFCQUFxQixLQUFLLGVBQWUsZ0JBQWdCLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsMEJBQTBCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLGtCQUFrQix1QkFBdUIsS0FBSyxvQkFBb0IseUJBQXlCLEtBQUssbUJBQW1CLDRCQUE0QixLQUFLLEdBQUcscUJBQXFCO0FBQzlvUTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmd0Q7O0FBRXhELGlFQUFlO0FBQ2YsRUFBRSx1REFBYTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFhLENBQUMsdURBQWE7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTTtBQUNBO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ3RDtBQUNYOztBQUU3QztBQUNBO0FBQ0EsRUFBRSw4REFBb0I7QUFDdEI7QUFDQSxFQUFFLDJEQUFhLENBQUMsdURBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVEQUFhO0FBQ2YsRUFBRSwyREFBYSxDQUFDLHVEQUFhO0FBQzdCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLDREQUFZO0FBQ2hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFvQjtBQUMvQjs7QUFFQSxFQUFFLDREQUFrQjtBQUNwQixFQUFFLDJEQUFhLENBQUMsdURBQWE7QUFDN0Isc0JBQXNCLDhEQUFvQjtBQUMxQztBQUNBO0FBQ0E7O0FBRU87QUFDUCwyQkFBMkIsOERBQW9CO0FBQy9DLEVBQUUsOERBQ1M7QUFDWDtBQUNBO0FBQ0EsRUFBRSx1REFBYTtBQUNmLEVBQUUsMkRBQWEsQ0FBQyx1REFBYTtBQUM3QixzRUFBc0UsZ0JBQWdCO0FBQ3RGOzs7Ozs7VUMvRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2tDO0FBQ2E7O0FBRXBFO0FBQ0EsRUFBRSwrREFBcUI7QUFDdkIsSUFBSSxzREFBVTtBQUNkLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQVk7QUFDOUMscUNBQXFDLGdEQUFROztBQUU3QztBQUNBO0FBQ0EsSUFBSSxvREFBUTtBQUNaO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsMkRBQWU7QUFDakIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBsZXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NhdmVsaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29taWMgU2FucyBNU1xcXCIsIFxcXCJDb21pYyBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4uaGVhZGVyIHNwYW4ge1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLnNlY3Rpb24tLXRvZGF5IHtcXG4gIG1hcmdpbjogODBweCAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRvZGF5LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MywgODMsIDgzKTtcXG59XFxuXFxuLnRvZGF5LWRpdiBpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgcGFkZGluZzogMTJweCAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VjdGlvbi0tYWRkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDgzLCA4MywgODMpO1xcbn1cXG5cXG4uYWRkLS1kaXYge1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmFkZC0tZGl2IGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uYWRkLS1kaXYgaSB7XFxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLS1kaXYgLnRyYXNoIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtLWRpdiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogTElTVCBTRUNUSU9OIFRBU0sgKi9cXG4uc2VjdGlvbi0tdGFzayB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiA0MHB4IDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjI4LCAyMjUsIDIyNSk7XFxufVxcblxcbi50YXNrLS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDNweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay0tZGl2IGkge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXQtLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGV4dC0tdGFzdCB7XFxuICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDQsIDI0MSwgNCk7XFxufVxcblxcbiN0ZXh0LS10YXN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWN0aW9uLS1jbGVhciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWN0aW9uLS1jbGVhciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiKDE0NiwgMTQ2LCAxNDYpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgY29sb3I6IHJnYigyMzYsIDIzMCwgMjMwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgNjUsIDY1KTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgdG9wOiA3MHB4O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxuXFxuICAuc2VjdGlvbi0tdG9kYXkge1xcbiAgICBtYXJnaW46IDE4MHB4IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAjdGV4dC0tdGFzdCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAudGFzay0tZGl2IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gIH1cXG5cXG4gIC50YXNrLS1kaXYgaSB7XFxuICAgIGNvbG9yOiBncmVlbnllbGxvdztcXG4gIH1cXG5cXG4gIC5pbnB1dC0tZGl2IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29taWMgU2FucyBNU1xcXCIsIFxcXCJDb21pYyBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4uaGVhZGVyIHNwYW4ge1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLnNlY3Rpb24tLXRvZGF5IHtcXG4gIG1hcmdpbjogODBweCAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRvZGF5LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MywgODMsIDgzKTtcXG59XFxuXFxuLnRvZGF5LWRpdiBpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgcGFkZGluZzogMTJweCAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VjdGlvbi0tYWRkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDgzLCA4MywgODMpO1xcbn1cXG5cXG4uYWRkLS1kaXYge1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmFkZC0tZGl2IGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uYWRkLS1kaXYgaSB7XFxuICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLS1kaXYgLnRyYXNoIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtLWRpdiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogTElTVCBTRUNUSU9OIFRBU0sgKi9cXG4uc2VjdGlvbi0tdGFzayB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiA0MHB4IDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjI4LCAyMjUsIDIyNSk7XFxufVxcblxcbi50YXNrLS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDNweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGFzay0tZGl2IGkge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXQtLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGV4dC0tdGFzdCB7XFxuICBjb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDQsIDI0MSwgNCk7XFxufVxcblxcbiN0ZXh0LS10YXN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWN0aW9uLS1jbGVhciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWN0aW9uLS1jbGVhciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiKDE0NiwgMTQ2LCAxNDYpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgY29sb3I6IHJnYigyMzYsIDIzMCwgMjMwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgNjUsIDY1KTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgdG9wOiA3MHB4O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxuXFxuICAuc2VjdGlvbi0tdG9kYXkge1xcbiAgICBtYXJnaW46IDE4MHB4IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAjdGV4dC0tdGFzdCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAudGFzay0tZGl2IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gIH1cXG5cXG4gIC50YXNrLS1kaXYgaSB7XFxuICAgIGNvbG9yOiBncmVlbnllbGxvdztcXG4gIH1cXG5cXG4gIC5pbnB1dC0tZGl2IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHVwZGF0ZVN0b3JhZ2UsIHRvZG9MaXN0IH0gZnJvbSAnLi9zYXZlbGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChlLCBpZCwgaW5wdXRCb3gpID0+IHtcbiAgdG9kb0xpc3QuZGF0YVtwYXJzZUludChpZCwgMTApXS5jb21wbGV0ZWQgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZDtcbiAgaW5wdXRCb3guc3R5bGUudGV4dERlY29yYXRpb24gPSAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgJiYgJ2xpbmUtdGhyb3VnaCcpIHx8ICdub25lJztcbiAgaW5wdXRCb3guc3R5bGUuY29sb3IgPSAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgJiYgJ2dyYXknKSB8fCAnYmxhY2snO1xuICBpbnB1dEJveC5kaXNhYmxlZCA9IGUuY3VycmVudFRhcmdldC5jaGVja2VkO1xuXG4gIHVwZGF0ZVN0b3JhZ2UodG9kb0xpc3QuZGF0YSk7XG59OyIsImV4cG9ydCBjb25zdCBTVE9SQUdFX05BTUUgPSAndG9kby1saXN0JztcbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gKG5ld0xpc3QpID0+IHtcbiAgbmV3TGlzdC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICBpdGVtLmluZGV4ID0gaWR4O1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9OQU1FLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2xlYXJTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgbG9jYWxTdG9yYWdlLnJlbG9hZCgpO1xufTtcbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCBwcmV2U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9OQU1FKSk7XG4gIGlmIChwcmV2U3RvcmFnZSAmJiBwcmV2U3RvcmFnZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gcHJldlN0b3JhZ2U7XG4gIH1cbiAgY29uc3QgZGF0YSA9IFtdO1xuICB1cGRhdGVTdG9yYWdlKGRhdGEpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b2RvTGlzdCA9IHtcbiAgZGF0YTogY3JlYXRlVG9kb0xpc3QoKSxcbn07IiwiaW1wb3J0IHsgdG9kb0xpc3QsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tICcuL3NhdmVsaXN0LmpzJztcbmltcG9ydCBzZXRDb21wbGV0ZWQgZnJvbSAnLi9jb21wbGV0ZVRhc2suanMnO1xuXG5jb25zdCB0YXNrU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLS10YXNrJyk7XG5jb25zdCByZW1vdmVUb2RvSXRlbSA9ICh0YXNrRGl2KSA9PiB7XG4gIHRvZG9MaXN0LmRhdGEuc3BsaWNlKHRhc2tEaXYuaWQsIDEpO1xuICB0YXNrRGl2LnJlbW92ZSgpO1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xufTtcbmNvbnN0IGRpc3BsYXlUcmFzaCA9ICh0YXNrRGl2KSA9PiB7XG4gIGNvbnN0IHRyYXNoID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKCcudGFzay0tZGl2IC50cmFzaCcpO1xuICBjb25zdCBlbGxpcHNpcyA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignI2VsaXBzJyk7XG4gIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBlbGxpcHNpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3QgZWRpdFRvZG9JdGVtID0gKGlkLCBuZXdWYWx1ZSkgPT4ge1xuICB0b2RvTGlzdC5kYXRhW3BhcnNlSW50KGlkLCAxMCldLmRlc2NyaXB0aW9uID0gbmV3VmFsdWU7XG4gIHVwZGF0ZVN0b3JhZ2UodG9kb0xpc3QuZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kbyA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLS1kaXYnKTtcbiAgdGFza0Rpdi5pZCA9IGl0ZW0uaW5kZXg7XG4gIHRhc2tEaXYuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtLWRpdlwiPlxuICAgIDxpbnB1dCBpZD1cImNoZWNrLS1ib3hcIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICA8aW5wdXQgaWQ9XCJ0ZXh0LS10YXN0XCIgdHlwZT1cInRleHRcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0cmFzaFwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cImVsaXBzXCI+XG4gIDxpIGNsYXNzPVwiZmEgZmEtZWxsaXBzaXMtdlwiPjwvaT5cbiAgPC9kaXY+YDtcblxuICBjb25zdCBpbnB1dEJveCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignI3RleHQtLXRhc3QnKTtcbiAgY29uc3QgY2hlY2tib3hJbnB1dCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignI2NoZWNrLS1ib3gnKTtcbiAgY29uc3QgZWxsaXBzaXMgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoJyNlbGlwcycpO1xuICBjb25zdCB0cmFzaCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignLnRhc2stLWRpdiAudHJhc2gnKTtcblxuICBpbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGVkaXRUb2RvSXRlbSh0YXNrRGl2LmlkLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9KTtcblxuICBpbnB1dEJveC52YWx1ZSA9IGl0ZW0uZGVzY3JpcHRpb247XG4gIGlucHV0Qm94LnN0eWxlLnRleHREZWNvcmF0aW9uID0gKGl0ZW0uY29tcGxldGVkICYmICdsaW5lLXRocm91Z2gnKSB8fCAnbm9uZSc7XG4gIGlucHV0Qm94LnN0eWxlLmNvbG9yID0gKGl0ZW0uY29tcGxldGVkICYmICdncmF5JykgfHwgJ2JsYWNrJztcbiAgaW5wdXRCb3guZGlzYWJsZWQgPSBpdGVtLmNvbXBsZXRlZDtcblxuICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBpdGVtLmNvbXBsZXRlZDtcblxuICBjaGVja2JveElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgc2V0Q29tcGxldGVkKGUsIHRhc2tEaXYuaWQsIGlucHV0Qm94KTtcbiAgfSk7XG5cbiAgZWxsaXBzaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgIGRpc3BsYXlUcmFzaCh0YXNrRGl2KTtcbiAgfSk7XG5cbiAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgIHJlbW92ZVRvZG9JdGVtKHRhc2tEaXYpO1xuICB9KTtcbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59O1xuXG5leHBvcnQgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLWRpdiBpbnB1dCcpO1xuICBpZiAoIWFkZFRvZG9JbnB1dC52YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBuZXdJdGVtID0ge1xuICAgIGRlc2NyaXB0aW9uOiBhZGRUb2RvSW5wdXQudmFsdWUsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogdG9kb0xpc3QuZGF0YS5sZW5ndGgsXG4gIH07XG5cbiAgdG9kb0xpc3QuZGF0YS5wdXNoKG5ld0l0ZW0pO1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xuICBjcmVhdGVUb2RvKG5ld0l0ZW0sIHRvZG9MaXN0LmRhdGEubGVuZ3RoIC0gMSk7XG4gIGFkZFRvZG9JbnB1dC52YWx1ZSA9ICcnO1xuICBhZGRUb2RvSW5wdXQuZm9jdXMoKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdENvbXBsZXRlZExpc3QgPSB0b2RvTGlzdC5kYXRhLmZpbHRlcigoaSkgPT4gIWkuY29tcGxldGVkKTtcbiAgdG9kb0xpc3QuZGF0YVxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkKVxuICAgIC5tYXAoKGl0ZW0pID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50YXNrLS1kaXYnKVtpdGVtLmluZGV4XSlcbiAgICAubWFwKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgdG9kb0xpc3QuZGF0YSA9IG5vdENvbXBsZXRlZExpc3Q7XG4gIHVwZGF0ZVN0b3JhZ2UodG9kb0xpc3QuZGF0YSk7XG4gIHRhc2tTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLS1kaXYnKS5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHsgaXRlbS5pZCA9IGlkeDsgfSk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHRvZG9MaXN0LCBDbGVhclN0b3JhZ2UgfSBmcm9tICcuL3NhdmVsaXN0LmpzJztcbmltcG9ydCB7IG9uU3VibWl0LCBjcmVhdGVUb2RvLCByZW1vdmVDb21wbGV0ZWQgfSBmcm9tICcuL3NjcmlwdC5qcyc7XG5cbmNvbnN0IHBvcHVsYXRlID0gKCkgPT4ge1xuICB0b2RvTGlzdC5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjcmVhdGVUb2RvKGl0ZW0pO1xuICB9KTtcbn07XG5cbnBvcHVsYXRlKCk7XG5cbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1kaXYgaScpO1xuY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1kaXYgaScpO1xuY29uc3QgY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi0tY2xlYXIgYnV0dG9uJyk7XG5yZWZyZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2xlYXJTdG9yYWdlKTtcbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblN1Ym1pdCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgb25TdWJtaXQoKTtcbiAgfVxufSk7XG5cbmNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZW1vdmVDb21wbGV0ZWQoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==