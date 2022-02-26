function calcular(){
    let inicio = window.document.getElementById('txti')
    
    let fim = window.document.getElementById('txtf')

    let passo = window.document.getElementById('txtp')

    let resposta = window.document.getElementById('resposta')

    if(inicio.value.length ==0 || fim.value.length ==0 || passo.value.length ==0){
        alert('[ERRO]')
    }else{
        resposta.innerHTML = 'Contando...'
        var i = Number(inicio.value)//para converter em numero
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p<=0){
            alert('Passo invalido')
        }
            
        if(i<f){
        for(let c=i;c<=f;c+=p){//contagem crescente
            resposta.innerHTML += `${c} \u{1F449}`
        }
        }else{
            for(let c=i;c>=f;c-=p){//contagem decrescente
            resposta.innerHTML += `${c} \u{1F449}`  
            }
        }
        
    }
}