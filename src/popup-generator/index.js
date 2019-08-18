/* eslint-disable no-param-reassign */
import popUpController from '../controllers/popup-controller/index.js';
import { sanitizeInput } from '../utils/sanitizer/index.js';

var SmartPopup = {};
window.SmartPopup = SmartPopup;
(function () {
  SmartPopup.createSmartPopup = function createSmartPopup () {
    SmartPopup.popUpCtrl = new popUpController();
  };
  SmartPopup.appear = function appear (inputConfig) {
    // order targetELe, targetId, targetName
    inputConfig = {
      "targetid": "video-container",
      "targetele": {},
      "targetname": "",
      "width": "200",
      "height": "200",
      "question": "which year india got Independence?",
      "answer": {
        "type": "text"
      }
    };
    SmartPopup.userInput = inputConfig;
    SmartPopup.sanitizedInput = sanitizeInput(inputConfig);
    let popUpCtrl = SmartPopup.popUpCtrl;
    popUpCtrl.configure(SmartPopup.sanitizedInput);
    popUpCtrl.render();
  };
})(SmartPopup);
