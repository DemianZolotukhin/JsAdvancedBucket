
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(resolve, 1000, {
            id: 1,
            name: 'Bohdan Gres',
        })
    })
}

function getPlan(startProd, numOfMonth, percent) {
    const result = [];
    let total = startProd;

    if (startProd === 0 || percent <= 0) {
        return null;
    }

    for (let i = 0; i < numOfMonth; i++) {
        total += Math.floor(total * percent / 100)
        result.push(total)
    }

    return result;
}

function addCssClass(element, classToAdd) {
    const classes = new Set(element.className.split(' '))
    classes.delete('');

    classes.add(classToAdd)
    // element.className = element.className
    // .trim()
    // .replace(/ +/g, ' ') 
    // // буде заміняти всі пробіли від одного і більше... на один(дуже зручно)

    // if (element.className.split(' ').includes(classToAdd)) {
    //     return
    // }

    // element.className += ` ${classToAdd}`;
    element.className = [...classes].join(' ');
}

function removeCssClass(element, classToRemove) {
    const classes = new Set(element.className.split(' '))
    classes.delete('');
    classes.delete(classToRemove);
    element.className = [...classes].join(' ');
}

/**
 * 
 * @param {string} input 
 * @param {number} begin 
 * @param {number} end 
 * @returns 
 */
//jsDoc - інструкція, як саме використовувати нашу функцію

function slice(input, begin = 0, end = input.length) {
    begin = Math.trunc(begin)
    end = Math.trunc(end)

    if (isNaN(begin)) {
        begin = 0;
    }

    if (isNaN(end)) {
        end = input.length;
    }

    let indexStart = begin;
    let indexEnd = end;

    if (end < 0) {
        indexEnd = Math.max(input.length + end, 0)
    }

    if (indexEnd > input.length) {
        indexEnd = input.length;
    }

    if (begin < 0) {
        indexStart = Math.max(input.length + begin, 0)
    }

    let sliced = '';

    for (let i = indexStart; i < indexEnd; i++) {
        sliced += input[i];
    }

    return sliced;
}

/**
* @param {number} cents
*
* @returns {number[]}
*/
function getCoinCombination(cents) {
    if (cents < 0) {
        throw new Error('Please enter number of cents');
    }

    if (typeof cents !== 'number' || isNaN(cents) || !isFinite(cents)) {
        throw new Error('Invalid input: must be a finite number');
    }

    let currentAmount = cents;
    const values = [1, 5, 10, 25];
    const coins = [0, 0, 0, 0];

    for (let i = 3; i >= 0; i--) {
        coins[i] = Math.floor(currentAmount / values[i]);
        currentAmount -= coins[i] * values[i];
    }

    return coins;
}

/**
 * @param {string} word
 *
 * @returns {boolean}
 */
function isIsogram(word) {
    const wordToLower = word.toLowerCase();

    for (let i = 0; i < wordToLower.length; i++) {
        const letter = wordToLower[i];

        if (wordToLower.includes(letter, i + 1)) {
            return false;
        }
    }

    return true;
}

/**
* @typedef {Object} User
* @property {string} firstName
* @property {string} lastName
* @property {string} fullName
*
* @param {User[]} users
*/
function restoreNames(users) {
    for (const user of users) {
        if (!user.firstName) {
            [user.firstName] = user.fullName.split(' ');
        }
    }
}

/**
* @typedef {Object} Vehicle
* @property {number} maxTankCapacity
* @property {number} fuelRemains
*
* @typedef {Object} Customer
* @property {number} money
* @property {Vehicle} vehicle
*
* @param {Customer} customer
* @param {number} fuelPrice
* @param {number} amount
*/
function fillTank(customer, fuelPrice, amount = Infinity) {
    const { vehicle } = customer;
    const freeSpace = vehicle.maxTankCapacity - vehicle.fuelRemains;
    const canBuy = customer.money / fuelPrice;
    const requiredAmount = Math.min(amount, freeSpace, canBuy);
    const roundedAmount = roundFuel(requiredAmount);

    if (roundedAmount < 2) {
        return;
    }

    customer.vehicle.fuelRemains += roundedAmount;
    customer.money -= roundPrice(roundedAmount * fuelPrice);
    customer.money = +customer.money.toFixed(2)
}

function roundFuel(fuel) {
    return Math.floor(fuel * 10) / 10; //5.64 * 10 / 10
}

function roundPrice(price) {
    return Math.round(price * 100) / 100;
}

/**
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function arrayReverse(words) {
    let start = 0;
    const whole = words.join('').split('').reverse().join('');

    for (let i = 0; i < words.length; i++) {
        words[i] = whole.slice(start, start + words[i].length);
        start += words[i].length;
    }

    return words;
}

/**
* @param {number} year
* @param {number} month
* @param {number} date
*
* @returns {string}
*/
function isPasswordActual(year, month, date) {
    const actualDate = new Date(Date.now()).getTime();
    const lastEditedDate = new Date(year, month - 1, date).getTime();
    const diff = actualDate - lastEditedDate;

    const days = Math.floor(diff / (60 * 60 * 24 * 1000));

    if (days > 60) {
        return 'Immediately change the password!';
    }

    if (days > 30) {
        return 'You should change your password.';
    }

    return 'Password is actual.';
}

function forEach(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

function filter(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }

    return result
}

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    pay(toNumber, amount) {
        if (amount < 0) {
            throw new Error(`Amount can't be negative`);
        }

        if (amount > this.balance) {
            throw new Error(`Not enough money`);
        }

        bankApi.transfer(this.accountNumber, toNumber, amount)
    }
}

const bankApi = {
    transfer: (fromAccount, toAccount, amount) => {

    }
};

/**
 * @param condition
 * @param first
 * @param second
 */
function ifElse(condition, first, second) {
    if (condition() === true) {
        first();
    } else {
        second();
    }
}

/**
* @param {function[]} functions
*
* @returns {function}
*/
function chainer(functions) {
    return (x) => {
        let result = x;

        for (const f of functions) {
            result = f(result);
        }

        return result;
    }
}

function getCurrentDay() {
    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const date = new Date();
    const dayIndex = date.getDay();

    for (let i = 0; i < weekdays.length; i++) {
        if (i === dayIndex) {
            return weekdays[i];
        }
    }
}

function debounce(callback, delay) {
    let timerId;

    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback(...args)
        }, delay)
    };
}


function printArgs(...args) {
    console.log(args)
}

function generateSecret2() {
    const digits = '0123456789'.split('');
    const result = digits.sort(() => Math.random() - 0.5)

    return result.slice(-4).join('');
}

function generateSecret() {
    let digits;
    let result;
    let attempts = 0;
    const maxAttemps = 100;

    do {
        const x = Math.trunc(Math.random() * 10000)
        result = `${x}`.padStart(4, '0')
        digits = new Set(result)
        attempts++;


        if (attempts >= maxAttemps) {
            throw new Error('gnilaya')
        }

    } while (digits.size !== result.length)

    return result;
}



module.exports = {
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
}
