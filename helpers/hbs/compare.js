const diferentElement = function(value, defetent){

    return value === defetent;
}
const Vacio = function(value){
    let IsValid= false;
    const vacio = [0,""];

    vacio.forEach(function(elem){
        if(value == elem){
            IsValid = true;
        }
    })

    return IsValid;
}
const tema = function(value){
    let IsValid= false;
    const vacio = [value.name = ""];

    vacio.forEach(function(elem){
        if(value == elem){
            IsValid = true;
        }
    })

    return IsValid;
}

exports.diferentElement = diferentElement;
exports.vacio = Vacio;
exports.tema = tema;