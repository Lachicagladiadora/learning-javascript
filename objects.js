// OBJECTS
// JS -> paradigma de objetos
// como llevas un objeto fisico al paradigma de objetos: generamos una variable y agregamos sus propiedades

// definimos el objeto con nombr y listando sus propiedades
var pen = {
    marca: "stabilo",
    modelo: "sin borrador",
    annio: 2020
};
//como puedo listar una propiedad de varios objetos
pen.propiedad //descripcion de la propiedad

// cuando trabajamos las propiedades, una de estas puede una funcion
// propiedad con funcion = metodo
var pen = {
    marca: "stabilo",
    modelo: "sin borrador",
    annio: 2020,
    detalleDelLapiz: function (){
        console.log(`Lapiz ${this.modelo} ${this.annio}`); // this:variable que hace referencia al objeto (su padre)
    }
};
pen.detalleDelLapiz () //Lapiz sin borrador 2020 



// Objects: Función constructora
//como hacer objetos de forma automatica
//Funcion Constructora
function pen(marca, color, modelo, annio) { //funcion, nombre con sus variables(parametros, propiedades  datos)
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.annio = annio;
}
pen
// ƒ pen(marca, color, modelo, annio) {
//     this.marca = marca;
//     this.color = color;
//     this.modelo = modelo;
//     this.annio = annio;
// }
var newPen = new pen("artesco", "negro", "con borrador", 2020);
newPen // pen {marca: 'artesco', color: 'negro', modelo: 'con borrador', annio: 2020} 

var newPen2 = new pen("Faber Castell", "rojo", "sin borrador", 2019);
var newPen3 = new pen("Stabilo", "azul", "sin borrador", 2021);
var newPen4 = new pen("Standford", "negro", "con borrador", 2022);
new pen // pen {marca: undefined, color: undefined, modelo: undefined, annio: undefined}
newPen4 // pen {marca: 'Standford', color: 'negro', modelo: 'con borrador', annio: 2022}
newPen2 // pen {marca: 'Faber Castell', color: 'rojo', modelo: 'sin borrador', annio: 2019}
newPen // pen {marca: 'artesco', color: 'negro', modelo: 'con borrador', annio: 2020}
newPen3 // pen {marca: 'Stabilo', color: 'azul', modelo: 'sin borrador', annio: 2021}



