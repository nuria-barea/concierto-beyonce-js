// Tu código va aquí: 

function gestionarAdmision(0, 8, 12, 14, 17, 18, 35, 99){
    let edad=16;
    
    if (edad>=18) {
	    console.log("Eres mayor de edad, puedes entrar.");
    }else if (edad>=14 && edad<=17) {
	    console.log("Puedes entrar, pero sólo si te acompaña una persona mayor de edad.");
    }else {
        console.log("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años.");
    }
    console.log(edad)
}

