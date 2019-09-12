/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(x, n) {
    let result = x;

<<<<<<< HEAD
if (n < 0){
    alert('Введите натуральное число!');
    n = prompt('Ведите n', '');
}

function pow(x, n){
    return x**n;
}

alert(pow(x, n));
=======
    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}
>>>>>>> 1188bd279be4643be093d826dcb5c5df6638a6b0

