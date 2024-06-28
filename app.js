const doubleAge=(daddysAge, sonAge)=>{
    
  if (isNaN(daddysAge) && isNaN(sonAge)) {
    return 'Please, set numbers, no words!';
  } 

  let ageDifference= daddysAge- sonAge;

  if(daddysAge === sonAge * 2){
    return `${daddysAge} is the doble of the ${sonAge}!!!!`;
  }

  let yearsToDouble = 0;
  while (sonAge * 2 <= daddysAge) {
    sonAge++;
    yearsToDouble++;
  }

  return `The father will be double the age of the son in ${yearsToDouble} years.`;
}
  
//Have to write a function wich says when the daddys age was the same than his son;


console.log(doubleAge(23, 1));