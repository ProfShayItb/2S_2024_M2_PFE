// //Seleção ou condição

// //if
// var velocidade = 100
// var carro = 110

// if(carro>velocidade){
//     console.log('Levou uma multa')
// }

// //if/else

// var emocaoVitor = 'Ansiedade'
//         //true ou false
// if(emocaoVitor=="Ansiedade"){
//     //true
//     console.log('Ansioso')
// }else{
//     //false
//     console.log('Tudo bem.')
// }

// //if/ else if// else

// // aprovado, reprovado, recuperação

// var nota = 5

// if(nota>=6){
//     console.log('Aprovado!')
// }else if(nota<5){
//     console.log('Reprovado!')

// }else{
//     console.log('Recuperação')
// }





//if/else
//if/ else if/ else

//-função

function verificar(){
    let timeA = Number(document.getElementById('timeA').value)

    let timeB = Number(document.getElementById('timeB').value)

    let area = document.getElementById('resultado')

    //se oquetemdentrodaA > oquetemdentrodaB - Time A ganhou

    if(timeA>timeB){
        area.innerText = 'Time A vencedor!'
    }else if(timeA<timeB){
        area.innerText = 'Time B Vencedor!'
    }else{
        area.innerText = 'Empate'
    }

    //se oquetemdoA < oquetemdentrodoB - Time B Ganhou

    //se oquetemdentrodoA == ao que tem dentrodoB - empate

    //== verifica só o valor
    //=== verifica o tipo e o valor

   

}


//Switch - case

let letra = 'c'

switch(letra){
    case 'a':
        console.log('A')
        break
    case 'b':
        console.log('B')
        break
    default: 
        console.log('Não faz parte das letras selecionadas')
}




let nome = prompt('Digite seu nome: ')
alert('Bem vindo ' + nome)


var primeiraPizza= 10; 
var segundaPizza = 20; 



<section>
    <p id='p-inf'>Boa noite!</p>
</section>



