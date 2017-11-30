export {
  default as options,
  snapShot,
  buildJsxForGuideMethod,
  createWrapperWithContext,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from './common';
import _avatar from './Avatar';
import _buttons from './Buttons';
import _forms from './Forms';
import _rating from './Rating';

export default {
  Avatar: {
    title: 'Avatar',
    sectionComponents: _avatar,
  },
  Buttons: {
    title: 'Buttons',
    sectionComponents: _buttons,
  },
  Forms: {
    title: 'Forms',
    sectionComponents: _forms,
  },
  Rating: {
    title: 'Rating',
    sectionComponents: _rating,
  },
};
