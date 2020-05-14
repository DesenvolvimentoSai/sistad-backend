//index.js
function dividePelaMetade(numero){
    if(numero % 2 !== 0)
        return Promise.reject(new Error("Não posso dividir um número ímpar!"));
    else
        return Promise.resolve(numero / 2);
}
 
function soAceitaPares(numero){
    const promise = new Promise( (resolve, reject) => { 
                        if (numero % 2 === 0) { 
                            const resultado = 'Viva, é par!';
                            resolve(resultado);
                        } 
                        else { 
                            reject(new Error("Você passou um número ímpar!"));
                        } 
                    });
    return promise;
}
 
const numero = 2;
soAceitaPares(numero)
    .then(result => dividePelaMetade(numero))
    .then(result2 => console.log("A metade de " + numero + " é " + result2))
    .catch(error => console.log("Promises rejected: " + error));
 
const numeros = [2,4,6,8,10];
const promises = [];
numeros.forEach(entry => promises.push(dividePelaMetade(entry)));
Promise.all(promises)
    .then(results => results.forEach(entry => console.log(entry)))
    .catch(error => console.log(error));
 
console.log("teste");