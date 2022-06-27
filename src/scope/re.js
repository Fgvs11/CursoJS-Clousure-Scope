var firstName; //Undefined
firstName = 'Oscar'; 
console.log(firstName);

var lastName = 'David'; //Declarar y asignar
lastName = 'Ana';
console.log(lastName);

var secondName = 'Pedro'; // declarando y asignando
var secondName = 'Juan'; //redeclarando
console.log(secondName);

//let
let fruit = 'Apple'; //Declarar y asignar
fruit = 'Kiwi'; //Reasignar
console.log(fruit);

let fruit = 'Banana'; //No se puede Redeclarar
console.log(fruit);
//Const

const animal = 'dog';
console.log(animal);

animal = 'Cat'; //No se puede ni reasignar ni redeclarar
console.log(animal);

const vehicles = [];
vehicles[0] = 'yaris';
vehicles.push("Corolla");

vehicles.map(
    function(a){
        console.log(a);
    }
)


 