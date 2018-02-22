Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Text=require('../text/Text');var _Text2=_interopRequireDefault(_Text);
var _fonts=require('../config/fonts');var _fonts2=_interopRequireDefault(_fonts);
var _colors=require('../config/colors');var _colors2=_interopRequireDefault(_colors);
var _Button=require('../buttons/Button');var _Button2=_interopRequireDefault(_Button);
var _Icon=require('../icons/Icon');var _Icon2=_interopRequireDefault(_Icon);
var _normalizeText=require('../helpers/normalizeText');var _normalizeText2=_interopRequireDefault(_normalizeText);
var _elevation=require('../config/elevation');var _elevation2=_interopRequireDefault(_elevation);
var _ViewPropTypes=require('../config/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var PricingCard=function PricingCard(props){var

containerStyle=












props.containerStyle,wrapperStyle=props.wrapperStyle,title=props.title,price=props.price,info=props.info,button=props.button,color=props.color,titleFont=props.titleFont,pricingFont=props.pricingFont,infoFont=props.infoFont,buttonFont=props.buttonFont,onButtonPress=props.onButtonPress,attributes=_objectWithoutProperties(props,['containerStyle','wrapperStyle','title','price','info','button','color','titleFont','pricingFont','infoFont','buttonFont','onButtonPress']);
return(
_react2.default.createElement(_reactNative.View,_extends({},
attributes,{
style:[styles.container,containerStyle&&containerStyle]}),

_react2.default.createElement(_reactNative.View,{style:[styles.wrapper,wrapperStyle&&wrapperStyle]},
_react2.default.createElement(_Text2.default,{
style:[
styles.pricingTitle,
{color:color},
titleFont&&{fontFamily:titleFont}]},


title),

_react2.default.createElement(_Text2.default,{
style:[
styles.pricingPrice,
pricingFont&&{fontFamily:pricingFont}]},


price),

info.map(function(item,i){
return(
_react2.default.createElement(_Text2.default,{
key:i,
style:[styles.pricingInfo,infoFont&&{fontFamily:infoFont}]},

item));


}),
_react2.default.createElement(_Button2.default,{
text:button.title,
buttonStyle:[
styles.button,
button.buttonStyle,
{backgroundColor:color}],

onPress:onButtonPress,
icon:_react2.default.createElement(_Icon2.default,{name:button.icon,size:15,color:'white'})}))));




};

PricingCard.propTypes={
containerStyle:_ViewPropTypes2.default.style,
wrapperStyle:_ViewPropTypes2.default.style,
title:_propTypes2.default.string.isRequired,
price:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]).isRequired,
info:_propTypes2.default.array.isRequired,
button:_propTypes2.default.object.isRequired,
color:_propTypes2.default.string.isRequired,
onButtonPress:_propTypes2.default.any,
titleFont:_propTypes2.default.string,
pricingFont:_propTypes2.default.string,
infoFont:_propTypes2.default.string,
buttonFont:_propTypes2.default.string};


PricingCard.defaultProps={
color:_colors2.default.primary};


var styles=_reactNative.StyleSheet.create({
container:_extends({
margin:15,
marginBottom:15,
backgroundColor:'white',
borderColor:_colors2.default.grey5,
borderWidth:1,
padding:15},
_reactNative.Platform.select({
ios:{
shadowColor:'rgba(0,0,0, .2)',
shadowOffset:{height:1,width:0},
shadowOpacity:0.5,
shadowRadius:0.5},

android:_extends({},
_elevation2.default.one),

web:_extends({},
_elevation2.default.one)})),



wrapper:{
backgroundColor:'transparent'},

pricingTitle:_extends({
textAlign:'center',
color:_colors2.default.primary,
fontSize:(0,_normalizeText2.default)(30)},
_reactNative.Platform.select({
ios:{
fontWeight:'800'},

android:_extends({},
_fonts2.default.android.black),

web:{
fontWeight:'700'}})),



pricingPrice:_extends({
textAlign:'center',
marginTop:10,
marginBottom:10,
fontSize:(0,_normalizeText2.default)(40)},
_reactNative.Platform.select({
ios:{
fontWeight:'700'},

android:_extends({},
_fonts2.default.android.bold),

web:{
fontWeight:'600'}})),



pricingInfo:_extends({
textAlign:'center',
marginTop:5,
marginBottom:5,
color:_colors2.default.grey3},
_reactNative.Platform.select({
ios:{
fontWeight:'600'},

android:_extends({},
_fonts2.default.android.bold),

web:{
fontWeight:'600'}})),



button:{
marginTop:15,
marginBottom:10}});exports.default=



PricingCard;
//# sourceMappingURL=PricingCard.js.map