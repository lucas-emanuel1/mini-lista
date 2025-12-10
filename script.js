// Capturar os elementos HTML.
const form = document.querySelector("form")
const inputProduct = document.querySelector("#product")
const inputPrice = document.querySelector("#price")
const ul = document.querySelector("#list")


// Evento que dispara quando ter interação com o input de preço.
inputPrice.addEventListener("input", () => {
  // Captura apenas números (no input do HTML tem o type="number", mas aceita a letra "e"🌚).
  let justNumbers = inputPrice.value.replace(/\D/g, "")

  // Atualiza a variável transformando em centavos.
  justNumbers = Number(justNumbers) / 100

  // Pega o valor do input e formata para a moeda brasileira.
  inputPrice.value = formatCurrency.format(justNumbers)
})

// "Molde" para moedas brasileiras.
const formatCurrency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})


// Evento de submit ao enviar o formulário.
form.addEventListener("submit", (e) => {
  // Previne o envio padrão do formulário.
  e.preventDefault()

  // Cria um objeto e retorna duas propriedades, sendo cada uma tendo seu respectivo valor.
  const myObj = {
    product: inputProduct.value,
    price: inputPrice.value,
  }

  // Cria um elemento "li".
  const createdList = document.createElement("li")
  // Adiciona um conteúdo para a lista.
  createdList.innerHTML =
  `<span>Produto: <strong>${myObj.product}</strong></span>
  <span>Preço: <strong>${myObj.price}</strong></span>`

  // Adiciona o elemento "li" dentro da "ul".
  ul.append(createdList)
})