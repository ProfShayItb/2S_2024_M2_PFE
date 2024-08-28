//selecionando elementos com js

//Selecionando por tag - getElementsByTagName()[]

let paragrafoZero = window.document.getElementsByTagName('p')[0]
paragrafoZero.innerText = 'Boa noite!'
paragrafoZero.style.color='red'
paragrafoZero.style.backgroundColor='yellow'



//selecionando por class getElementsByClassName()

let selecaoClasse = window.document.getElementsByClassName('teste4')[0]
selecaoClasse.innerText = 'Selecionando por Classe'

//Selecionando por name - getElementsByName()[]
let selecaoNome = document.getElementsByName('teste5')[0]
selecaoNome = 'Selecionando por name'

//Selecionando por ID - getElementById()
let selecaoId = document.getElementById('teste3')

selecaoId.innerText = 'Selecionando por Identificação'

//Selecionando por querySelector('')
let selecaoQuery = document.querySelector('#teste3')
selecaoQuery.style.backgroundColor = 'green'


