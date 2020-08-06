import addEventListeners from './dom_utilities/eventListeners.js';

window.onload = () => {
  addEventListeners
    .toNumeralBtns()
    .toOperatorBtns()
    .toBigOperatorBtns()
    .toBrackets()
    .toPeriod()
    .toEquals()
    .toACdelete()
    .forButtonHighlights();
};
