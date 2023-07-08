const texto = 'Hola, Mundo!';
const resultado = obtenerFrecuencialetra(texto);
console.log(resultado);

function obtenerFrecuencialetra(){
    
    let caracteres = [];
    let letra = {};

    for(let i = 0; i < texto.length; i++){
        caracteres.push(texto.charAt(i));
    }

    caracteres.map(element => {
        if(letra[element]) letra[element] += 1;
        else letra[element] = 1;
    });

    return letra; 

}