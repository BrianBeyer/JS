var valores = [8,1,4,7,2,9]

for(var pos=0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
console.log('-----------------------------------------')


//versão simplificada do for para variaveis composta
for(let pos in valores){//para cada posição em valores
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
console.log('-----------------------------------------')
//retorna a chave que o valor esta, se o valor nao existir, vai ser retornado -1
console.log(`O valor 2 esta na posição ${valores.indexOf(2)}`)
//indexOf retorna a posição daquele valor