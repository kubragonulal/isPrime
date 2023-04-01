function asalMi() {
    let args = Array.from(arguments);
    for (let i = 0; i < args.length; i++) {
        let num = args[i];
        let isPrime = true;
        if(num <= 1){
            isPrime =false;
        } else{
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        console.log(num + (isPrime ? '  asal sayıdır.' : '  asal sayı değildir'));
}
}
asalMi(10, 3, 7);