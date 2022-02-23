var agora = new Date()
var semana = agora.getDay()

switch(semana){
    case 0:
        console.log('Domingo - Sunday - Domingo')
        break
    case 1:
        console.log('Segunda-feira - Monday - Lunes')
        break
    case 2:
        console.log('Terça-feira - Tuesday - Martes')
        break
    case 3:
        console.log('Quarta-feira - Wednesday - Miércoles')
        break
    case 4:
        console.log('Quinta-feira - Thursday - Jueves')
        break
    case 5:
        console.log('Sexta-feira - Friday - Viernes')
        break
    case 6:
        console.log('Sabado - Saturday - Sabado')
        break
    default:
        console.log('[ERRO 403]')
        break
}