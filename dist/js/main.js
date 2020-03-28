/*do {
    var num1 = +prompt('введите число');
    var num2 = +prompt('введите число');
    var result = num1 + num2;
    alert ('результат: ' + result);
    var isProcess = confirm ('Продолжить');
} while (isProcess);*/

function getValues (){
    var result=[];
    var i=0;

    do{
        result[i++]= +prompt ('Введите число');
        var isProcess=confirm ('Продолжить');
    }while (isProcess);

    return result;
}

function calculator(){
do{
    var numbers = getValues();
    var res = numbers [0];

   for(var i = 1; i < numbers.length; i++){
       res = res + numbers [i];
   }

    alert('Итого' + res);

    var isProcess = confirm ('Продолжить');
} while (isProcess);
}

// calculator

function triangle(lines) {
    var line = '*';

    for(var i = 0; i < rows [0]; i++) {
        console.log(line);
        line += '*';
    }
}

//var rows = getValues();

//triangle(rows[5]); 

function triangleReverse(lines, sign){
    var strings = [];
    var line;

 for(var i = 0; i < lines; i++){
    line = '';
    for(var j = 0; j < lines - i; j++ ){
        line += sign;
    }
    strings[i] = line;
    console.log(strings[i]);
 }

    for ( var i = strings.length - 1; i >= 0; i--){
        console.log(strings[i]);
    }
}
/*triangleReverse(5, '*'); */

var value = ['', ''];
var action;
var index = 0;
var inputE1 = document.querySelector('calculator-input');
var numberContainer = document.querySelector('.number');

function handleNumberClick(e) {
    var v = e.target.dataset.value;

    if (v) {
        values[index] += v;
        inputE1.value = values[index];
    }
  
}

numberContainer.addEventListener('click', handleNumberClick);