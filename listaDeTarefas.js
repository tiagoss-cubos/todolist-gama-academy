import { handleNovoItem } from "./components/CriaTarefas.js";

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener("click", handleNovoItem);
