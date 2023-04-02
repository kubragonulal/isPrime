function isPrimeNumber(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function listPrimeNumbers(max) {
    let primeNumbers = [];
    for (let i = 2; i <= max; i++) {
      if (isPrimeNumber(i)) {
        primeNumbers.push(i);
      }
    }
    return primeNumbers;
  }
  
  console.log(listPrimeNumbers(1000));
  