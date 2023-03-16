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

    agregar_motor(motor: Motor, array: Motor[]){
      if(array.push(motor)){
          console.log('Se agrego motor ',  ' al listado', array);
      } else{
          console.log('El motor',  ' No se pudo agregar');
          
      }
  }
    leer_motor(listado: Motor[]){
      console.log('Equipos: ', listado); 
    }

    eliminar_motor(id: string, array: Motor []):any{
      let motorEncontrado = array.findIndex(motor => motor.id == id);
      if(motorEncontrado >= 0){  
          array.splice(motorEncontrado, 1)
          console.log('Motor borrado', id);
          // console.log(array);
          return array;
      } else {

       console.log('Motor ', id, 'no se borro');
      }
    }

    editar_motor(descripcion: string, array: Motor[], dato: string){
      let motorEditar = array.find(Motor => Motor.descripcion == descripcion)
      if(motorEditar){
          console.log(' El motor se edito','su nueva descipcion es',dato);
      }
      else {
          console.log('El motor no se edito');
          
      }
          
      }
    }



    export default Motor