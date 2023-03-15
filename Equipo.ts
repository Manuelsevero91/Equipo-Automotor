import RegistroEquipos from "./RegistroEquipos"

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

}
   
 export default Equipo

 