const numero = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
const others = [1, 2];

const resultado = obtenerNumerosParesElevadosAlCuadradoMayoresQue10(numero);

console.log(resultado);


function obtenerNumerosParesElevadosAlCuadradoMayoresQue10(){
    return numerosFiltrados = numero.filter(x => x**2 > 10 && x%2 == 0).map(e => e**2);
}
