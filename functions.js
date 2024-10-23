
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
    fillTank
}



