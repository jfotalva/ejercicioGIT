console.log("** Punto 1 ***");

var numero1 = 5;
var numero2 = 8;

if (numero2 > numero1) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 < 0 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}

if (++numero1 <= numero2) {
  console.log(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}
// *****************************************************************************************************
console.log("** Punto 2 ***");

let factorial = 10;
let variable = 1;

for (let i = 1; i <= factorial; i++) {
  variable *= i;
}
console.log("El factorial de " + factorial + " es: " + variable);
// *****************************************************************************************************
console.log("** Punto 3 ***");

function par(_numero) {
  let mensaje;
  if (_numero % 2 == 0) {
    mensaje = " Es par";
  } else {
    mensaje = " No es par";
  }
  return mensaje;
}
let n = 37;
console.log(n + par(n));
// *****************************************************************************************************
console.log("** Punto 4 ***");
function palindromo(cadena) {
  const newCadena = cadena.replace(/[\W_]/g, "").toLowerCase();
  const LimpiarCadena = newCadena.split("").reverse().join("");
  return newCadena === LimpiarCadena ? "Es palindromo" : "No es palindromo";
}
console.log(palindromo("la ruta nos aporto otro paso natural"));
// *****************************************************************************************************
console.log("** Punto 5 ***");

class Persona {
  nombre;
  edad;
  constructor(_nombre, _edad) {
    this.nombre = _nombre;
    this.edad = _edad;
  }

  obtDetalles() {
    console.log(this.nombre);
    console.log(this.edad);
  }
}

const obj = new Persona("Pepito", 35);
obj.obtDetalles();

class Estudiante extends Persona {
  calificacion;
  constructor(nombre, edad) {
    super(nombre, edad);
  }
}

class Profesor extends Persona {
  asignatura;
  nivel;
  constructor(nombre, edad, _asignatura = "JS", _basico = "básico") {
    super(nombre, edad);
    this.asignatura = _asignatura;
    this.nivel = _basico;
  }

  obtDetalles() {
    console.log(this.asignatura);
    console.log(this.nivel);
    console.log(this.nombre);
    console.log(this.edad);
  }
}
const obj1 = new Profesor("Juanito", 48);
obj1.obtDetalles();

class Grupo {
  profesor = [];
  promedio = 0;
  estudiantes = [];

  constructor(_profesor, _estudiantes) {
    this.profesor = _profesor;
    this.estudiantes = _estudiantes;
  }

  obtDetalles() {
    console.log("Profesor :" + this.profesor);
    console.log("Estudiantes :" + this.estudiantes);
  }

  calificar() {
    for (let i = 0; i < this.estudiantes.length; i++) {
      this.estudiantes[i] = Math.random() * 10;
    }
    console.log(this.estudiantes);
  }

  obtPromedio() {
    let sum = 0;
    for (let i = 0; i < this.estudiantes.length; i++) {
      sum += this.estudiantes[i];
    }
    this.promedio = sum / this.estudiantes.length;
    console.log("Promedio: " + this.promedio);
  }
}

const obj2 = new Grupo(Array(1, 2, 3), Array("Ana", "Maria", "Jorge"));
obj2.calificar();
obj2.obtPromedio();
obj2.obtDetalles();

// *****************************************************************************************************
console.log("** --------------- ***");
