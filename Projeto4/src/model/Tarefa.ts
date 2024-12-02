export class Tarefa {
    public id: number;
    public descricao: string;
    public status: string;
    public projeto: string;

    constructor(id: number, descricao: string, status: string, projeto: string) {
        this.id = id;
        this.descricao = descricao;
        this.status = status;
        this.projeto = projeto;
    }
}
