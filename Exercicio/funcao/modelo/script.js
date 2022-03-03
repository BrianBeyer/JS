let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) {
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if (l.indexOf(Number(n)) != -1){// retorna -1 se o numero nao esta na lista
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){//se é um valor e se nao esta na lista
        valores.push(Number(num.value)) //push adiciona elementos no vetor
        let item = document.createElement('option')//criando uma tag option, a variavel item vai ser adicionado dentro da lista 
        item.text = `Valor ${num.value} adicionado.`//item vai ter o valor text, string para entrar na lista
        lista.appendChild(item)//para adicionar a lista
        res.innerHTML = ''//limpar o resultado quando for adicionar mais itens
    }else{
        window.alert('Valor invalido ou já na lista!')

    }
    num.value = ''//para que depois que o numero seja adicionado, limpar a caixa de digitação
    num.focus()//para o cursor ir para a caixa de digitação
}

function finalizar(){
    if(valores.length == 0){//se o vetor estiver vazio
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length //numero de valores
      
        //abaixo um teste para saber o maior e menor numero
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){// para varrer o vetor inteiro      
            soma += valores[pos]//para somar os valores
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]

        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} números cadastrados.</p>`//+= concatenar
        res.innerHTML += `<p>O maior valor é ${maior}.<p/>`
        res.innerHTML += `<p>O menor valor é ${menor}.<p/>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}