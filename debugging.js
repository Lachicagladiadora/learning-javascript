// debugging / ERROR
// Palabra reservada debugger

var a = "Hello global";
function hello() {
  let b = "Hello function";
  if(true) {
    let c = "Hello block";
    debugger; // <---- Palabra reservada para debbuging
  }
}
hello();

//Breakpoints ->  puntos donde la ejecución del programa se parará

//Closures en debugging -> Si el código tiene closures, aparecerán en el panel “Scope”.
