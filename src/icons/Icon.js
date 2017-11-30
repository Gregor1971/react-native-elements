import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  TouchableHighlight,
  View,
  StyleSheet,
  Text as NativeText,
} from 'react-native';
import getIconType from '../helpers/getIconType';
import ViewPropTypes from '../config/ViewPropTypes';

const Icon = props => {
  const {
    type,
    name,
    size,
    color,
    iconStyle,
    component,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor,
    onPress,
    onLongPress,
    ...attributes
  } = props;

  let touchableProps = {};
  let Component = View;
  if (onPress || onLongPress) {
    touchableProps = {
      onPress,
      onLongPress,
      underlayColor: reverse ? color : underlayColor || color,
    };
    Component = TouchableHighlight;
  }
  if (component) {
    Component = component;
  }
  let Icon;
  if (!type) {
    Icon = getIconType('material');
  } else {
    Icon = getIconType(type);
  }
  return (
    <Component
      {...attributes}
      style={[
        (reverse || raised) && styles.button,
        {
          borderRadius: size + 4,
          height: size * 2 + 4,
          width: size * 2 + 4,
        },
        raised && styles.raised,
        {
          backgroundColor: reverse ? color : raised ? 'white' : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle && containerStyle,
      ]}
      {...touchableProps}
    >
      <Icon
        style={[{ backgroundColor: 'transparent' }, iconStyle && iconStyle]}
        size={size}
        name={name}
        color={reverse ? reverseColor : color}
      />
    </Component>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  component: PropTypes.func,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  iconStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
  reverseColor: PropTypes.string,
};

Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white',
};

const penumbraOpacity = 0.14;
const umbraOpacity = 0.2;

const styles = StyleSheet.create({
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: `
        0 2px 2px 0px rgba(0, 0, 0, ${penumbraOpacity}),
        0 3px 1px -2px rgba(0, 0, 0, ${umbraOpacity})
      `,
      },
    }),
  },
});

export default Icon;
