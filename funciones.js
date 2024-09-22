function calcularRendimiento(){

    var dineroIng = Number(document.getElementById("dineroIngresado").value);
    console.log(dineroIng);

    var mesesDin = Number(document.getElementById("mesesDinero").value);
    console.log(mesesDin);

    var rendimiento = (dineroIng*0.02)*mesesDin
    console.log(rendimiento);

    alert("El rendimiento es de " + rendimiento);
    alert("El monto final seria de "+ (rendimiento + dineroIng));


}

function calcularSueldo(){

    var sueldos = Number(document.getElementById("sueldo").value);
    console.log(sueldos);

    var monto1s = Number(document.getElementById("monto1").value);
    console.log(monto1s);

    var monto2s = Number(document.getElementById("monto2").value);
    console.log(monto2s);

    var monto3s = Number(document.getElementById("monto3").value);
    console.log(monto3s);

    var comision1 = monto1s * 0.1;
    console.log(comision1);

    var comision2 = monto2s * 0.1;
    console.log(comision2);

    var comision3 = monto3s * 0.1;
    console.log(comision3);

    alert("El sueldo final es de " + (sueldos + comision1 + comision2 + comision3));


}
function calcularPorcentaje(){

    var montocompras = Number(document.getElementById("montoCompra").value);
    console.log(montocompras);

    var montoFinal = montocompras*0.75;

    alert("El monto final de tu compra es " + montoFinal);

}
function calcularCalificacion(){

    var parcial1s = Number(document.getElementById("parcial1").value);
    console.log(parcial1s);
    
    var parcial2s = Number(document.getElementById("parcial2").value);
    console.log(parcial2s);

    var parcial3s = Number(document.getElementById("parcial3").value);
    console.log(parcial3s);

    var calificacionExamen = Number(document.getElementById("califexam").value);
    console.log(calificacionExamen);

    var calificacionFinal = Number(document.getElementById("califfinal").value);
    console.log(calificacionFinal);

    var prom = (parcial1s + parcial2s + parcial3s)/3
    console.log(prom);

    var parte1 = ((prom*5.5)/10);
    console.log(parte1);

    var parte2 = ((calificacionExamen*3)/10);
    console.log(parte2);

    var parte3 = ((calificacionFinal*1.5)/10);
    console.log(parte3);

    alert("la califiacion final es de " + (parte1 + parte2 + parte3))

    

}
function calcularFecha(){

    const fechaNacimiento = new Date(document.getElementById('fecha').value);
            
    const fechaActual = new Date();
    
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            
            
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();
            
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
            
    alert("Tienes " + edad + " años.");
}
function palabrasANumeros(arr) {
    
    const mapaNumeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arr.map(palabra => {
        return mapaNumeros.hasOwnProperty(palabra.toLowerCase()) ? mapaNumeros[palabra.toLowerCase()] : -1;
    });
}

function convertirPalabras() {
    
    const input = document.getElementById("inputPalabras").value;
    const palabras = input.split(',').map(p => p.trim()); 

    
    const numeros = palabrasANumeros(palabras);

    alert(`Traducción: [${numeros.join(', ')}]`);
}
function calcularPago() {
    
    const sueldoHora = Number(document.getElementById("inputSueldo").value);
    console.log(sueldoHora);
    const horasTrabajadas = Number(document.getElementById("inputHorasTrabajadas").value);
    console.log(horasTrabajadas);
    
    let pagoTotal = 0;
    let horasExtras = 0;
    
    if (horasTrabajadas <= 40) {
        pagoTotal = horasTrabajadas * sueldoHora;
    } else {
        const horasNormales = 40;
        horasExtras = horasTrabajadas - horasNormales;
        pagoTotal = horasNormales * sueldoHora;

        if (horasExtras <= 8) {
            pagoTotal += horasExtras * sueldoHora * 2;
        } else {
            pagoTotal += 8 * sueldoHora * 2; 
            pagoTotal += (horasExtras - 8) * sueldoHora * 3;
        }
    }

    
    alert(`El pago total es: $${pagoTotal.toFixed(2)}`);
}
function calcularUtilidades(){

    const salario = parseFloat(document.getElementById('inputSalario').value);
    const antiguedad = parseFloat(document.getElementById('inputAntiguedad').value);
    let porcentaje = 0;

    if (antiguedad < 1) {
        porcentaje = 0.05; 
    } else if (antiguedad >= 1 && antiguedad < 2) {
        porcentaje = 0.07;
    } else if (antiguedad >= 2 && antiguedad < 5) {
        porcentaje = 0.10; 
    } else if (antiguedad >= 5 && antiguedad < 10) {
        porcentaje = 0.15; 
    } else {
        porcentaje = 0.20; 
    }
    

}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function Register() {
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const comentarios = document.getElementById("comentarios").value;
    const aceptar = document.getElementById("aceptar").checked;

    if (!nombre || !email || !password || !comentarios || !aceptar) {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    if (!validarEmail(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return true;
}
