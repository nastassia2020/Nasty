/*do {
    var num1 = +prompt('введите число');
    var num2 = +prompt('введите число');
    var result = num1 + num2;
    alert ('результат: ' + result);
    var isProcess = confirm ('Продолжить');
} while (isProcess);*/

/*function getValues (){
    var result=[];
    var i=0;

    do{
        result[i++]= +prompt ('Введите число');
        var isProcess=confirm ('Продолжить');
    }while (isProcess);

    return result;
}*/

/*function calculator(){
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

/*var values = ['', ''];
var action = '';
var index = 0;
var inputEl = document.querySelector('.calculator-input');
var numberContainer = document.querySelector('.number');
var actionContainer = document.querySelector('.action');
var result;

function handleNumberClick(e) {
    var v = e.target.dataset.value;

    if (v && !action && v !== '=') {
        action = v;
        index = 1;
        inputEl.value = values[0] + '' + action + '' + values[1];
    } else if (values[0] && values [1]){
        switch (action) {
            case '+': {
                result = parseInt(values[0]) + parseInt(values[1]);
                break;
            }
            case '-':{
                result = parseInt(values[0]) - parseInt(values[1]);
                break;
            }
            case '*':{
                result = parseInt(values[0]) * parseInt(values[1]);
                break;
            }
            case '/':{
                result = parseInt(values[0]) / parseInt(values[1]);
                break;
            }
            default:{
                
            }
        }
        inputEl.value = result;
    }
}

function handleActionClick(e) {
    var v = e.target.dataset.value;

    if (v && !action && v !== "=") {
        action = v;
        index = 1;
        inputEl.value = values[0] + '' + action + '' + values[1];
    }
  
}

numberContainer.addEventListener('click', handleNumberClick);
actionContainer.addEventListener('click', handleActionClick);


function sort (arr) {
    for(var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var tmp;
            if(arr[i] < arr[j]) {
                tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr;
}

var arr = [1, 2, 3, 4, 5];

console.log(arr);

var sortedArr = sort(arr);

console.log(sortedArr);*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var i = 0;
    var result = [];
    
    for (var j = 0; j < birds.length; j++) {
      var isGoose = false;
      for (var k = 0; k < geese.length; k++) {
        if(geese[k] === birds[j]) {
          isGoose = true;
          break;
        }
      }
      if (!isGoose) {
        result.push(birds[j])
      }
    }
    return result;
    
    // return birds.filter(item => !geese.includes(item));
  }