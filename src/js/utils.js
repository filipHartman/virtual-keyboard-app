import { modifyingKeys } from './config.js';
export const getTextArea = () => document.querySelector('textarea');

export const isCapsLockOrShiftActive = ($event) =>
  ($event.getModifierState('CapsLock') && !$event.getModifierState('Shift')) ||
  (!$event.getModifierState('CapsLock') && $event.getModifierState('Shift'));

export const getClickedKey = (target) => {
  if (target.classList.contains('key') || target.nodeName === 'SPAN') {
    return target.nodeName === 'SPAN' ? target.parentElement : target;
  }
};

export const addSymbolToTextArea = (key, $event) => {
  const { code, alternativeCode } = key;

  if (modifyingKeys.includes(code.toLowerCase())) {
    return;
  }

  if (code === 'Space') {
    getTextArea().innerHTML += ' ';
    return;
  }

  if (!!alternativeCode && $event.getModifierState('Shift')) {
    getTextArea().innerHTML += alternativeCode;
    return;
  }

  if (isCapsLockOrShiftActive($event)) {
    getTextArea().innerHTML += code.toUpperCase();
    return;
  }
  getTextArea().innerHTML += code;
};
