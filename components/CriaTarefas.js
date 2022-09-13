import BotaoConclui from "./ConcluirTarefa.js";
import BotaoDeleta from "./DeletaTarefa.js";

export const handleNovoItem = (event) => {
  event.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
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

  const tarefasAtualizadas = [...tarefas, dados];

  const tarefaCriada = Tarefa(dados);

  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

  list.appendChild(tarefaCriada);
  input.value = "";
};

export const Tarefa = ({ dateFormat, value }) => {
  const conteudo = `<p class = "content">${dateFormat} * ${value}</p>`;
  const tarefa = document.createElement("li");

  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
};
