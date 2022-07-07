// Empresa Savanis \\

let  prompt  =  require ( 'prompt-sync' )  ( )


dataAtual  =  nova  data
consola . log ( "Hoje é "  +  dataAtual . getDate ( )  +  "-"  +  dataAtual . getMonth ( )  +  "-"  +  dataAtual . getFullYear ( )  )  //Obtendo o dia, mês e ano atual do usuário

let  dataEvento  =  new  Date ( "2022-08-28" )  // Salvando a data do evento com uma string

if  ( dadosAtual  <  dadosEvento )  {
    consola . log ( "Continuação de cadastro..." )
}
    else  if  ( dataAtual  >  dataEvento )  {
    consola . log ( "Cadastro não permitido por dados inválidos" )
    processo . saída ( )
}
 
let  idade  =  parseInt ( prompt ( "Digite sua idade: " ) )

if  ( idade  >=  18 )  {
    consola . log ( "Continuação de cadastro..." )
}
    senão  se  ( idade  <  18 )  {
        consola . log ( "Cadastro não permitido. Idade mínima menor que a permitido." )
        processo . saída ( )
    }

deixe  listaParticipantes  =  [ 98 ] ;

consola . log ( `Número de participantes: ${ listaParticipantes [ 0 ] } ` ) ;
if  ( listaParticipantes  <= 100 )  {
    consola . log ( "Cadastro concluído!" )
}
else  if  ( listaParticipantes  > 100 )  {
    consola . log ( "Cadastro não concluído. Número de participantes por evento excedido." )
    processo . saída ( )
}