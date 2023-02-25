let  add = document.getElementById("add") 
add.addEventListener("click",()=>{
   var num1 = parseInt(document.getElementById("Num1").value) 
   var num2 = parseInt(document.getElementById("Num2").value) 
   var result = num1+num2
   console.log(result);

})
let btn1 = document.getElementById("btn1") 
btn1.addEventListener("click",()=>{
    let a = document.getElementById("value3").value
    let b = document.getElementById("value4").value 
    console.log(a-b);
})
let btn2 = document.getElementById("btn2") 
btn2.addEventListener("click",()=>{
    let a = document.getElementById("value5").value
    let b = document.getElementById("value6").value 
    console.log(a*b);
})
let btn3 = document.getElementById("btn3") 
btn3.addEventListener("click",()=>{
    let a = document.getElementById("value7").value
    let b = document.getElementById("value8").value 
    console.log(a/b);
})
