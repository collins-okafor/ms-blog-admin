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

/***/ "./components/Signup/signinMail.js":
/*!*****************************************!*\
  !*** ./components/Signup/signinMail.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_signup_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/signup.styles */ \"./components/Signup/styles/signup.styles.js\");\n/* harmony import */ var _styles_mailSignup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/mailSignup */ \"./components/Signup/styles/mailSignup.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_js_actions_authAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store.js/actions/authAction */ \"./store.js/actions/authAction.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MailSignIn = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const handleCancel = ()=>{\n        dispatch((0,_store_js_actions_authAction__WEBPACK_IMPORTED_MODULE_6__.getLoginPageCounter)({}));\n    };\n    const handleSignInOptions = ()=>{\n        dispatch((0,_store_js_actions_authAction__WEBPACK_IMPORTED_MODULE_6__.getLoginPageCounter)({\n            counter: 2\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_mailSignup__WEBPACK_IMPORTED_MODULE_4__.MailContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"cancelButton\",\n                onClick: handleCancel,\n                children: \"x\"\n            }, void 0, false, {\n                fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Sign up with email\"\n            }, void 0, false, {\n                fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Enter your email address to create an account.\"\n            }, void 0, false, {\n                fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inputContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Your email\"\n                    }, void 0, false, {\n                        fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"mail\"\n                    }, void 0, false, {\n                        fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inputContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"mail\"\n                    }, void 0, false, {\n                        fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"signUpButton\",\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/emmanuel/Projects/ms-blog-admin/components/Signup/signinMail.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MailSignIn, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = MailSignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailSignIn);\nvar _c;\n$RefreshReg$(_c, \"MailSignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cC9zaWduaW5NYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0g7QUFDeUI7QUFDVDtBQUNGO0FBQ1k7QUFDVjtBQUM4QjtBQUV4RSxNQUFNUSxhQUFhLElBQU07O0lBQ3ZCLE1BQU1DLFdBQVdILHdEQUFXQTtJQUU1QixNQUFNSSxlQUFlLElBQU07UUFDekJELFNBQVNGLGlGQUFtQkEsQ0FBQyxDQUFDO0lBQ2hDO0lBQ0EsTUFBTUksc0JBQXNCLElBQU07UUFDaENGLFNBQVNGLGlGQUFtQkEsQ0FBQztZQUFFSyxTQUFTO1FBQUU7SUFDNUM7SUFDQSxxQkFDRSw4REFBQ1AsNkRBQWFBOzswQkFDWiw4REFBQ1E7Z0JBQU9DLFdBQVU7Z0JBQWVDLFNBQVNMOzBCQUFjOzs7Ozs7MEJBR3hELDhEQUFDTTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQztnQkFBSUosV0FBVTs7a0NBQ2IsOERBQUNLO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFNQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUNIO2dCQUFJSixXQUFVOztrQ0FDYiw4REFBQ0s7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQU1DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFZCw4REFBQ1I7Z0JBQU9DLFdBQVU7MEJBQWU7Ozs7Ozs7Ozs7OztBQUd2QztHQTNCTU47O1FBQ2FGLG9EQUFXQTs7O0tBRHhCRTtBQTZCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ251cC9zaWduaW5NYWlsLmpzP2RiMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVzL3NpZ251cC5zdHlsZXNcIjtcbmltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XG5pbXBvcnQgeyBHb01haWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcbmltcG9ydCB7IE1haWxDb250YWluZXIgfSBmcm9tIFwiLi9zdHlsZXMvbWFpbFNpZ251cFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGdldExvZ2luUGFnZUNvdW50ZXIgfSBmcm9tIFwiLi4vLi4vc3RvcmUuanMvYWN0aW9ucy9hdXRoQWN0aW9uXCI7XG5cbmNvbnN0IE1haWxTaWduSW4gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0TG9naW5QYWdlQ291bnRlcih7fSkpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTaWduSW5PcHRpb25zID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldExvZ2luUGFnZUNvdW50ZXIoeyBjb3VudGVyOiAyIH0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TWFpbENvbnRhaW5lcj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FuY2VsQnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgeFxuICAgICAgPC9idXR0b24+XG4gICAgICA8aDM+U2lnbiB1cCB3aXRoIGVtYWlsPC9oMz5cbiAgICAgIDxwPkVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyB0byBjcmVhdGUgYW4gYWNjb3VudC48L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Q29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbD5Zb3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJtYWlsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dENvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm1haWxcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZ25VcEJ1dHRvblwiPlNpZ24gaW48L2J1dHRvbj5cbiAgICA8L01haWxDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWlsU2lnbkluO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkNvbnRhaW5lciIsIkZjR29vZ2xlIiwiR29NYWlsIiwiTWFpbENvbnRhaW5lciIsInVzZURpc3BhdGNoIiwiZ2V0TG9naW5QYWdlQ291bnRlciIsIk1haWxTaWduSW4iLCJkaXNwYXRjaCIsImhhbmRsZUNhbmNlbCIsImhhbmRsZVNpZ25Jbk9wdGlvbnMiLCJjb3VudGVyIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImgzIiwicCIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Signup/signinMail.js\n"));

/***/ })

});