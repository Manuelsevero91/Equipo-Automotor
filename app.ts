import Bomba from "./Bomba";
import Equipo from "./Equipo";
import Kit_mangueras from "./Kit_mangueras"
import RegistroEquipos from "./RegistroEquipos";


let fechaFabricacion = new Date(2000,10,28);   
let fechaInstalacion = new Date(2001,10,28);

let elEquipe = new Equipo('H265', 'version8', fechaFabricacion, fechaInstalacion);
let elEquipe_1 = new Equipo('D345', 'version2', fechaFabricacion, fechaInstalacion);

const listado = [elEquipe, elEquipe_1]

let bombita = new Bomba(25, 'nsxj', 'pirulo', fechaFabricacion, fechaInstalacion, 652, 'motrola')
// let bombita_1 = new Bomba(25, 'nsxj', 'pirulo', fechaFabricacion, fechaInstalacion, 652, 'motrola')
// const listado = [bombita, bombita_1]



// enum RoscasMaterial{
//     sintetico = 'sintetico',
//     plastico = 'plastico',
//     laton = 'laton'
// }
// let mangueron = new Kit_mangueras(4546, 'jcdnj','kdkd', 2541, 2021, 32.5, RoscasMaterial.laton)

// console.log(leequipe);
// console.log(mangueron);


// const myEquipo = new SuperEquipo;
// myEquipo.agregar_equipo(leequipe, listado)
// myEquipo.leer_equipo()
// myEquipo.eliminar_equipo('akndkcn', listado)

// console.log(fechaFabricacion);
// leequipe.agregar_equipo(leequipe, listado)
// console.log(bombita);

const gestoria = new RegistroEquipos();

gestoria.editar_equipo('version8', listado, 'rasputin')







