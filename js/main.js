import addEventListeners from './dom/eventListeners.js';

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
