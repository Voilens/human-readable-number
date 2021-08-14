function toReadable (number) {
  if (!number) return 'zero';
  number = number.toString();
  let units = {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',   
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
  };

  let tens = {
    0: 'ten',
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',   
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen'
    };

  let dozens = {
    0: '',
    2: 'twenty',
    3: 'thirty',   
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

  let result = '';
  result = units[number[number.length-1]];
  if (number > 9 && +number[number.length-2]) {
    if (number[number.length-2] === '1') {
      result = tens[number[number.length-1]];
    } else {
      result = `${dozens[number[number.length-2]]}${((result) ? ' ' : '')}${result}`;
    }
  }
  if (number > 99) {
    result = units[number[number.length-3]] + ' hundred' + ((result) ? ' ' : '') + result;
  }
  return result;
}

module.exports = toReadable;
