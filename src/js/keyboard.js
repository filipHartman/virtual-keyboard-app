import { getClickedKey, addSymbolToTextArea } from './utils.js';

export class VirtualKeyboard extends HTMLBodyElement {
  constructor(...rows) {
    super();

    this.rows = rows;
    this.keyMap = this.createMap();

    this.addEventListener('click', (e) => this.handleClick(e));
    this.addEventListener('keydown', (e) =>
      this.handleKeyEvent(e, (key) => key.pressKey()),
    );
    this.addEventListener('keyup', (e) =>
      this.handleKeyEvent(e, (key) => key.releaseKey()),
    );
  }

  *getKeys() {
    for (const row of this.rows) {
      for (const key of row) {
        yield key;
      }
    }
  }

  createMap() {
    const map = {};
    for (const key of this.getKeys()) {
      map[key.code] = key;
    }
    return map;
  }

  handleClick($event) {
    const target = $event.target;
    const key = getClickedKey(target);

    if (!key) {
      return;
    }
    addSymbolToTextArea(key, $event);
  }

  handleKeyEvent($event, handle) {
    const target = this.keyMap[$event.code] || this.keyMap[$event.key];

    if (!!target) {
      handle(target);
    }
  }
}

customElements.define('virtual-keyboard', VirtualKeyboard, { extends: 'body' });
