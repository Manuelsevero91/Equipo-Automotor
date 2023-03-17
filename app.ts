import Bomba from "./Bomba";
import Equipo from "./Equipo";
import Kit_mangueras from "./Kit_mangueras"
import Motor from "./Motor";
import M_combustible from "./M_combustible";
import M_electrico from "./M_electrico";


let fechaFabricacion = new Date("2003-02-20");   
let fechaInstalacion = new Date(2001,10,28);

let elEquipo = new Equipo('H265', 'version8', fechaFabricacion, fechaInstalacion);
let elEquipo_1 = new Equipo('D345', 'version2', fechaFabricacion, fechaInstalacion);

const listado = [elEquipo]

let bombita = new Bomba(25, 'nsxj', 'pirulo', fechaFabricacion, fechaInstalacion, 652, 'motrola')
let bombita_1 = new Bomba(30, 'version5', 'pirulo', fechaFabricacion, fechaInstalacion, 542, 'motrola')
// const listado = [bombita]

//Agregar metodos a las instancias//** 
// bombita.eliminar_bomba('nsxj', listado)
// bombita.agregar_bomba(bombita_1, listado)

// enum RoscasMaterial{
//     sintetico = 'sintetico',
//     plastico = 'plastico',
//     laton = 'laton'
// }
// let mangueron = new Kit_mangueras(4546, 'jcdnj','kdkd', fechaInstalacion, fechaFabricacion, 32.5, RoscasMaterial.laton)

// console.log(elEquipo);
// console.log(mangueron);

// console.log(fechaFabricacion);
// console.log(bombita);
// enum Eficiencia{
//     H2 = 'H2',
//     J1 = 'J1',
//     K3 = 'K3'
//   }

// let queMotor = new Motor(56, Eficiencia.H2, 'goggle', 'mirate', 'hello', fechaFabricacion, fechaInstalacion)


elEquipo.eliminar_equipo('kndxk', listado)




