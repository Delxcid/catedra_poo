          import * as readline from "readline";

           const rl = readline.createInterface({
     input: process.stdin,
  output: process.stdout
});

        const usuarios = [
                { usuario: "Neto", clave: "hetero", rol: 1 },
            { usuario: "Brissgay", clave: "gay123", rol: 2 },
            { usuario: "Randal", clave: "gay1234", rol: 3 }
];

rl.question("Usuario: ", (usuario: string) => {
             rl.question("Contraseña: ", (clave: string) => {

               const encontrado = usuarios.find(
             u => u.usuario === usuario && u.clave === clave
              );
 
    if (encontrado) {
      if (encontrado.rol === 1) {
        console.log("Login correcto - Rol: Admi");
                } else if (encontrado.rol === 2) {
        console.log("Login correcto - Rol: cliente");
               } else if (encontrado.rol === 3) {
        console.log("Login correcto - Rol: Invitado");
               }
             } else {
      console.log("Usuario o contraseña incorrectos");
         }

    rl.close();
  });
});