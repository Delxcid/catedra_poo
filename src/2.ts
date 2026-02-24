  import * as readline from "readline";

       const rl = readline.createInterface({
          input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa la nota del estudiante: ", (respuesta: string) => {
     const nota = Number(respuesta);

              if (nota >= 9 && nota <= 10) {
       console.log("Excelente GG");
             } else if (nota >= 7 && nota < 9) {
    console.log("Bueno");
   } else if (nota >= 6 && nota < 7) {
    console.log("Regular bb");
  } else if (nota < 6) {
          console.log("Reprobado!!!");
              } else {
      console.log("Nota no permitida");
  }

    rl.close();
});