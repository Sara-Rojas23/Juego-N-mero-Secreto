let NumeroSecreto = 0;
let intentos = 1;
let array =[];
let NumeroMaximo = 10 ;

function coneccionHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

CondicionesIniciales();
console.log(NumeroSecreto); 

function IntentoUsuario(){
    let NumeroUsuario = parseInt(document.getElementById('ValorUsuario').value); 
    console.log(NumeroUsuario);
    if(NumeroSecreto === NumeroUsuario){
        coneccionHTML('p',`GANASTE!, descubriste el numero ${NumeroSecreto} en ${intentos} ${(intentos==1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }
    else{
        if(NumeroUsuario<NumeroSecreto){
            coneccionHTML('p','El número secreto es mayor')
        }
        else{
            coneccionHTML('p','El número secreto es menor')
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function CondicionesIniciales() {
    coneccionHTML('h1','Adivina el número secreto');
    coneccionHTML('p',`Ingresa un número del 1 al ${NumeroMaximo}`);   
    NumeroSecreto = GenerarNumeroSecreto();
    intentos=1; 
}
 
function NuevoJuego(){
    LimpiarCaja();
    CondicionesIniciales();
    console.log(NumeroSecreto); 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}

function LimpiarCaja() {
    document.querySelector('#ValorUsuario').value='';    
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    console.log(array);

    if(array.length==NumeroMaximo){
        coneccionHTML('p','Ya jugaste con todos los  úmeros posibles');
    }
    else{
        if (array.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        }
        else{
            array.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }   
}

