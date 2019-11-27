/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
   
let x = +prompt('Введите x', '');
let n = +prompt('Введите n', '');

function pow(x, n){

let result = x**Math.round(n);

return result;
}

if (n <= 0){
    alert('Введите целое, натуральное число');
} else {
    alert(pow(x, n));
}
