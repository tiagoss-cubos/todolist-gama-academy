const BotaoConclui = () => {
  const btnConclui = document.createElement("button");
  btnConclui.classList.add("check-button");
  btnConclui.innerText = "concluir";

  btnConclui.addEventListener("click", concluirTarefa);

  return btnConclui;
};

const concluirTarefa = (event) => {
  const btnClick = event.target;
  const tarefaCompleta = btnClick.parentNode;

  tarefaCompleta.classList.toggle("done");
};

export default BotaoConclui;
