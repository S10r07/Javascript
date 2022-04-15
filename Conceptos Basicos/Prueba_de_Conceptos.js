// UTILIZA LA PALABRA CLAVE "var" PARA CREAR UNA VARIABLE LLAMADA "myName".

var myName;

// INICIALIZA LAS 3 VARIABLES a, b, c CON 5, 10, "I am a" RESPECTIVAMENTE QUE NO SEAN UNDEFINED.

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// CREA 2 NUEVAS VARIABLES DE CADENA "myFirstName" Y "myLastName" Y ASIGNALE TU NOMBRE Y APELLIDO, RESPECTIVAMENTE.

var myFirstName = "Angel";
var myLastName = "Rios";
console.log(myFirstName, myLastName);

// ASIGNA EL VALOR 7 A LA VARIABLE A.

var a;
a = 7;
console.log(a);

// ASIGNA EL CONTENIDO DE A A LA VARIABLE B.

var a;
a = 7;
var b;
b = a;
console.log(b);

// DEFINE UNA VARIABLE a CON var E INICIALIZALA CON UN VALOR DE 9.

var a = 9;

// MODIFICA LAS DECLARACIONES Y ASIGNACIONES EXISTENTES PARA QUE SUS NOMBRES USEN CAMELSACE.
                    
var StUdLyCapVaR;                             var studlyCapVar;
var properCamelCase;                          var properCamelCase;
var TitleCaseOver;                            var titleCaseOver;

STUDLYCAPVAR = 10;                            studlyCapVar = 10;
PRoperCAmelCAse = "A String";                 properCamelCase = "A String";
tITLEcASEoVER = 9000;                         titleCaseOver = 9000;

// CAMBIA EL CODIO PARA QUE TODAS LAS VARIABLES SE DECLAREN CON let O const.
// USA let CUANDO QUIERAS QUE LA VARIABLE CAMBIE Y const CUANDO QUIERAS QUE 
// LA VARIABLE PERMANEZCA CONSTANTE

const FCC = "freeCodeCamp";                // var fCC = "freeCodeCamp";
let fact = "is cool!";                     // var fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);   

// OPERACIONES BASICAS

const sum = 10 + 10;
console.log(sum);

const difference = 10 - 10;
console.log(difference);

const mult = 10 * 10;
console.log(mult);

const div = 10 / 10;
console.log(div);

// CAMBIE EL CODIGO PARA USAR EL OPERADOR ++ en "myVar".

let myVar = 87;
myVar++;             // myVar = myVar + 1;
console.log(myVar);

// DECIMALES
// CAMBIA EL 0.0 PARA QUE EL PRODUCTO SEA IGUAL A 5.0.

const product = 2.5 * 2.0;      //const product = 2.0 * 0.0;

// CAMBIA EL 0.0 PARA QUE EL COCIENTE(quotient) sea igual a 2.2.

const quotient = 4.4 / 2.0;     // const quotient = 0.0 / 2.0;

// ESTABLECE "remainder" IGUAL AL RESTO 11 DIVIDIDO ENTRE 3 USANDO
// EL OPERADOR DE RESTO(%).

const remainder = 11 % 3;       // const remainder = 0;

// CONVIERTE LAS ASIGNACIONES DE a, b, c PARA QUE UTILICEN EL OPERADOR +=

let d = 3;
let e = 17;
let f = 12;

d += 12;                        // a = a + 12;
e += 9;                         // b = 9 + b;
f += 7;                         // c = c + 7;

// CONVIERTE LAS ASIGNACIONES DE a, b, c PARA UTILIZAR EL OPERADOR -=

let g = 11;
let h = 9;
let i = 3;

g -= 6;                          // a = a - 6;
h -= 15;                         // b = b - 15;
i -= 1;                          // c = c - 1;

// CONVIERTE LAS ASIGNACIONES DE a, b, c PARA UTILIZAR EL OPERADOR *=

let j = 5;
let k = 12;
let l = 4.6;

j *= 5;                           // a = a * 5;
k *= 3;                           // b = 3 * b;
l *= 10;                          // c = c * 10;

// CONVIERTE LAS ASIGNACIONES DE a, b, c PARA UTILIZAR EL OPERADOR /=

let m = 48;
let n = 108;
let o = 33;

m /= 12;                           // a = a / 12;
n /= 4;                            // b = b / 4;
o /= 11;                           // c = c / 11;

// USA LA PROPIEDAD ".length" PARA CONTAR EL NUMERO DE CARACTERES
// EN LA VARIABLE "lastName" Y ASIGNARLA A "lastNameLength".

// Configuración
let lastNameLength = 0;
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
lastNameLength = lastName.length   //lastNameLength = lastName;

// UTILIZA NOTACION DE CORCHETES PARA ENCONTRAR EL PRIMER CARACTER
// EN LA VARIABLE "lastName" Y ASIGNALO A "firstLetterOfLastName".

// Configuración
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

// Cambia solo el código debajo de esta línea
firstLetterOfLastName = lastName2[0]    // firstLetterOfLastName = lastName;

// CORRIGE LA ASIGNACION DE myStr PARA QUE CONTENGA EL VALOR DE 
// CADENA "Hello World" USANDO EL METODO MOSTRADO EN EL EJEMPLO ANTERIOR.

// Configuración
let myStr = "Jello World";
myStr = "Hello World";              // myStr[0] = "H";

// MODIFICA EL NUEVO ARREGLO myArray PARA QUE CONTENGA TANTO UNA CADENA
// COMO UN NUMERO(EN ESE ORDEN).

const myArray = ["Hola", 1];

// CREA UN ARREGLO ANIDADO LLAMADO myArray.

// Cambia solo el código debajo de esta línea
const myArray2 = [["Hola", 1], ["Adios", 2]];

// CREA UNA VARIABLE LLAMADA myData Y ESTABLECELA PARA QUE SEA IGUAL AL 
// PRIMER VALOR DE myArray USANDO NOTACION DE CORCHETES.

const myArray3 = [50, 60, 70];
const myData = myArray3[0];

// MODIFICA LOS DATOS ALMACENADOS EN EL INDICE 0 de myArray A UN VALOR DE 45.

// Configuración
const myArray4 = [18, 64, 99];

// Cambia solo el código debajo de esta línea
myArray4[0] = 45;