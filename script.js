function calcular() {
    let n1 = Number(document.querySelector("#n1").value)
    let n2 = Number(document.querySelector("#n2").value)
    let resultado = document.querySelector("#resultado")
    let operador = document.querySelector("#operadores").value
    switch(operador) {
        case '+':
            resultado.innerHTML = `${n1} + ${n2} = ${n1 + n2}`
            break
        case '-':
            resultado.innerHTML = `${n1} - ${n2} = ${n1 - n2}`
            break
        case 'x':
            resultado.innerHTML = `${n1} x ${n2} = ${n1 * n2}`
            break
        case '/':
            resultado.innerHTML = `${n1} / ${n2} = ${n1 / n2}`
    }
}