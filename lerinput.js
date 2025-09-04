// readline

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//readline.question("Qual a sua idade", mostarResultado(idade))

/*function mostarResultado(numero){
     numero = parseInt(numero)
     if(numero >= 18){
       console.log("Já pode se alistar e servir a patria");
       
     }
     else{
        console.log("vai estudar");
        
     }
   

}*/
readline.question("Qual a sua idade ", (idade) => {
  idade = parseInt(idade);
  if (idade >= 18) {
    console.log("Já pode se alistar e servir a patria");
  } else {
    console.log("vai estudar");
  }
  readline.question("Qual a sua cidade? ", (cidade) => {
  console.log("Sua cidade é ", cidade);
  
})
})




