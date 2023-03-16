
class Equipo{
      id: string
      descripcion: string
      fechaFabricacion: Date
      fechaInstalacion: Date
    

    constructor(id: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date){
       this.id = id;
       this.descripcion = descripcion;
       this.fechaFabricacion = fechaFabricacion;
       this.fechaInstalacion = fechaInstalacion;
       
    }
    
    agregar_equipo(equipo: Equipo, array: Equipo[]){
        if(array.push(equipo)){
            console.log('Se agrego equipo ',  ' al listado', array);
        } else{
            console.log('El equipo',  ' No se pudo agregar');
            
        }

    }

    leer_equipo(listado: Equipo[]){
        console.log('Equipos: ', listado); 
    }
    

    eliminar_equipo(id: string, array: Equipo []): any{
        let equipoEncontrado = array.findIndex(equipo => equipo.id == id);
        if(equipoEncontrado >= 0){  
            array.splice(equipoEncontrado, 1)
            console.log('Equipo borrado', id);
            // console.log(array);
            return array;
        } else {

         console.log('Equipo ', id, 'no se borro');
        }

    }

    editar_equipo(descripcion: string, array: Equipo[], dato: string){
        let equipoEditar = array.find(Equipo => Equipo.descripcion == descripcion)
    if(equipoEditar){
        console.log(' El equipo se edito','su nueva descipcion es',dato);
    }
    else {
        console.log('El equipo no se edito');
        
    }
        
    }

}
   
 export default Equipo

 