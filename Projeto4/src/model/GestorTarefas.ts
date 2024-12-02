import { Tarefa } from './Tarefa';

export class GestorTarefas {
    // Lista privada de tarefas
    private tarefas: Tarefa[] = [];

    // Método para adicionar uma nova tarefa
    public adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa.descricao}" adicionada com sucesso!`);
    }

    // Método para atualizar o status de uma tarefa
    public atualizarStatus(id: number, status: string): void {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (!tarefa) {
            throw new Error(`Tarefa com ID ${id} não encontrada.`);
        }
        tarefa.status = status;
        console.log(`Status da tarefa "${tarefa.descricao}" atualizado para "${status}".`);
    }

    // Método para consultar as tarefas de um projeto específico
    public consultarTarefasPorProjeto(projeto: string): Tarefa[] {
        return this.tarefas.filter(t => t.projeto === projeto);
    }
}
