/*REQUIEREDS  JS*/
const fs = require('fs');
const colors = require('colors');


let listarTabla= async(base,limite=10) =>
{
	if(!Number(base))
	  throw (`El valor base ${base} no es un número`);
    if(!Number(limite))
	  throw (`El valor límite introducido ${limite} no es un número`);
	
	console.log('==================='.green);
	console.log(`= Tabla ${base}   =`.green);
	console.log('==================='.green);
	for(let i=0;i<limite;i++)
  {
	  console.log(`${base} * ${(i+1)}  = ${(i+1)*base}`);
	  
  }
	
}

let crearArchivo= async(base,limite = 10) =>
{
  let data='';
  if(!Number(base))
	  throw (`El valor base introducido ${base} no es un número`);
  if(!Number(limite))
	  throw (`El valor límite introducido ${limite} no es un número`);
  for(let i=0;i<limite;i++)
  {
	  console.log(`${base} * ${(i+1)}  = ${(i+1)*base}`);
	  data+=`${base} * ${(i+1)}  = ${(i+1)*base} \n \n`;
	  
	  
  }
  
  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  else 
	  return `tabla-${base}.txt`;
  });
	return `tabla-${base}.txt`;
	
}

module.exports={
	
	crearArchivo,
	listarTabla
}