'use strict'

// 6 masala

const date = +prompt('yilni kiriting','')

function short(){
    if(date%4 ===0){
        console.log(`12/09/${date}`)
        const textDate = document.querySelector('#demo')
        textDate.innerHTML = `<h1>12/09/${date}</h1>`
    }else{
        console.log(`13/09/${date}`) 
        const textDate = document.querySelector('#demo')
        textDate.innerHTML = `<h1>13/09/${date}</h1>`
    }
}

function year(date) {
   if(date%100===0){
    if(date%400===0){
        short()
    }
   }else{
    short()
   }
}



year(date)