

//referencias del html
const Online    = document.querySelector('#Online');
const Offline   = document.querySelector("#Offline")
const textMensaje = document.querySelector("#textMensaje");
const btnEnviar = document.querySelector("#btnEnviar")
const socketCliente =io();


socketCliente.on('connect', ()=>{
    Offline.style.display = "none";
    Online.style.display = "";
});
socketCliente.on('disconnect', ()=>{
    Offline.style.display = "";
    Online.style.display = "none";
});
btnEnviar.addEventListener('click',()=>{
    const mensaje = textMensaje.value;
    socketCliente.emit( 'enviar-mensaje', mensaje,( id )=>{
        console.log("desde el server", id)
    } )
});

socketCliente.on('enviar-mensaje-server', (payload)=>{ 
    console.log(payload)
})