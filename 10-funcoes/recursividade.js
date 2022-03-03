//recursividade é quando a função chama ela mesma

function fatorial(n){
    if (n==1){
        return 1 //pois fatorial de 1 é 1
    }else{
        return n*fatorial(n-1)//aqui chamando a propria função
        //formula do fatorial é n! = n x (n-1)
    }
}

console.log(fatorial(3))