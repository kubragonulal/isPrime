function arkadasSayilar(sayi1, sayi2) {
    let toplam1 = 0;
    let toplam2 = 0;
  
    for (let i = 1; i < sayi1; i++) {
      if (sayi1 % i === 0) {
        toplam1 += i;
      }
    }
  
    for (let i = 1; i < sayi2; i++) {
      if (sayi2 % i === 0) {
        toplam2 += i;
      }
    }
  
    if (sayi1 === toplam2 && sayi2 === toplam1) {
      console.log("Dost sayılardır")
    } else {
      console.log("Dost sayı değiller")
    }
  }
  
  console.log(arkadasSayilar(220, 284));
  console.log(arkadasSayilar(1184, 1210)); 
  console.log(arkadasSayilar(220, 221)); 
  