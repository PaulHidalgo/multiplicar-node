//requires

//const fs = require('express'); -->otro tipo de require
//const fs = require('./fs'); -->archivos que estan en algun lado de nuestro proyecto

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('============================='.green);
    console.log(`=========Tabla del ${base} ========`.green);
    console.log('============================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i*base}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}