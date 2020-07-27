import '../css/style.scss';
import { englishKeyboardFactory, textAreaConfig } from './config.js';
import { VirtualKeyboard } from './keyboard.js';

window.onload = () => {
  document.body = new VirtualKeyboard(
    englishKeyboardFactory.firstRow,
    englishKeyboardFactory.secondRow,
    englishKeyboardFactory.thirdRow,
    englishKeyboardFactory.fourthRow,
    englishKeyboardFactory.fifthRow,
  );
  const textArea = document.createElement('textarea');
  textArea.rows = textAreaConfig.rows;
  textArea.cols = textAreaConfig.cols;
  document.body.appendChild(textArea);

  Object.values(englishKeyboardFactory).forEach((row) => {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'keyboard-row';
    row.forEach((key) => rowContainer.appendChild(key));
    document.body.appendChild(rowContainer);
  });
};
