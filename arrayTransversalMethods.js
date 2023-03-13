// Array traversal methods

// metodo que nos ayuda a recorrer el contenido del array
// trabajaremos con un array que tiene objetos como elementos
var articles = [
    {name: "Book", costo: 40},
    {name: "Laptop", costo: 4000},
    {name: "Dress", costo: 180},
    {name: "Shoes", costo: 280},
    {name: "Table", costo: 480},
    {name: "Door", costo: 300},
    {name: "Shirt", costo: 50},
    {name: "Pen", costo: 2.5},
    {name: "Smathphone", costo: 900},
]
// a mas articulos, el filtro es mas valioso


// METODOS (5)

// 1. filter: ayuda a filtrar cosas, valida si es verdadero o falso
// no modifica el primer array
//agrega los articulos a un nuevo array definido de la siguiente manera
var articlesFilter = articles.filter(function(article){
    return article.costo >= 450
});
articlesFilter  //(3) [{…}, {…}, {…}]
// 0: {name: 'Laptop', costo: 4000}
// 1: {name: 'Table', costo: 480}
// 2: {name: 'Smathphone', costo: 900}
// length: 3
// [[Prototype]]: Array(0)


// 2. map: mapea ciertos articulos
// no modifica el array principal
// generamos un nuevo array que involucre al array principal
var nameArticles = articles.map(function(article){
    return article.name
});
nameArticles // (9) ['Book', 'Laptop', 'Dress', 'Shoes', 'Table', 'Door', 'Shirt', 'Pen', 'Smathphone']
// 0: "Book"
// 1: "Laptop"
// 2: "Dress"
// 3: "Shoes"
// 4: "Table"
// 5: "Door"
// 6: "Shirt"
// 7: "Pen"
// 8: "Smathphone"
// length: 9


// 3. find: Ayuda a encontrar algo
// no modifica el array principal
// genera un nuevo array con el valor que se le otorga
var encuentraArticle = articles.find(function(article){
    return article.name === "Table"
});
encuentraArticle //{name: 'Table', costo: 480} 


// 4. forEach: hace el filtrado sobre el array principal
//hace el filtrado y regresa cosas
articles.forEach(function(article){
    console.log(article.name);
});
// Book
// Laptop
// Dress
// Shoes
// Table
// Door
// Shirt
// Pen
// Smathphone

// lee los articulos e imprime el nombre de cada articulo en el array


// 5. some: regresa una validacion de trur and false para articulos que tengan esa validacion
var articlesBaratos = articles.some(function(article){
    return article.costo <=290;
});
articlesBaratos //true