let Colors = require('material-ui/lib/styles/colors');
let ColorManipulator = require('material-ui/lib/utils/color-manipulator');
let Spacing = require('material-ui/lib/styles/spacing');

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blueGrey500,
    primary2Color: Colors.blueGrey700,
    primary3Color: Colors.lightBlack,
    accent1Color: "#FF9800",
    accent2Color: Colors.grey500,
    accent3Color: Colors.grey500,
    textColor: '#212121',
    alternateTextColor: '#FFFFFF',
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  },
};
