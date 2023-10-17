function calcular() {
    const n1 = Number(document.querySelector('#n1').value)
    const n2 = Number(document.querySelector('#n2').value)
    const operador = document.querySelector('#operadores').value
    const resultado = document.querySelector('#resultado')
    switch(operador){
        case '+':
            resultado.innerHTML = `${n1} + ${n2} = ${n1 + n2}`
            break
        case '-':
            resultado.innerHTML = `${n1} - ${n2} = ${n1 - n2}`
        break
        case '*':
            resultado.innerHTML = `${n1} x ${n2} = ${n1 * n2}`
            break
        case '/':
            resultado.innerHTML = `${n1} / ${n2} = ${n1 / n2}`
            break
    }
}