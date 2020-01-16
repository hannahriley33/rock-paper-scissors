// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { checkResults } from '../get-random-throw.js';
const test = QUnit.test;

test('scissors beats paper', function(assert) {
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';
    const result = checkResults(player, computer);

    assert.equal(result, expected);
});
test('rock beats scissors', function(assert) {
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'lose';
    const result = checkResults(player, computer);

    assert.equal(result, expected);
});
test('draw', function(assert) {
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';
    const result = checkResults(player, computer);

    assert.equal(result, expected);
});

