'use strict'

    // №0005. Ko'paytma
    // X, Y ∈ Z;
    // X ≤ Y ;
    // X ∗ Y = Z
    // shartlarini qanoatlantiruvchi juftliklar sonini aniqlang!
    // Kiruvchi ma'lumotlar:
    // INPUT.TXT kirish faylida yagona butun son, soni kiritiladi.
    // Chiquvchi ma'lumotlar:
    // OUTPUT.TXT faylida yagona son, yuqoridagi shartlarni qanoatlantiruvchi juftliklar sonini chop eting, agar bunday juftliklar
    // cheksiz bo'lsa chiqaring.

    let Z = +prompt('Z ning qiymatini kiriting', '')
    let X, Y
    let a=0
    if(Z>=0){
        for(X=-Z; X<=Z; X++){
            for(Y=-Z; Y<=Z; Y++){
                if(X*Y===Z){
                    a=a+1
                    if(a>1000){
                        console.log(-1);
                    }
                }
            }
        }
    }else{
        Z=Z*-1
        for(X=-Z; X<=Z; X++){
            for(Y=-Z; Y<=Z; Y++){
                if(X*Y===Z){
                    a=a+1
                    if(a>1000){
                        console.log(-1);
                    }
                }
            }
        }
    }
    console.log(a)

    // function num(res){
    //     let j = 0;
    //     for(let i = 1;i<=res;i++){
    //     if(res % i ){
    //     j++
    //     }else{
    //     return -1;
    //     }
    //     return j;
    //     }
    //     }
    //     let z = -2
    //     console.log(num(z))
