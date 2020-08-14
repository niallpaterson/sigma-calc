const highlightButton = (button) => {
  const oldColor = window.getComputedStyle(button).backgroundColor;
  button.style.backgroundColor = '#3B3B3B';
  setTimeout(() => {
    button.style.backgroundColor = oldColor;
  }, 50);
};

export default highlightButton;
