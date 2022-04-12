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