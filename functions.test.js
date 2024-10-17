const { sum, subtract } = require('./functions');


test('test for sum', () => {
    const actual = sum(3, 5);

    const expected = 8;

    expect(actual).toBe(expected)
})

test('test for subtract', () => {
    expect(subtract(3, 5)).toBe(-2);
})

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Result is not equal expected ${actual} !== ${expected}`);
            }
        }
    }
}

function test(message, cb) {
    try {
        cb()
        console.log('✅', message);
    } catch (e) {
        console.log('❌', message);
        console.error(e)
    }
}