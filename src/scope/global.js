var a; //Declarando la variable
var a = 'aa'; //redeclaracion

var b = 'b'; //Asignacion
b = 'bb'; //Reasignacion

// Global Scope

var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; //Sino se declara correctamente automaticamente es global
    console.log(country);  
}

countries();

console.log(country);