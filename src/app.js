 export const doubleAge = (daddysAge, sonAge) => {
  let dobleSonAge = sonAge * 2;

  if (daddysAge > dobleSonAge) {
    return daddysAge - dobleSonAge;
  } else if (daddysAge < dobleSonAge) {
    return dobleSonAge - daddysAge;
  } else {
    return 0;
  }
}


console.log(doubleAge(29, 0));