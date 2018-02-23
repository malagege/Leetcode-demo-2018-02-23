function calculate(s) {
  var str = s.replace(/ /g,'');
  var str_array = str.split('');

  var pointer = 0;
  var result = 0;
  var stack = [];
  var sign = 1;

  for (let index = 0; index < str_array.length; index++) {
    if ( str_array[index] === '+' ) {
      sign = 1;
    }else if ( str_array[index] === '-' ) {
      sign = -1;
    }else if ( str_array[index] === '(' ) {
      stack.push(result);
      result = 0;
    }else if (str_array[index] === ')') {
      result += stack.pop();
    }else{
      if(index == 0){
        result = parseInt(str_array[index]);
      }else{
        result += sign * parseInt(str_array[index]);
      }
      pointer = parseInt(str_array[index]);
    }
  } 

  return parseInt(result);
}

module.exports = calculate;
