import React from 'react';
import {
  Text,
  TextStatic,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { assignRef, genRefId } from 'enzyme-styleguidist-sample-parser';
import {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from './';
import { SocialIcon as Component } from '../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  title: {
    component: Component,
    props: { type: 'medium', title: 'medium', button: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  type: {
    component: Component,
    props: { type: 'medium' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  raised: {
    component: Component,
    props: { type: 'medium', raised: false },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  button: {
    component: Component,
    props: { type: 'medium', button: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  onPress: {
    component: Component,
    props: {
      type: 'medium',
      onPress: () => {
        alert('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  onLongPress: {
    component: Component,
    props: {
      type: 'medium',
      onLongPress: () => {
        alert('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  light: {
    component: Component,
    props: { type: 'medium', light: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  iconStyle: {
    component: Component,
    props: {
      type: 'medium',
      button: true,
      iconStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  style: {
    component: Component,
    props: {
      type: 'medium',
      button: true,
      style: { width: 120, transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  iconColor: {
    component: Component,
    props: { type: 'medium', iconColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  underlayColor: {
    component: Component,
    props: {
      type: 'medium',
      onPress: () => {},
      underlayColor: 'yellow',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  iconSize: {
    component: Component,
    props: { type: 'medium', iconSize: 40 },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  component: {
    component: Component,
    props: { type: 'medium', component: TouchableWithoutFeedback },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return (
          'const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;\n' +
          '<SocialIcon \n' +
          "  type='medium'" +
          '  component={TouchableWithoutFeedback}\n' +
          '/>'
        );
      },
    },
  },
  fontFamily: {
    component: Component,
    props: {
      type: 'medium',
      fontFamily: 'Courier New',
      title: 'medium',
      button: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  fontWeight: {
    component: Component,
    props: {
      type: 'medium',
      fontWeight: 'bold',
      title: 'medium',
      button: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  fontStyle: {
    component: Component,
    props: {
      type: 'medium',
      fontStyle: { padding: 50 },
      title: 'medium',
      button: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  disabled: {
    component: Component,
    props: { type: 'medium', disabled: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  loading: {
    component: Component,
    props: { type: 'medium', loading: true, title: 'medium', button: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
};

const methods = {};

export default {
  samples: {
    props,
    methods,
  },
};