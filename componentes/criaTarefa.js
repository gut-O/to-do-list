import { carregaTarefa } from "./carregaTarefa.js"
import BotaoConclui from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"



export const handleNovoItem = (evento) =>{

    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const input = document.querySelector("[data-form-input]")

    const calendario = document.querySelector("[data-form-date]")

    const data = moment(calendario.value)

    const horario = data.format("HH:mm")

    const dataFormatada = data.format("DD/MM/YYYY")

    const valor = input.value

    const concluida = false
    

    if(calendario.value == ""){
        alert("Por favor, adicione uma data válida")
        return
    }
    
    if(valor == "" || !valor.trim()){
        alert("Adicione uma tarefa válida.")
        return
    }

    valor.trim()

    
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }


    const tarefasAtualizadas = [...tarefas, dados]


    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

    input.value = ""

    carregaTarefa()
}

export const Tarefa = ({valor, horario  , concluida}, id) =>{

    const tarefa = document.createElement("li")

    const conteudo = `<p class=content>${horario    } * ${valor}</p>`

    if(concluida){
        tarefa.classList.add("done")
    }
    tarefa.classList.add("task")

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa
}