//Function to  find fibonacci sequence of a number
var fibonacci_sequence = function (number){
  if (number===0) {
    return [0];
  }else if(number===1){
      return [0, 1];
  }else {
    var sequence = fibonacci_sequence(number - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
};
 console.log(fibonacci_sequence(20));
 


