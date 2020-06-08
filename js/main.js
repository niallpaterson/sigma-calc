import addEventListeners from './eventListeners.js';

window.onload = () => {
  addEventListeners
    .toNumeralBtns()
    .toOperatorBtns()
    .toBrackets()
    .toPeriod()
    .toEquals()
    .toACdelete()
    .toDelete();
};
