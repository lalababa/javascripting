//input a number according to the given
const args = process.argv;

//why slice 2?
let num = args.slice(2); 
//create integer according to the time
//use for loop

const diceRoller = function(num){

  for (let i = 0; i < num ; i++){
    //add one follow each other
    //math.random() creates a folating number from 0-1
    //math.floor() 向下取整
    //with +1, it is from 0-5 as math.random, after +1, becomes 1-6
    let generatedNumber = Math.floor(Math.random()*6)+1;
    console.log(generatedNumber);
  }
}

diceRoller(num);