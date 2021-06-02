/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/redux/store-middleware.js":
/*!***************************************!*\
  !*** ./lib/redux/store-middleware.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bindMiddleware\": function() { return /* binding */ bindMiddleware; },\n/* harmony export */   \"storeMiddleware\": function() { return /* binding */ storeMiddleware; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst bindMiddleware = middleware => {\n  if (true) {\n    return (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware));\n  }\n\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware);\n};\nconst storeMiddleware = bindMiddleware([(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvcmVkdXgvc3RvcmUtbWlkZGxld2FyZS5qcz85NTEwIl0sIm5hbWVzIjpbImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxjQUFjLEdBQUlDLFVBQUQsSUFBZ0I7QUFDNUMsWUFBMkM7QUFDekMsV0FBT0MsNkVBQW1CLENBQUNDLHNEQUFlLENBQUMsR0FBR0YsVUFBSixDQUFoQixDQUExQjtBQUNEOztBQUNELFNBQU9FLHNEQUFlLENBQUMsR0FBR0YsVUFBSixDQUF0QjtBQUNELENBTE07QUFPQSxNQUFNRyxlQUFlLEdBQUdKLGNBQWMsQ0FBQyxDQUFDSyxvREFBRCxDQUFELENBQXRDIiwiZmlsZSI6Ii4vbGliL3JlZHV4L3N0b3JlLW1pZGRsZXdhcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5cbmV4cG9ydCBjb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuICB9XG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JlTWlkZGxld2FyZSA9IGJpbmRNaWRkbGV3YXJlKFt0aHVua10pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redux/store-middleware.js\n");

/***/ }),

/***/ "./lib/redux/store-persistence.js":
/*!****************************************!*\
  !*** ./lib/redux/store-persistence.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": function() { return /* binding */ storage; },\n/* harmony export */   \"persistorConfig\": function() { return /* binding */ persistorConfig; }\n/* harmony export */ });\n/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist/lib/storage/createWebStorage */ \"redux-persist/lib/storage/createWebStorage\");\n/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createNoopStorage = () => {\n  return {\n    getItem(_key) {\n      return Promise.resolve(null);\n    },\n\n    setItem(_key, value) {\n      return Promise.resolve(value);\n    },\n\n    removeItem(_key) {\n      return Promise.resolve();\n    }\n\n  };\n};\n\nconst storage =  false ? 0 : createNoopStorage();\nconst persistorConfig = {\n  key: 'root',\n  storage: storage,\n  whitelist: ['']\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvcmVkdXgvc3RvcmUtcGVyc2lzdGVuY2UuanM/MzQ4NyJdLCJuYW1lcyI6WyJjcmVhdGVOb29wU3RvcmFnZSIsImdldEl0ZW0iLCJfa2V5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRJdGVtIiwidmFsdWUiLCJyZW1vdmVJdGVtIiwic3RvcmFnZSIsImNyZWF0ZVdlYlN0b3JhZ2UiLCJwZXJzaXN0b3JDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCLFNBQU87QUFDTEMsV0FBTyxDQUFDQyxJQUFELEVBQU87QUFDWixhQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUDtBQUNELEtBSEk7O0FBSUxDLFdBQU8sQ0FBQ0gsSUFBRCxFQUFPSSxLQUFQLEVBQWM7QUFDbkIsYUFBT0gsT0FBTyxDQUFDQyxPQUFSLENBQWdCRSxLQUFoQixDQUFQO0FBQ0QsS0FOSTs7QUFPTEMsY0FBVSxDQUFDTCxJQUFELEVBQU87QUFDZixhQUFPQyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNEOztBQVRJLEdBQVA7QUFXRCxDQVpEOztBQWNPLE1BQU1JLE9BQU8sR0FDbEIsU0FDSUMsQ0FESixHQUVJVCxpQkFBaUIsRUFIaEI7QUFLQSxNQUFNVSxlQUFlLEdBQUc7QUFDN0JDLEtBQUcsRUFBRSxNQUR3QjtBQUU3QkgsU0FBTyxFQUFFQSxPQUZvQjtBQUc3QkksV0FBUyxFQUFFLENBQUMsRUFBRDtBQUhrQixDQUF4QiIsImZpbGUiOiIuL2xpYi9yZWR1eC9zdG9yZS1wZXJzaXN0ZW5jZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVXZWJTdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UvY3JlYXRlV2ViU3RvcmFnZSdcblxuY29uc3QgY3JlYXRlTm9vcFN0b3JhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZ2V0SXRlbShfa2V5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgfSxcbiAgICBzZXRJdGVtKF9rZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKVxuICAgIH0sXG4gICAgcmVtb3ZlSXRlbShfa2V5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGNyZWF0ZVdlYlN0b3JhZ2UoJ2xvY2FsJylcbiAgICA6IGNyZWF0ZU5vb3BTdG9yYWdlKClcblxuZXhwb3J0IGNvbnN0IHBlcnNpc3RvckNvbmZpZyA9IHtcbiAga2V5OiAncm9vdCcsXG4gIHN0b3JhZ2U6IHN0b3JhZ2UsXG4gIHdoaXRlbGlzdDogWycnXSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/redux/store-persistence.js\n");

/***/ }),

/***/ "./lib/redux/store-reducers.js":
/*!*************************************!*\
  !*** ./lib/redux/store-reducers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appReducer\": function() { return /* binding */ appReducer; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_persistence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-persistence */ \"./lib/redux/store-persistence.js\");\n\n\n // import authReducer from '../reducers/auth-reducer'\n// const authReducerConfig = {\n//   key: 'auth',\n//   storage: storage,\n//   whitelist: ['userAutenticado'],\n// }\n\nconst appReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({// auth: persistReducer(authReducerConfig, authReducer),\n  // agency: agencyReducer,\n});\n\nconst rootReducer = (state, action) => {\n  if (action.type === 'LOGOUT') {\n    _store_persistence__WEBPACK_IMPORTED_MODULE_2__.storage.removeItem('persist:root');\n    state = undefined;\n  }\n\n  return appReducer(state, action);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(_store_persistence__WEBPACK_IMPORTED_MODULE_2__.persistorConfig, rootReducer));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvcmVkdXgvc3RvcmUtcmVkdWNlcnMuanM/MmJiNyJdLCJuYW1lcyI6WyJhcHBSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzdG9yYWdlIiwidW5kZWZpbmVkIiwicGVyc2lzdFJlZHVjZXIiLCJwZXJzaXN0b3JDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUEsVUFBVSxHQUFHQyxzREFBZSxDQUFDLENBQ3hDO0FBQ0E7QUFGd0MsQ0FBRCxDQUFsQzs7QUFLUCxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3JDLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QkMsc0VBQUEsQ0FBbUIsY0FBbkI7QUFDQUgsU0FBSyxHQUFHSSxTQUFSO0FBQ0Q7O0FBRUQsU0FBT1AsVUFBVSxDQUFDRyxLQUFELEVBQVFDLE1BQVIsQ0FBakI7QUFDRCxDQVBEOztBQVNBLCtEQUFlSSw2REFBYyxDQUFDQywrREFBRCxFQUFrQlAsV0FBbEIsQ0FBN0IiLCJmaWxlIjoiLi9saWIvcmVkdXgvc3RvcmUtcmVkdWNlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcbmltcG9ydCB7IHN0b3JhZ2UsIHBlcnNpc3RvckNvbmZpZyB9IGZyb20gJy4vc3RvcmUtcGVyc2lzdGVuY2UnXG4vLyBpbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvYXV0aC1yZWR1Y2VyJ1xuXG4vLyBjb25zdCBhdXRoUmVkdWNlckNvbmZpZyA9IHtcbi8vICAga2V5OiAnYXV0aCcsXG4vLyAgIHN0b3JhZ2U6IHN0b3JhZ2UsXG4vLyAgIHdoaXRlbGlzdDogWyd1c2VyQXV0ZW50aWNhZG8nXSxcbi8vIH1cblxuZXhwb3J0IGNvbnN0IGFwcFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAvLyBhdXRoOiBwZXJzaXN0UmVkdWNlcihhdXRoUmVkdWNlckNvbmZpZywgYXV0aFJlZHVjZXIpLFxuICAvLyBhZ2VuY3k6IGFnZW5jeVJlZHVjZXIsXG59KVxuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0xPR09VVCcpIHtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oJ3BlcnNpc3Q6cm9vdCcpXG4gICAgc3RhdGUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBhcHBSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RvckNvbmZpZywgcm9vdFJlZHVjZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redux/store-reducers.js\n");

/***/ }),

/***/ "./lib/redux/store.js":
/*!****************************!*\
  !*** ./lib/redux/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReduxWrapper\": function() { return /* binding */ ReduxWrapper; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-reducers */ \"./lib/redux/store-reducers.js\");\n/* harmony import */ var _store_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store-middleware */ \"./lib/redux/store-middleware.js\");\n\n\n\n\n // import { setAuthToken } from '../../utils'\n\nconst initialState = {};\n\nconst makeStore = ({\n  isServer\n}) => {\n  // server side redux store\n  if (isServer) return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_store_reducers__WEBPACK_IMPORTED_MODULE_3__.appReducer, _store_middleware__WEBPACK_IMPORTED_MODULE_4__.storeMiddleware); // client side redux persisted store\n\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_store_reducers__WEBPACK_IMPORTED_MODULE_3__.default, initialState, _store_middleware__WEBPACK_IMPORTED_MODULE_4__.storeMiddleware);\n  store.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);\n  let currentState = store.getState();\n  store.subscribe(() => {\n    let previousState = currentState;\n    currentState = store.getState(); // if (previousState.auth.token !== currentState.auth.token) {\n    //   const token = currentState.auth.token\n    //   setAuthToken(token)\n    // }\n  });\n  return store;\n};\n\nconst ReduxWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore).withRedux;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvcmVkdXgvc3RvcmUuanM/NDQyMCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsImNyZWF0ZVN0b3JlIiwiYXBwUmVkdWNlciIsInN0b3JlTWlkZGxld2FyZSIsInN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJfX3BlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsImN1cnJlbnRTdGF0ZSIsImdldFN0YXRlIiwic3Vic2NyaWJlIiwicHJldmlvdXNTdGF0ZSIsIlJlZHV4V3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLEVBQXJCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNsQztBQUNBLE1BQUlBLFFBQUosRUFBYyxPQUFPQyxrREFBVyxDQUFDQyx1REFBRCxFQUFhQyw4REFBYixDQUFsQixDQUZvQixDQUlsQzs7QUFDQSxRQUFNQyxLQUFLLEdBQUdILGtEQUFXLENBQUNJLG9EQUFELEVBQWlCUCxZQUFqQixFQUErQkssOERBQS9CLENBQXpCO0FBRUFDLE9BQUssQ0FBQ0UsV0FBTixHQUFvQkMsMkRBQVksQ0FBQ0gsS0FBRCxDQUFoQztBQUVBLE1BQUlJLFlBQVksR0FBR0osS0FBSyxDQUFDSyxRQUFOLEVBQW5CO0FBQ0FMLE9BQUssQ0FBQ00sU0FBTixDQUFnQixNQUFNO0FBQ3BCLFFBQUlDLGFBQWEsR0FBR0gsWUFBcEI7QUFDQUEsZ0JBQVksR0FBR0osS0FBSyxDQUFDSyxRQUFOLEVBQWYsQ0FGb0IsQ0FJcEI7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVJEO0FBVUEsU0FBT0wsS0FBUDtBQUNELENBckJEOztBQXVCTyxNQUFNUSxZQUFZLEdBQUdDLGlFQUFhLENBQUNkLFNBQUQsQ0FBYixDQUF5QmUsU0FBOUMiLCJmaWxlIjoiLi9saWIvcmVkdXgvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXG5cbmltcG9ydCBwZXJzaXN0UmVkdWNlciwgeyBhcHBSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yZS1yZWR1Y2VycydcbmltcG9ydCB7IHN0b3JlTWlkZGxld2FyZSB9IGZyb20gJy4vc3RvcmUtbWlkZGxld2FyZSdcbi8vIGltcG9ydCB7IHNldEF1dGhUb2tlbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuXG5jb25zdCBtYWtlU3RvcmUgPSAoeyBpc1NlcnZlciB9KSA9PiB7XG4gIC8vIHNlcnZlciBzaWRlIHJlZHV4IHN0b3JlXG4gIGlmIChpc1NlcnZlcikgcmV0dXJuIGNyZWF0ZVN0b3JlKGFwcFJlZHVjZXIsIHN0b3JlTWlkZGxld2FyZSlcblxuICAvLyBjbGllbnQgc2lkZSByZWR1eCBwZXJzaXN0ZWQgc3RvcmVcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShwZXJzaXN0UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBzdG9yZU1pZGRsZXdhcmUpXG5cbiAgc3RvcmUuX19wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpXG5cbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbiAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBsZXQgcHJldmlvdXNTdGF0ZSA9IGN1cnJlbnRTdGF0ZVxuICAgIGN1cnJlbnRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcblxuICAgIC8vIGlmIChwcmV2aW91c1N0YXRlLmF1dGgudG9rZW4gIT09IGN1cnJlbnRTdGF0ZS5hdXRoLnRva2VuKSB7XG4gICAgLy8gICBjb25zdCB0b2tlbiA9IGN1cnJlbnRTdGF0ZS5hdXRoLnRva2VuXG4gICAgLy8gICBzZXRBdXRoVG9rZW4odG9rZW4pXG4gICAgLy8gfVxuICB9KVxuXG4gIHJldHVybiBzdG9yZVxufVxuXG5leHBvcnQgY29uc3QgUmVkdXhXcmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpLndpdGhSZWR1eFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redux/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/redux/store */ \"./lib/redux/store.js\");\n\nvar _jsxFileName = \"/Users/moatorres/Moka/Github/mokatecnologia/auto-commerce/web/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useStore)(state => state);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Moka Tecnologia\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {\n      persistor: store.__persistor,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_lib_redux_store__WEBPACK_IMPORTED_MODULE_5__.ReduxWrapper)(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsInN0YXRlIiwiX19wZXJzaXN0b3IiLCJSZWR1eFdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDeEMsUUFBTUMsS0FBSyxHQUFHQyxxREFBUSxDQUFFQyxLQUFELElBQVdBLEtBQVosQ0FBdEI7QUFFQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsd0VBQUQ7QUFBYSxlQUFTLEVBQUVGLEtBQUssQ0FBQ0csV0FBOUI7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlSixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FiRDs7QUFlQSwrREFBZUssOERBQVksQ0FBQ1AsR0FBRCxDQUEzQiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnXG5pbXBvcnQgeyBSZWR1eFdyYXBwZXIgfSBmcm9tICcuLi9saWIvcmVkdXgvc3RvcmUnXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb2thIFRlY25vbG9naWE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17c3RvcmUuX19wZXJzaXN0b3J9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1BlcnNpc3RHYXRlPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVkdXhXcmFwcGVyKEFwcClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage/createWebStorage":
/*!*************************************************************!*\
  !*** external "redux-persist/lib/storage/createWebStorage" ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage/createWebStorage");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();