const { 
  sum,
  subtract,
  fetchUser, 
  getPlan, 
  addCssClass, 
  removeCssClass, 
  slice, 
  getCoinCombination, 
  isIsogram, 
  restoreNames, 
  fillTank,
  arrayReverse,
  isPasswordActual,
  forEach,
  filter,
 } = require('./functions');

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

  it(`'getCoinCombination' should return`
  + ` error message with Negative number of cents`, () => {
    expect(() => getCoinCombination(-30)).toThrow();
  });

  it(`'getCoinCombination' should return`
  + ` array of [0, 0, 0, 0] if cents = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`'getCoinCombination' should return`
  + ` array of [0, 1, 0, 1] if cents = 30`, () => {
    const result = getCoinCombination(30);

    expect(result).toEqual([0, 1, 0, 1]);
  });

  it(`'getCoinCombination' should return`
  + ` array of [1, 1, 0, 1] if cents = 31`, () => {
    const result = getCoinCombination(31);

    expect(result).toEqual([1, 1, 0, 1]);
  });

  it(`'getCoinCombination' should return`
  + ` array of [1, 1, 1, 1] if cents = 41`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it(`'getCoinCombination' should return`
  + ` array of [0, 0, 0, 4] if cents = 100`, () => {
    const result = getCoinCombination(100);

    expect(result).toEqual([0, 0, 0, 4]);
  });

  it(`'getCoinCombination' should return`
  + ` error message if cents = NaN`, () => {
    expect(() => getCoinCombination(NaN)).toThrow();
  });

  it(`'getCoinCombination' should return`
  + ` array of [0, 0, 0, 0] if cents = 0.4 (decimal part)`, () => {
    expect(getCoinCombination(0.4)).toEqual([0, 0, 0, 0]);
  });

  it(`'getCoinCombination' should return`
  + ` error message if cents = infinity`, () => {
    expect(() => getCoinCombination(Infinity)).toThrow();
  });

  it(`'getCoinCombination' should return`
  + ` error message if cents = undefined`, () => {
    expect(() => getCoinCombination(undefined)).toThrow();
  });
});

describe(`test isIsogram function`, () => {
  it(`'isIsogram' should return true if argument = ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`'isIsogram' should return false if argument = 'llll'`, () => {
    expect(isIsogram('llll')).toBeFalsy();
  });

  it(`'isIsogram' should return false if argument = 'Ll'`, () => {
    expect(isIsogram('Ll')).toBeFalsy();
  });

  it(`'isIsogram' should return true if argument = one letter (L)`, () => {
    expect(isIsogram('L')).toBeTruthy();
  });

  it(`'isIsogram' should return true if argument = 'AbCOk'`, () => {
    expect(isIsogram('AbCOk')).toBeTruthy();
  });

  it(`'isIsogram' should return error message if argument = NaN`, () => {
    expect(() => isIsogram(NaN)).toThrow();
  });

  it(`'isIsogram' should return error message if argument = undefined`, () => {
    expect(() => isIsogram(undefined)).toThrow();
  });
  it(`'isIsogram' should return if argument = one letter (l)`, () => {
    expect(isIsogram('l')).toBeTruthy();
  });
})

describe(`'restoreNames' function test`, () => {

  it(`'restoreNames should update firstName`
  +` from undefined to the correct value'`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users)

    expect(users[0].firstName).toBe('Jack')
  });

  it(`'restoreNames should create firstName`
  +` key with "Name" as a value`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users)

    expect(users[0].firstName).toBe('Mike')
  });

  it(`'restoreNames should not change`
  +` firstName if it has value`, () => {
    const users = [
      {
        firstName: 'Andrei',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users)

    expect(users[0].firstName).toBe('Andrei')
  });

  it(`'restoreNames should not change`
  +` firstName if there is no fullName`, () => {
    const users = [
      {
        firstName: 'Andrei',
        lastName: 'Adams',
      },
    ];

    restoreNames(users)

    expect(users[0].firstName).toBe('Andrei')
  });

  it(`'restoreNames should change`
  +` firstName if there is fullName has three words`, () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Simon Adams'
      },
    ];

    restoreNames(users)

    expect(users[0].firstName).toBe('Mike')
  });

  it(`'restoreNames should handle empty user array`, () => {
    const users = [];

    restoreNames(users)

    expect(users).toEqual([])
  });

});

describe(`'fillTank'`, () => {
  it(`should not change fuelRemains if user has no money`, () => {
    const customer1 = {
      money: 0, // залишок грошей на рахунку клієнта
      vehicle: {
        maxTankCapacity: 40, // Об'єм бака
        fuelRemains: 0, // Залишок палива у баку
      }
    }

    fillTank(customer1, 10, 5);

    expect(customer1.vehicle.fuelRemains).toBe(0)
  });

  it(`User.money should not change more`
  +` than the cost of filling up to maxTankCapacity`, () => {
    const customer1 = {
      money: 50, 
      vehicle: {
        maxTankCapacity: 40, 
        fuelRemains: 20,
      }
    }

    fillTank(customer1, 1, 40);

    expect(customer1.money).toBe(30)
  });

  it(`should change fuelRemains to maxTankCapacity`, () => {
    const customer1 = {
      money: 100,
      vehicle: {
        maxTankCapacity: 40, 
        fuelRemains: 0, 
      }
    }

    fillTank(customer1, 1);

    expect(customer1.vehicle.fuelRemains).toBe(40)
  });

  it(`should change fuelRemains to amount of fuel that user can buy`, () => {
    const customer1 = {
      money: 20, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 0, 
      }
    }

    fillTank(customer1, 1, 35);

    expect(customer1.vehicle.fuelRemains).toBe(20)
  });

  it(`should not change fuelRemains if amount of fuels < 2`, () => {
    const customer1 = {
      money: 20, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 0, 
      }
    }

    fillTank(customer1, 1, 1);

    expect(customer1.vehicle.fuelRemains).toBe(0)
  });

  it(`should change fuelRemains to decimal`
  +` value if amount = decimal number`, () => {
    const customer1 = {
      money: 20,
      vehicle: {
        maxTankCapacity: 40, 
        fuelRemains: 0, 
      }
    }

    fillTank(customer1, 1, 5.64);

    expect(customer1.vehicle.fuelRemains).toBe(5.6)
  });

  it(`should change customer.money to decimal`
  +` value if fuelPrice = decimal number and amount = decimal number`, () => {
    const customer1 = {
      money: 20,
      vehicle: {
        maxTankCapacity: 40, 
        fuelRemains: 0, 
      }
    }

    fillTank(customer1, 1.26, 5.64);

    expect(customer1.money).toBe(12.94)
  });
})

describe(`Function 'arrayReverse':`, () => {
  // const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an array with same length
  as original array length`, () => {
    const arrLength = arrayReverse(['Mate', 'Academy'])
  expect(arrLength.length).toBe(2);
  });

  it(`should not change length of strings in array after reverse`, () => {
    const arrLength = arrayReverse(['Mate', 'Academy'])
  expect(arrLength[0].length).toBe(4);
  });

  it(`should return empty array if empty array used as an argument`, () => {
    const arrLength = arrayReverse([])
  expect(arrLength).toEqual([]);
  });

  it(`should return error message if the 
  function does not take an argument`, () => {
  expect(() => arrayReverse()).toThrow();
  });
 
});

describe(`Function 'isPasswordActual':`, () => {
  // const isPasswordActual = require('./isPasswordActual');
  const date = new Date(Date.now());
  const today = {
    year: date.getUTCFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  };

  it(`should be declared`, () => {
    expect(isPasswordActual).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {

  });

  it(`should ask to change the password if was changed a year ago`, () => {
    const lastYear = isPasswordActual(today.year - 1, today.month, today.date);

    expect(lastYear)
      .toBe('Immediately change the password!');
  });

  it(`should return 'Password is actual' 
  message if func has no argument`, () => {
    const lastYear = isPasswordActual();
  
    expect(lastYear)
      .toBe('Password is actual.');
  });

  it(`should return 'You should change your password.' 
  if last password update < 60 days ago`, () => {
    const lastYear = isPasswordActual(2024, 8, 25);

    expect(lastYear)
      .toBe('You should change your password.');
  });

  it(`should return 'Password is actual' 
  if one of arguments is missing`, () => {
    const lastYear = isPasswordActual(2024, 8);
  
    expect(lastYear)
      .toBe('Password is actual.');
  });

  it(`should return 'Password is actual' 
  if string used as argument`, () => {
    const lastYear = isPasswordActual('20g4', '8', '6');
  
    expect(lastYear)
      .toBe('Password is actual.');
  });
});

describe(`forEach/Mock using jest.fn`, () => {
  beforeEach(() => {
    Array.prototype.forEach2 = forEach
  })

  afterEach(() => {
    delete Array.prototype.forEach2;
  })

  // beforeAll(() => {})
  // afterAll(() => {})

  it('should call a callback once per item', () => {
    // const items = [1, 2, 3];

    // let count = 0;

    // const f = () => { count++ }
    // forEach(items, f)
    // expect(count).toBe(3)
    const items = [1, 2, 3, 4];

    const f = jest.fn()

    items.forEach2(f)
    expect(f).toHaveBeenCalledTimes(4)
  });

  it('should not call a callback for an empty array', () => {
    // let count = 0;

    // const f = () => { count++ }

    const f = jest.fn()
    const arr = [];

    arr.forEach2(f);
    expect(f).not.toHaveBeenCalled()
  });

  it('should pass an element, an index and an array to a callback', () => {
    // const items = [1, 2, 3];

    // let cbArgs = [];

    // const f = (...args) => { 
    //   cbArgs.push(args)
    // }

    const items = [1, 2, 3];

    const f = jest.fn()

    items.forEach2(f)

    expect(f.mock.calls[0]).toEqual([1, 0, [1, 2, 3]])
    expect(f).toHaveBeenCalledWith(2, 1, [1, 2, 3])// в цьому випадку ми не маємо інфи 
    //коли саме було викликано функцію, знаємо тільки сам факт виклику 

    expect(f).toHaveBeenNthCalledWith(3, 3, 2, [1, 2, 3]) //перше число відображає виклик (від 1 починається відлік)
    //в цьому випадку ми перевіряємо в який раз було викликано функцію
  });
  
  it('should return undefined', () => {
    expect(forEach([], () => {})).toBeUndefined()
  });
})

describe(`filter/Mock using jest.fn`, () => {
  beforeEach(() => {
    Array.prototype.filter2 = filter;
  })

  afterEach(() => {
    delete Array.prototype.filter2;
  })

  // beforeAll(() => {})
  // afterAll(() => {})

  it('should call a callback once per item', () => {
    const items = [1, 2, 3, 4];

    const f = jest.fn()

    items.filter2(f)
    expect(f).toHaveBeenCalledTimes(4)
  });

  it('should not call a callback for an empty array', () => {
    const f = jest.fn()
    const arr = [];

    arr.filter2(f);
    expect(f).not.toHaveBeenCalled()
  });

  it('should pass an element, an index and an array to a callback', () => {
    const items = [1, 2, 3];

    const f = jest.fn()

    items.filter2(f)

    expect(f.mock.calls[0]).toEqual([1, 0, [1, 2, 3]])
    expect(f).toHaveBeenCalledWith(2, 1, [1, 2, 3])// в цьому випадку ми не маємо інфи 
    //коли саме було викликано функцію, знаємо тільки сам факт виклику 

    expect(f).toHaveBeenNthCalledWith(3, 3, 2, [1, 2, 3]) //перше число відображає виклик (від 1 починається відлік)
    //в цьому випадку ми перевіряємо в який раз було викликано функцію
  });

  it('should return all elements if cb is true', () => {
    const items = [1, 2, 3];

    const f = jest.fn(() => true); // тут зберігається інформація про виклики, яка може знадобитися при тестуванні

    const result = items.filter2(f)

    expect(result).toEqual([1, 2, 3])
  });

  it('should return [] if cb is false', () => {
    const items = [];

    const f = jest.fn(() => false); // тут зберігається інформація про виклики, яка може знадобитися при тестуванні

    const result = items.filter2(f)

    expect(result).toEqual([])
  });

  it('should return some elements based on callback result', () => {
    const items = [1, 2, 3, 4, 5, 6];

    const f = jest.fn((item) => false) // для всіх остальних результат буде false
    .mockReturnValueOnce(true)// повертає один елемент
    .mockReturnValueOnce(true)// повертає один елемент
    .mockReturnValueOnce(false)// повертає один елемент
    .mockReturnValueOnce(true)// повертає один елемент
    // тут зберігається інформація про виклики, яка може знадобитися при тестуванні

    const result = items.filter2(f)

    expect(result).toEqual([1, 2, 4])
  });
})