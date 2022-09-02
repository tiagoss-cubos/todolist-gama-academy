(() => {
  const novaTarefa = document.querySelector("[data-form-button]");

  const CriarTarefa = (event) => {
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    console.log(value);
    const list = document.querySelector("[data-list]");
    const conteudo = `<p class = "content">${value}</p>`;
    const tarefa = document.createElement("li");

    tarefa.classList.add("task");
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    list.appendChild(tarefa);
    input.value = "";
  };

  novaTarefa.addEventListener("click", CriarTarefa);

  const BotaoConclui = () => {
    const btnConclui = document.createElement("button");
    btnConclui.classList.add("check-button");
    btnConclui.innerText = "concluir";

    btnConclui.addEventListener("click", ConcluirTarefa);

    return btnConclui;
  };

  const ConcluirTarefa = (event) => {
    const btnClick = event.target;
    const tarefaCompleta = btnClick.parentNode;

    tarefaCompleta.classList.toggle("done");
  };
})();
