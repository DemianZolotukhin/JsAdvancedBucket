async function test(message, cb) {
    try {
        await cb()
        console.log('✅', message);
    } catch (e) {
        console.log('❌', message);
        console.error(e)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected not equal to actual ${actual} !== ${expected}`)
            }
        }
    }
}

global.test = test;
global.expect = expect;

