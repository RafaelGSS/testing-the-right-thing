const { test } = require('node:test')
const assert = require('node:assert')
const { sum } = require('.')

test('sum correctly', () => {
  assert.strictEqual(sum(1, 1), 2);
  assert.strictEqual(sum(1, 2), 3);
})

test('handle invalid argument', () => {
  assert.throws(() => {
    sum('no', 'no')
  }, { message: 'The argument must be a number' })
})
