// Playground: Closure para Almacenar Datos de Mascotas

// guia
// En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.
// Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.
// Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

// Input:
// const myPetList = createPetList();
// myPetList("michi");
// myPetList("firulais");
// myPetList();

/*En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.
Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.
Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.
*/
// Input:
const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();


// Output:
["michi", "firulais"]

// codigo
export function createPetList() {
    // Tu código aquí 👈
    const petList = [];
  function myPetList(newPet) {
    if (Boolean(newPet) === true) {
      return petList.push(newPet);
    } else {
      return petList
    }
  }
  return myPetList;
  }
  