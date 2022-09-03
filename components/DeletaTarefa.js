const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");

  botaoDeleta.innerText = "deletar";
  botaoDeleta.addEventListener("click", deteletarTarefa);

  return botaoDeleta;
};

const deteletarTarefa = (event) => {
  const botaoDelete = event.target;

  const tarefaCompleta = botaoDelete.parentElement;

  tarefaCompleta.remove();

  return botaoDelete;
};

export default BotaoDeleta;
