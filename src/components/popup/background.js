import PopupBase from '../popup-base/index.js';
import  { createELement } from '../../utils/utilityMethods.js';
import  { popupBackgourndDefaultStyles } from '../../utils/utilityVars.js';

export default class PopupBackground extends PopupBase {
  constructor () {
    super();
    let background = this;
    background.config = {
      attrs: {}
    };
    // background.sanitizedInput = Object.assign({},SmartPopup.sanitizedInput);
  }
  configureAttributes (options) {
    let background = this,
      attrs = background.config.attrs;
    attrs = popupBackgourndDefaultStyles;
    attrs.width = options.width;
    attrs.height = options.height;
    background.config.attrs = attrs;
  }
  render () {
    let background = this,
      backgroundConfig = background.config,
      parentRootEle = background.parentComponent.rootGroupElement,
      backgroundEle = createELement("div", backgroundConfig.attrs, {
        className: 'background'
      });
    parentRootEle.appendChild(backgroundEle);
  }
}