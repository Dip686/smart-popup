
let MAX_WIDTH_TOLERANCE_FOR_GRID = 50,
  MAX_HEIGHT_TOLERANCE_FOR_GRID = 50,
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
  FIVE_PERCENT = 0.05,
  defaultHeaderStyle = {
    "font-size": '12px',
    "font-family": "'Lato', 'Helvetica Neue', Helvetica, sans-serif",
    "font-style": "normal",
    "text-anchor": "start",
    "font-weight": "normal",
    "fill": "#000000",
    "fill-opacity": "1",
    "max-width": "calc(100% - 20px)",
    "overflow-wrap": "break-word"
  },

  popupBackgourndDefaultStyles = {
    "width": "100",
    "height": "100",
    "rx": "15",
    "fill": "#efefef"
  },
  popUpDivStyles = {
    position: 'absolute',
    left: 0,
    top: 10,
    width: 450,
    height: 150,
    background: '#efefef'
  };
export {
  LEFT,
  CENTER,
  RIGHT,
  TOP,
  MIDDLE,
  BOTTOM,
  FIVE_PERCENT,
  MAX_WIDTH_TOLERANCE_FOR_GRID,
  MAX_HEIGHT_TOLERANCE_FOR_GRID,
  defaultHeaderStyle,
  popupBackgourndDefaultStyles,
  popUpDivStyles
};