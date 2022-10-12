'use strict'
const arrNumber = prompt("Berilgan sonlarni kiriting va ular orasida , belgisi bo'lsin", ""),
    arr = arrNumber.split(",")


for(let i=0; i<=arr.length; i++){
    for(let n=0; n<=arr.length; i++){
        if(arr[i]==arr[n]){
            arr.splice(i,1)
        }
    }
}

console.log(arr)