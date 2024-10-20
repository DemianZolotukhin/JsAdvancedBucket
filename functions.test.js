const { sum, subtract, fetchUser, getPlan, addCssClass, removeCssClass } = require('./functions');

describe('Math functions', () => { //describe використовується для групування тестів
  test('sum test', () => {
    expect(sum(2, 4)).toBe(6)
  })

  test('subtract', () => {
    expect(subtract(5, 7)).toBe(-2)
  })
})

describe('async, await, Promise, fetchuser', () => {
  test('user data', async () => {
    const user = await fetchUser();
    expect(user.name).toBe('Bohdan Gres')
  })
})

describe('getPlan', () => {
  test('Should be an array', () => {
    const result = getPlan();

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

  test('Should return null for 0 prod', () => {
    const result = getPlan(0, 4, 100);

    expect(result).toBe(null)
  })

  test('Should return null for 0 percent', () => {
    const result = getPlan(200, 4, 0);

    expect(result).toBe(null)
  })

  test('Should return 0 for 0 numOfMonth', () => {
    const result = getPlan(200, 0, 100);

    expect(result).toEqual([])
  })

  test('Should return result with Math.floor(rounds)', () => {
    const result = getPlan(10, 3, 30);

    expect(result).toEqual([13, 16, 20]);
  })
})
describe('addCssClass new Set/add/delete', () => {
  test('should add class name', () => {
    const el = {
      className: 'joke new'
    };

    addCssClass(el, 'active')

    expect(el.className).toBe('joke new active')
  })

  test('should check already existed class name', () => {
    const el = {
      className: 'joke new'
    };

    addCssClass(el, 'new')

    expect(el.className).toBe('joke new')
  })

  test('should check already existed class name in class name', () => {
    const el = {
      className: 'joke new'
    };

    addCssClass(el, 'ok')

    expect(el.className).toBe('joke new ok')
  })

  //Дані -> екшн -> перевірка(чи дії з данними, 
  //які ми підготували задовільняє наші очікування
  test('should trim spaces', () => {
    const el = {
      className: '   joke new   '
    };

    addCssClass(el, 'active')

    expect(el.className).toBe('joke new active')
  })

  test('should remove inner spaces words', () => {
    const el = {
      className: '   joke   new   '
    };

    addCssClass(el, 'active')

    expect(el.className).toBe('joke new active')
  })

  test('should remove all spaces for duplicate class name', () => {
    const el = {
      className: '   joke   new   '
    };

    addCssClass(el, 'new')

    expect(el.className).toBe('joke new')
  })

  test('should check and remove all duplicates', () => {
    const el = {
      className: 'joke joke   new   '
    };

    addCssClass(el, 'active')

    expect(el.className).toBe('joke new active')
  })

})
describe('removeCssClass', () => {
  test('should remove class', () => {
    const el = {
      className: 'joke jobs'
    };
  
    removeCssClass(el, 'jobs')
  
    expect(el.className).toBe('joke')
  })
  
})






