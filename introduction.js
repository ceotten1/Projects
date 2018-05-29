function fizzBuzz(start,end){
    for(var i = start; i <= end; i++){
      if(i % 15 === 0){
        console.log("FIZZBUZZ");
      }
      else if(i % 3 === 0){
        console.log("FIZZ");
      }
      else if(i% 5 === 0){
        console.log("BUZZ");
      }
      else{
        console.log(i);
      }
    }
  }
  fizzBuzz(10, 100);
  
  fizzBuzz(5, 1000);