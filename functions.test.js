const { sum, subtract, fetchUser, getPlan, addCssClass, removeCssClass, slice, getCoinCombination } = require('./functions');

describe.skip('Math functions', () => { //describe використовується для групування тестів
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
  test('should remove class', () => { //only, виконаємо тільки його, всі остальні пропустимо(можна і для дескрайбу)
    const el = {
      className: 'joke jobs'
    };

    removeCssClass(el, 'jobs')

    expect(el.className).toBe('joke')
  })

  test.skip('should remove class', () => { //skip, jest пропустит тест(можна і для дескрайбу)
    const el = {
      className: '  joke   jobs'
    };

    removeCssClass(el, 'jobs')

    expect(el.className).toBe('joke')
  })

  it('should remove duplicates', () => { //це синонім для jest і він сприймає це як test
    const el = {
      className: '  joke   jobs joke'
    };

    removeCssClass(el, 'jobs')

    expect(el.className).toBe('joke')
  })
})

describe('tests with toThrow()', () => {
  it('should throw an error if params are invalid', () => {
    const el = {
    };

    expect(() => removeCssClass(el, 'jobs')).toThrow()
  })

  it('should throw an error if params are invalid', () => {
    const el = {
      className: 1
    };

    expect(() => removeCssClass(el, 'jobs')).toThrow()
  })
})

describe(`jsDoc/snippets/debug/'slice' fucntion tests`, () => {
  it('slice should return value(from start index to end)'+
  'if end index is not present', () => {
    expect(slice('thermaltake', 2)).toBe('ermaltake');
  })

  it('slice should work with Negative begin index', () => {
    expect(slice('thermaltake', -1)).toBe('e');
  })

  it('slice should work with Negative end and positive begin indexes', () => {
    expect(slice('thermaltake', 4, -1)).toBe('maltak');
  })

  it('slice should work with Negative end and begin indexes', () => {
    expect(slice('thermaltake', -5, -1)).toBe('ltak');
  })
  
  it(`cuts from 'begin' to 'end'`, () => {
    const result = slice('0123456789', 3, 8)
    expect(result).toBe('34567');
  });

  it(`cuts from 'begin' without 'end'` , () => {
    const result = slice('0123456789', 3)    

    expect(result).toBe('3456789');
  });

  //Назви для зручності варто створювати короткими

  it(`cuts without 'begin' and 'end'` , () => {
    const result = slice('0123456789')    

    expect(result).toBe('0123456789');
  });

  it(`begin < 0 end > 0` , () => {
    const result = slice('0123456789', -4, 9)    

    expect(result).toBe('678');
  });

  it(`begin > 0 end < 0` , () => {
    const result = slice('0123456789', 3, -3)    

    expect(result).toBe('3456');
  });

  it(`begin < 0 end < 0` , () => {
    const result = slice('0123456789', -6, -3)    

    expect(result).toBe('456');
  });

  it(`begin < 0 without end` , () => {
    const result = slice('0123456789', -6,)    

    expect(result).toBe('456789');
  });

  it(`begin > input.length` , () => {
    const result = slice('0123456789', 17,)    

    expect(result).toBe('');
  });

  it(`begin > 0 and end > input.length` , () => {
    const result = slice('0123456789', 2, 18)    

    expect(result).toBe('23456789');
  });

  it(`begin < end` , () => {
    const result = slice('0123456789', 4, 2)    

    expect(result).toBe('');
  });

  it(`begin too small` , () => {
    const result = slice('0123456789', -25)    

    expect(result).toBe('0123456789');
  });

  it(`begin too small, end to small` , () => {
    const result = slice('0123456789', -25, -15)    

    expect(result).toBe('');
  });
  
  it(`Begin === NaN` , () => {
    const result = slice('0123456789', NaN)    

    expect(result).toBe('0123456789');
  });

  it(`End === NaN` , () => {
    const result = slice('0123456789', 2, NaN)    

    expect(result).toBe('23456789');
  });

  it(`Begin with deimal part` , () => {
    const result = slice('0123456789', 2.5)    

    expect(result).toBe('23456789');
  });
  
  it(`Begin > 0 and end with deimal part` , () => {
    const result = slice('0123456789', 2, 8.7)    

    expect(result).toBe('234567');
  });

  it(`Begin === negative number and with deimal part` , () => {
    const result = slice('0123456789', -6.4, -3.3)    

    expect(result).toBe('456');
  });
})


describe(`test getCoinCombination function`, () => {
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`'getCoinCombination' should return error message with Negative number of cents`, () => {
    expect(() => getCoinCombination(-30)).toThrow()
  });

  it(`'getCoinCombination' should return error message if cents = 0`, () => {
    expect(() => getCoinCombination(0)).toThrow()
  });

  it(`'getCoinCombination' should return array of [0, 1, 0, 1] if cents = 30`, () => {
    const result = getCoinCombination(30);

    expect(result).toEqual([0, 1, 0, 1]);
  });

  it(`'getCoinCombination' should return array of [1, 1, 0, 1] if cents = 31`, () => {
    const result = getCoinCombination(31);

    expect(result).toEqual([1, 1, 0, 1]);
  });

  it(`'getCoinCombination' should return array of [1, 1, 1, 1] if cents = 41`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it(`'getCoinCombination' should return error message if cents = NaN`, () => {
    expect(() => getCoinCombination(NaN)).toThrow();
  });

  it(`'getCoinCombination' should return array of [0, 0, 0, 0] if cents = 0.4 (decimal part)`, () => {
    expect(getCoinCombination(0.4)).toEqual([0, 0, 0, 0])
  });

  it(`'getCoinCombination' should return error message if cents = infinity`, () => {
    expect(() => getCoinCombination(Infinity)).toThrow();
  });

  it(`'getCoinCombination' should return error message if cents = undefined`, () => {
    expect(() => getCoinCombination(undefined)).toThrow();
  });
});
