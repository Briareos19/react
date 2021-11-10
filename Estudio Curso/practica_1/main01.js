const time=5000;
let mensaje='';

console.log('mensaje 01');
console.log('mensaje 02');

setTimeout(() => {
    mensaje='Resultado';
}, time);

setTimeout(() => {
  console.log('mensaje: '+ mensaje);
}, time+1000);


console.log('mensaje: '+ mensaje);
console.log('mensaje 03');
console.log('mensaje 04');