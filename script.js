const form = document.querySelector("#form-habits") // colocar numa variável o formulário
const nlwSetup = new NLWSetup(form) // criar uma variável para iniciar a biblioteca

const button = document.querySelector("header button")

button.addEventListener("click", add) // registrou em memória com evento de click
form.addEventListener("change", save) // registrou em memória com uma alteração

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ⚠️")
    return
  }

  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
} // adicionando um novo dia

function save() {
  localStorage.setItem("control@habits", JSON.stringify(nlwSetup.data))
} // salvando as mudanças (os dados) no localStorage

const data = JSON.parse(localStorage.getItem("control@habits")) || {} // pegou as informações do localStorage e transformou em objeto novamente
nlwSetup.setData(data)
nlwSetup.load() // carregando as informações

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()
