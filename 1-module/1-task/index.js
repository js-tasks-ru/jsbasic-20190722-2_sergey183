/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
let x = prompt('Ведите x', '');
let n = prompt('Ведите n', '');

if (n < 0){
    alert('Введите натуральное число!');
    n = prompt('Ведите n', '');
}

function pow(x, n){
    return x**n;
}

alert(pow(x, n));

