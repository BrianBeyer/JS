function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if(num.value.lenght == 0){
        alert('[ERRO]')
    }else{
       var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''//para limpar a tabuada a cada rodada
        while(c<=10){
            var item = document.createElement('option')//criando um elemento do HTML para escrever dentro da lista
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`//nao faz diferença esse comando aqui, mas ele serve em outros programas para saber qual item foi selecionado
            tab.appendChild(item)//para adicionar itens a lista
            c++
        }
}
}