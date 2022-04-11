const bill = document.querySelector("#bill__input")
const tip = document.querySelectorAll(".btn")
const people = document.querySelector("#noOfPeople__input")
const tipAmount = document.querySelector(".amount.money")
const totalAmount = document.querySelector(".totalamount.money")
const resetBtn = document.querySelector(".btn-reset")

// Functions
let tipPercentage = 0
const updateTip = (button) => {
    tip.forEach(e=>{
        e.classList.remove("selected")
    })
    button.target.classList.toggle("selected")
    tipPercentage = document.querySelector(".selected").getAttribute("value")
    tipPercentage = tipPercentage === null ? custom.value:tipPercentage
    updateAmount()
}
const updateAmount = () => {
    const billAmount = bill.value!==""?bill.value:0;
    const noOfPeople = people.value
    let amountTip = ((tipPercentage*billAmount/100)/noOfPeople).toFixed(2)
    amountTip = amountTip==="Infinity"?"0.00":amountTip==="NaN"?"0.00":amountTip
    tipAmount.innerHTML = "$"+amountTip
    let amountTotal = (parseFloat(billAmount)/noOfPeople+parseFloat(amountTip)).toFixed(2)
    amountTotal = amountTotal==="Infinity"?"0.00":amountTotal==="NaN"?"0.00":amountTotal
    totalAmount.innerHTML = "$" + amountTotal
}
// Event Listeners
bill.addEventListener("input",updateAmount)
tip.forEach(e=>{
    e.addEventListener("click",updateTip)
})
custom.addEventListener("change",updateTip)
people.addEventListener("input",updateAmount)
resetBtn.addEventListener("click",updateAmount)