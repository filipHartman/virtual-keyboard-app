import { VirtualKeyBuilder } from './key.js';

export const textAreaConfig = {
  rows: 10,
  cols: 120,
};

export const modifyingKeys = [
  'backspace',
  'tab',
  'delete',
  'capslock',
  'enter',
  'shiftleft',
  'shiftright',
  'arrowup',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'controlleft',
  'controlright',
  'altleft',
  'altright',
  'os',
];

export const englishKeyboardFactory = {
  firstRow: [
    VirtualKeyBuilder()
      .setCode('`')
      .setAlternativeCode('~')
      .setClass('special-key')
      .build(),
    VirtualKeyBuilder().setCode('1').setAlternativeCode('!').build(),
    VirtualKeyBuilder().setCode('2').setAlternativeCode('@').build(),
    VirtualKeyBuilder().setCode('3').setAlternativeCode('#').build(),
    VirtualKeyBuilder().setCode('4').setAlternativeCode('$').build(),
    VirtualKeyBuilder().setCode('5').setAlternativeCode('%').build(),
    VirtualKeyBuilder().setCode('6').setAlternativeCode('^').build(),
    VirtualKeyBuilder().setCode('7').setAlternativeCode('&').build(),
    VirtualKeyBuilder().setCode('8').setAlternativeCode('*').build(),
    VirtualKeyBuilder().setCode('9').setAlternativeCode('(').build(),
    VirtualKeyBuilder().setCode('0').setAlternativeCode(')').build(),
    VirtualKeyBuilder().setCode('-').setAlternativeCode('_').build(),
    VirtualKeyBuilder().setCode('=').setAlternativeCode('+').build(),
    VirtualKeyBuilder().setCode('Backspace').setClass('special-key').build(),
  ],
  secondRow: [
    VirtualKeyBuilder().setCode('Tab').setClass('special-key').build(),
    VirtualKeyBuilder().setCode('q').setDisplayValue('Q').build(),
    VirtualKeyBuilder().setCode('w').setDisplayValue('W').build(),
    VirtualKeyBuilder().setCode('e').setDisplayValue('E').build(),
    VirtualKeyBuilder().setCode('r').setDisplayValue('R').build(),
    VirtualKeyBuilder().setCode('t').setDisplayValue('T').build(),
    VirtualKeyBuilder().setCode('y').setDisplayValue('Y').build(),
    VirtualKeyBuilder().setCode('u').setDisplayValue('U').build(),
    VirtualKeyBuilder().setCode('i').setDisplayValue('I').build(),
    VirtualKeyBuilder().setCode('o').setDisplayValue('O').build(),
    VirtualKeyBuilder().setCode('p').setDisplayValue('P').build(),
    VirtualKeyBuilder().setCode('[').setAlternativeCode('{').build(),
    VirtualKeyBuilder().setCode(']').setAlternativeCode('}').build(),
    VirtualKeyBuilder().setCode('\\').setAlternativeCode('|').build(),
    VirtualKeyBuilder()
      .setCode('Delete')
      .setDisplayValue('Del')
      .setClass('special-key')
      .build(),
  ],
  thirdRow: [
    VirtualKeyBuilder()
      .setCode('CapsLock')
      .setDisplayValue('Caps Lock')
      .setClass('special-key wide-key')
      .build(),
    VirtualKeyBuilder().setCode('a').setDisplayValue('A').build(),
    VirtualKeyBuilder().setCode('s').setDisplayValue('S').build(),
    VirtualKeyBuilder().setCode('d').setDisplayValue('D').build(),
    VirtualKeyBuilder().setCode('f').setDisplayValue('F').build(),
    VirtualKeyBuilder().setCode('g').setDisplayValue('G').build(),
    VirtualKeyBuilder().setCode('h').setDisplayValue('H').build(),
    VirtualKeyBuilder().setCode('j').setDisplayValue('J').build(),
    VirtualKeyBuilder().setCode('k').setDisplayValue('K').build(),
    VirtualKeyBuilder().setCode('l').setDisplayValue('L').build(),
    VirtualKeyBuilder().setCode(';').build(),
    VirtualKeyBuilder().setCode("'").build(),
    VirtualKeyBuilder()
      .setCode('Enter')
      .setClass('special-key wide-key')
      .build(),
  ],
  fourthRow: [
    VirtualKeyBuilder()
      .setCode('ShiftLeft')
      .setDisplayValue('Shift')
      .setClass('special-key wide-key')
      .build(),
    VirtualKeyBuilder().setCode('z').setDisplayValue('Z').build(),
    VirtualKeyBuilder().setCode('x').setDisplayValue('X').build(),
    VirtualKeyBuilder().setCode('c').setDisplayValue('C').build(),
    VirtualKeyBuilder().setCode('v').setDisplayValue('V').build(),
    VirtualKeyBuilder().setCode('b').setDisplayValue('B').build(),
    VirtualKeyBuilder().setCode('n').setDisplayValue('N').build(),
    VirtualKeyBuilder().setCode('m').setDisplayValue('M').build(),
    VirtualKeyBuilder().setCode(',').setDisplayValue(',').build(),
    VirtualKeyBuilder().setCode('.').setDisplayValue('.').build(),
    VirtualKeyBuilder().setCode('/').setDisplayValue('/').build(),
    VirtualKeyBuilder()
      .setCode('ArrowUp')
      .setDisplayValue('↑')
      .setClass('special-key narrow-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('ShiftRight')
      .setDisplayValue('Shift')
      .setClass('special-key narrow-key')
      .build(),
  ],
  fifthRow: [
    VirtualKeyBuilder()
      .setCode('ControlLeft')
      .setDisplayValue('Ctrl')
      .setClass('special-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('OS')
      .setDisplayValue('Win')
      .setClass('special-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('AltLeft')
      .setDisplayValue('Alt')
      .setClass('special-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('Space')
      .setDisplayValue(' ')
      .setClass('space')
      .build(),
    VirtualKeyBuilder()
      .setCode('AltRight')
      .setDisplayValue('Alt')
      .setClass('special-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('ControlRight')
      .setDisplayValue('Ctrl')
      .setClass('special-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('ArrowLeft')
      .setDisplayValue('←')
      .setClass('special-key narrow-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('ArrowDown')
      .setDisplayValue('↓')
      .setClass('special-key narrow-key')
      .build(),
    VirtualKeyBuilder()
      .setCode('ArrowRight')
      .setDisplayValue('→')
      .setClass('special-key narrow-key')
      .build(),
  ],
};
