import Motor from "./Motor";

enum Eficiencia{
    H2 = 'H2',
    J1 = 'J1',
    K3 = 'K3'
}

enum TipoCombustible{

}

class M_combustible extends Motor{
    cilindros: number
    tipoCombustible: TipoCombustible

    constructor(cilindros:number, tipoCombustible:TipoCombustible, potenciaHp:number, eficiencia:Eficiencia,
         fabricante:string, id:string, descripcion:string, fechaFabricacion:Date, fechaInstalacion:Date ){
        super(potenciaHp, eficiencia, fabricante, id, descripcion, fechaFabricacion, fechaInstalacion)
        
        this.cilindros = cilindros;
        this.tipoCombustible = tipoCombustible;
    }

    aregar_motorC(){

    }

    leer_motorC(){

    }
    
    eliminar_motorC(){

    }

    editar_motorC(){
        
    }



}
export default M_combustible
