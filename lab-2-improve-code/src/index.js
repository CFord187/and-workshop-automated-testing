
module.exports = function greeting(i = 'my friend') {
  let newI = i;
  if (typeof i === 'string') {
    newI = [i];
  }

  let nStr = '';

  for (let j = 0; j < newI.length; j += 1) {
    nStr += newI[j];

    if ((parseInt(j, 10) + 2 === newI.length)) {
      nStr += ', and ';
    } else if (parseInt(j, 10) + 1 === newI.length) {
      nStr += '';
    } else {
      nStr += ', ';
    }
  }

  if (nStr.toUpperCase() === nStr) return `HELLO ${nStr}!`;

  return `Hello, ${nStr}.`;
};
