/* eslint-disable no-prototype-builtins */
import { 
  MAX_WIDTH_TOLERANCE_FOR_GRID, 
  MAX_HEIGHT_TOLERANCE_FOR_GRID,
  LEFT,
  CENTER,
  RIGHT,
  TOP,
  MIDDLE,
  BOTTOM,
  FIVE_PERCENT
} from './utilityVars.js';
function createSVGElement (height, width) {
  const SVGEle = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    styles = "position: absolute; left: 0; top: 0";
  // set width and height

  SVGEle.setAttribute("width", width);
  SVGEle.setAttribute("height", height);
  SVGEle.setAttribute("style", styles);
  return SVGEle;
}

function findTargetEle (targetEle, targetId, targetName) {
  let element;
  if (isDOMElement(targetEle)) {
    return targetEle;
  } else if (document.getElementById(targetId)) {
    element = document.getElementById(targetId);
    return element;
  } else if (document.getElementsByClassName(targetName) && document.getElementsByClassName(targetName).length > 0) {
    element = document.getElementsByClassName(targetName);
    return element;
  }
  element = document.body;
  return element;
}

function estimatePopupPosition (sanitizedInput) {
  let question = sanitizedInput.question,
    headerArea,
    footerArea,
    defaultpopupWidth = 450,
    defaultpopupHeight = 150;
  headerArea = spanAreaCalculator(question);
  footerArea = footerAreaCalculator();
  if (headerArea + footerArea < (defaultpopupWidth * defaultpopupHeight)) {
    return {
      left: 0,
      top: 0,
      height: defaultpopupHeight,
      width: defaultpopupWidth
    };
  }
}
function footerAreaCalculator () {
  let buttonTextFontSize = '14',
    buttonPaddingV = '10',
    buttonPaddingH = '24',
    btnArea,
    okArea = spanAreaCalculator('OK', buttonTextFontSize),
    cancelArea = spanAreaCalculator('CANCEL', buttonTextFontSize);
  btnArea = okArea + cancelArea + (buttonPaddingV * 2) + (buttonPaddingH * 2);
  
  return btnArea;
}
function spanAreaCalculator (text, textFontSize = '12') {
  let area,
    position,
    spanEle = document.createElement('span');
  spanEle.textContent = text;
  spanEle.style.fontSize = textFontSize + 'px';
  spanEle.style.visibility = 'hidden';
  document.body.appendChild(spanEle);
  position = spanEle.getBoundingClientRect();
  area = position.width * position.height;

  document.body.removeChild(spanEle);
  return area;
}
function isDOMElement(obj) {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrome)
    return obj instanceof HTMLElement;
  }
  catch(e){
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have (works on IE7)
    return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object");
  }
}

function createELement (ele, styles, nodeAttrs) {
  let element = document.createElement(ele);
  for (const key in styles) {
    if (styles.hasOwnProperty(key)) {
      const value = styles[key];
      element.style[key] = value;
    }
  }
  for (const key in nodeAttrs) {
    if (nodeAttrs.hasOwnProperty(key)) {
      const value = nodeAttrs[key];
      element[key] = value;
    }
  }
  return element;
}

// this function is to get the x y coordinate of element hovered
function getPosition (el) {
  var pos = {
    },
    boundingRect = el.getBoundingClientRect();
  pos.left = boundingRect.left + (window.pageXOffset || document.documentElement.scrollLeft);
  pos.top = boundingRect.top + (window.pageYOffset || document.documentElement.scrollTop);
  pos.height = boundingRect.height;
  pos.width = boundingRect.width;
  return pos;
}

function getPopupPosition (parentPosition, popupPosition, verticalAlignment, horizontalalignment) {
  let vAlign = verticalAlignment,
    hAlign = horizontalalignment,
    popupBoundingRect = {
      left: popupPosition.left,
      top: popupPosition.top,
      height: popupPosition.height,
      width: popupPosition.width
    };

  if ((((popupBoundingRect.width / parentPosition.width) * 100) > MAX_WIDTH_TOLERANCE_FOR_GRID) ||
    (((popupBoundingRect.height / parentPosition.height) * 100) > MAX_HEIGHT_TOLERANCE_FOR_GRID)) {
    vAlign = MIDDLE;
    hAlign = CENTER;
  }
  if (vAlign.toLowerCase() === TOP) {
    popupBoundingRect.top = parentPosition.height * FIVE_PERCENT;
  } else if (vAlign.toLowerCase() === MIDDLE) {
    popupBoundingRect.top = ((parentPosition.height - popupBoundingRect.height) / 2) ;
  } else if (vAlign.toLowerCase() === BOTTOM) {
    popupBoundingRect.top = parentPosition.height - popupBoundingRect.height - (parentPosition.height * FIVE_PERCENT);
  }
  
  if (hAlign.toLowerCase() === LEFT) {
    popupBoundingRect.left = parentPosition.width * FIVE_PERCENT;
  } else if (hAlign.toLowerCase() === CENTER) {
    popupBoundingRect.left = ((parentPosition.width - popupBoundingRect.width) / 2) ;
  } else if (vAlign.toLowerCase() === RIGHT) {
    popupBoundingRect.left = parentPosition.width - popupBoundingRect.width - (parentPosition.width * FIVE_PERCENT);
  }

  return popupBoundingRect;
}
export {
  estimatePopupPosition,
  createSVGElement,
  findTargetEle,
  createELement,
  getPosition,
  getPopupPosition
};
