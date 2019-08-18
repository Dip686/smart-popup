import Popup from '../../components/popup/index.js';
import { estimatePopupPosition, findTargetEle, getPosition, getPopupPosition } from '../../utils/utilityMethods.js';

// this class consumes the user configuration and draws popup over element.
export default class PopupController {

  constructor () {
    let popupController = this;
    popupController.config = {};
    popupController.popUp = new Popup();
  }
  configure (sanitizedInput) {
    let popupController = this,
      popUp = popupController.popUp,
      targetElement = findTargetEle(sanitizedInput.targetele, sanitizedInput.targetid, sanitizedInput.targetname),
      targetPosition = getPosition(targetElement),
      popupPosition = getPopupPosition(targetPosition, estimatePopupPosition(sanitizedInput), 'MIDDLE', 'CENTER');
    
    popUp.configure({ targetElement, popupPosition, sanitizedInput });

  }
  render () {
    let popupController = this,
      popUp = popupController.popUp;
    popUp.renderDecendents();
  }
}