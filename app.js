

//Reto 1------------------------------------------------------------------------------------------------

let array = [1,2,3,4,5]

let elimiarPorIndice = function( arreglo , indice){
    arreglo.splice(indice,1)
    console.log(arreglo)
}

elimiarPorIndice(array, 2)

console.log('------------------------------------------------------------------------------------------------')
//Reto 2------------------------------------------------------------------------------------------------

let array2 = [1,'hola','adios',4,100]

let busquedaArray = function(arreglo,valor){
    let existencia = array2.filter(function (item){
        return item === valor
    })
    if(existencia.length >= 1){
        console.log('se encontro el elemento ' + existencia + ' en el arreglo' )
    }else{
        console.log(`no se encontro el elemento: ${valor} `)
    }
}

busquedaArray(array2, 'hola')

console.log('------------------------------------------------------------------------------------------------')
//Reto 3------------------------------------------------------------------------------------------------

let infoLibros = [{
    titulo: 'El Quijote', 
    autor: 'Miguel C.'
},
{
    titulo: 'Señor de las moscas', 
    autor: 'William G.'
}]
 let busquedaObjeto = function (arreglo, dato){
    let titulos = []
    let autores = []
    arreglo.forEach(function(item){
        titulos.push(item.titulo)
        autores.push(item.autor)
    })
    let titulo = titulos.filter(function(item){
        return item === dato
    })
    let autor = autores.filter(function(item){
        return item === dato
    })
    if(titulo.join('') === dato || autor.join('') === dato){
        console.log('Se encontro el dato')
    }else {
        console.log('No se encontro el dato')
    }
 }
 busquedaObjeto(infoLibros,'Miguel C.')
 
