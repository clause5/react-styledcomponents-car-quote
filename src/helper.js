//Obtiene la diferencia de anios
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}


//Calcula el total a pagar segun la marca

export function  calcularMarca(marca){
    let incremento;

    switch (marca) {
        case 'git':
            incremento = 1.3;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico': 
            incremento = 1.05;
            break;
    
        default:
            break;
    }
    return incremento;
}

//Clcula el tipo de plan

export function obtenerPlan( plan ){
    return (plan === 'basico') ? 1.2 : 1.5;
}

//Capitalize

export function primeraMayuscula (texto ){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}