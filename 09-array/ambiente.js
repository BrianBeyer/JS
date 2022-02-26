//Um vetor ou um array ou uma variavel composta é uma variavel que tem varios elementos e cada elemento é composta por seu valor e por uma chave de identificação

let num = [2,5,7]
console.log(`Nosso vetor é o ${num}`)
console.log(num[1])//acessando valores
num[3]=6//adiciona o valor 6 na posição 3
num.push(7)//adiciona o valor 7 na ultima posição
num[0]=0//substituindo valores
console.log(`Nosso vetor é o ${num}`)
console.log(`o vetor possui ${num.length} elementos`)
num.indexOf(8)//procura no vetor o valor 8
num.sort()//Order crescente
console.log(num)