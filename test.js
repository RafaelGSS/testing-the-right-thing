const { test } = require('node:test')
const assert = require('node:assert')
const { sum } = require('.')

test('sum correctly', () => {
  assert.strictEqual(sum(1, 1), 2);
  assert.strictEqual(sum(1, 2), 3);
})
