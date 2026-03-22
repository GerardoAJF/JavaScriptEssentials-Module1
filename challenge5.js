function deepComp(obj1, obj2) {
    // Confirmamos que los objetos sean los mismos
    if (obj1 === obj2) return true;
    
    // Confirmamos que los objetos no son nulos o de diferente tipo
    if (!obj1 || !obj2 || typeof obj1 !== typeof obj2) return false;
    
    // Si no son objetos, entonces que simplemente los compare
    if (typeof obj1 !== 'object') return obj1 === obj2;
    
    // Confirmamos que son Arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        // Si tienen diferente tamaño no son iguales
        if (obj1.length !== obj2.length) return false;
        // Aqui utilizamos recursividad, comparamos cada item de un array con el del otro
        return obj1.every((item, index) => deepComp(item, obj2[index]));
    }
    
    // Si solo uno es un array y no los dos, entonces no son iguales
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;
    
    // Objetenmos las llaves de los objetos (Si tenemos objetos)
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    // Si el largo es diferente, no son iguales
    if (keys1.length !== keys2.length) return false;
    
    // Confirmamos que el otro objeto tenga las mismas keys y los mismos valores
    return keys1.every(key => 
        keys2.includes(key) && deepComp(obj1[key], obj2[key])
    );
}

let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false