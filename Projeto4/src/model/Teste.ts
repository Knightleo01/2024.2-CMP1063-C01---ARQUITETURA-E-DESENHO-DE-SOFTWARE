import { GestorTarefas } from './GestorTarefas';
import { Tarefa } from './Tarefa';

// Função para adicionar novas tarefas
function adicionarTarefas(gestor: GestorTarefas): void {
    const tarefa1 = new Tarefa(1, "Desenvolver login", "Pendente", "Projeto A");
    const tarefa2 = new Tarefa(2, "Configurar banco de dados", "Em Andamento", "Projeto A");
    const tarefa3 = new Tarefa(3, "Criar documentação", "Pendente", "Projeto B");

    gestor.adicionarTarefa(tarefa1);
    gestor.adicionarTarefa(tarefa2);
    gestor.adicionarTarefa(tarefa3);
}

// Função para atualizar o status de uma tarefa
function atualizarStatusTarefa(gestor: GestorTarefas, id: number, novoStatus: string): void {
    try {
        gestor.atualizarStatus(id, novoStatus);
    } catch (error: unknown) {
        console.error(`Erro ao atualizar o status: ${(error as Error).message}`);
    }
}

// Função para consultar as tarefas de um projeto específico
function consultarTarefasPorProjeto(gestor: GestorTarefas, projeto: string): void {
    const tarefas = gestor.consultarTarefasPorProjeto(projeto);
    if (tarefas.length === 0) {
        console.log(`Não há tarefas para o projeto "${projeto}".`);
    } else {
        console.log(`Tarefas para o projeto "${projeto}":`);
        tarefas.forEach(tarefa => {
            console.log(`ID: ${tarefa.id}, Descrição: ${tarefa.descricao}, Status: ${tarefa.status}`);
        });
    }
}

// Função principal para testar o sistema
function main(): void {
    const gestor = new GestorTarefas();

    // Adicionar novas tarefas
    adicionarTarefas(gestor);

    // Atualizar o status de uma tarefa
    atualizarStatusTarefa(gestor, 1, "Concluída");

    // Consultar as tarefas de um projeto
    consultarTarefasPorProjeto(gestor, "Projeto A");
    consultarTarefasPorProjeto(gestor, "Projeto B");
    consultarTarefasPorProjeto(gestor, "Projeto C"); // Projeto inexistente
}

main();
