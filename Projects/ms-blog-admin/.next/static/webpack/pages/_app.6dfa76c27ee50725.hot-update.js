"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Signup/styles/mailSignup.js":
/*!************************************************!*\
  !*** ./components/Signup/styles/mailSignup.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MailBody\": function() { return /* binding */ MailBody; },\n/* harmony export */   \"MailContainer\": function() { return /* binding */ MailContainer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 35%;\\n  background: \",\n        \";\\n  margin: auto;\\n  height: 80vh;\\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\\n  h3{\\n    margin-bottom:\\n  }\\n  color: \",\n        ';\\n  @media (max-width: 1050px) {\\n    width: 50%;\\n  }\\n  @media (max-width: 900px) {\\n    width: 85%;\\n  }\\n  @media (max-width: 700px) {\\n    width: 100%;\\n    height: 100vh;\\n  }\\n  p {\\n    /* font-family: \"Public Sans\", sans-serif; */\\n    font-family: \"Nunito\", sans-serif;\\n    /* font-family: \"Poppins\", sans-serif; */\\n    font-size: 14px;\\n    font-weight: 500;\\n    font-style: normal;\\n  }\\n  .signOptions {\\n    background-color: transparent;\\n    border: none;\\n    color: ',\n        ';\\n    margin-top: 0.5rem;\\n    cursor: pointer;\\n    text-transform: uppercase;\\n    font-family: \"Public Sans\", sans-serif;\\n    /* font-family: \"Nunito\", sans-serif; */\\n    font-size: 14px;\\n    font-weight: 600;\\n    font-style: normal;\\n  }\\n  .cancelButton {\\n    position: absolute;\\n    top: 1px;\\n    right: 1px;\\n    padding: 5px 10px;\\n    background-color: transparent;\\n    border: none;\\n    font-size: 25px;\\n    cursor: pointer;\\n    color: ',\n        \";\\n  }\\n  .signUpButton {\\n    border: 1px solid gray;\\n    border-radius: 20px;\\n    color: \",\n        \";\\n    background-color: \",\n        ';\\n    padding: 10px;\\n    width: 32%;\\n    /* background-color: transparent; */\\n    margin: 0.7rem 0;\\n    font-family: \"Public Sans\", sans-serif;\\n    font-size: 14px;\\n    font-weight: 600;\\n    cursor: pointer;\\n    @media (max-width: 900px) {\\n      /* width: 60%;  */\\n      margin-bottom: 2rem;\\n    }\\n    @media (max-width: 700px) {\\n      width: 60%;\\n      margin-bottom: 2rem;\\n    }\\n  }\\n  h3 {\\n    text-transform: uppercase;\\n    font-family: \"Public Sans\", sans-serif;\\n    /* font-family: \"Nunito\", sans-serif; */\\n    font-size: 16px;\\n    font-weight: 700;\\n    font-style: normal;\\n  }\\n  p {\\n    margin-bottom: 3rem;\\n  }\\n  .inputContainer {\\n    display: flex;\\n    flex-direction: column;\\n    width: 80%;\\n    text-align: center;\\n    margin: 1rem 0;\\n    @media (max-width: 900px) {\\n      width: 80%;\\n      margin: 2rem 0;\\n    }\\n    @media (max-width: 700px) {\\n      width: 90%;\\n      margin: 2rem 0;\\n    }\\n    label {\\n      margin-bottom: 0.2rem;\\n    }\\n    input {\\n      border: none;\\n      border-bottom: 1px solid ',\n        \";\\n      color: \",\n        \";\\n      background-color: \",\n        \";\\n      outline: none;\\n      font-size: 15px;\\n      width: 60%;\\n      margin: 0 auto;\\n      padding: 10px;\\n      @media (max-width: 900px) {\\n        width: 85%;\\n      }\\n      @media (max-width: 700px) {\\n        width: 100%;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst MailBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst MailContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1(), (param)=>{\n    let { theme  } = param;\n    return theme.primaryColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.majorColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.secondaryColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColorReverse;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.primaryColor;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cC9zdHlsZXMvbWFpbFNpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsV0FBV0QsNkRBQVUsb0JBS2hDO0FBQ0ssTUFBTUcsZ0JBQWdCSCw2REFBVSxxQkFFdkIsU0FBZUk7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUMsWUFBWTtBQUFELEdBWXJDLFNBQWVEO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1FLFNBQVM7QUFBRCxHQXNCM0IsU0FBZUY7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUcsVUFBVTtBQUFELEdBbUI5QixTQUFlSDtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNSSxjQUFjO0FBQUQsR0FLbEMsU0FBZUo7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUssZ0JBQWdCO0FBQUQsR0FDekIsU0FBZUw7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUUsU0FBUztBQUFELEdBZ0RwQixTQUFlRjtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNRSxTQUFTO0FBQUQsR0FDL0MsU0FBZUY7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUUsU0FBUztBQUFELEdBQ2xCLFNBQWVGO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1DLFlBQVk7QUFBRCxHQWN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ251cC9zdHlsZXMvbWFpbFNpZ251cC5qcz9kZWZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBNYWlsQm9keSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcbmV4cG9ydCBjb25zdCBNYWlsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDM1JTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5Q29sb3J9O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XG4gIGgze1xuICAgIG1hcmdpbi1ib3R0b206XG4gIH1cbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dENvbG9yfTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIHAge1xuICAgIC8qIGZvbnQtZmFtaWx5OiBcIlB1YmxpYyBTYW5zXCIsIHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgLyogZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmOyAqL1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICAuc2lnbk9wdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tYWpvckNvbG9yfTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFwiUHVibGljIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAvKiBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjsgKi9cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgLmNhbmNlbEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXB4O1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2Vjb25kYXJ5Q29sb3J9O1xuICB9XG4gIC5zaWduVXBCdXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3JSZXZlcnNlfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRDb2xvcn07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMzIlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xuICAgIG1hcmdpbjogMC43cmVtIDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUHVibGljIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAvKiB3aWR0aDogNjAlOyAgKi9cbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICB9XG4gIGgzIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlB1YmxpYyBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgLyogZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbiAgLmlucHV0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRDb2xvcn07XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5Q29sb3J9O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiTWFpbEJvZHkiLCJkaXYiLCJNYWlsQ29udGFpbmVyIiwidGhlbWUiLCJwcmltYXJ5Q29sb3IiLCJ0ZXh0Q29sb3IiLCJtYWpvckNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJ0ZXh0Q29sb3JSZXZlcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signup/styles/mailSignup.js\n"));

/***/ })

});