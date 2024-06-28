const calculateSum = () => {
    let sum = 0;
    for(let i = 0 ; i < 10000000000 ; i++){
        sum += i;
    }
    alert(`sum is : ${sum}`)
}
console.log("Hello");   

let bgValue = "white";
const changeBG = () => {
   bgValue =  (bgValue === "green") ? "blue" : "green"; 
   document.body.style.backgroundColor = bgValue;
}

document.getElementById("sum").addEventListener("click" , ()=>{
    calculateSum();
})

document.getElementById("bg").addEventListener("click" , ()=>{
    changeBG();
})