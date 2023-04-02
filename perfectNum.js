function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num && num !== 0;
  }
  
  function listPerfectNumbers(max) {
    let perfectNumbers = [];
    for (let i = 1; i <= max; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }
    return perfectNumbers;
  }
  
  console.log(listPerfectNumbers(1000));
  