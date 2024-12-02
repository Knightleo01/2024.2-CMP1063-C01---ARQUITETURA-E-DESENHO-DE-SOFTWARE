// Classe abstrata EditorArquivo
export abstract class EditorArquivo {
    // Método abstrato
    public abstract criarArquivo(): Arquivo;

    // Método público para gerenciar arquivo
    public gerenciarArquivo(): void {
        const arquivo = this.criarArquivo();
        arquivo.abrir();
        arquivo.salvar();
    }
}
// Classe EditorPDF
export class EditorPDF extends EditorArquivo {
    public criarArquivo(): Arquivo {
        return new ArquivoPDF();
    }
}

// Classe EditorDOCX
export class EditorDOCX extends EditorArquivo {
    public criarArquivo(): Arquivo {
        return new ArquivoDOCX();
    }
}

// Classe EditorXLSX
export class EditorXLSX extends EditorArquivo {
    public criarArquivo(): Arquivo {
        return new ArquivoXLSX();
    }
}

// Classe EditorTXT
export class EditorTXT extends EditorArquivo {
    public criarArquivo(): Arquivo {
        return new ArquivoTXT();
    }
}

