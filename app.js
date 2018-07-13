const argv =require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo} =require('./multiplicar/multiplicar');
const {listarTabla} =require('./multiplicar/multiplicar');

let comando =argv._[0];
console.log('Base:',argv.base);
console.log('Limite:',argv.limite);
 switch (comando){
	 case 'listar':
		listarTabla(argv.base,argv.limite);
		break;
	 case 'crear':
		crearArchivo(argv.base,argv.limite)
			.then(archivo=>console.log(`El archivo ${archivo} ha sido creado!`))
			.catch(e=>console.log(e));
		break;
	 default:
		console.log('Comando no reconocido');
	 
 }


//console.log('limite',argv.limite);

