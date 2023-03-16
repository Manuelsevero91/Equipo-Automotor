import Motor from "./Motor";

enum Eficiencia{
    H2 = 'H2',
    J1 = 'J1',
    K3 = 'K3'
}

enum TipoCombustible{
    gasoil, 
    nafta,
    diesel

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

    agregar_motorC(m_Combustible: M_combustible, array: M_combustible[]){
        if(array.push(m_Combustible)){
            console.log('Se agrego motorCombustible ',  ' al listado', array);
        } else{
            console.log('El motorCombustible',  ' No se pudo agregar');
            
        }

    }

    leer_motorC(listado: M_combustible[]){
        console.log('MotorCombustible: ', listado); 
    }
    
    eliminar_motorC(id: string, array: M_combustible[]){
        let m_CombustibleEncontrado = array.findIndex(m_Combustible => m_Combustible.id == id);
        if(m_CombustibleEncontrado >= 0){  
            array.splice(m_CombustibleEncontrado, 1)
            console.log('MotorCombustible borrado', id);
            // console.log(array);
            return array;
        } else {

         console.log('MotorCombustible ', id, 'no se borro');
        }

    }
    

    editar_motorC(descripcion: string, array: M_combustible[], dato: string){
        let m_CombustibleEditar = array.find(M_combustible => M_combustible.descripcion == descripcion)
        if(m_CombustibleEditar){
            console.log(' El MotorCombustible se edito','su nueva descipcion es',dato);
        }
        else {
            console.log('El MotorCombustible no se edito');
            
        }
            
        }
    }

     export default M_combustible
