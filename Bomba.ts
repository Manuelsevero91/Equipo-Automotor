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



    agregar_bomba(){

    }

    leer_bomba(){

    }

    eliminar_bomba(){

    }
    editar_bomba(){

    }
}
export default Bomba