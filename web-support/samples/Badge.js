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
import { Badge as Component } from '../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  value: {
    component: Component,
    props: { value: 7 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Component,
    props: { value: 'seven', containerStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  wrapperStyle: {
    component: Component,
    props: { value: 'seven', wrapperStyle: { alignSelf: 'flex-start' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  textStyle: {
    component: Component,
    props: {
      value: 'seven',
      textStyle: { fontSize: 30 },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  children: {
    component: Component,
    children: [
      <Text style={{ color: 'white' }}>a text node</Text>,
      <Text style={{ color: 'white' }}>a text node</Text>,
    ],
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onPress: {
    component: Component,
    props: {
      value: 'press',
      onPress: () => {
        console.log('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  component: {
    component: Component,
    props: { component: TouchableOpacity },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <Badge 
    value='TouchableWithoutFeedback'
    component={TouchableWithoutFeedback}
    textStyle={{ color: '#071'}}
    onPress={() => console.log('pressed')}
  />`;
      },
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
