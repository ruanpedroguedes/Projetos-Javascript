function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} Horas`

    if(hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'pexels-tima-miroshnichenko-5976724.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'pexels-anderson-martins-2386144 (1).jpg'
        document.body.style.background = '#b9846f'
        
    }else{
        //BOA NOITE!
        img.src = 'pexels-reynaldo-brigworkz-brigantty-771883 (1).jpg'
        document.body.style.background = '#515154'
    }
}
