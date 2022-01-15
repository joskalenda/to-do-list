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
  window.location.reload();
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
/* harmony import */ var _marked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marked.js */ "./src/marked.js");



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
    (0,_marked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e, taskDiv.id, inputBox);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBb0I7QUFDL0I7O0FBRUEsRUFBRSw0REFBa0I7QUFDcEIsRUFBRSwyREFBYSxDQUFDLHVEQUFhO0FBQzdCLHNCQUFzQiw4REFBb0I7QUFDMUM7QUFDQTtBQUNBOztBQUVPO0FBQ1AsMkJBQTJCLDhEQUFvQjtBQUMvQyxFQUFFLDhEQUNTO0FBQ1g7QUFDQTtBQUNBLEVBQUUsdURBQWE7QUFDZixFQUFFLDJEQUFhLENBQUMsdURBQWE7QUFDN0Isc0VBQXNFLGdCQUFnQjtBQUN0Rjs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNrQztBQUNhOztBQUVwRTtBQUNBLEVBQUUsK0RBQXFCO0FBQ3ZCLElBQUksc0RBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNEQUFZO0FBQzlDLHFDQUFxQyxnREFBUTs7QUFFN0M7QUFDQTtBQUNBLElBQUksb0RBQVE7QUFDWjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDJEQUFlO0FBQ2pCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYXJrZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXZlbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvbWljIFNhbnMgTVNcXFwiLCBcXFwiQ29taWMgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLmhlYWRlciBzcGFuIHtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5zZWN0aW9uLS10b2RheSB7XFxuICBtYXJnaW46IDgwcHggMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50b2RheS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODMsIDgzLCA4Myk7XFxufVxcblxcbi50b2RheS1kaXYgaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG4gIHBhZGRpbmc6IDEycHggMDtcXG4gIG1hcmdpbjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24tLWFkZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MywgODMsIDgzKTtcXG59XFxuXFxuLmFkZC0tZGl2IHtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQtLWRpdiBpbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmFkZC0tZGl2IGkge1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay0tZGl2IC50cmFzaCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLS1kaXYgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIExJU1QgU0VDVElPTiBUQVNLICovXFxuLnNlY3Rpb24tLXRhc2sge1xcbiAgY29sb3I6ICMwMDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogNDBweCAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyOCwgMjI1LCAyMjUpO1xcbn1cXG5cXG4udGFzay0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAzcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRhc2stLWRpdiBpIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0LS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3RleHQtLXRhc3Qge1xcbiAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYig0LCAyNDEsIDQpO1xcbn1cXG5cXG4jdGV4dC0tdGFzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VjdGlvbi0tY2xlYXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VjdGlvbi0tY2xlYXIgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGNvbG9yOiByZ2IoMjM2LCAyMzAsIDIzMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDY1LCA2NSk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIHRvcDogNzBweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgfVxcblxcbiAgLnNlY3Rpb24tLXRvZGF5IHtcXG4gICAgbWFyZ2luOiAxODBweCAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgI3RleHQtLXRhc3Qge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLnRhc2stLWRpdiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICB9XFxuXFxuICAudGFzay0tZGl2IGkge1xcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxuICB9XFxuXFxuICAuaW5wdXQtLWRpdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsU0FBUztJQUNULGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvbWljIFNhbnMgTVNcXFwiLCBcXFwiQ29taWMgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLmhlYWRlciBzcGFuIHtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5zZWN0aW9uLS10b2RheSB7XFxuICBtYXJnaW46IDgwcHggMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50b2RheS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODMsIDgzLCA4Myk7XFxufVxcblxcbi50b2RheS1kaXYgaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG4gIHBhZGRpbmc6IDEycHggMDtcXG4gIG1hcmdpbjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24tLWFkZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MywgODMsIDgzKTtcXG59XFxuXFxuLmFkZC0tZGl2IHtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQtLWRpdiBpbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmFkZC0tZGl2IGkge1xcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay0tZGl2IC50cmFzaCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLS1kaXYgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qIExJU1QgU0VDVElPTiBUQVNLICovXFxuLnNlY3Rpb24tLXRhc2sge1xcbiAgY29sb3I6ICMwMDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogNDBweCAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyOCwgMjI1LCAyMjUpO1xcbn1cXG5cXG4udGFzay0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAzcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRhc2stLWRpdiBpIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0LS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3RleHQtLXRhc3Qge1xcbiAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYig0LCAyNDEsIDQpO1xcbn1cXG5cXG4jdGV4dC0tdGFzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VjdGlvbi0tY2xlYXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VjdGlvbi0tY2xlYXIgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGNvbG9yOiByZ2IoMjM2LCAyMzAsIDIzMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDY1LCA2NSk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIHRvcDogNzBweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgfVxcblxcbiAgLnNlY3Rpb24tLXRvZGF5IHtcXG4gICAgbWFyZ2luOiAxODBweCAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgI3RleHQtLXRhc3Qge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLnRhc2stLWRpdiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICB9XFxuXFxuICAudGFzay0tZGl2IGkge1xcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XFxuICB9XFxuXFxuICAuaW5wdXQtLWRpdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB1cGRhdGVTdG9yYWdlLCB0b2RvTGlzdCB9IGZyb20gJy4vc2F2ZWxpc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgaWQsIGlucHV0Qm94KSA9PiB7XG4gIHRvZG9MaXN0LmRhdGFbcGFyc2VJbnQoaWQsIDEwKV0uY29tcGxldGVkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG4gIGlucHV0Qm94LnN0eWxlLnRleHREZWNvcmF0aW9uID0gKGUuY3VycmVudFRhcmdldC5jaGVja2VkICYmICdsaW5lLXRocm91Z2gnKSB8fCAnbm9uZSc7XG4gIGlucHV0Qm94LnN0eWxlLmNvbG9yID0gKGUuY3VycmVudFRhcmdldC5jaGVja2VkICYmICdncmF5JykgfHwgJ2JsYWNrJztcbiAgaW5wdXRCb3guZGlzYWJsZWQgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZDtcblxuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xufTsiLCJleHBvcnQgY29uc3QgU1RPUkFHRV9OQU1FID0gJ3RvZG8tbGlzdCc7XG5leHBvcnQgY29uc3QgdXBkYXRlU3RvcmFnZSA9IChuZXdMaXN0KSA9PiB7XG4gIG5ld0xpc3QuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgaXRlbS5pbmRleCA9IGlkeDtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfTkFNRSwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IENsZWFyU3RvcmFnZSA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5jb25zdCBjcmVhdGVUb2RvTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJldlN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfTkFNRSkpO1xuICBpZiAocHJldlN0b3JhZ2UgJiYgcHJldlN0b3JhZ2UubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHByZXZTdG9yYWdlO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBbXTtcbiAgdXBkYXRlU3RvcmFnZShkYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgdG9kb0xpc3QgPSB7XG4gIGRhdGE6IGNyZWF0ZVRvZG9MaXN0KCksXG59OyIsImltcG9ydCB7IHRvZG9MaXN0LCB1cGRhdGVTdG9yYWdlIH0gZnJvbSAnLi9zYXZlbGlzdC5qcyc7XG5pbXBvcnQgc2V0Q29tcGxldGVkIGZyb20gJy4vbWFya2VkLmpzJztcblxuY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi0tdGFzaycpO1xuY29uc3QgcmVtb3ZlVG9kb0l0ZW0gPSAodGFza0RpdikgPT4ge1xuICB0b2RvTGlzdC5kYXRhLnNwbGljZSh0YXNrRGl2LmlkLCAxKTtcbiAgdGFza0Rpdi5yZW1vdmUoKTtcbiAgdXBkYXRlU3RvcmFnZSh0b2RvTGlzdC5kYXRhKTtcbn07XG5jb25zdCBkaXNwbGF5VHJhc2ggPSAodGFza0RpdikgPT4ge1xuICBjb25zdCB0cmFzaCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignLnRhc2stLWRpdiAudHJhc2gnKTtcbiAgY29uc3QgZWxsaXBzaXMgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoJyNlbGlwcycpO1xuICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZWxsaXBzaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmNvbnN0IGVkaXRUb2RvSXRlbSA9IChpZCwgbmV3VmFsdWUpID0+IHtcbiAgdG9kb0xpc3QuZGF0YVtwYXJzZUludChpZCwgMTApXS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvZG8gPSAoaXRlbSkgPT4ge1xuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay0tZGl2Jyk7XG4gIHRhc2tEaXYuaWQgPSBpdGVtLmluZGV4O1xuICB0YXNrRGl2LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImlucHV0LS1kaXZcIj5cbiAgICA8aW5wdXQgaWQ9XCJjaGVjay0tYm94XCIgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgPGlucHV0IGlkPVwidGV4dC0tdGFzdFwiIHR5cGU9XCJ0ZXh0XCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHJhc2hcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+XG4gIDwvZGl2PlxuXG4gIDxkaXYgaWQ9XCJlbGlwc1wiPlxuICA8aSBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLXZcIj48L2k+XG4gIDwvZGl2PmA7XG5cbiAgY29uc3QgaW5wdXRCb3ggPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LS10YXN0Jyk7XG4gIGNvbnN0IGNoZWNrYm94SW5wdXQgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoJyNjaGVjay0tYm94Jyk7XG4gIGNvbnN0IGVsbGlwc2lzID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKCcjZWxpcHMnKTtcbiAgY29uc3QgdHJhc2ggPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLS1kaXYgLnRyYXNoJyk7XG5cbiAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBlZGl0VG9kb0l0ZW0odGFza0Rpdi5pZCwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG5cbiAgaW5wdXRCb3gudmFsdWUgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICBpbnB1dEJveC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IChpdGVtLmNvbXBsZXRlZCAmJiAnbGluZS10aHJvdWdoJykgfHwgJ25vbmUnO1xuICBpbnB1dEJveC5zdHlsZS5jb2xvciA9IChpdGVtLmNvbXBsZXRlZCAmJiAnZ3JheScpIHx8ICdibGFjayc7XG4gIGlucHV0Qm94LmRpc2FibGVkID0gaXRlbS5jb21wbGV0ZWQ7XG5cbiAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gaXRlbS5jb21wbGV0ZWQ7XG5cbiAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIHNldENvbXBsZXRlZChlLCB0YXNrRGl2LmlkLCBpbnB1dEJveCk7XG4gIH0pO1xuXG4gIGVsbGlwc2lzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICBkaXNwbGF5VHJhc2godGFza0Rpdik7XG4gIH0pO1xuXG4gIHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICByZW1vdmVUb2RvSXRlbSh0YXNrRGl2KTtcbiAgfSk7XG4gIHRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1kaXYgaW5wdXQnKTtcbiAgaWYgKCFhZGRUb2RvSW5wdXQudmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICBkZXNjcmlwdGlvbjogYWRkVG9kb0lucHV0LnZhbHVlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IHRvZG9MaXN0LmRhdGEubGVuZ3RoLFxuICB9O1xuXG4gIHRvZG9MaXN0LmRhdGEucHVzaChuZXdJdGVtKTtcbiAgdXBkYXRlU3RvcmFnZSh0b2RvTGlzdC5kYXRhKTtcbiAgY3JlYXRlVG9kbyhuZXdJdGVtLCB0b2RvTGlzdC5kYXRhLmxlbmd0aCAtIDEpO1xuICBhZGRUb2RvSW5wdXQudmFsdWUgPSAnJztcbiAgYWRkVG9kb0lucHV0LmZvY3VzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xuICBjb25zdCBub3RDb21wbGV0ZWRMaXN0ID0gdG9kb0xpc3QuZGF0YS5maWx0ZXIoKGkpID0+ICFpLmNvbXBsZXRlZCk7XG4gIHRvZG9MaXN0LmRhdGFcbiAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZClcbiAgICAubWFwKChpdGVtKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGFzay0tZGl2JylbaXRlbS5pbmRleF0pXG4gICAgLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gIHRvZG9MaXN0LmRhdGEgPSBub3RDb21wbGV0ZWRMaXN0O1xuICB1cGRhdGVTdG9yYWdlKHRvZG9MaXN0LmRhdGEpO1xuICB0YXNrU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay0tZGl2JykuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7IGl0ZW0uaWQgPSBpZHg7IH0pO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0b2RvTGlzdCwgQ2xlYXJTdG9yYWdlIH0gZnJvbSAnLi9zYXZlbGlzdC5qcyc7XG5pbXBvcnQgeyBvblN1Ym1pdCwgY3JlYXRlVG9kbywgcmVtb3ZlQ29tcGxldGVkIH0gZnJvbSAnLi9zY3JpcHQuanMnO1xuXG5jb25zdCBwb3B1bGF0ZSA9ICgpID0+IHtcbiAgdG9kb0xpc3QuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY3JlYXRlVG9kbyhpdGVtKTtcbiAgfSk7XG59O1xuXG5wb3B1bGF0ZSgpO1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC0tZGl2IGknKTtcbmNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktZGl2IGknKTtcbmNvbnN0IGNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tLWNsZWFyIGJ1dHRvbicpO1xucmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENsZWFyU3RvcmFnZSk7XG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25TdWJtaXQpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIG9uU3VibWl0KCk7XG4gIH1cbn0pO1xuXG5jbGVhckNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVtb3ZlQ29tcGxldGVkKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=