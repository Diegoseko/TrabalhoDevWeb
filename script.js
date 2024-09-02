
/* Chamando a função após o click no botão, para aparecer a mensagem de envio.*/

document.querySelector('.formulario').addEventListener("submit", function(event){
    event.preventDefault();
    Enviado();
});

/* Time out para a mensagem sumir depois de ser enviada a mensagem*/

function Enviado () {
    res.innerHTML = 'Mensagem Enviada!';
    setTimeout(() => {
        res.innerHTML = "";
    }, 3000);
    
    
}