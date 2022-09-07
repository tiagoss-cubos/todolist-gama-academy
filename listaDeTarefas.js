import BotaoConclui from "./components/ConcluirTarefa.js";
import BotaoDeleta from "./components/DeletaTarefa.js";

const novaTarefa = document.querySelector("[data-form-button]");

let tarefas = [];

const handleNovoItem = (event) => {
  event.preventDefault();

  const tarefasLocalStorge = JSON.parse(localStorage.getItem("tarefas")) || [];
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const calendar = document.querySelector("[data-form-date]");
  const date = calendar.value;

  const dateFormat = moment(date).format("L");

  const dados = {
    dateFormat,
    value,
  };

  const tarefaCriada = CriarTarefa(dados);

  tarefas.push(dados);

  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  const tarefasAtualizadas = [...tarefas, tarefasLocalStorge];
  console.log(tarefasAtualizadas);

  list.appendChild(tarefaCriada);
  input.value = "";
};

const CriarTarefa = ({ dateFormat, value }) => {
  const conteudo = `<p class = "content">${dateFormat} * ${value}</p>`;
  const tarefa = document.createElement("li");

  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
};

novaTarefa.addEventListener("click", handleNovoItem);
