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
  BankAccount,
  bankApi,
  ifElse,
  chainer,
  getCurrentDay,
  debounce,
  generateSecret,
} = require('./functions');

describe.skip('Math functions', () => { //describe використовується для групування тестів
  test('sum test', () => {
    expect(sum(2, 4)).toBe(6)
  })

  test('subtract', () => {
    expect(subtract(5, 7)).toBe(-2)
  })
})

describe.skip('async, await, Promise, fetchuser', () => {
  test('user data', async () => {
    const user = await fetchUser();
    expect(user.name).toBe('Bohdan Gres')
  })
})

describe.skip('getPlan', () => {
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
describe.skip('addCssClass new Set/add/delete', () => {
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
describe.skip('removeCssClass', () => {
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

describe.skip('tests with toThrow()', () => {
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

describe.skip(`jsDoc/snippets/debug/'slice' fucntion tests`, () => {
  it('slice should return value(from start index to end)' +
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

  it(`cuts from 'begin' without 'end'`, () => {
    const result = slice('0123456789', 3)

    expect(result).toBe('3456789');
  });

  //Назви для зручності варто створювати короткими

  it(`cuts without 'begin' and 'end'`, () => {
    const result = slice('0123456789')

    expect(result).toBe('0123456789');
  });

  it(`begin < 0 end > 0`, () => {
    const result = slice('0123456789', -4, 9)

    expect(result).toBe('678');
  });

  it(`begin > 0 end < 0`, () => {
    const result = slice('0123456789', 3, -3)

    expect(result).toBe('3456');
  });

  it(`begin < 0 end < 0`, () => {
    const result = slice('0123456789', -6, -3)

    expect(result).toBe('456');
  });

  it(`begin < 0 without end`, () => {
    const result = slice('0123456789', -6,)

    expect(result).toBe('456789');
  });

  it(`begin > input.length`, () => {
    const result = slice('0123456789', 17,)

    expect(result).toBe('');
  });

  it(`begin > 0 and end > input.length`, () => {
    const result = slice('0123456789', 2, 18)

    expect(result).toBe('23456789');
  });

  it(`begin < end`, () => {
    const result = slice('0123456789', 4, 2)

    expect(result).toBe('');
  });

  it(`begin too small`, () => {
    const result = slice('0123456789', -25)

    expect(result).toBe('0123456789');
  });

  it(`begin too small, end to small`, () => {
    const result = slice('0123456789', -25, -15)

    expect(result).toBe('');
  });

  it(`Begin === NaN`, () => {
    const result = slice('0123456789', NaN)

    expect(result).toBe('0123456789');
  });

  it(`End === NaN`, () => {
    const result = slice('0123456789', 2, NaN)

    expect(result).toBe('23456789');
  });

  it(`Begin with deimal part`, () => {
    const result = slice('0123456789', 2.5)

    expect(result).toBe('23456789');
  });

  it(`Begin > 0 and end with deimal part`, () => {
    const result = slice('0123456789', 2, 8.7)

    expect(result).toBe('234567');
  });

  it(`Begin === negative number and with deimal part`, () => {
    const result = slice('0123456789', -6.4, -3.3)

    expect(result).toBe('456');
  });
})


describe.skip(`test getCoinCombination function`, () => {
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

describe.skip(`test isIsogram function`, () => {
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

describe.skip(`'restoreNames' function test`, () => {

  it(`'restoreNames should update firstName`
    + ` from undefined to the correct value'`, () => {
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
    + ` key with "Name" as a value`, () => {
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
    + ` firstName if it has value`, () => {
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
    + ` firstName if there is no fullName`, () => {
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
    + ` firstName if there is fullName has three words`, () => {
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

describe.skip(`'fillTank'`, () => {
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
    + ` than the cost of filling up to maxTankCapacity`, () => {
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
    + ` value if amount = decimal number`, () => {
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
    + ` value if fuelPrice = decimal number and amount = decimal number`, () => {
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

describe.skip(`Function 'arrayReverse':`, () => {
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

describe.skip(`Function 'isPasswordActual':`, () => {
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

describe.skip(`forEach/Mock using jest.fn`, () => {
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
    expect(forEach([], () => { })).toBeUndefined()
  });
})

describe.skip(`filter/Mock using jest.fn`, () => {
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

describe.skip(`BankAccount/using spyOn`, () => {
  beforeEach(() => {
    jest.spyOn(bankApi, 'transfer')
      .mockImplementation(() => { })
  })

  afterEach(() => {
    bankApi.transfer.mockRestore();
  })

  it('should send transfer request', () => {
    const testAccount = new BankAccount('My account', 100);

    testAccount.pay('Other account', 50)

    expect(bankApi.transfer).toHaveBeenCalled();
  });

  it('should throw Error when balance < amount to sent', () => {
    const testAccount = new BankAccount('My account', 30);

    expect(() => testAccount.pay('Other account', 50)).toThrow()
    expect(bankApi.transfer).not.toHaveBeenCalled();
  });
});

// jest.mock(./bankApi.js, () => {
//   return {
//     bankApi: {
//       transfer: jest.fn()
//     }
//   }
// });

// describe(`BankAccount/using jest.mock`, () => {

//   it('should send transfer request', () => {
//     const testAccount = new BankAccount('My account', 100);

//     testAccount.pay('Other account', 50)

//     expect(bankApi.transfer).toHaveBeenCalled();
//   });
// });

// module
// export function greet(name) {
//   return `Hello, ${name}!`;
// }


// // test
// import { greet } from './module';

// jest.mock('./module', () => ({
//   greet: jest.fn(() => 'Mock greeting'),
// }));

// test('greet returns the mock greeting', () => {
//   expect(greet('Alice')).toEqual('Mock greeting');
// });

describe.skip('ifElse', () => {

  it(`should call a 'first' function if 'condition' return is true`, () => {
    const condition = jest.fn(() => true)
    const first = jest.fn()
    const second = jest.fn()

    ifElse(condition, first, second)

    expect(first).toHaveBeenCalledTimes(1)
    expect(second).toHaveBeenCalledTimes(0)
  });

  it(`should call a 'second' function if 'condition' return is false`, () => {
    const condition = jest.fn(() => false)
    const first = jest.fn()
    const second = jest.fn()

    ifElse(condition, first, second)

    expect(second).toHaveBeenCalledTimes(1)
    expect(first).toHaveBeenCalledTimes(0)
  });

  it(`should call a 'condition' function without arguments`, () => {
    const condition = jest.fn(() => { })
    const first = jest.fn()
    const second = jest.fn()

    ifElse(condition, first, second)

    expect(condition).toHaveBeenCalledTimes(1)
  });
});

describe.skip('chainer', () => {
  it('should correctly chain functions', () => {
    const f1 = jest.fn((x) => x * 2);
    const f2 = jest.fn((x) => x + 2);

    const result = chainer([f1, f2])(2);

    expect(result).toBe(6);
    expect(f1).toHaveBeenCalledTimes(1);
    expect(f2).toHaveBeenCalledTimes(1);
  });

  it('should return value if empty array as argument', () => {
    const result = chainer([])(2);

    expect(result).toBe(2);
  });

  it('should correctly apply a single function', () => {
    const f1 = jest.fn((x) => x * 2);

    const result = chainer([f1])(2);

    expect(result).toBe(4);
    expect(f1).toHaveBeenCalledTimes(1)
  });

  //   it('should call all functions with a correct parameter', () => {
  //   const func1 = jest.fn((x) => {
  //     return x * 2;
  //   });
  //   const func2 = jest.fn((x) => {
  //     return x + 2;
  //   });
  //   const func3 = jest.fn((x) => {
  //     return Math.pow(x, 2);
  //   });

  //   chainer([func1, func2, func3])(3);
  //   expect(func1).toHaveBeenCalledWith(3);
  //   expect(func2).toHaveBeenCalledWith(6);
  //   expect(func3).toHaveBeenCalledWith(8);
  // });
  it('test for better understanding', () => {
    const f1 = jest.fn((x) => x * 2)
    const f2 = jest.fn((x) => x * 25)
    const f3 = jest.fn((x) => x * 25)

    const result = chainer([f1, f2, f3])(2)

    expect(result).toBe(2500);
    expect(f1).toHaveBeenCalledWith(2)
    expect(f2).toHaveBeenCalledWith(4)
    expect(f3).toHaveBeenCalledWith(100)
  });

});

describe.skip('getCurrentDay/useFakeTimers', () => {

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should return current day', () => {
    const result = getCurrentDay();

    expect(result).toBe('Wednesday');
  });

  it('should work on Thursday', () => {
    jest.setSystemTime(new Date('2021-12-30'))

    const result = getCurrentDay();

    expect(result).toBe('Thursday');
  });

  it('should work on Friday', () => {
    jest.setSystemTime(new Date('2021-12-31'))

    const result = getCurrentDay();

    expect(result).toBe('Friday');
  });

  it('should work on Saturday', () => {
    jest.setSystemTime(new Date('2022-01-01'))

    const result = getCurrentDay();

    expect(result).toBe('Saturday');
  });

  it('should work on Sunday', () => {
    jest.setSystemTime(new Date('2022-01-02'))

    const result = getCurrentDay();

    expect(result).toBe('Sunday');
  });

  it('should work on Monday', () => {
    jest.setSystemTime(new Date('2021-12-27'))

    const result = getCurrentDay();

    expect(result).toBe('Monday');
  });

  it('Tuesday', () => {
    jest.setSystemTime(new Date('2021-12-28'))

    const result = getCurrentDay();

    expect(result).toBe('Tuesday');
  });

  it('should work with future date', () => {
    jest.setSystemTime(new Date('2041-12-27'))

    const result = getCurrentDay();

    expect(result).toBe('Friday');
  });

  it('at last second should work at 23:59:59', () => {
    jest.setSystemTime(new Date('2041-12-27 23:59:59'))

    const result = getCurrentDay();

    expect(result).toBe('Friday');
  });

  it('at first second should work at 00:00:00', () => {
    jest.setSystemTime(new Date('2041-12-28 00:00:00'))

    const result = getCurrentDay();

    expect(result).toBe('Saturday');
  });

});

describe('debounce/done setTimeOut testing/jest.advanceTimersByTime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.useRealTimers();
  })

  it('should be a function', () => {
    const f = () => { };

    expect(debounce(f, 500)).toBeInstanceOf(Function)
  });

  it('should call a cb after delay', (done) => {
    const f = jest.fn();

    const result = debounce(f, 1000)

    result()
    expect(f).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500)
    expect(f).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500)
    expect(f).toHaveBeenCalled();

    done()
  });

  it('should be called after last call', () => {
    const f = jest.fn();

    const wrappedF = debounce(f, 1000)
    wrappedF()
    expect(f).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500)
    wrappedF()

    jest.advanceTimersByTime(500)
    expect(f).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500)
    expect(f).toHaveBeenCalled();

  });

  it('should run callback with last given args', () => {
    const f = jest.fn();

    const wrappedF = debounce(f, 1000)
    wrappedF(1, 2)

    jest.advanceTimersByTime(500)
    wrappedF(3, 4, 5)

    jest.advanceTimersByTime(500)

    jest.advanceTimersByTime(500)
    expect(f).toHaveBeenCalledWith(3, 4, 5);

  });

  it('should call function twice if delay was big', () => {
    const f = jest.fn();

    const wrappedF = debounce(f, 1000)
    wrappedF(1, 2)

    jest.advanceTimersByTime(1500)
    wrappedF(3, 4, 5)

    jest.advanceTimersByTime(1500)
    expect(f).toHaveBeenNthCalledWith(1, 1, 2);
    expect(f).toHaveBeenNthCalledWith(2, 3, 4, 5); // перший аргумент вказує на послідовність виклику

  });
});

describe('guessTheNumber', () => {

  describe('generateSecret/ toMatch()', () => {
    const results = []

    beforeAll(() => {
      for (let i = 0; i < 100; i++) {
        results.push(generateSecret())
      }
    })

    beforeEach(() => {
      jest.spyOn(Math, 'random');
    });

    afterEach(() => {
      Math.random.mockReset();
    })

    it(`should return a 4-digit string`, () => {

      for (const result of results) {
        expect(result).toMatch(/^\d{4}$/)
        expect(result).toHaveLength(4)
      }

      //d- digits
      // expect(typeof result).toBe('string')
    });

    it(`should be unique 4-digit string`, () => {
      for (const result of results) {
        const digits = new Set(result)
        expect(result.length).toBe(digits.size);
      }


      // не очень подходит в моем случае, потому что 
      // set розбивате посимвольно а число 4-х значне і може містити дублікати(1234) пройде тест
      // в сета щоб отримати довжину потрібно звернутися з size
    });

    // it('should return random values', () => {
    //   const results = [
    //     generateSecret(),
    //     generateSecret(),
    //     generateSecret(),
    //     generateSecret(),
    //     generateSecret(),
    //   ]

    //   const unique = new Set(results)

    //   expect(unique.size).toBeGreaterThanOrEqual(results.length - 1) //results.length -1 (5)
    // });

    // it('should return 4-digits secret', () => {
    //   Math.random.mockReturnValueOnce(0.1234);
    //   const result = generateSecret();

    //   expect(result).toBe('1234');
    // });

    // it('should add leading 0 for 3 digits secret', () => {
    //   Math.random.mockReturnValueOnce(0.0874);
    //   const result = generateSecret();

    //   expect(result).toBe('0874');
    // });

    // it('should not use secret with duplicates', () => {
    //   Math.random.mockReturnValueOnce(0.4054);
    //   Math.random.mockReturnValueOnce(0.2278);
    //   Math.random.mockReturnValueOnce(0.9999);

    //   Math.random.mockReturnValueOnce(0.4398);

    //   const result = generateSecret();
    //   expect(result).toBe('4398');
    // });
  })
});


