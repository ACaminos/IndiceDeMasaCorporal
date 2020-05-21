const botonEnviar = document.querySelector('#send')

botonEnviar.onclick= function(){
    const nombreUsuario = document.querySelector('#nombre').value;
    const apellidoUsuario = document.querySelector('#apellido').value;
    const alturaUsuario = document.querySelector('#altura').value;
    const pesoUsuario = document.querySelector('#peso').value;
        if(nombreUsuario=='' || apellidoUsuario=='' || alturaUsuario=='' || pesoUsuario==''){
            alert('Debe completar los datos requeridos');
        }
        else{
            alert(nombreUsuario+' '+ apellidoUsuario+' su resultado se vera reflejado debajo de la agenda');
            let IMC;
            IMC = pesoUsuario/(alturaUsuario*alturaUsuario);
            IMC= IMC.toFixed(2)
            document.querySelector('#resultado').innerText = IMC;  
        }
      
}