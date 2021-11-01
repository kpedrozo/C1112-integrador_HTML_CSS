var resultado;
const VALOR_TICKET = 200;
var resumen = document.getElementById('resumen');

resumen.addEventListener('click', function (event) {
    var cantidad = parseInt(document.getElementById('cantidad').value)
    var categoria = document.getElementById('categorias').value

    if (categoria == 'estudiante') {
        resultado = (VALOR_TICKET * 0.2) * cantidad;
    }
    else {
        if (categoria == 'trainee') {
            resultado = (VALOR_TICKET * 0.5) * cantidad;
        }
        else {
            resultado = (VALOR_TICKET * 0.85) * cantidad;
        }
    }

    console.log(resultado)

    document.getElementById('total').innerHTML = ("Total a Pagar: $ " + resultado);

})
    ;

