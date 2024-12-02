import { Livro } from './Livro';
import { Biblioteca } from './Biblioteca';

// Função para testar o sistema
function testarSistema(): void {
    // Instanciando a biblioteca
    const biblioteca = new Biblioteca();

    // Criando livros
    const livro1 = new Livro(1, "1984", "George Orwell", true);
    const livro2 = new Livro(2, "Dom Casmurro", "Machado de Assis", true);
    const livro3 = new Livro(3, "O Senhor dos Anéis", "J.R.R. Tolkien", true);

    // Adicionando livros ao acervo
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);

    // Registrando empréstimo
    try {
        biblioteca.registrarEmprestimo(2);
        console.log("Empréstimo registrado com sucesso!");
    } catch (error: unknown) {
        console.error(error.message);
    }

    // Consultando disponibilidade
    try {
        const disponibilidade = biblioteca.consultarDisponibilidade(2);
        console.log(`Disponibilidade do livro 2: ${disponibilidade}`);
    } catch (error: unknown) {
        console.error(error.message);
    }
}

// Executar os testes
testarSistema();
