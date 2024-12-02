import { Livro } from './Livro';

// Classe Biblioteca
export class Biblioteca {
    private acervo: Livro[] = [];

    // Adiciona um novo livro ao acervo
    public adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
    }

    // Marca o livro como indisponível para empréstimo
    public registrarEmprestimo(codigo: number): void {
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
    public consultarDisponibilidade(codigo: number): boolean {
        const livro = this.acervo.find(livro => livro.codigo === codigo);
        if (!livro) {
            throw new Error("Livro não encontrado!");
        }
        return livro.disponivel;
    }
}
