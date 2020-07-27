import { modifyingKeys } from './config.js';
import { getTextArea } from './utils.js';

export function VirtualKeyBuilder() {
  return {
    setCode: function (code) {
      this.code = code;
      return this;
    },

    setDisplayValue: function (displayValue) {
      this.displayValue = displayValue;
      return this;
    },

    setAlternativeCode: function (alternativeCode) {
      this.alternativeCode = alternativeCode;
      return this;
    },

    setClass: function (klass) {
      this.klass = klass;
      return this;
    },

    build: function () {
      return new VirtualKey(
        this.code,
        this.displayValue,
        this.alternativeCode,
        this.klass,
      );
    },
  };
}

class VirtualKey extends HTMLButtonElement {
  constructor(code, displayValue = '', alternativeCode = '', klass = '') {
    super();
    this.code = code;
    this.displayValue = displayValue;
    this.alternativeCode = alternativeCode;
    this.className = `key ${klass}`;
    this.fillWithSymbol();
  }

  pressKey() {
    this.classList.add('pressed');

    if (
      modifyingKeys.includes(this.code.toLowerCase()) ||
      this.code === 'Space'
    ) {
      if (document.activeElement.nodeName !== 'TEXTAREA') {
        getTextArea().focus();
        getTextArea().selectionStart = getTextArea().innerHTML.length;
      }
      return;
    }
    if (document.activeElement.nodeName !== 'TEXTAREA') {
      getTextArea().innerHTML += this.code;
    }
  }

  releaseKey() {
    this.classList.remove('pressed');
  }

  fillWithSymbol() {
    if (!!this.alternativeCode) {
      const alternative = document.createElement('sup');
      alternative.innerText = this.alternativeCode;
      this.appendChild(alternative);
    }
    const key = document.createElement('span');
    key.innerText = this.displayValue ? this.displayValue : this.code;
    this.appendChild(key);
  }
}

customElements.define('virtual-key', VirtualKey, { extends: 'button' });
