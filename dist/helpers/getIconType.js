Object.defineProperty(exports,"__esModule",{value:true});exports.registerCustomIconType=undefined;var _Zocial=require('react-native-vector-icons/Zocial');var _Zocial2=_interopRequireDefault(_Zocial);
var _Octicons=require('react-native-vector-icons/Octicons');var _Octicons2=_interopRequireDefault(_Octicons);
var _MaterialIcons=require('react-native-vector-icons/MaterialIcons');var _MaterialIcons2=_interopRequireDefault(_MaterialIcons);
var _MaterialCommunityIcons=require('react-native-vector-icons/MaterialCommunityIcons');var _MaterialCommunityIcons2=_interopRequireDefault(_MaterialCommunityIcons);
var _Ionicons=require('react-native-vector-icons/Ionicons');var _Ionicons2=_interopRequireDefault(_Ionicons);
var _Foundation=require('react-native-vector-icons/Foundation');var _Foundation2=_interopRequireDefault(_Foundation);
var _EvilIcons=require('react-native-vector-icons/EvilIcons');var _EvilIcons2=_interopRequireDefault(_EvilIcons);
var _Entypo=require('react-native-vector-icons/Entypo');var _Entypo2=_interopRequireDefault(_Entypo);
var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=_interopRequireDefault(_FontAwesome);
var _SimpleLineIcons=require('react-native-vector-icons/SimpleLineIcons');var _SimpleLineIcons2=_interopRequireDefault(_SimpleLineIcons);
var _Feather=require('react-native-vector-icons/Feather');var _Feather2=_interopRequireDefault(_Feather);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var customIcons={};

var registerCustomIconType=exports.registerCustomIconType=function registerCustomIconType(id,customIcon){
customIcons[id]=customIcon;
};exports.default=

function(type){
switch(type){
case'zocial':
return _Zocial2.default;
case'octicon':
return _Octicons2.default;
case'material':
return _MaterialIcons2.default;
case'material-community':
return _MaterialCommunityIcons2.default;
case'ionicon':
return _Ionicons2.default;
case'foundation':
return _Foundation2.default;
case'evilicon':
return _EvilIcons2.default;
case'entypo':
return _Entypo2.default;
case'font-awesome':
return _FontAwesome2.default;
case'simple-line-icon':
return _SimpleLineIcons2.default;
case'feather':
return _Feather2.default;
default:
if(customIcons.hasOwnProperty(type)){
return customIcons[type];
}
return _MaterialIcons2.default;}

};
//# sourceMappingURL=getIconType.js.map