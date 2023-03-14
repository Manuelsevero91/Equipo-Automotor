import Equipo from "./Equipo";

class SuperEquipo{

agregar_equipo(equipo: Equipo, array: Equipo[]){
    if(array.push(equipo)){
        console.log('Se agrego equipo ',  ' al listado', array);
    } else{
        console.log('El equipo',  ' No se pudo agregar');
        
    }

}

leer_equipo(){
    const fs = require ('fs')

    const datos = fs.readFileSync('./equipos.json', "utf8");
    const equipo = JSON.parse(datos)

   console.log(equipo);

}

eliminar_equipo(id: string, array: Equipo []){
    let equipoEncontrado = array.findIndex(equipo => id == id);
    if(equipoEncontrado >= 0){  
        array.splice(equipoEncontrado, 1)
        console.log('Equipo borrado', id);
        console.log(array);
        return array;
    } else {

     console.log('Equipo ', id, 'no se borro');
    }
}
// editar_equipo(id: string, array: Equipo[], dato: string){
//     let editar_equipo = this.agregar_equipo(id, array)
// if(equipoEditar_equipo){
//     id = dato;
//     console.log(' El id del equipo se edito, ahora su id es ', dato);
// }
// else {
//     console.log('El id del equipo no se actualizo');
    
// }
    
// }

}
export default SuperEquipo