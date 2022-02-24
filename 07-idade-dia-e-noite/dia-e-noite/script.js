function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`

    if(hora >= 0 && hora < 12){// bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'darkblue'
    } else if(hora >= 12 && hora <= 18){// boa tarde
        document.body.style.background = 'darkgoldenrod'
        img.src = 'tarde.jpg'
    } else{ // boa noite
        document.body.style.background = 'darkred'
        img.src = 'noite.jpg'
    }
}
