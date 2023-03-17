import Motor from "./Motor";

enum Eficiencia{
   H2 = 'H2',
   J1 = 'J1',
   K3 = 'K3'
}

class M_electrico extends Motor{
   voltaje: string
   consumoKwH: number
   isBajoConsumo: boolean

   constructor(voltaje: string, consumoKwH: number, isBajoConsumo: boolean, potenciaHp:number, eficiencia:Eficiencia,
       fabricante:string, id:string, descripcion:string, fechaFabricacion:Date, fechaInstalacion:Date ){
      super(potenciaHp, eficiencia, fabricante, id, descripcion, fechaFabricacion, fechaInstalacion)
      this.voltaje = voltaje;
      this.consumoKwH = consumoKwH;
      this.isBajoConsumo = this.isBajoConsumo;
   }


   agregar_motorE(motorE: M_electrico, array: M_electrico[]){
      if(array.push(motorE)){
         console.log('Se agrego motor Electrico ',  ' al listado', array);
     } else{
         console.log('El motor Electrico',  ' No se pudo agregar');
         
     }
   }

   leer_motorE(listado: M_electrico[]){
      console.log('Equipos: ', listado); 
   }

   eliminar_motorE(id: string, array: M_electrico[]){
      let mElectricoEncontrado = array.findIndex(motorE => motorE.id == id);
      if(mElectricoEncontrado >= 0){  
          array.splice(mElectricoEncontrado, 1)
          console.log('motor electrico borrado', id);
          // console.log(array);
          return array;
      } else {

       console.log('motor electrico ', id, 'no se borro');
      }
   }

   editar_motorE(descripcion: string, array: M_electrico[], dato: string){
      let editarMotorE= array.find(M_electrico => M_electrico.descripcion == descripcion)
      if(editarMotorE){
          console.log(' El motor electrico se edito','su nueva descipcion es',dato);
      }
      else {
          console.log('El motor electrico no se edito');
          
      }
   }



}
export default M_electrico