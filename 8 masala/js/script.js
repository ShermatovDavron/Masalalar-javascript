'use strict'
function Summ(a,b,c,d,g) {
    const S = a+b+c+d+g
    const A = Math.max(a,b,c,d,g),
            B = Math.min(a,b,c,d,g),
            minSumm = S-A,
          maxSumm =  S-B
          console.log(minSumm)
          console.log(maxSumm)

}

Summ(1,2,3,4,5)
Summ(11,22,33,44,55)