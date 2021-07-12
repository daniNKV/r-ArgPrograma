/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $siguientePaso = document.querySelector('#siguiente-paso');
$siguientePaso.onclick = function (event) {
    $cantidadIntegrantes = document.querySelector('#cantidadFamiliares');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    
    crearIntegrantes(cantidadIntegrantes);
    
    event.preventDefault();
};


function crearIntegrantes (cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    }
    else {
        resetear();
    }

    for(let i=0 ; i<cantidadIntegrantes; i++) {
        crearIntegrante(i);

    }
}


function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('#integrantes .integrante')
    for (i=0 ; i<$integrantes.length ; i++) {
        $integrantes[i].remove();
    }
    ;
}

document.querySelector('#resetear').onclick = function(){
    resetear()
}

function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultado();
}



function crearIntegrante (indice) {
    // Crea elemento por cada integrante ingresado
    const div = document.createElement('div');
    div.className = "integrante";

    const label = document.createElement('label');
    label.textContent = "Edad del integrante: #" + (indice + 1);

    const input = document.createElement('input');
    input.type = "number";
    input.className = "input"

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild(div)
    div.appendChild(label);
    div.appendChild(input);

    // Crea la pregunta del trabajo de cada integrante
    const labelTrabajo = document.createElement('label');
    labelTrabajo.className = 'switch';
    labelTrabajo.innerHTML = "Trabaja?"

    const inputTrabajo = document.createElement('input');
    inputTrabajo.type = 'checkbox';
    inputTrabajo.className = 'input-trabajo';
    inputTrabajo.id = "trabajo-check";

    const spanTrabajo = document.createElement('span');
    spanTrabajo.className = 'slider-round';

    div.appendChild(labelTrabajo);
    labelTrabajo.appendChild(inputTrabajo);
    inputTrabajo.appendChild(spanTrabajo);

    inputTrabajo.onclick = crearSalario;


}


function crearSalario() {
    console.log("hola")
}


document.querySelector('#boton-calcular').onclick = function (event) {
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('promedio', calcularPromedio(numeros));
    mostrarEdad('menor', calcularMenor(numeros));
    mostrarEdad('mayor', calcularMayor(numeros));
    mostrarResultados();
    
    event.preventDefault();
    

};

function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input.input');
    const edades = [] ;
    for(i=0 ; i < $integrantes.length ; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}

function mostrarEdad(tipo, valor) {
    //concateno # + el tipo + sufijo -edad / document.querySelector('#mayor-edad').textcontent
    document.querySelector(`#${tipo}-edad`).textContent = valor
}


function mostrarBotonCalculo () {
    document.querySelector('#boton-calcular').className = ''; 
}
function ocultarBotonCalculo(){
    document.querySelector('#boton-calcular').className = 'oculto';
}
function mostrarResultados(){
    document.querySelector('#analisis').className = '';
}
function ocultarResultado() {
    document.querySelector('#analisis').className = 'oculto';
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/