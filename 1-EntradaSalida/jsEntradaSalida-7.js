/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero+segundoNumero;

	alert("el resultado es : "+resultado);
	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero-segundoNumero;

	alert("el resultado es : "+resultado);

}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero*segundoNumero;

	alert("el resultado es : "+resultado);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero/segundoNumero;

	alert("el resultado es : "+resultado);
}

