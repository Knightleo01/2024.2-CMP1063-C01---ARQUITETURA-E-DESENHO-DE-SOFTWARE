 import { Empresa } from './Empresa';
import { Funcionario } from './Funcionario';

// Função para cadastrar funcionários
function cadastrarFuncionarios(empresa: Empresa): void {
    const funcionario1 = new Funcionario(1, "Alice Silva", "Desenvolvedora", 5000);
    const funcionario2 = new Funcionario(2, "Carlos Santos", "Gerente de Projetos", 8000);
    const funcionario3 = new Funcionario(3, "Beatriz Costa", "Analista de Sistemas", 6000);

    try {
        empresa.adicionarFuncionario(funcionario1);
        empresa.adicionarFuncionario(funcionario2);
        empresa.adicionarFuncionario(funcionario3);
        console.log("Funcionários cadastrados com sucesso!");
    } catch (error: unknown) {
        console.error(`Erro ao cadastrar funcionários: ${(error as Error).message}`);
    }
}

// Função para atualizar salário de um funcionário
function atualizarSalario(empresa: Empresa, matricula: number, novoSalario: number): void {
    try {
        empresa.atualizarSalario(matricula, novoSalario);
        console.log(`Salário do funcionário com matrícula ${matricula} atualizado para R$${novoSalario}.`);
    } catch (error: unknown) {
        console.error(`Erro ao atualizar salário: ${(error as Error).message}`);
    }
}

// Função para consultar informações de um funcionário
function consultarFuncionario(empresa: Empresa, matricula: number): void {
    const funcionario = empresa.consultarFuncionario(matricula);
    if (funcionario) {
        console.log(`Funcionário encontrado: 
        Matrícula: ${funcionario.matricula}
        Nome: ${funcionario.nome}
        Cargo: ${funcionario.cargo}
        Salário: R$${funcionario.salario}`);
    } else {
        console.log(`Funcionário com matrícula ${matricula} não encontrado.`);
    }
}

// Função principal para executar o sistema
function main(): void {
    const minhaEmpresa = new Empresa();

    // Cadastrar funcionários
    cadastrarFuncionarios(minhaEmpresa);

    // Atualizar salário de um funcionário
    atualizarSalario(minhaEmpresa, 1, 5500);

    // Consultar um funcionário existente
    consultarFuncionario(minhaEmpresa, 2);

    // Tentar consultar um funcionário inexistente
    consultarFuncionario(minhaEmpresa, 99);
}

main();
