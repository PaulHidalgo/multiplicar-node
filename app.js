const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//requires
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconociddo');
}

// console.log(process.argv)
// let argv2 = process.argv;
// let parameter=argv[2];
// let base=parameter.split('=')[1];

// console.log(argv.base);

// console.log(argv2);