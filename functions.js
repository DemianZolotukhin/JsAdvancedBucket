
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


module.exports = { sum, subtract, fetchUser, getPlan, addCssClass, removeCssClass }



