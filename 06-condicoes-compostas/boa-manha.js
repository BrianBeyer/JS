var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
var dia = agora.getDate()
var ano = agora.getFullYear()
console.log(`Agora são ${hora}:${minutos}:${segundos} do dia ${dia} do ano ${ano} `)
if (hora < 12){
    console.log('Bom dia')
} else if (hora <= 18){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}