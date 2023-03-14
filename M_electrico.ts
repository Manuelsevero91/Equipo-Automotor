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


   agregar_motorE(){

   }

   leer_motorE(){

   }

   eliminar_motorE(){

   }

   editar_motorE(){

   }



}
export default M_electrico