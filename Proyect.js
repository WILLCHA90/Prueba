const { error } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let Acumulacion = 0;

const sumarNumero = () => {
  rl.question('Ingrese un nuevo número: ', (respuesta) => {
    const numero = parseFloat(respuesta);
    if (!isNaN(numero)) {
        Acumulacion = Acumulacion + numero;
        console.log(`Acumulacion actual: ${Acumulacion}`);
        sumarNumero();
    }
  });
};
const restarNumero = () => {
    rl.question('Ingrese un nuevo número: ', (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          Acumulacion = Acumulacion - numero;
          console.log(`Acumulacion actual: ${Acumulacion}`);
          restarNumero();
      }
    });
  };
  const MultiplicarNumero = () => {
    rl.question('Ingrese un nuevo número: ', (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          Acumulacion = Acumulacion * numero;
          console.log(`Acumulacion actual: ${Acumulacion}`);
          MultiplicarNumero();
      }
    });
  };
  const DividirNumero = () => {
    rl.question('Ingrese un nuevo número: ', (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          Acumulacion = Acumulacion / numero;
          console.log(`Acumulacion actual: ${Acumulacion}`);
          DividirNumero();
      }
    });
  };
const eleccionOperacion = (numero) => {
    rl.question('Ingrese operacion, suma (s o +), resta(r o -), division(d o /), multiplicacion(m o *) ', (respuesta) => {
        respuesta = respuesta.toLowerCase();
        if(respuesta === 's' || respuesta === 'suma'
        ||respuesta==='+'||respuesta==='sumar') {
            Acumulacion = Acumulacion + numero;
            console.log(`Acumulacion actual: ${Acumulacion}`);
            Arranque();
        }
        if(respuesta === 'r' || respuesta === 'resta'|| 
        respuesta ==='RESTA'|| respuesta ==='Resta'||
        respuesta ==='R'||respuesta ==='-'
        |respuesta==='restar'||respuesta==='Restar'
        ||respuesta==='RESTAR') {
            Acumulacion = Acumulacion - numero;
            console.log(`Acumulacion actual: ${Acumulacion}`);
            Arranque();
        }
        if(respuesta === 'm' || respuesta === 'multiplicacion'|| 
        respuesta ==='MULTIPLICACION'|| respuesta ==='Multiplicacion'
        ||respuesta === 'Multiplicación'||respuesta === 'M'
        ||respuesta === '*'||respuesta==='multiplicar'||respuesta==='Multiplicar'
        ||respuesta==='MULTIPLICAR') {
            Acumulacion = Acumulacion * numero;
            console.log(`Acumulacion actual: ${Acumulacion}`);
            Arranque();
        }
        if(respuesta === 'd' || respuesta === 'division'|| 
        respuesta ==='DIVISION'|| respuesta ==='Division'
        ||respuesta === 'D'||respuesta === '/'||respuesta==='dividir'||respuesta==='Dividir'
        ||respuesta==='DIVIDIR') {
        if(numero !==0){
            Acumulacion = Acumulacion / numero;
            console.log(`Acumulacion actual: ${Acumulacion}`)
            Arranque()
            }else{
              console.log('No se puede dividir por cero')
              Arranque();
            }
        }
    })
  }

const Arranque = () => {
    rl.question('Ingrese un nuevo número: ', (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          eleccionOperacion(numero);
      } else {
        console.log('Por favor, ingrese un número válido.');
        Arranque();
      }
    });
  };

console.log('Este programa suma, multipla, resta o divide infinitamente los números ingresados.');
Arranque();