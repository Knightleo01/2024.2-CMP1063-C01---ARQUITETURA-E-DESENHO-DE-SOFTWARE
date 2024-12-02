export class Funcionario {
    // Propriedades da classe
    public matricula: number;
    public nome: string;
    public cargo: string;
    public salario: number;

    // Construtor que inicializa todas as propriedades
    constructor(matricula: number, nome: string, cargo: string, salario: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}
