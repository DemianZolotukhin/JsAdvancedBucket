/* function printFromTo(input, start, end) {
    debugger;
  for (let i = start; i <= end; i++) {
    console.log(input[i])
  }
}

printFromTo('datatransmitter', 0, 5)


function isWerewolf(target) {
    debugger;
    let direct = '';
    let reversed = '';
  
    for (let ch of target) {
      if (!' ,'.includes(ch)) {
        direct += ch;
        reversed = ch + reversed;
      }
    }
  
    console.log(direct.toLowerCase() === reversed.toLowerCase());
  }

  isWerewolf('Danetski aeroplan')


  const words = ['one', 'two', 'three', 'four', 'five'];

  function indexOf(items, itemToFind) {

    for (let i = 0; i <= items.length; i++) {
      if (items[i] === itemToFind) {
        return i;
      }
    }

    return -1;
  }

  console.log(
    indexOf(words, 'four')
    )


    function makeDecision(fuelRemaining, distance, fuelConsumption) { 
      debugger;
      if (fuelRemaining < 0 || distance < 0 ||
      fuelConsumption <= 0) {
        return 'please, enter the valid data';
      }
    
      let fuelPerKm = fuelConsumption / 100;
      let toDrive = distance * fuelPerKm;
      if (fuelRemaining < toDrive) {
        return 'ask for help';
      }
    
      if (fuelRemaining >= toDrive) {
        return 'reach gas station by themselves';
      }
    }

    makeDecision(20, 103, 19)


    function getLengthOfNumbers(num) {
      let sum = 0;

      debugger;

      for (let i = num; i > 0; i--) {
        console.log(i)
      }
    }

    getLengthOfNumbers(89)

    function isWerewolf(target) {
      let toLower = target.toLowerCase()
      let standart = '';
      let reverse = '';
      debugger;
    
      for (let ch of toLower) {
        if ('abcdefghijklmnopqrstuvwxyz'.includes(ch))
        reverse = ch + reverse,
        standart += ch;
      }
    
      return standart === reverse
    }
  
  isWerewolf('red rum sir is murder')


  function splitString(str) {
    let corrected = str;
    let result = [];
  
    debugger;

    if (corrected.length % 2 !== 0) {
      corrected += '_'
    }
  
    for (let i = 0; i < corrected.length; i += 2) {
      result.push(corrected[i] + corrected[i + 1])
    }
  
    return result;
  }
  
  splitString('ab cd ef');


  let str1 = [];

 for (let i = 1; i < 256; i++) {

  str1 += String.fromCodePoint(i)
  console.log(String.fromCodePoint(i))
 }
 console.log(str1)

 let x = 1234567

 console.log(String(x).length)


 function calculateGuests(guestsInput) { // 'str2 trg 5s'
  let digits = '';
  debugger;

  for (const ch of guestsInput) { // 'str24 trg 5s'
    if ('0123456789'.includes(ch)) { // 
      digits += ch; // 24
      continue;
    }

    if (digits.length > 0) {
      // we already have a number we need
      break;
    }
  }

  console.log(+digits || 'not a number');
}

calculateGuests('str24 trg 5s')


function getName(count) {
  switch (true) {
    case count < 2:
      return 'One';
    
    case count <= 4:
      return 'A few';

    default:
      return 'Many';
  }
}


function getLeaders(numbers) {
  const result = [];
  let sum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    const n = numbers[i];

    if (n > sum) {
      result.push(n);
    }

    sum += n;
  }

  // numbers should go in the original order
  return result.reverse();
}

console.log(getLeaders([15, 35 , 12, 4, 2, 5, 0]))

function getKiller(suspects, dead) {
  debugger;

  for (let suspect of Object.values(suspects)) { //['Jacob', 'Bill', 'Lucas']

    for (let person of suspect) {

      let count = 0;
      
      for (let victim of dead) {
        if (person === victim) {
          count++;
        }
      }

      if (count > 2) {
        return suspects[suspect];
      }
    }
  }
}



console.log(getKiller({
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill']))


function getUserInfo() {
  console.log(`Hi ${this.username}, happy ${this.age}`);
}

const user1 = {
  userName: 'Alex',
  age: 32,
  partner: false,
  userGet: getUserInfo,
}

user1.userGet();

const user2 = {
  userName: 'Alex',
  lastName: 'Turner',
  partner: false,
  get fullName() {
    return `${this.userName} ${this.lastName}`
  },
}


console.log(user2.fullName);

const user3 = {
  firstName: 'John',
  lastName: 'Smith',
  
  set fullName(value) {
    const trim = value.trim();
    const arr = trim.split(' '); // знаходимо перший пробіл

    if (arr.length < 2) {
      this.firstName = 'za',
      this.lastName = 'loopa';
    } else {
    this.firstName = arr[0]; // Ім'я має бути першим
    this.lastName = arr[1]; // Прізвище - другим
    }
  },
};

console.log(user3.firstName, user3.lastName);

user3.fullName = 'Demian ';

console.log(user3.firstName, user3.lastName); */


// const user6 = {
//   firstName: 'Anton',
//   lastName: 'Griban',
//   age: 27,

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     if (typeof value !== 'string') {
//       return;
//     }

//     if (!value.includes(' ')) {
//       return;
//     }

//     let split = value.split(' ');

//     if (split.length === 2) {
//       this.firstName = split[0];
//       this.lastName = split[1];
//     }
//   }
// };

// console.log(user6.fullName);

// user6.fullName = 'Dana White';

// console.log(user6.fullName);


// const username = 'Danila';

// console.log(
//   username.split(''),
//   [...username],
//   Array.from(username),
// )

// const n = [2, 4, 4, 5, 2, 6, 8];
// let a = ['x', 'y', 32, [4, 5]]
// let [...numbers] = a[a.length -1] 
// result4 = n.concat(54, a, 56)
// console.log(result4);


'use strict';

const numbers = [3, 1, 12, 5, 2, 3, 4];
let result;

console.log(numbers);

/*  Mutating methods */
result = numbers.push(100, 200, 300);
result = numbers.unshift(100, 200, 300);
// result = numbers.pop();
// result = numbers.shift();
// result = numbers.splice(2, 3, 100, 200, 300, 400);
// result = numbers.fill('a', 2, 5);
// result = numbers.reverse();
// result = numbers.sort();

/* Non mutating methods */
// result = numbers.includes(3);
// result = numbers.indexOf(3);
// result = numbers.lastIndexOf(3);
// result = numbers.join('-');
// result = numbers.slice(2, 5);
result = numbers.concat(100, ['x', 'y', 999], 200, 300);

console.log('---------');

console.log(numbers);
console.log(result);

const wordsArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

wordsArr.OnforEach = function (callback) {
  console.log(this);

  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

wordsArr.OnforEach((param) => console.log(`Hello people number ${param}`));

const wordsArr2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const word2 = wordsArr2.map((word, index) => {
  return { name: word, index };
}).filter(({ name, index }) => name.length > index)
  .find(({ name, index }) => name[index] === 'o')

console.log(word2);
let stringArr = 'abrakadabra'.split('').reduce((counter, char) => ({
  ...counter,
  [char]: (counter[char] || 0) + 1,
}), {});

console.log(stringArr);

const complexStylesString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`;

function revertCss(style) {
  if (style.length === 0) {
    return {};
  }

  // debugger;

  const getArrayFromString = style.trim().split(';');

  const formateString = getArrayFromString
    .filter((arrString) => arrString.trim().length > 0)
    .map(arrString => {
      const [key, value] = arrString.split(':').map(part => part.trim());
      return { [key]: value.split(', ').map(v => v.trim()).join(',') };
    })
  const outPutObj = { ...formateString };

  return outPutObj
  console.log(getArrayFromString)
  console.log(formateString)
}

console.log(revertCss(complexStylesString))


const people = [
  { name: 'Carolus Haverbeke', father: 'Carel Haverbeke', mother: 'Maria van Brussel' },
  { name: 'Emma de Milliano', father: 'Petrus de Milliano', mother: 'Sophia van Damme' },
  { name: 'Laurentia Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' },
  { name: 'Maria de Rycke', father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' },
  { name: 'Carel Haverbeke', father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' },
  { name: 'Elisabeth Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' },
];

function getPeopleWithChildren(people) {
  return people.map(person => {
    const children = people.filter(person2 => person.name === person2.father
      || person.name === person2.mother);

    return {
      ...person,
      children,
    };
  });
}

console.log(getPeopleWithChildren(people));

console.log(window.Array);


let a = 1;
let f;
let getB;

if (true) {
  let b = 2;

  if (true) {
    let c = 3;
    f = function () {
      console.log(c);
    }
  }

  getB = function () {
    console.log(b);
  }
}

console.log(a);
f()
getB()


let add;
let getSum;

if (true) {

  let sum = 0;

  add = function add(x) {
    sum += x;
    console.log(sum);
  }

  getSum = () => sum;
}

add(10);
add(10);
add(10);
add(10);
add(104364);
add(-104364);
console.log(getSum());

const team = [];

let firstFreeNum = 4;

while (firstFreeNum <= 387) {
  let current = firstFreeNum;

  const player = () => {
    console.log(current)
  };

  team.push(player);

  firstFreeNum++;
}

team[0]();
team[1]();
team[2]();
console.log(team);


function creatRecorder(name) {
  let words = [];

  const recorder = (...args) => {
    if (args.length === 0) {
      console.log(name, words.join(' '));
    } else {
      words.push(...args);
    }
  }

  recorder.clear = () => {
    words = [];
  }

  return recorder;
}

const yourRecorder = creatRecorder('Friend');
const myRecorder = creatRecorder('Demian');

myRecorder('word', 'sosabma', 'window');
yourRecorder('salut');
yourRecorder('hohol');

yourRecorder.clear();

yourRecorder('ebany');
myRecorder('of the world');

yourRecorder();
myRecorder();

function makePackage(connectionsLimit) { // 4
  let remainingConnections = connectionsLimit;

  return () => {
    if (remainingConnections > 0) {
      remainingConnections--;

      return (`${remainingConnections} connections left`);
    } else {
      return 'You reached the connections limit!';
    }
  };
}


const connection = makePackage(4);

console.log(connection())
console.log(connection())
console.log(connection())
console.log(connection())
console.log(connection())
connection()


let addX;
let clearSum;

if (true) {
  let sum = 0;

  function toAdd(x) {
    sum += x;
    console.log(sum);
  }

  addX = toAdd;

  function clear() {
    return sum = 0;
  }

  clearSum = clear;

}

addX(105);
clearSum();

addX(20);
addX(20);
addX(20);

clearSum();

addX(20);
addX(20);

function recorder(name) {
  let words = [];

  const recorder = (word) => words.push(word);

  recorder.play = () => {
    console.log(`${name}: ${words.join(' ') || 'enter valid'}`)
  };

  recorder.clear = () => {
    words = [];
  };

  return recorder;
}

let captain = recorder('Andrei');

captain('donets');
captain('nash');
captain.play();
captain.clear();
captain.play();
captain('nash');
captain('nash');
captain('nash');
captain.play();
captain.clear();
captain.play();


function makeWarehouse(goods = []) {
  let weight = 0;
  let sumOfAllProducts = goods.length;

  if (goods.length > 0) {
    for (const num of goods) {
      weight += num;
    }
  }

  const warehouse = (...args) => {
    for (const num of args) {
      weight += num;
      sumOfAllProducts++;
    }

    const totalWeight = Math.round(weight);
    const averageWeight = Math.round(weight / sumOfAllProducts) || 0;

    return {
      totalWeight,
      averageWeight,
    };
  };

  warehouse.clear = () => {
    weight = 0;
    sumOfAllProducts = 0;
  };

  warehouse.displayWeight = () => {
    console.log(warehouse());
  };

  return warehouse;
}


const warehouse = makeWarehouse([23]);

console.log(warehouse(24));
console.log(warehouse(246));
warehouse.clear();
console.log(warehouse(23));
console.log(warehouse(23));
warehouse.clear();
warehouse.displayWeight();
console.log(warehouse(257473));
console.log(warehouse(3));
warehouse.displayWeight();


function makeSecret(secret, password) {
  let count = 0;

  let newSecret = secret;
  let newPassword = password;

  const storage = () => 'Absolutely not a secret thing';

  storage.setSecret = (newSec, newPass) => {
    newSecret = newSec;
    newPassword = newPass;
    count = 0;
  };

  storage.getConsoleLog = () => {
    console.log(newSecret, newPassword);
  }

  storage.getCount = () => {
    console.log(count);
  }

  storage.getSecret = (userInputPassword) => {
    if (userInputPassword === newPassword) {
      if (count < 3) {
        count = 0;
        console.log(count);

        return newSecret;

      } else {
        return null;
      }
    }

    if (userInputPassword !== newPassword) {
      if (count >= 3) {
        return null;
      }

      count++;
      console.log(count);

      return 'Wrong password!';
    }
  };

  return storage;
}

const newStorage = makeSecret();


newStorage.getConsoleLog();
newStorage.setSecret('SEC', 'PAS');
newStorage.getConsoleLog();
newStorage.getSecret('os')

console.log(newStorage.getSecret('PAS'));
newStorage.getConsoleLog();
newStorage.getCount();

newStorage.setSecret('power', 'pab');
newStorage.getConsoleLog();
newStorage.getSecret('d');
newStorage.getSecret('d');
newStorage.getSecret('d');
newStorage.getSecret('d');
console.log(newStorage.getSecret('d'));
console.log(newStorage.getSecret('pab'));


function makeInfinityAdder() {
  let sumOfAllNumbers = 0;
  let copyOfSum;

  const adder = (number = null) => {
    sumOfAllNumbers += number;

    if (number === null) {
      copyOfSum = sumOfAllNumbers;
      sumOfAllNumbers = 0;

      return copyOfSum;
    }

    return adder;
  };

  return adder;
}

const newChainAdder = makeInfinityAdder();

newChainAdder(53)(423)(2)
console.log(newChainAdder())
console.log(newChainAdder())
console.log(newChainAdder(456)(32)(-5435))
console.log(newChainAdder())
console.log(newChainAdder())


function toArrayOfDigits(ne) {
  const newArr = [];
  const nNew = ne + '';

  for (let i = 0; i < nNew.length; i++) {
    newArr.push(+nNew[i]);
  }

  return newArr.reverse();
}


console.log(toArrayOfDigits(145727));
// const digitsArray = Array.from(n.toString()).map(Number);



function countOccurrences(phrase, part) {
  let count = 0;

  // debugger;

  let index = phrase.indexOf(part);

  while (index !== -1) {
    count++;
    index = phrase.indexOf(part, index + 1);
    console.log(count);
  }

  console.log(count)
  return count;
}

countOccurrences('azyxxzyzy', 'zy');


function isArrayPretty(numbers) {
  let count = 0;

  // debugger;

  for (let i = 0; i <= numbers.length; i++) {
    for (let j = numbers.length - 1; j <= 0; j--) {
      if (numbers[i] + 1 === numbers[j] || numbers[i] - 1 === numbers[j]) {
        count++; // 1 1
      }
    }
  }

  if (count % 2 === 0) {
    return true;
  }

  return false;
}

console.log(isArrayPretty([3, 2, 10]));


function makeStorage() {
  const obj = {};

  const storage = () => {
    return obj;
  };

  storage.setValue = (key, value) => {
    obj[key] = value;
  };

  storage.getValue = (key) => {
    return obj[key];
  };

  storage.getObjectInfo = () => {
    console.log(obj);
  }

  return storage;
}


const newBag = makeStorage();

newBag.setValue('RAM', '32GB');
newBag.setValue('CPU', 'i5 4770');
newBag.setValue('CPU FAN', 'DeepCool');
newBag.setValue('Mouse', 'Logitech g102');
newBag.setValue('Laptop', 'Dell latitude 5420');
console.log(newBag.getValue('RAM'));
console.log(newBag)
newBag.getObjectInfo();


const mainCore = {
  getMainInfo() {
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },

  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },

  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;

    return `${this.name} updated to ${this.softwareVersion}`;
  },
};

const navigationCore = {
  getCoords() {
    const { x, y } = this.coords;

    return `x=${x} y=${y}`;
  },

  setTargetCoords(x = 0, y = 0) {
    this.target.coords.x = x;
    this.target.coords.y = y;
  },
};

const movementCore = {
  moveForward(step = 1) {
    this.coords.y += step;
  },

  moveBack(step = 1) {
    this.coords.y -= step;
  },

  moveLeft(step = 1) {
    this.coords.x -= step;
  },

  moveRight(step = 1) {
    this.coords.x += step;
  },
};

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
};

Object.setPrototypeOf(kerbin, movementCore);
Object.setPrototypeOf(movementCore, navigationCore);
Object.setPrototypeOf(navigationCore, mainCore);


function createUser(name, role = 'User') {
  const user = {};

  user.name = name;
  user.role = role;
  user.friend = [];

  user.getInfo = function () {
    return `${this.role} ${this.name} has ${this.friend.length} friends`
  };

  user.friendAdd = function (userName) {
    if (!this.friend.includes(userName))
      this.friend.push(userName)
    userName.friend.push(this);
  }

  return user;
}

const user1 = createUser('Demian', 'QC');
console.log(user1.getInfo());


const user2 = createUser('Andrei', 'DevOps');
console.log(user2.getInfo());

console.log(user1.friendAdd(user2));

console.log(user1.friend);
console.log(user2.friend);
console.log(user2.getInfo());


class BankAccount {
  /**
   * @param {string} name
   * @param {number} money
   */
  constructor(name, money) {
    this.transactionHistory = [`Initial: ${this.amountTotal}`];
    this.amountTotal = money;
    this.name = name;
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.amountTotal}`;
  }

  addMoney(amount, info) {
    this.amountTotal += amount
    this.transactionHistory.push(`${info}: ${amount}`);
  }

  withdrawMoney(amount, info) {
    if (amount <= this.amountTotal) {
      this.amountTotal -= amount;
      this.transactionHistory.push(`${info}: -${amount}`);
    } else {
      return 'Not Valid balance';
    }
  }

  getAccountHistory() {
    return this.transactionHistory;
  }
}

const bob = new BankAccount('bob broke', 400);

console.log(bob);
bob.addMoney(596439, 'ип пополнение от госдепа')
console.log(bob.withdrawMoney(596839, 'омон залетел'))


console.log(bob);




class User {
  static ROLE_USER = 'user';
  static ROLE_ADMIN = 'admin';

  static users = [];

  static getAvgAge(users) {
    let sum = 0;

    if (Array.isArray(users)) {
      sum = users.reduce((total, user) => total + user.age,
        0)

      return users.length ? sum / users.length : 0;
    } else {
      return 'Not an Array!'
    }
  }


  constructor(name, age, role) {
    this.name = name;
    this.role = role;
    this.age = age;
    this.friends = [];
    User.users.push(this);
  }

  static getAllUsers() {
    return User.users;
  }

  getInfo() {
    return `${this.name} have ${this.role} role and ${this.friends.length} friend's and ${this.age} years old`;
  }

  celebBirthday() {
    this.age++

    return `Today I'am one year older, ${this.age}!`
  }
}

const alina = new User('Alina', 56, User.ROLE_USER);
const amila = new User('Amila', 6, User.ROLE_USER);
const camila = new User('Camila', 16, User.ROLE_USER);
const lana = new User('Lana', 57, User.ROLE_ADMIN);
const sergei = new User('Sergei', 26, User.ROLE_USER);
const ahmet = new User('Ahmet', 46, User.ROLE_USER);


console.log(User.getAllUsers())

console.log(User.getAvgAge(User.users))

console.log(amila.getInfo())
console.log(camila.getInfo())
console.log(camila.celebBirthday())
console.log(camila.getInfo())



class BaseRobot {
  constructor(name, weight, coords = { x: 0, y: 0 }, chipVersion) {
    this.name = name;
    this.weight = weight;
    this.coords = {
      x: coords.x || 0,
      y: coords.y || 0,
    };
    this.chipVersion = chipVersion;
  }

  goForward(step = 1) {
    this.coords.y += step;
  }

  goBack(step = 1) {
    this.coords.y -= step;
  }

  goRight(step = 1) {
    this.coords.x += step;
  }

  goLeft(step = 1) {
    this.coords.x -= step;
  }

  getInfo() {
    return `Robot: ${this.name}, Chip version: ${this.chipVersion}, Weight: ${this.weight}`;
  }
}

class FlyingRobot extends BaseRobot {
  constructor(name, weight, coords = { x: 0, y: 0, z: 0 }, chipVersion) {
    super(name, weight, coords, chipVersion);
    this.coords.z = coords.z || 0;
  }

  goUp(step = 1) {
    this.coords.z += step;
  }

  goDown(step = 1) {
    this.coords.z -= step;
  }
}

class DeliveryDrone extends FlyingRobot {
  constructor(name, weight, coords, chipVersion, maxLoadWeight, currentLoad = null) {
    super(name, weight, coords, chipVersion);
    this.currentLoad = currentLoad;
    this.maxLoadWeight = maxLoadWeight;
  }

  hookLoad(cargo) {
    if (this.currentLoad === null && cargo.weight <= this.maxLoadWeight) {
      this.currentLoad = cargo;
    }
  };

  unhookLoad() {
    this.currentLoad = null;
  }
}

import { Animal } from './Animal.js'
import { Carnivore } from './Carnivore.js'
import { Herbivore } from './Herbivore.js'

const an1 = new Carnivore('Tiger');
console.log(an1);

const an2 = new Herbivore('Bembi');
console.log(an2);

an2.hide()
console.log(an2);

console.log(Animal.alive)
console.log(an1.bite(an2));
console.log(an1);
console.log(an2);

const an3 = new Herbivore('Dino');
console.log(an3);
console.log(Animal.alive)
console.log(an1.bite(an3));
console.log(an1.bite(an3));
console.log(an3);
console.log(Animal.alive)


const today = new Date();

console.log(today);
console.log(today.getFullYear());
today.setFullYear(2027)
console.log(today.getFullYear());

// today.setDate(today.getDate() + 40);
console.log(today.getMonth())

console.log(
  Date.now(),
  Date.parse('2023-09-23'),
  new Date('2023-09-23'),
);

function getPlan() {
  const arrayOfStrings = [];

  const arr = (string) => {
      const stringLenght = string.length;
      arrayOfStrings.push({
          [string]: stringLenght
      });
  }

  arr.getStrings = () => arrayOfStrings;

  return arr;
}

const lengthOfFour = getPlan();

console.log(lengthOfFour('Gbbr'))
console.log(lengthOfFour.getStrings())


console.log(lengthOfFour('Gbtr'))
console.log(lengthOfFour('Gbhr'))
console.log(lengthOfFour('Gmbr'))
console.log(lengthOfFour('Gbsr'))
console.log(lengthOfFour('Gebr'))
console.log(lengthOfFour('Ghbr'))
console.log(lengthOfFour.getStrings())


