//Se guarda el valor de la suma.
var suma = 0; 
//Genera un bucle que solicita numero de la suma.
do{
    //Solicita el valor de los numeros a sumar.
    var num = prompt("Digita el numero o los numeros a sumar");
    //Comprueba el valor del dato que sea un numero.
    if(Number(num) == num){
        //convierte el valor del numero a entero.
        num= Number(num);
        //Realiza la suma dada por el usuario.
        suma = suma + num;

        //Si el dato no es un numero tira error.
    }else{
    if(num != undefined){
        alert(num + "No es un valor numerico valido");
    }
    }
//Se repite el ciclo hasta que se pulse el boton cancelar.    
}while(num != undefined);
//Imprime por pantalla la suma de los numeros ingresados.
document.write("La suma de los numeros ingresados es: " +suma);