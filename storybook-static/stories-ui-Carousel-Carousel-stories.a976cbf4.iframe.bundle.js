(self.webpackChunknext_portfolio_storybook=self.webpackChunknext_portfolio_storybook||[]).push([[363],{"./src/stories/ui/Carousel/Carousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Carousel",component:__webpack_require__("./src/stories/ui/Carousel/Carousel.tsx").Z,tags:["autodocs"],parameters:{layout:"centered"}};var _play,Primary={args:{imageList:["https://picsum.photos/seed/1/400/267","https://picsum.photos/seed/2/400/267","https://picsum.photos/seed/3/400/267","https://picsum.photos/seed/300/400/267","https://picsum.photos/seed/301/400/267"],alt:"project"},play:(_play=(0,C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)(C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(_ref){var canvasElement;return C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:canvasElement=_ref.canvasElement,(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement);case 2:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    imageList: ["https://picsum.photos/seed/1/400/267", "https://picsum.photos/seed/2/400/267", "https://picsum.photos/seed/3/400/267", "https://picsum.photos/seed/300/400/267", "https://picsum.photos/seed/301/400/267"],\n    alt: \'project\'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./src/stories/ui/Carousel/Carousel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),nuka_carousel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/nuka-carousel/dist/index.mjs"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/image.js"),next_image__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__),react_responsive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-responsive/dist/react-responsive.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function CarouselComponent(_ref){var props=(0,C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},((0,C_Users_clark_Documents_codes_ts_next_portfolio_storybook_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref),_ref)),isDesktop=(0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({minWidth:1224}),isTablet=(0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({maxWidth:1224,minWidth:480}),isMobile=(0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({maxWidth:480}),size=((0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({query:"(orientation: portrait)"}),(0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({query:"(max-resolution: 300dpi)"}),function getStyle(){switch(!0){case isDesktop:return{width:600,height:300};case isTablet:return{width:500,height:250};case isMobile:return{width:300,height:150};default:return}}());return __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_5__.ZP,{adaptiveHeight:!0,cellAlign:"center",style:{width:"".concat(size.width,"px"),height:"".concat(size.height,"px")}},props.imageList.map((function(item,index){return __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default(),{key:"".concat(props.alt,"_").concat(index),src:item,alt:props.alt,width:size.width,height:size.height})})))}CarouselComponent.displayName="CarouselComponent",CarouselComponent.__docgenInfo={description:"",methods:[],displayName:"CarouselComponent",props:{imageList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"imageList"},alt:{required:!0,tsType:{name:"string"},description:"alt"}}};const __WEBPACK_DEFAULT_EXPORT__=CarouselComponent;try{CarouselComponent.displayName="CarouselComponent",CarouselComponent.__docgenInfo={description:"",displayName:"CarouselComponent",props:{imageList:{defaultValue:null,description:"imageList",name:"imageList",required:!0,type:{name:"string[]"}},alt:{defaultValue:null,description:"alt",name:"alt",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ui/Carousel/Carousel.tsx#CarouselComponent"]={docgenInfo:CarouselComponent.__docgenInfo,name:"CarouselComponent",path:"src/stories/ui/Carousel/Carousel.tsx#CarouselComponent"})}catch(__react_docgen_typescript_loader_error){}},"?4f7e":()=>{}}]);