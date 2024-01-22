
const inputCuotas = document.querySelector("#cuotas")
const inputMonto = document.querySelector("#monto")
const inputInteres = document.querySelector("#interes")
const botonCalcular = document.querySelector("#calcular")
const divResultado = document.querySelector("#resultado")
const botonCalcularMenorCuota = document.querySelector("#calcularMenorCuota")
const divJSONCuota = document.querySelector("#JSONCuota")

let cuotas = null
let monto = null
let interes = null
let cuota = null


inputCuotas.addEventListener("input", (event) =>{
    cuotas = event.target.value
    console.log(cuotas)
})

inputMonto.addEventListener("input", (event) =>{
    monto = event.target.value
    console.log(monto)
})

inputInteres.addEventListener("input", (event) =>{
    interes = event.target.value
    console.log(interes)
})

let id = 0

botonCalcular.addEventListener("click",()=>{
    cuota = monto * (1 + interes/100) / cuotas
    console.log(cuota)
    divResultado.innerHTML = `<h2> 
    Son ${cuotas} cuotas de ${cuota} pesos
    
    </h2>`
    id = id + 1
    let jsonCuota = {"monto": monto, 
                    "cuotas": cuotas, 
                    "interes": interes,
                    "cuota": cuota}

    let jsonString = JSON.stringify(jsonCuota)                
    localStorage.setItem(id,jsonString)
    let parse = JSON.parse(localStorage.getItem(id))
    console.log(parse)
    console.log(id)

})

// for con id como contador, menor cuota


botonCalcularMenorCuota.addEventListener("click",()=>{
    
    
    let calcMinObjeto = JSON.parse(localStorage.getItem(id))
    let calcMin1 = calcMinObjeto.cuota
    console.log(calcMinObjeto)
    console.log(calcMin1)


    for (var i = 0; i < id; i++) {

        let calcMin2 = JSON.parse(localStorage.getItem(i+1))
        console.log(calcMin2)


        if(calcMin2.cuota < calcMin1){
        calcMin1 = calcMin2.cuota
        calcMinObjeto = JSON.parse(localStorage.getItem(i+1))}

    }



    divJSONCuota.innerHTML = `<h2>
    
    La menor cuota es 
    ${calcMinObjeto.cuota} pesos
    <br>
    Monto: ${calcMinObjeto.monto}
    <br>
    Cuotas: ${calcMinObjeto.cuotas}
    <br>
    Interes: ${calcMinObjeto.interes} 
 
    
    </h2>`
    

})





