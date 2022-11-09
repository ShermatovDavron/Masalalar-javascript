'use strict'
let arrNumber = +prompt("N va K ni qiymatini kiriting ular orasida ',' belgisi bolsin", ""),
    arr = arrNumber.split(",")
    N= arr[0]
    K= arr[1]

function virus(N, K){
    for(let i=0; i<N; i++){
        N = 1 + N*K
        return N
    }
    console.log(N)
    const element = document.createElement('div')
    element.innerHTML = `<h2>${arr[0]} kundan keyin ${N} ta odam virus bilan chalingan bo'ladi</h2>`
    element.append()
}
