function mostrar()
{
//tomo la edad  
var laEdad;

	laEdad=edad.value;
	laEdad=parseInt(laEdad);


	if(laEdad>18)
	{
		alert("Usted es mayor");
		 
		}
			else{
				if(laEdad>12 && laEdad<18)
					alert("Usted es adolescente");

			}
				
			else{
				if(laEdad<13)
				alert("Usted es un niño");
			}
		



//FIN DE LA FUNCIÓN