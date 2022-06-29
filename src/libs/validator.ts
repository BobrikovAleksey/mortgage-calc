import { ChangeEvent, KeyboardEvent } from 'react';

export enum DirectiveEnum {
  alpha = 'alpha',
  decimal = 'decimal',
  eng = 'eng',
  nums = 'nums',
  punctuation = 'punctuation',
  rus = 'rus',
  special = 'special',
}

export enum SpecialKeyEnum {
  backspace = 8,
  tab = 9,
  enter = 13,
  escape = 27,
  pageUp = 33,
  pageDown = 34,
  arrowLeft = 37,
  arrowUp = 38,
  arrowRight = 39,
  arrowDown = 40,
  delete = 46,
}

const SYMBOLS = {
  [DirectiveEnum.alpha]: /^[A-Za-zА-ЯЁа-яё\s]+$/,
  [DirectiveEnum.decimal]: /^[.,]+$/,
  [DirectiveEnum.eng]: /^[A-Za-z\s]+$/,
  [DirectiveEnum.nums]: /^[0-9]+$/,
  // eslint-disable-next-line no-useless-escape
  [DirectiveEnum.punctuation]: /^[-_,.;:!?'"(){}\[\]]+$/,
  [DirectiveEnum.rus]: /^[А-ЯЁа-яё]+$/,
  [DirectiveEnum.special]: /^[@#$№%^&*+=\\|/<>]+$/,
};

const isInputElement = (event: any) => (
  Boolean(event?.target?.tagName?.toLowerCase() === 'input')
);

const isDirective = (symbol: string, directives: Array<DirectiveEnum>) => (
  Object.values(DirectiveEnum).some((dir) => (
    directives.includes(dir) && SYMBOLS[dir].test(symbol)
  ))
);

const isSpecialKey = (keyCode: number, isCtrl: boolean) => (
  (isCtrl && ([65, 67, 86, 88].includes(keyCode))) // Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
  || Object.values(SpecialKeyEnum).includes(keyCode)
);

/**
 * Допускает/игнорирует нажатую клавишу при соответствии/несоответствии типу 'number'
 * event listener: 'keydown'
 */
const numericKeyValidator = (event: KeyboardEvent & ChangeEvent<HTMLInputElement>): void => {
  if (!isInputElement(event)) return;

  const { key, keyCode, ctrlKey, target: input } = event;
  if (isDirective(key, [ DirectiveEnum.nums ])) return;

  if (isSpecialKey(keyCode, ctrlKey)) {
    const cursor = input.selectionStart ?? 0;
    if (input.selectionEnd !== cursor) return;

    if ((keyCode === SpecialKeyEnum.backspace) && /\s/.test(input.value[cursor - 1])) {
      input.selectionStart = cursor - 1;
    } else if ((keyCode === SpecialKeyEnum.delete) && /\s/.test(input.value[cursor])) {
      input.selectionStart = cursor + 1;
    }
    input.selectionEnd = input.selectionStart;
    return;
  }

  event.preventDefault();
};

/**
 * Проверяет новое значение на соответствие типу 'number',
 * при несоответствии возвращает старое значение
 * event listener: 'input'
 */
const numericValueValidator = (event: ChangeEvent<HTMLInputElement>, oldValue: number = 0): void => {
  if (!isInputElement(event)) return;

  const { target: input } = event;
  const spaceCountBefore = input.value.match(/\s+/g)?.length ?? 0;
  const valueAsNum = Number(input.value.replace(/\s/g, ''));
  if (Number.isNaN(valueAsNum)) {
    input.value = oldValue ? Number(oldValue).toLocaleString() : '';
    return;
  }

  const valueAsStr = valueAsNum ? valueAsNum.toLocaleString() : '';
  const spaceCountAfter = valueAsStr.match(/\s+/g)?.length ?? 0;
  const cursor = input.selectionStart ?? 0;
  const newCursor = cursor + spaceCountAfter - spaceCountBefore;
  input.value = valueAsStr;
  input.selectionStart = newCursor > 0 ? newCursor : 0;
  input.selectionEnd = input.selectionStart;
};

export {
  numericKeyValidator,
  numericValueValidator,
}
