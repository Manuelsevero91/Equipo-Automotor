import Equipo from "./Equipo";

enum Eficiencia{
  H2 = 'H2',
  J1 = 'J1',
  K3 = 'K3'
}

class Motor extends Equipo{
    potenciaHP: number
    eficiencia: Eficiencia
    fabricante: string

    constructor(potenciaHp:number, eficiencia:Eficiencia, fabricante:string, id:string, descripcion:string, fechaFabricacion:Date, fechaInstalacion:Date){
      super(id, descripcion, fechaFabricacion, fechaInstalacion)

      this.potenciaHP = potenciaHp;
      this.eficiencia = eficiencia;
      this.fabricante = fabricante;
    }

    agregar_motor(){

    }

    leer_motor(){

    }

    eliminar_motor(){

    }

    editar_motor(){

    }


}
export default Motor