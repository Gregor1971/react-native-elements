Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _fonts=require('../config/fonts');var _fonts2=_interopRequireDefault(_fonts);
var _normalizeText=require('../helpers/normalizeText');var _normalizeText2=_interopRequireDefault(_normalizeText);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var styles=_reactNative.StyleSheet.create({
text:_extends({},
_reactNative.Platform.select({
android:_extends({},
_fonts2.default.android.regular)})),



bold:_extends({},
_reactNative.Platform.select({
android:_extends({},
_fonts2.default.android.bold),

web:{
fontWeight:'bold'}}))});





var TextElement=function TextElement(props){var
style=props.style,children=props.children,h1=props.h1,h2=props.h2,h3=props.h3,h4=props.h4,fontFamily=props.fontFamily,rest=_objectWithoutProperties(props,['style','children','h1','h2','h3','h4','fontFamily']);

return(
_react2.default.createElement(_reactNative.Text,_extends({
style:[
styles.text,
h1&&{fontSize:(0,_normalizeText2.default)(40)},
h2&&{fontSize:(0,_normalizeText2.default)(34)},
h3&&{fontSize:(0,_normalizeText2.default)(28)},
h4&&{fontSize:(0,_normalizeText2.default)(22)},
h1&&styles.bold,
h2&&styles.bold,
h3&&styles.bold,
h4&&styles.bold,
fontFamily&&{fontFamily:fontFamily},
style&&style]},

rest),

children));


};

TextElement.propTypes={
style:_propTypes2.default.any,
h1:_propTypes2.default.bool,
h2:_propTypes2.default.bool,
h3:_propTypes2.default.bool,
h4:_propTypes2.default.bool,
fontFamily:_propTypes2.default.string,
children:_propTypes2.default.any};exports.default=


TextElement;
//# sourceMappingURL=Text.js.map