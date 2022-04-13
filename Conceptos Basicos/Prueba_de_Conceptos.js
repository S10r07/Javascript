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

let a = 3;
let b = 17;
let c = 12;

a += 12;                        // a = a + 12;
b += 9;                         // b = 9 + b;
c += 7;                         // c = c + 7;

// CONVIERTE LAS ASIGNACIONES DE a, b, c PARA UTILIZAR EL OPERADOR -=

let a = 11;
let b = 9;
let c = 3;

a -= 6;                          // a = a - 6;
b -= 15;                         // b = b - 15;
c -= 1;                          // c = c - 1;

// CONVIERTE LAS ASIGNACIONES DE a, b, c PARA UTILIZAR EL OPERADOR *=

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;                           // a = a * 5;
b *= 3;                           // b = 3 * b;
c *= 10;                          // c = c * 10;

// CONVIERTE LAS ASIGNACIONES DE a, b, c PARA UTILIZAR EL OPERADOR /=

let a = 48;
let b = 108;
let c = 33;

a /= 12;                            // a = a / 12;
b /= 4;                             // b = b / 4;
c /= 11;                            // c = c / 11;