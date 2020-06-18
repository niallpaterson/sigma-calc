import addEventListeners from './eventListeners.js';

window.onload = () => {
  addEventListeners
    .toNumeralBtns()
    .toOperatorBtns()
    .toBigOperatorBtns()
    .toBrackets()
    .toPeriod()
    .toEquals()
    .toACdelete()
    .toDelete();
};
