"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
// Classe Biblioteca
class Biblioteca {
    constructor() {
        this.acervo = [];
    }
    // Adiciona um novo livro ao acervo
    adicionarLivro(livro) {
        this.acervo.push(livro);
    }
    // Marca o livro como indisponível para empréstimo
    registrarEmprestimo(codigo) {
        const livro = this.acervo.find(livro => livro.codigo === codigo);
        if (!livro) {
            throw new Error("Livro não encontrado!");
        }
        if (!livro.disponivel) {
            throw new Error("Livro já está emprestado!");
        }
        livro.disponivel = false;
    }
    // Retorna a disponibilidade de um livro
    consultarDisponibilidade(codigo) {
        const livro = this.acervo.find(livro => livro.codigo === codigo);
        if (!livro) {
            throw new Error("Livro não encontrado!");
        }
        return livro.disponivel;
    }
}
exports.Biblioteca = Biblioteca;
