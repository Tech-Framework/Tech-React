(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TechButton}));var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(899),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),TechButton=function TechButton(props){return console.log(props),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__.a,{variant:"contained",type:props.type,style:{textTransform:"none"}},props.children)};try{TechButton.displayName="TechButton",TechButton.__docgenInfo={description:"",displayName:"TechButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/button/TechButton.tsx#TechButton"]={docgenInfo:TechButton.__docgenInfo,name:"TechButton",path:"src/component/button/TechButton.tsx#TechButton"})}catch(__react_docgen_typescript_loader_error){}},405:function(module,exports,__webpack_require__){__webpack_require__(406),__webpack_require__(516),module.exports=__webpack_require__(517)},426:function(module,exports){},517:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(251),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(393);__webpack_require__(136);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(870),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__.withInfo)}.call(this,__webpack_require__(149)(module))},696:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":231,"./nestedObjectAssign.":231,"./nestedObjectAssign.js":231};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=696},870:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.tsx":871,"./1-Button.stories.tsx":874,"./2-Http.stories.tsx":894,"./3-TextInput.stories.tsx":896};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=870},871:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Introduction",(function(){return Introduction}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),addSourceDecorator=(__webpack_require__(90).withSource,__webpack_require__(90).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\n\nexport default {\n  title: 'Welcome',\n};\n\nexport const Introduction = () => (\n  <div>\n    <h1>Tech React Component</h1>\n  </div>\n);\n\n",locationsMap:{}}},title:"Welcome"};var Introduction=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Tech React Component"))}),{__STORY__:"import React from 'react';\n\nexport default {\n  title: 'Welcome',\n};\n\nexport const Introduction = () => (\n  <div>\n    <h1>Tech React Component</h1>\n  </div>\n);\n\n",__ADDS_MAP__:{},__MAIN_FILE_LOCATION__:"/0-Welcome.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\ben\\git-workspace\\Tech-React\\tech-react-component\\stories",__IDS_TO_FRAMEWORKS__:{}})},874:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Button",(function(){return Button}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src_component_button_TechButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(180),addSourceDecorator=(__webpack_require__(90).withSource,__webpack_require__(90).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { TechButton } from '../src/component/button/TechButton';\n\nexport default {\n  title: 'Button',\n};\n\nexport const Button = () => (\n  <TechButton>Testing Label 1</TechButton>\n);\n\n\n",locationsMap:{}}},title:"Button"};var Button=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_component_button_TechButton__WEBPACK_IMPORTED_MODULE_1__.a,null,"Testing Label 1")}),{__STORY__:"import React from 'react';\nimport { TechButton } from '../src/component/button/TechButton';\n\nexport default {\n  title: 'Button',\n};\n\nexport const Button = () => (\n  <TechButton>Testing Label 1</TechButton>\n);\n\n\n",__ADDS_MAP__:{},__MAIN_FILE_LOCATION__:"/1-Button.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\ben\\git-workspace\\Tech-React\\tech-react-component\\stories",__IDS_TO_FRAMEWORKS__:{}})},894:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),axios=__webpack_require__(250),httpClient_httpClient=__webpack_require__.n(axios).a.create();httpClient_httpClient.interceptors.response.use((function(response){return response}),(function(error){return Promise.reject(error)}));try{httpClient_httpClient.displayName="httpClient",httpClient_httpClient.__docgenInfo={description:"",displayName:"httpClient",props:{url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},method:{defaultValue:null,description:"",name:"method",required:!1,type:{name:"Method"}},baseURL:{defaultValue:null,description:"",name:"baseURL",required:!1,type:{name:"string"}},transformRequest:{defaultValue:null,description:"",name:"transformRequest",required:!1,type:{name:"AxiosTransformer | AxiosTransformer[]"}},transformResponse:{defaultValue:null,description:"",name:"transformResponse",required:!1,type:{name:"AxiosTransformer | AxiosTransformer[]"}},headers:{defaultValue:null,description:"",name:"headers",required:!1,type:{name:"any"}},params:{defaultValue:null,description:"",name:"params",required:!1,type:{name:"any"}},paramsSerializer:{defaultValue:null,description:"",name:"paramsSerializer",required:!1,type:{name:"(params: any) => string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!1,type:{name:"number"}},withCredentials:{defaultValue:null,description:"",name:"withCredentials",required:!1,type:{name:"boolean"}},adapter:{defaultValue:null,description:"",name:"adapter",required:!1,type:{name:"AxiosAdapter"}},auth:{defaultValue:null,description:"",name:"auth",required:!1,type:{name:"AxiosBasicCredentials"}},responseType:{defaultValue:null,description:"",name:"responseType",required:!1,type:{name:"ResponseType"}},xsrfCookieName:{defaultValue:null,description:"",name:"xsrfCookieName",required:!1,type:{name:"string"}},xsrfHeaderName:{defaultValue:null,description:"",name:"xsrfHeaderName",required:!1,type:{name:"string"}},onUploadProgress:{defaultValue:null,description:"",name:"onUploadProgress",required:!1,type:{name:"(progressEvent: any) => void"}},onDownloadProgress:{defaultValue:null,description:"",name:"onDownloadProgress",required:!1,type:{name:"(progressEvent: any) => void"}},maxContentLength:{defaultValue:null,description:"",name:"maxContentLength",required:!1,type:{name:"number"}},validateStatus:{defaultValue:null,description:"",name:"validateStatus",required:!1,type:{name:"(status: number) => boolean"}},maxRedirects:{defaultValue:null,description:"",name:"maxRedirects",required:!1,type:{name:"number"}},socketPath:{defaultValue:null,description:"",name:"socketPath",required:!1,type:{name:"string"}},httpAgent:{defaultValue:null,description:"",name:"httpAgent",required:!1,type:{name:"any"}},httpsAgent:{defaultValue:null,description:"",name:"httpsAgent",required:!1,type:{name:"any"}},proxy:{defaultValue:null,description:"",name:"proxy",required:!1,type:{name:"false | AxiosProxyConfig"}},cancelToken:{defaultValue:null,description:"",name:"cancelToken",required:!1,type:{name:"CancelToken"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/http/httpClient.tsx#httpClient"]={docgenInfo:httpClient_httpClient.__docgenInfo,name:"httpClient",path:"src/http/httpClient.tsx#httpClient"})}catch(__react_docgen_typescript_loader_error){}var TechContext=react.createContext({httpClient:httpClient_httpClient}),TechConsumer=TechContext.Consumer;function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}var _2_Http_stories_class,TechProvider=TechContext.Provider,src=__webpack_require__(398),src_default=__webpack_require__.n(src),dist=__webpack_require__(136);function _2_Http_stories_typeof(obj){return(_2_Http_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _2_Http_stories_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _2_Http_stories_possibleConstructorReturn(self,call){return!call||"object"!==_2_Http_stories_typeof(call)&&"function"!=typeof call?function _2_Http_stories_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _2_Http_stories_getPrototypeOf(o){return(_2_Http_stories_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _2_Http_stories_setPrototypeOf(o,p){return(_2_Http_stories_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}__webpack_require__.d(__webpack_exports__,"HttpClientComponent",(function(){return HttpClientComponent}));__webpack_require__(90).withSource;var addSourceDecorator=__webpack_require__(90).addSource,_2_Http_stories_TestHttpClientComponent=(__webpack_exports__.default={parameters:{storySource:{source:"import * as React from 'react';\r\nimport { withTech } from '../src/common/withTech';\r\nimport { TechProps } from '../src/common/TechProps';\r\nimport { TechProvider } from 'common/TechProvider';\r\nimport { httpClient } from 'http/httpClient';\r\nimport MockAdapter  from 'axios-mock-adapter';\r\nimport { action } from '@storybook/addon-actions';\r\n\r\nexport default {\r\n    title: 'Http',\r\n};\r\n\r\n@(withTech() as any)\r\nclass TestHttpClientComponent extends React.Component<TechProps, any> {\r\n    \r\n    callSomething(){\r\n        this.props.httpClient?.get('testing').then((val)=>{\r\n            action('http reponse')(val.data);\r\n        })\r\n    }\r\n\r\n    render(){\r\n        return (\r\n            <div>\r\n                <button onClick={()=>{this.callSomething()}}>Ajax Call for Mock Data</button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nconst mockHttpClientAdapter = new MockAdapter(httpClient) \r\nmockHttpClientAdapter.onGet('testing').reply(200, 'testing reponse');\r\n\r\nexport const HttpClientComponent = () => (\r\n    <TechProvider value={{httpClient: httpClient}}>\r\n        <TestHttpClientComponent/>\r\n    </TechProvider>\r\n);\r\n  ",locationsMap:{}}},title:"Http"},function withTech(){return function(WrappedComponent){return function(_React$Component){function _class(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,_class),_possibleConstructorReturn(this,_getPrototypeOf(_class).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(_class,_React$Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(_class,[{key:"render",value:function render(){return react_default.a.createElement(TechConsumer,null,(function(_ref){var httpClient=_ref.httpClient;return react_default.a.createElement(WrappedComponent,{httpClient:httpClient})}))}}]),_class}(react_default.a.Component)}}()(_2_Http_stories_class=function(_React$Component){function TestHttpClientComponent(){return function _2_Http_stories_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TestHttpClientComponent),_2_Http_stories_possibleConstructorReturn(this,_2_Http_stories_getPrototypeOf(TestHttpClientComponent).apply(this,arguments))}return function _2_Http_stories_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_2_Http_stories_setPrototypeOf(subClass,superClass)}(TestHttpClientComponent,_React$Component),function _2_Http_stories_createClass(Constructor,protoProps,staticProps){return protoProps&&_2_Http_stories_defineProperties(Constructor.prototype,protoProps),staticProps&&_2_Http_stories_defineProperties(Constructor,staticProps),Constructor}(TestHttpClientComponent,[{key:"callSomething",value:function callSomething(){var _this$props$httpClien;null===(_this$props$httpClien=this.props.httpClient)||void 0===_this$props$httpClien||_this$props$httpClien.get("testing").then((function(val){Object(dist.action)("http reponse")(val.data)}))}},{key:"render",value:function render(){var _this=this;return react.createElement("div",null,react.createElement("button",{onClick:function onClick(){_this.callSomething()}},"Ajax Call for Mock Data"))}}]),TestHttpClientComponent}(react.Component))||_2_Http_stories_class);new src_default.a(httpClient_httpClient).onGet("testing").reply(200,"testing reponse");var HttpClientComponent=addSourceDecorator((function(){return react.createElement(TechProvider,{value:{httpClient:httpClient_httpClient}},react.createElement(_2_Http_stories_TestHttpClientComponent,null))}),{__STORY__:"import * as React from 'react';\r\nimport { withTech } from '../src/common/withTech';\r\nimport { TechProps } from '../src/common/TechProps';\r\nimport { TechProvider } from 'common/TechProvider';\r\nimport { httpClient } from 'http/httpClient';\r\nimport MockAdapter  from 'axios-mock-adapter';\r\nimport { action } from '@storybook/addon-actions';\r\n\r\nexport default {\r\n    title: 'Http',\r\n};\r\n\r\n@(withTech() as any)\r\nclass TestHttpClientComponent extends React.Component<TechProps, any> {\r\n    \r\n    callSomething(){\r\n        this.props.httpClient?.get('testing').then((val)=>{\r\n            action('http reponse')(val.data);\r\n        })\r\n    }\r\n\r\n    render(){\r\n        return (\r\n            <div>\r\n                <button onClick={()=>{this.callSomething()}}>Ajax Call for Mock Data</button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nconst mockHttpClientAdapter = new MockAdapter(httpClient) \r\nmockHttpClientAdapter.onGet('testing').reply(200, 'testing reponse');\r\n\r\nexport const HttpClientComponent = () => (\r\n    <TechProvider value={{httpClient: httpClient}}>\r\n        <TestHttpClientComponent/>\r\n    </TechProvider>\r\n);\r\n  ",__ADDS_MAP__:{},__MAIN_FILE_LOCATION__:"/2-Http.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\ben\\git-workspace\\Tech-React\\tech-react-component\\stories",__IDS_TO_FRAMEWORKS__:{}})},896:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),formik_esm=__webpack_require__(185),dist=__webpack_require__(136),TextField=__webpack_require__(930);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var TechTextInput_TechTextInput=function TechTextInput(props){return react.createElement(TextField.a,_extends({label:props.label},props))};try{TechTextInput_TechTextInput.displayName="TechTextInput",TechTextInput_TechTextInput.__docgenInfo={description:"",displayName:"TechTextInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/text-input/TechTextInput.tsx#TechTextInput"]={docgenInfo:TechTextInput_TechTextInput.__docgenInfo,name:"TechTextInput",path:"src/component/text-input/TechTextInput.tsx#TechTextInput"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function TechTextInputField_extends(){return(TechTextInputField_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}var TechTextInputField_TechTextInputField=function(_React$Component){function TechTextInputField(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TechTextInputField),_possibleConstructorReturn(this,_getPrototypeOf(TechTextInputField).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(TechTextInputField,_React$Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TechTextInputField,[{key:"render",value:function render(){return react_default.a.createElement(TechTextInput_TechTextInput,TechTextInputField_extends({label:this.props.label},this.props.field))}}]),TechTextInputField}(react_default.a.Component),TechButton=__webpack_require__(180);__webpack_require__.d(__webpack_exports__,"TextInput",(function(){return TextInput}));__webpack_require__(90).withSource;var addSourceDecorator=__webpack_require__(90).addSource,TextInput=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\nimport { Field, Formik, Form } from 'formik';\r\nimport { action } from '@storybook/addon-actions';\r\nimport { TechTextInputField } from 'form/text-input/TechTextInputField';\r\nimport { TechButton } from 'component/button/TechButton';\r\n\r\nexport default {\r\n    title: 'Text Input',\r\n};\r\n\r\nexport const TextInput = () => (\r\n    <Formik initialValues={{name: 'testing name1'}} \r\n        onSubmit={(values)=>{\r\n            action('form submit')(JSON.stringify(values));\r\n        }}>\r\n        <Form autoComplete=\"off\">\r\n            <Field name=\"name\" label=\"Name\" component={TechTextInputField}/>\r\n            <TechButton type=\"submit\">Submit</TechButton>\r\n        </Form>\r\n    </Formik>\r\n)",locationsMap:{}}},title:"Text Input"},addSourceDecorator((function(){return react_default.a.createElement(formik_esm.c,{initialValues:{name:"testing name1"},onSubmit:function onSubmit(values){Object(dist.action)("form submit")(JSON.stringify(values))}},react_default.a.createElement(formik_esm.b,{autoComplete:"off"},react_default.a.createElement(formik_esm.a,{name:"name",label:"Name",component:TechTextInputField_TechTextInputField}),react_default.a.createElement(TechButton.a,{type:"submit"},"Submit")))}),{__STORY__:"import React from 'react';\r\nimport { Field, Formik, Form } from 'formik';\r\nimport { action } from '@storybook/addon-actions';\r\nimport { TechTextInputField } from 'form/text-input/TechTextInputField';\r\nimport { TechButton } from 'component/button/TechButton';\r\n\r\nexport default {\r\n    title: 'Text Input',\r\n};\r\n\r\nexport const TextInput = () => (\r\n    <Formik initialValues={{name: 'testing name1'}} \r\n        onSubmit={(values)=>{\r\n            action('form submit')(JSON.stringify(values));\r\n        }}>\r\n        <Form autoComplete=\"off\">\r\n            <Field name=\"name\" label=\"Name\" component={TechTextInputField}/>\r\n            <TechButton type=\"submit\">Submit</TechButton>\r\n        </Form>\r\n    </Formik>\r\n)",__ADDS_MAP__:{},__MAIN_FILE_LOCATION__:"/3-TextInput.stories.tsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\Users\\ben\\git-workspace\\Tech-React\\tech-react-component\\stories",__IDS_TO_FRAMEWORKS__:{}}))}},[[405,1,2]]]);
//# sourceMappingURL=main.f76decd22b55c6a8d3f1.bundle.js.map