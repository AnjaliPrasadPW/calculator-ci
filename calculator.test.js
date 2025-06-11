const { add, subtract, multiply, divide } = require('./calculator');

test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 = 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 4 * 2 = 8', () => {
    expect(multiply(4, 2)).toBe(8);
});

test('divides 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('dividing by zero throws error', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
