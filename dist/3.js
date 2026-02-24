"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const usuarioCorrecto = "Neto";
const claveCorrecta = "Adrianaaa";
const rol = 1;
rl.question("Usuario: ", (usuario) => {
    rl.question("Contraseña: ", (clave) => {
        if (usuario === usuarioCorrecto && clave === claveCorrecta) {
            if (rol === 1) {
                console.log("Login correcto - Rol: Admi");
            }
            else if (rol === 2) {
                console.log("Login correcto - Rol: esclavo ");
            }
            else if (rol === 3) {
                console.log("Login correcto - Rol: Invitado");
            }
        }
        else {
            console.log("Usuario o contraseña incorrectos");
        }
        rl.close();
    });
});
//# sourceMappingURL=3.js.map