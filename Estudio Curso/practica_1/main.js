async function asynFunction(){
  console.log('mensaje 01');
  console.log('mensaje 02');
  let res = await call_me();
  console.log('respuesta' + res);
  console.log('mensaje 03');
  console.log('mensaje 04');

}


async function call_me(){

const time=3000;
//let mensaje='';

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
return await promesa;
}

asynFunction();



/* promesa.then((msn)=>{
  console.log('promesa cumplida, el mensaje es: ' + msn);
}).catch((err)=>{
  console.log('Se produjo un error' + err);
}).finally(()=>{
  console.log('Finally collback excecuted');
});
 */