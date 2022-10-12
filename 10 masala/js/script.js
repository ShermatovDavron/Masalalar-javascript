'use strict'

const arr = [1200,2000,3200],
      arrSum= arr.reduce((sum,current)=>sum+current, 0),
      N = 6000
 function shop (arrSum, N){
 if(N<=arrSum){
  console.log('yes');
 }else{
  console.log('No');
 }
 }

 shop(arr, N)