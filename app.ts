import Equipo from "./Equipo";
import Kit_mangueras from "./Kit_mangueras";
import SuperEquipo from "./SuperEquipo";

let fechaFabricacion = new Date('2000,10,28');   
let fechaInstalacion = new Date('2001,10,28');

let leequipe = new Equipo('pepito', 'akndkcn', fechaFabricacion , fechaInstalacion);
const listado = [leequipe]

// enum RoscasMaterial{
//     sintetico = 'sintetico',
//     plastico = 'plastico',
//     laton = 'laton'
// }
// let mangueron = new Kit_mangueras(4546, 'jcdnj','kdkd', 2541, 2021, 32.5, RoscasMaterial.laton)

console.log(leequipe);
// console.log(mangueron);

// const myEquipo = new SuperEquipo;
// myEquipo.agregar_equipo(leequipe, listado)
// myEquipo.leer_equipo()
// myEquipo.eliminar_equipo('akndkcn', listado)

// console.log(fechaFabricacion);





