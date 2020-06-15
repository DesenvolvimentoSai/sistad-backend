    //multiplica 2 números
    function mult(x,y){ 
        return x * y;  
     }
     //Adiciona 2 números
     function add(x,y){  
        return x + y;
     }
     //Usa a função para computar os valores
     async function calcular(x, y, computar){ 
        return await computar(x,y);
     }
     let a = calcular(10, 5, add).then(v => v); //utiliza a função add como função de retorno
     console.log(a); // loga no console: 15
     let b = calcular(10, 5, mult); 
     console.log(b); // loga no console: 50