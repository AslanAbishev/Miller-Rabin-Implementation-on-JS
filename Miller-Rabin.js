const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function isPrime(n, k) {
    if (n <= 1 || n == 4) return false;
    if (n <= 3) return true;
  
    let d = n - 1;
    while (d % 2 == 0)
      d /= 2;
  
    for (let i = 0; i < k; i++) {
      if (!millerTest(d, n))
        return false;
    }
    return true;
  }
  
  function millerTest(d, n) {
    let a = 2 + Math.floor(Math.random() * (n - 4));
    let x = BigInt(a) ** BigInt(d) % BigInt(n);
  
    if (x == 1 || x == n - 1)
      return true;
  
    while (d != n - 1) {
      x = (x * x) % BigInt(n);
      d *= 2;
  
      if (x == 1)      return false;
      if (x == n - 1)    return true;
    }
  
    return false;
  }
  
  readline.question('Enter a number: ', number => {
    let accuracy = 4; 
    if (isPrime(Number(number), accuracy)) 
      console.log(number + " is probably prime");
    else
      console.log(number + " is composite");
  
    readline.close();
  });