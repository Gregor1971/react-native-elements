import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { assignRef, genRefId } from 'enzyme-styleguidist-sample-parser';
import {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../';
import { FormInput as Component } from '../../../src';

// props
const noProps = {
  component: Component,
  enzyme: {
    tests: {
      shallow: {
        snapshot: snapShot(),
        oneTextInput: (wrapper, title) => {
          test(title, () => {
            expect(wrapper.find('TextInput').length).toBe(1);
          });
        },
      },
      mount: { snapshot: snapShot() },
      render: { snapshot: snapShot() },
    },
  },
};
const containerStyle = {
  component: Component,
  props: { containerStyle: { backgroundColor: '#071' } },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: { snapshot: snapShot() },
      mount: { snapshot: snapShot() },
      render: { snapshot: snapShot() },
    },
  },
};
const inputStyle = {
  component: Component,
  props: { inputStyle: { color: '#071' } },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: { snapshot: snapShot() },
      mount: { snapshot: snapShot() },
      render: { snapshot: snapShot() },
    },
  },
};
const textInputRef = {
  component: Component,
  // props: { textInputRef: assignRef(genRefId()) },
  styleguidist: {
    buildJsx: () => {
      const refId = genRefId();
      return <Component textInputRef={assignRef(refId)} />;
    },
  },
  enzyme: {
    buildJsx: () => {
      const refId = genRefId();
      return <Component textInputRef={assignRef(refId)} />;
    },
    tests: {
      shallow: { snapshot: snapShot() },
    },
  },
};
const containerRef = {
  component: Component,
  props: { containerRef: assignRef(genRefId()) },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: { snapshot: snapShot() },
    },
  },
};
const shake = {
  component: Component,
  props: { shake: true },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: {
        snapshot: snapShot(),
        changeShake: (wrapper, title) => {
          wrapper.setProps({ shake: false });
        },
      },
    },
  },
};

const props = {
  'no props': noProps,
  containerStyle,
  inputStyle,
  textInputRef,
  containerRef,
  shake,
};

// methods

const shakeMeth = {
  component: Component,
  props: { defaultValue: 'text to shake' },
  styleguidist: {
    buildJsx: buildJsxForGuideMethod,
  },
  enzyme: onlyEnsureCalled,
};
const focus = {
  component: Component,
  props: { defaultValue: 'cursor will appear' },
  styleguidist: {
    cd: 1000,
    buildJsx: buildJsxForGuideMethod,
  },
  enzyme: {
    tests: {
      shallow: {
        'ensure called': ensureCalled(),
      },
    },
  },
};
const blur = {
  component: Component,
  props: { defaultValue: 'place cursor here and watch it be removed' },
  styleguidist: {
    cd: 3000,
    buildJsx: buildJsxForGuideMethod,
  },
  enzyme: {
    tests: {
      shallow: {
        'ensure called': ensureCalled(),
      },
    },
  },
};
const clearText = {
  component: Component,
  props: { defaultValue: 'text to clear' },
  styleguidist: {
    buildJsx: buildJsxForGuideMethod,
  },
  enzyme: {
    tests: {
      shallow: {
        'ensure called': ensureCalled(),
      },
    },
  },
};

const methods = {
  shake: shakeMeth,
  focus,
  blur,
  clearText,
};

export default {
  samples: {
    props,
    methods,
  },
};
