import { createELement } from '../../utils/utilityMethods.js';
import { defaultHeaderStyle } from '../../utils/utilityVars.js';
import PopupBase from '../popup-base/index.js';

export default class Header extends PopupBase {
  constructor () {
    super();
    let header = this;
    header.config = {};
  }
  configureAttributes (options) {
    let header = this;
    header.config.style = defaultHeaderStyle;
    const sanitizedInput = options.sanitizedInput;
    header.config.question = sanitizedInput.question;

  }
  render () {
    let header = this,
      headerConfig = header.config,
      popUpGroupEle = header.parentComponent.rootGroupElement,
      headerGroupEle =  createELement("div", {}, { className: 'header-group' }),
      headerTextEle = createELement("span",headerConfig.style, {
        innerText: headerConfig.question,
        className: 'header-text'
      });
    headerGroupEle.appendChild(headerTextEle);
    popUpGroupEle.appendChild(headerGroupEle);
  }
}