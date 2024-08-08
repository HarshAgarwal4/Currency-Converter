//to select initial cuurency all changes in from section
let fromselect = document.getElementById("from1")

const updateflag1 = async(flag) => {
    let img = document.getElementById("flag1")
    img.src = `https://flagsapi.com/${flag}/flat/64.png`
}
for(let code in countryList) {
    fromselect.insertAdjacentHTML("beforeend",`<option value = "${code}">${code}</option>`)
    
}

fromselect.addEventListener("change" , (evt) => {
    // console.log(fromselect.value);
    let k = fromselect.value
    console.log(typeof k);
    let j = k.slice(0,2)
    console.log(j);
    
    updateflag1(j)
})


//to select final cuurency all changes in to section

let toselect = document.getElementById("to1")

const updateflag2 = async(flag) => {
    let img = document.getElementById("flag2")
    img.src = `https://flagsapi.com/${flag}/flat/64.png`
}
for(let code in countryList) {
    toselect.insertAdjacentHTML("beforeend",`<option value = "${code}">${code}</option>`)
}


toselect.addEventListener("change" , (evt) => {
    let k = toselect.value
    console.log(typeof k);
    let j = k.slice(0,2)
    console.log(j);
    updateflag2(j)
})

//  to convert currency

let btn = document.getElementById("convert")
btn.addEventListener("click" , (evt) => {
    evt.preventDefault()
    let amount = document.getElementById("amount").value
    convert(amount , fromselect , toselect);
})

const convert = async(amount , fromselect , toselect) => {
    let response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromselect.value}&to=${toselect.value}`)
    let data = await response.json()
    console.log(data);
    console.log(data.rates);
    let result1 = data.rates
    let fresult1 = Object.values(result1)
    console.log(fresult1);
    
    document.getElementById("getamt").value = fresult1[0]
    let input = document.getElementById("amount")
    document.querySelector("#cheif").innerHTML = `${input.value} ${fromselect.value} = ${fresult1[0]} ${toselect.value}`
}