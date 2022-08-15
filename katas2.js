// comece a criar a sua função add na linha abaixo
    function add(n1,n2){
    return n1 + n2
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
    function multiply(n1,n2)
    {
        let valor = 0;
        for(let i = 1; i <= n1; i++)
        {
            valor = add(valor,n2)
        }
        return valor
    }
multiply(2,4)

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


//comece a criar a sua função power na linha abaixo
function power(n1,n2)
{
    let valor = n1
    for(let i = 1;i < n2;i++)
    {
        valor = multiply(valor,n1)

    }
    return valor
}
console.log(power(3,2))

// descomente a linha seguinte para testar sua função
console.assert(power(3,4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(n1)
{
    var valor = 1;
    for(let i = n1;i > 1;i--) {
      valor = multiply(valor,i);
    }
    return valor;
}
console.log(factorial(5))
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
