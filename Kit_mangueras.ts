import Equipo from "./Equipo";

 enum RoscasMaterial {
    sintetico = 'sintetico',
    plastico = 'plastico',
    laton = 'laton'

}

class Kit_mangueras extends Equipo{
   elementos: number
   medidaPulgadas: number
   roscasMaterial: RoscasMaterial

    constructor(elementos: number, id: string,descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date, medidaPulgadas: number, roscasMaterial: RoscasMaterial ){
        super(id, descripcion, fechaFabricacion, fechaInstalacion)

        this.elementos = elementos;
        this.medidaPulgadas = medidaPulgadas;
        this.roscasMaterial = roscasMaterial;
    }
   

    agregar_kitM(kit : Kit_mangueras, array: Kit_mangueras[]){
        if(array.push(kit)){
            console.log('Se agrego kit ',  ' al listado', array);
        } else{
            console.log('El kit',  ' No se pudo agregar');
            
        }

    }

    leer_kitM(listado: Kit_mangueras[]){
        console.log('Kit: ', listado); 
    }

    

    eliminar_kitM(id: string, array: Kit_mangueras []): any{
        let kitEncontrado = array.findIndex(kit => kit.id == id);
        if(kitEncontrado >= 0){  
            array.splice(kitEncontrado, 1)
            console.log('Kit borrado', id);
            // console.log(array);
            return array;
        } else {

         console.log('El kit ', id, 'no se borro');
        }


    }

    editar_kitM(descripcion: string, array: Kit_mangueras[], dato: string){
        let editarKit = array.find(Kit_mangueras => Kit_mangueras.descripcion == descripcion)
    if(editarKit){
        console.log(' El kit se edito','su nueva descipcion es',dato);
    }
    else {
        console.log('El kit no se edito');
        
    }    
      }
}
   export default Kit_mangueras
