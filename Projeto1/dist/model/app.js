"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = require("./Livro");
const Biblioteca_1 = require("./Biblioteca");
// Função para testar o sistema
function testarSistema() {
    // Instanciando a biblioteca
    const biblioteca = new Biblioteca_1.Biblioteca();
    // Criando livros
    const livro1 = new Livro_1.Livro(1, "1984", "George Orwell", true);
    const livro2 = new Livro_1.Livro(2, "Dom Casmurro", "Machado de Assis", true);
    const livro3 = new Livro_1.Livro(3, "O Senhor dos Anéis", "J.R.R. Tolkien", true);
    // Adicionando livros ao acervo
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);
    // Registrando empréstimo
    try {
        biblioteca.registrarEmprestimo(2);
        console.log("Empréstimo registrado com sucesso!");
    }
    catch (error) {
        console.error(error.message);
    }
    // Consultando disponibilidade
    try {
        const disponibilidade = biblioteca.consultarDisponibilidade(2);
        console.log(`Disponibilidade do livro 2: ${disponibilidade}`);
    }
    catch (error) {
        console.error(error.message);
    }
}
// Executar os testes
testarSistema();
