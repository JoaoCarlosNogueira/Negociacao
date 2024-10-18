export function inspect(
    target: any,
    propertyKey:string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    console.log( "Resultado Método Original " +  metodoOriginal);
    descriptor.value = function(... args: any[]){
        console.log(`--- Método ${propertyKey}`);
        console.log(`--- parâmetros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this,args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`)
        return retorno;
    }
    return descriptor;
}
