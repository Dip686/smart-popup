import Header from '../header/index.js';
import PopupBackground from './background.js';
import { createELement } from '../../utils/utilityMethods.js';
import PopupBase from '../popup-base/index.js';
import { popUpDivStyles } from '../../utils/utilityVars.js';
export default class Popup extends PopupBase {
  constructor () {
    super();
    let popUp = this,
      popupHeader,
      background;
    popUp.config = {};
    // popUp.config = Object.assign({}, SmartPopup.sanitizedInput);
    popupHeader = new Header();
    background = new PopupBackground();
    popUp.addChildComponent(background);
    popUp.addChildComponent(popupHeader);
  }
  configureAttributes (options) {
    let popUp = this,
      popUpConfig = popUp.config,
      { targetElement, popupPosition, sanitizedInput } = options;
    popUpConfig.targetElement = targetElement;
    popUpConfig.width = popupPosition.width;
    popUpConfig.height = popupPosition.height;
    popUpConfig.sanitizedInput = sanitizedInput;
    popUpConfig.style = popUpDivStyles;
    popUpConfig.style.left = popupPosition.left + 'px';
    popUpConfig.style.top = popupPosition.top + 'px';
  }
  render () {
    let popUp = this,
      popupConfig = popUp.config,
      rootGroupEle = createELement("div", popupConfig.style, { id: 'smart-popup' }),
      targetElement = popupConfig.targetElement;
    popUp.rootGroupElement = rootGroupEle; 
    targetElement.appendChild(rootGroupEle);
  }
}