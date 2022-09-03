import BotaoConclui from "./components/ConcluirTarefa.js";
import BotaoDeleta from "./components/DeletaTarefa.js";

const novaTarefa = document.querySelector("[data-form-button]");

const CriarTarefa = (event) => {
  event.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const date = calendar.value;

  const dateFormat = moment(date).format("L");

  console.log(dateFormat);
  const value = input.value.moment();

  const list = document.querySelector("[data-list]");
  const conteudo = `<p class = "content">${value}</p>`;
  const tarefa = document.createElement("li");

  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  list.appendChild(tarefa);
  input.value = "";
};

novaTarefa.addEventListener("click", CriarTarefa);
