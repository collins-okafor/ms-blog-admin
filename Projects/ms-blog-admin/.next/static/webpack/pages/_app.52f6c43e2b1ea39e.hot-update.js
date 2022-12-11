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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MailBody\": function() { return /* binding */ MailBody; },\n/* harmony export */   \"MailContainer\": function() { return /* binding */ MailContainer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 35%;\\n  background: \",\n        \";\\n  margin: auto;\\n  height: 80vh;\\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\\n  h3 {\\n    margin-bottom: 2rem;\\n    font-size: 28px;\\n  }\\n  color: \",\n        ';\\n  @media (max-width: 1050px) {\\n    width: 50%;\\n  }\\n  @media (max-width: 900px) {\\n    width: 85%;\\n  }\\n  @media (max-width: 700px) {\\n    width: 100%;\\n    height: 100vh;\\n  }\\n  p {\\n    /* font-family: \"Public Sans\", sans-serif; */\\n    font-family: \"Nunito\", sans-serif;\\n    /* font-family: \"Poppins\", sans-serif; */\\n    font-size: 14px;\\n    font-weight: 500;\\n    font-style: normal;\\n  }\\n  .signOptions {\\n    background-color: transparent;\\n    border: none;\\n    color: ',\n        ';\\n    margin-top: 0.5rem;\\n    cursor: pointer;\\n    text-transform: uppercase;\\n    font-family: \"Public Sans\", sans-serif;\\n    /* font-family: \"Nunito\", sans-serif; */\\n    font-size: 14px;\\n    font-weight: 600;\\n    font-style: normal;\\n  }\\n  .cancelButton {\\n    position: absolute;\\n    top: 1px;\\n    right: 1px;\\n    padding: 5px 10px;\\n    background-color: transparent;\\n    border: none;\\n    font-size: 25px;\\n    cursor: pointer;\\n    color: ',\n        \";\\n  }\\n  .signUpButton {\\n    border: 1px solid gray;\\n    border-radius: 20px;\\n    color: \",\n        \";\\n    background-color: \",\n        ';\\n    padding: 10px;\\n    width: 32%;\\n    /* background-color: transparent; */\\n    margin: 0.7rem 0;\\n    font-family: \"Public Sans\", sans-serif;\\n    font-size: 14px;\\n    font-weight: 600;\\n    cursor: pointer;\\n    @media (max-width: 900px) {\\n      /* width: 60%;  */\\n      margin-bottom: 2rem;\\n    }\\n    @media (max-width: 700px) {\\n      width: 60%;\\n      margin-bottom: 2rem;\\n    }\\n  }\\n  h3 {\\n    text-transform: uppercase;\\n    font-family: \"Public Sans\", sans-serif;\\n    /* font-family: \"Nunito\", sans-serif; */\\n    font-size: 16px;\\n    font-weight: 700;\\n    font-style: normal;\\n  }\\n  p {\\n    margin-bottom: 3rem;\\n  }\\n  .inputContainer {\\n    display: flex;\\n    flex-direction: column;\\n    width: 80%;\\n    text-align: center;\\n    margin: 1rem 0;\\n    @media (max-width: 900px) {\\n      width: 80%;\\n      margin: 2rem 0;\\n    }\\n    @media (max-width: 700px) {\\n      width: 90%;\\n      margin: 2rem 0;\\n    }\\n    label {\\n      margin-bottom: 0.2rem;\\n    }\\n    input {\\n      border: none;\\n      border-bottom: 1px solid ',\n        \";\\n      color: \",\n        \";\\n      background-color: \",\n        \";\\n      outline: none;\\n      font-size: 15px;\\n      width: 60%;\\n      margin: 0 auto;\\n      padding: 10px;\\n      @media (max-width: 900px) {\\n        width: 85%;\\n      }\\n      @media (max-width: 700px) {\\n        width: 100%;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst MailBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst MailContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1(), (param)=>{\n    let { theme  } = param;\n    return theme.primaryColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.majorColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.secondaryColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColorReverse;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.textColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.primaryColor;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cC9zdHlsZXMvbWFpbFNpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsV0FBV0QsNkRBQVUsb0JBS2hDO0FBQ0ssTUFBTUcsZ0JBQWdCSCw2REFBVSxxQkFFdkIsU0FBZUk7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUMsWUFBWTtBQUFELEdBYXJDLFNBQWVEO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1FLFNBQVM7QUFBRCxHQXNCM0IsU0FBZUY7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUcsVUFBVTtBQUFELEdBbUI5QixTQUFlSDtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNSSxjQUFjO0FBQUQsR0FLbEMsU0FBZUo7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUssZ0JBQWdCO0FBQUQsR0FDekIsU0FBZUw7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUUsU0FBUztBQUFELEdBZ0RwQixTQUFlRjtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNRSxTQUFTO0FBQUQsR0FDL0MsU0FBZUY7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUUsU0FBUztBQUFELEdBQ2xCLFNBQWVGO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1DLFlBQVk7QUFBRCxHQWN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ251cC9zdHlsZXMvbWFpbFNpZ251cC5qcz9kZWZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBNYWlsQm9keSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcbmV4cG9ydCBjb25zdCBNYWlsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDM1JTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5Q29sb3J9O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XG4gIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3J9O1xuICBAbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICB3aWR0aDogODUlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgcCB7XG4gICAgLyogZm9udC1mYW1pbHk6IFwiUHVibGljIFNhbnNcIiwgc2Fucy1zZXJpZjsgKi9cbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAvKiBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIC5zaWduT3B0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1ham9yQ29sb3J9O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogXCJQdWJsaWMgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIC8qIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmOyAqL1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICAuY2FuY2VsQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcHg7XG4gICAgcmlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zZWNvbmRhcnlDb2xvcn07XG4gIH1cbiAgLnNpZ25VcEJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRDb2xvclJldmVyc2V9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dENvbG9yfTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAzMiU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXG4gICAgbWFyZ2luOiAwLjdyZW0gMDtcbiAgICBmb250LWZhbWlseTogXCJQdWJsaWMgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgIC8qIHdpZHRoOiA2MCU7ICAqL1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gIH1cbiAgaDMge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFwiUHVibGljIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAvKiBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjsgKi9cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuICAuaW5wdXRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dENvbG9yfTtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlDb2xvcn07XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNYWlsQm9keSIsImRpdiIsIk1haWxDb250YWluZXIiLCJ0aGVtZSIsInByaW1hcnlDb2xvciIsInRleHRDb2xvciIsIm1ham9yQ29sb3IiLCJzZWNvbmRhcnlDb2xvciIsInRleHRDb2xvclJldmVyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Signup/styles/mailSignup.js\n"));

/***/ })

});