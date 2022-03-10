let cliente = {nome: 'Jose', 
sexo: 'M',
peso: 85,
engordar(p=0){
    console.log('Engordou')
    this.peso += p //this auto referencia o objeto, peso recebe mais o p
}}
cliente.engordar(2)//vai engordar mais 2Kg

console.log(`O cliente engordou e agora pesa ${cliente.peso}`)
console.log('----------------------------')
console.log(typeof(cliente))//tipo: objeto
console.log('----------------------------')
console.log(cliente)//mostra a lista toda

console.log(`O nome é ${cliente.nome}`)//para acessar o nome na lista

