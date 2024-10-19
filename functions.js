
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

    for (let i = 0; i < numOfMonth; i++) {
        total += (total * percent / 100)
        result.push(total)
    }

    return result;
  }


module.exports = { sum, subtract, fetchUser, getPlan }



