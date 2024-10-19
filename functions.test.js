const { sum, subtract, fetchUser, getPlan } = require('./functions');

test('sum test', () => {
    expect(sum(2, 4)).toBe(6)
})

test('subtract', () => {
    expect(subtract(5, 7)).toBe(-2)
})

test('user data', async () => {
    const user = await fetchUser();
    expect(user.name).toBe('Bohdan Gres')
})

test('Should be an array', () => {
    const result = getPlan()

    expect(result).toBeInstanceOf(Array)
    // expect(typeof result).toBe('number')

})

test('Array length should be more than', () => {
    const result = getPlan(200, 3, 50)

    expect(result).toHaveLength(3)
})

test('Should have expected values', () => {
    const result = getPlan(200, 3, 50);

    expect(result).toEqual([300, 450, 675])
})
//toEqual
//Используется для проверки, равны ли два объекта или массива по содержимому.
