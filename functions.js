
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
    let count = 0;

    const words = element.className.split(' ');
    for (let word of words) {
        if (word === classToAdd) {
            count++
        }
    }

    if (count === 0) {
      element.className += ' ' + classToAdd;
    }
  }

  const el = {
    className: 'joke new'
  };

  addCssClass(el, 'active')
  addCssClass(el, 'new')


module.exports = { sum, subtract, fetchUser, getPlan, addCssClass }



