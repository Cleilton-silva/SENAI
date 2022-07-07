}
else  if  ( dataAtual  >  dataEvento )  {
consola . log ( "Cadastro não permitido por dados inválidos" )
processo . saída ( )
}

let  idade  =  parseInt ( prompt ( "Digite sua idade: " ) )
@@ -22,6 +23,7 @@ if (idade >= 18) {
}
senão  se  ( idade  <  18 )  {
    consola . log ( "Cadastro não permitido. Idade mínima menor que a permitido." )
    processo . saída ( )
}

deixe  listaParticipantes  =  [ 98 ] ;
@@ -32,5 +34,6 @@ if (listaParticipantes <=100) {
}
else  if  ( listaParticipantes  > 100 )  {
consola . log ( "Cadastro não concluído. Número de participantes por evento excedido." )
processo . saída ( )
}