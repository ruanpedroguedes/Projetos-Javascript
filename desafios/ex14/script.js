function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO, Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //Criança
               img.setAttribute('src', 'homembebe.jpg')
            } else if(idade >=10 && idade <21){
                //Jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }
                
        } else if(fsex[1]) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'mulherbebe.jpg')
            } else if(idade >=10 && idade <21){
                //Jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}