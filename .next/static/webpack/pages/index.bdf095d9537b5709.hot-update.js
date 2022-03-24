"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_blockInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/blockInfo */ \"./pages/api/blockInfo.js\");\n/* harmony import */ var _components_common_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Table */ \"./components/common/Table.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n\n\n\n\n\n\nfunction Home() {\n    if (_api_blockInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), blockNo = ref[0], setBlockNo = ref[1];\n        var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), blockInfo = ref1[0], setBlockInfo = ref1[1];\n        var fetchBlockInfo = function(blockNo) {\n            fetch(\"/api/blockInfo\").then(function(res) {\n                return res.json();\n            }).then(function(data) {\n                setBlockInfo(data);\n                console.log(data);\n            });\n        };\n        // const blockNo = async () => {\n        //   const response = await fetch(\"/api/blockInfo\", {\n        //     method: \"POST\",\n        //     body: JSON.stringify({ blockNo }),\n        //   });\n        //   const data = await response.json();\n        //   console.log(data);\n        // };\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                container: true,\n                direction: \"column\",\n                justifyContent: \"space-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Blockchain Explorer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Enter Block number or Transaction number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: blockNo,\n                                onChange: function(e) {\n                                    return setBlockNo(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    height: 20,\n                                    width: 100\n                                },\n                                onClick: function(e) {\n                                    return fetchBlockInfo(blockNo);\n                                },\n                                children: \"Fetch data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: blockInfo != null ? blockInfo.block : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                            }, void 0, false, {\n                                fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jisookim/Documents/BoilerBlockChain/Explorer/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this));\n    }\n// else {\n//   var [transactionHash, setTransactionHash] = useState(0);\n//   var [transactionInfo, setTransactionInfo] = useState(null);\n//   var fetchTransactionInfo = (transactionHash) => {\n//     fetch(\"/api/transactionInfo\")\n//       .then((res) => res.json())\n//       .then((data) => {\n//         setTransactionInfo(data);\n//         console.log(data);\n//       });\n//   };\n//   return (\n//     <div className={styles.container}>\n//       <div>Enter Block number or Transaction number</div>\n//       <input\n//         value={transactionHash}\n//         onChange={(event) => setTransactionInfo(event.target.value)}\n//       />\n//       <button\n//         style={{ height: 20, width: 100 }}\n//         onClick={(e) => fetchTransactionInfo(transactionHash)}\n//       >\n//         Fetch data\n//       </button>\n//       <div>\n//         {transactionInfo != null ? transactionHash.transaction : <></>}\n//       </div>\n//     </div>\n//   );\n// }\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNjO0FBQ1Q7QUFDUztBQUNUO0FBRXRCLFFBQVEsQ0FBQ0ssSUFBSSxHQUFHLENBQUM7SUFDOUIsRUFBRSxFQUFFSCxzREFBTyxFQUFFLENBQUM7UUFDWixHQUFHLENBQXlCRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ00sT0FBTyxHQUFnQk4sR0FBVyxLQUF6Qk8sVUFBVSxHQUFJUCxHQUFXO1FBQ3ZDLEdBQUcsQ0FBNkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDUSxTQUFTLEdBQWtCUixJQUFjLEtBQTlCUyxZQUFZLEdBQUlULElBQWM7UUFFOUMsR0FBRyxDQUFDVSxjQUFjLEdBQUcsUUFBUSxDQUFQSixPQUFPLEVBQUssQ0FBQztZQUNqQ0ssS0FBSyxDQUFDLENBQWdCLGlCQUNuQkMsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRztnQkFBS0EsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7ZUFDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBHLElBQUksRUFBSyxDQUFDO2dCQUNmTixZQUFZLENBQUNNLElBQUk7Z0JBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtZQUNsQixDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQWdDO1FBQ2hDLEVBQXFEO1FBQ3JELEVBQXNCO1FBQ3RCLEVBQXlDO1FBQ3pDLEVBQVE7UUFDUixFQUF3QztRQUN4QyxFQUF1QjtRQUN2QixFQUFLO1FBRUwsTUFBTSw2RUFDSEcsQ0FBRztZQUFDQyxTQUFTLEVBQUVsQiwwRUFBZ0I7a0dBQzdCRywwREFBSTtnQkFBQ2dCLFNBQVM7Z0JBQUNDLFNBQVMsRUFBQyxDQUFRO2dCQUFDQyxjQUFjLEVBQUMsQ0FBYzs7Z0dBQzdEbEIsMERBQUk7d0JBQUNtQixJQUFJOzhHQUNQQyxDQUFFO3NDQUFDLENBQW1COzs7Ozs7Ozs7OztnR0FFeEJwQiwwREFBSTt3QkFBQ21CLElBQUk7O3dHQUNQTCxDQUFHOzBDQUFDLENBQXdDOzs7Ozs7d0dBQzVDTyxDQUFLO2dDQUFDQyxLQUFLLEVBQUVwQixPQUFPO2dDQUFFcUIsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQztvQ0FBS3JCLE1BQU0sQ0FBTkEsVUFBVSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7d0dBQ2hFSSxDQUFNO2dDQUNMQyxLQUFLLEVBQUUsQ0FBQztvQ0FBQ0MsTUFBTSxFQUFFLEVBQUU7b0NBQUVDLEtBQUssRUFBRSxHQUFHO2dDQUFDLENBQUM7Z0NBQ2pDQyxPQUFPLEVBQUUsUUFBUSxDQUFQTixDQUFDO29DQUFLbEIsTUFBTSxDQUFOQSxjQUFjLENBQUNKLE9BQU87OzBDQUN2QyxDQUVEOzs7Ozs7d0dBQ0NZLENBQUc7MENBQUVWLFNBQVMsSUFBSSxJQUFJLEdBQUdBLFNBQVMsQ0FBQzJCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUW5ELENBQUM7QUFDRCxFQUFTO0FBQ1QsRUFBNkQ7QUFDN0QsRUFBZ0U7QUFFaEUsRUFBc0Q7QUFDdEQsRUFBb0M7QUFDcEMsRUFBbUM7QUFDbkMsRUFBMEI7QUFDMUIsRUFBb0M7QUFDcEMsRUFBNkI7QUFDN0IsRUFBWTtBQUNaLEVBQU87QUFFUCxFQUFhO0FBQ2IsRUFBeUM7QUFDekMsRUFBNEQ7QUFDNUQsRUFBZTtBQUNmLEVBQWtDO0FBQ2xDLEVBQXVFO0FBQ3ZFLEVBQVc7QUFDWCxFQUFnQjtBQUNoQixFQUE2QztBQUM3QyxFQUFpRTtBQUNqRSxFQUFVO0FBQ1YsRUFBcUI7QUFDckIsRUFBa0I7QUFDbEIsRUFBYztBQUNkLEVBQTBFO0FBQzFFLEVBQWU7QUFDZixFQUFhO0FBQ2IsRUFBTztBQUNQLEVBQUk7QUFDTixDQUFDO0tBL0V1QjlCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGlzQmxvY2sgZnJvbSBcIi4vYXBpL2Jsb2NrSW5mb1wiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9UYWJsZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgaWYgKGlzQmxvY2spIHtcbiAgICB2YXIgW2Jsb2NrTm8sIHNldEJsb2NrTm9dID0gdXNlU3RhdGUoMCk7XG4gICAgdmFyIFtibG9ja0luZm8sIHNldEJsb2NrSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHZhciBmZXRjaEJsb2NrSW5mbyA9IChibG9ja05vKSA9PiB7XG4gICAgICBmZXRjaChcIi9hcGkvYmxvY2tJbmZvXCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0QmxvY2tJbmZvKGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gY29uc3QgYmxvY2tObyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Jsb2NrSW5mb1wiLCB7XG4gICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYmxvY2tObyB9KSxcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1ldmVubHlcIj5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPGgxPkJsb2NrY2hhaW4gRXhwbG9yZXI8L2gxPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPGRpdj5FbnRlciBCbG9jayBudW1iZXIgb3IgVHJhbnNhY3Rpb24gbnVtYmVyPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2Jsb2NrTm99IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmxvY2tObyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAxMDAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZldGNoQmxvY2tJbmZvKGJsb2NrTm8pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGZXRjaCBkYXRhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXY+e2Jsb2NrSW5mbyAhPSBudWxsID8gYmxvY2tJbmZvLmJsb2NrIDogPD48Lz59PC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIFxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIFxuICAgICAgICB7LyogPFRhYmxlIC8+ICAqL31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgLy8gZWxzZSB7XG4gIC8vICAgdmFyIFt0cmFuc2FjdGlvbkhhc2gsIHNldFRyYW5zYWN0aW9uSGFzaF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gICB2YXIgW3RyYW5zYWN0aW9uSW5mbywgc2V0VHJhbnNhY3Rpb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vICAgdmFyIGZldGNoVHJhbnNhY3Rpb25JbmZvID0gKHRyYW5zYWN0aW9uSGFzaCkgPT4ge1xuICAvLyAgICAgZmV0Y2goXCIvYXBpL3RyYW5zYWN0aW9uSW5mb1wiKVxuICAvLyAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAvLyAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICAgIHNldFRyYW5zYWN0aW9uSW5mbyhkYXRhKTtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfTtcblxuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gIC8vICAgICAgIDxkaXY+RW50ZXIgQmxvY2sgbnVtYmVyIG9yIFRyYW5zYWN0aW9uIG51bWJlcjwvZGl2PlxuICAvLyAgICAgICA8aW5wdXRcbiAgLy8gICAgICAgICB2YWx1ZT17dHJhbnNhY3Rpb25IYXNofVxuICAvLyAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRyYW5zYWN0aW9uSW5mbyhldmVudC50YXJnZXQudmFsdWUpfVxuICAvLyAgICAgICAvPlxuICAvLyAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDEwMCB9fVxuICAvLyAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBmZXRjaFRyYW5zYWN0aW9uSW5mbyh0cmFuc2FjdGlvbkhhc2gpfVxuICAvLyAgICAgICA+XG4gIC8vICAgICAgICAgRmV0Y2ggZGF0YVxuICAvLyAgICAgICA8L2J1dHRvbj5cbiAgLy8gICAgICAgPGRpdj5cbiAgLy8gICAgICAgICB7dHJhbnNhY3Rpb25JbmZvICE9IG51bGwgPyB0cmFuc2FjdGlvbkhhc2gudHJhbnNhY3Rpb24gOiA8PjwvPn1cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gICApO1xuICAvLyB9XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJpc0Jsb2NrIiwiVGFibGUiLCJHcmlkIiwiSG9tZSIsImJsb2NrTm8iLCJzZXRCbG9ja05vIiwiYmxvY2tJbmZvIiwic2V0QmxvY2tJbmZvIiwiZmV0Y2hCbG9ja0luZm8iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIml0ZW0iLCJoMSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsImJsb2NrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});