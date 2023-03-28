function sum (a, b) {
if (typeof a === 'string' && +a !== NaN) {
    a = +a
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('The argument must be a number')
  }
  return a + b
}

module.exports = {
  sum,
}
