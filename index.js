function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

const toggleEl = document.getElementById('slider')

toggleEl.addEventListener('click', function(){
    document.body.classList.toggle("theme1")
})

const numberEl = document.querySelectorAll(".num-btn")
const operationEl = document.querySelectorAll(".operand")
const delEl = document.getElementById("del-btn")
const resetEl = document.getElementById("reset-btn")
const eqEl = document.getElementById("eq-btn")
const periodEl = document.getElementById("period")

const display2El = document.getElementById("display2")
const display1El = document.getElementById("display1")

let realTimeScreenValue = []
let value = 0
let isPeriod = false

resetEl.addEventListener("click", function(){
    document.body.classList.toggle("eqbutton")
    realTimeScreenValue = [""]
    display1El.textContent = ''
    display2El.textContent = 0
})

periodEl.addEventListener("click", function(){
    if(!isPeriod){
        realTimeScreenValue.push(periodEl.textContent)
        display1El.textContent = realTimeScreenValue.join("")
        value = eval(realTimeScreenValue.join(""))
        if(isFloat(value)){
            display2El.textContent = value.toFixed(2)
        }
        else{
            display2El.textContent = value
        }
        isPeriod = true
    }
    else{
        return
    }
})

numberEl.forEach(number => {
    number.addEventListener("click", function(){
        realTimeScreenValue.push(number.textContent)
        display1El.textContent = realTimeScreenValue.join("")
        value = eval(realTimeScreenValue.join(""))
        if(isFloat(value)){
            display2El.textContent = value.toFixed(2)
        }
        else{
            display2El.textContent = value
        }
    })
})

operationEl.forEach(operand => {
    operand.addEventListener("click", function(){
        realTimeScreenValue.push(operand.textContent)
        display1El.textContent = realTimeScreenValue.join("")
        isPeriod = false
    })
})

delEl.addEventListener("click", function(){
    let a = realTimeScreenValue.pop()
    display1El.textContent = realTimeScreenValue.join("")
    value = eval(realTimeScreenValue.join(""))
    if(isFloat(value)){
        display2El.textContent = value.toFixed(2)
    }
    else{
        display2El.textContent = value
    }
    if(a === '.'){
        isPeriod = false
    }
})

eqEl.addEventListener("click", function(){
    document.body.classList.toggle("eqbutton")
    isPeriod = false
})

if(typeof eval(realTimeScreenValue.join("")) == "undefined"){
    display2El.textContent = 0
}