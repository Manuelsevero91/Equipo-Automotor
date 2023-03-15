import Equipo from "./Equipo";

class Bomba extends Equipo{
    caudalEntrada: number
    caudalSalida: number 
    fabricante: string

    constructor(caudalEntrada:number, id:string, descripcion:string, fechaFabricacion:Date, fechaInstalacion:Date, caudalSalida:number, fabricante:string ){
        super(id, descripcion, fechaFabricacion, fechaInstalacion)

        this.caudalEntrada = caudalEntrada;
        this.caudalSalida = caudalSalida;
        this.fabricante = fabricante;

    }

    agregar_bomba(bomba: Bomba, array: Bomba[]){
       if(array.push(bomba)){
            console.log('Se agrego bomba ',  ' al listado', array);
        } else{
            console.log('La Bomba',  ' No se pudo agregar');
            
        }
    }

    leer_bomba(listado: Bomba[]){
        console.log('Bombas: ', listado); 
    }

    eliminar_bomba(id: string, array: Bomba[]): any{
        let bombaEncontrada = array.findIndex(bomba => bomba.id == id);
        if(bombaEncontrada >= 0){  
            array.splice(bombaEncontrada, 1)
            console.log('Bomba borrada', id);
            // console.log(array);
            return array;
        } else {

         console.log('Eomba ', id, 'no se borro');
        }

    }
    editar_bomba(descripcion: string, array: Bomba[], dato: string){
        let editarBomba = array.find(Bomba => Bomba.descripcion == descripcion)
        if(editarBomba){
            console.log(' La Bomba se edito','su nueva descipcion es',dato);
        }
        else {
            console.log('La Bomba no se edito');
            
        }
    }
}
export default Bomba