function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.getElementById('res')
    //pode usar assim tambem var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano)
    {
        window.alert('[ERRO]')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       
       var img = document.createElement('img')
       img.setAttribute('id','foto')//para criar uma tag, é como se criasse no html a tag <img id'foto'>


       if(fsex[0].checked){//0 para masculino e 1 para feminino
           genero = 'Homem'
           if(idade >=0 && idade <10){
               //crinça
               img.setAttribute('src', 'bebem.jpg')
           } else if(idade >= 10 && idade <21){
               //jovem
               img.setAttribute('src', 'jovemm.jpg')
           } else if(idade <50){
            img.setAttribute('src', 'adultom.jpg')
               //adulto
           }else{
            img.setAttribute('src', 'idosom.jpg')
               //idoso
           }
       } else if(fsex[1].checked){
           genero = 'Mulher'
           if(idade >=0 && idade <10){
            //crinça
            img.setAttribute('src', 'bebef.jpg')
        } else if(idade >= 10 && idade <21){
            //jovem
            img.setAttribute('src', 'jovemf.jpg')
        } else if(idade <50){
         img.setAttribute('src', 'adultof.jpg')
            //adulto
        }else{
         img.setAttribute('src', 'idosof.jpg')
            //idoso
        }
       }
       res.style.textAlign = 'center' //centralizando no JS
       res.style.color = 'darkblue' // mudando cor no JS
       res.innerHTML = `Detectado: ${genero} com ${idade} anos`
       res.appendChild(img).style.borderRadius = '300px'//para criar um elemento, no caso a imagem
       
    }
}
