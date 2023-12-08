do {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    alert(`Hola ${nombre} ${apellido}`);

    let nota1 = Number(prompt("Ingrese su nota del primer parcial entre 1 y 5"));
    let nota2 = Number(prompt("Ingrese su nota del segundo parcial entre 1 y 5"));
    function sumar(nota1, nota2) {
        resultado = nota1 + nota2;
    }
    sumar(nota1, nota2);

    alert(`Tu nota final fue de: ${resultado}`);

    if (resultado >= 7) {
        alert("Felicidades has Aprobado");
    }
    else {
        alert("Lamentablemente has Desprobado");
    };
}

while(confirm("¿Desea añadir otro alumno?"));