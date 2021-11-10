const time=5000;
let mensaje='';

const promesa =new Promise(function(resolve, reject){
  console.log('inicio la espera');
  const numero=Math.random()*20-10;
  setTimeout(() => {
    console.log('termino la espera');
    if (numero>=0) {
      resolve('El numero es ' + numero);
    }else{
      reject('el numero es menor que cero ' + numero);
    }
  }, time);
});

promesa.then((msn)=>{
  console.log('promesa cumplida, el mensaje es: ' + msn);
}).catch((err)=>{
  console.log('Se produjo un error' + err);
}).finally(()=>{
  console.log('Finally collback excecuted');
});
