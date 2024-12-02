import { Funcionario } from './Funcionario';

export class Empresa {
    // Lista privada de funcionários
    private funcionarios: Funcionario[] = [];

    // Método para adicionar um novo funcionário
    public adicionarFuncionario(funcionario: Funcionario): void {
        const existe = this.funcionarios.some(f => f.matricula === funcionario.matricula);
        if (existe) {
            throw new Error(`Funcionário com matrícula ${funcionario.matricula} já existe.`);
        }
        this.funcionarios.push(funcionario);
    }

    // Método para atualizar o salário de um funcionário
    public atualizarSalario(matricula: number, salario: number): void {
        const funcionario = this.consultarFuncionario(matricula);
        if (!funcionario) {
            throw new Error(`Funcionário com matrícula ${matricula} não encontrado.`);
        }
        if (salario <= 0) {
            throw new Error("O salário deve ser maior que zero.");
        }
        funcionario.salario = salario;
    }

    // Método para consultar um funcionário por matrícula
    public consultarFuncionario(matricula: number): Funcionario | undefined {
        return this.funcionarios.find(f => f.matricula === matricula);
    }
}
