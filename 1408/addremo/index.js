//var, let, const

function addInput(){
  const ul =  document.getElementById('inputs') //nó

  //primeiro cria o no
  // amarra ele a outros nós

const novaLista = document.createElement('li')//criando um novo elemento
novaLista.className= 'item-lista' //Atribuição de className
novaLista.innerText='Novo Input'

const novoInput = document.createElement('input')//criando novo input
novoInput.type = 'text'//tipo do input

//aninhamento dos elementos
novaLista.appendChild(novoInput)
ul.appendChild(novaLista)

}

function removeInput(){
  //var, let, const
    const ul = document.getElementById('inputs')
    const item = document.getElementsByTagName('li')
    const input = document.getElementsByTagName('input')

    ul.removeChild(item[item.length-1])
    ul.removeChild(input[input.length-1])



}

