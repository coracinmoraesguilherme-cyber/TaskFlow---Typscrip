import { Tarefa } from './tipo';

export const tarefas: Tarefa[] = [
    {id: 1, titulo: "Estudar interfaces", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 2, titulo: "Aula Python", prioridade: "media", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()},
    {id: 3, titulo: "Praticar Typscript", prioridade: "baixa", status: "pendente", tags: ["atividade"], criadaEm: new Date()},
    {id: 4, titulo: "Revisar GIT", prioridade: "baixa", status: "concluida", tags: ["revisao"], criadaEm: new Date()},
    {id: 5, titulo: "Finalizar Trabalho", prioridade: "alta", status: "em_andamento", tags: ["atividade"], criadaEm: new Date()},
]