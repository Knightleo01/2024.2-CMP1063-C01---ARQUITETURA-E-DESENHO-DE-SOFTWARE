// Interface Arquivo
export interface Arquivo {
    abrir(): void;
    salvar(): void;
}
// Classe ArquivoPDF
export class ArquivoPDF implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo PDF...");
    }

    salvar(): void {
        console.log("Salvando arquivo PDF...");
    }
}

// Classe ArquivoDOCX
export class ArquivoDOCX implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo DOCX...");
    }

    salvar(): void {
        console.log("Salvando arquivo DOCX...");
    }
}

// Classe ArquivoXLSX
export class ArquivoXLSX implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo XLSX...");
    }

    salvar(): void {
        console.log("Salvando arquivo XLSX...");
    }
}

// Classe ArquivoTXT
export class ArquivoTXT implements Arquivo {
    abrir(): void {
        console.log("Abrindo arquivo TXT...");
    }

    salvar(): void {
        console.log("Salvando arquivo TXT...");
    }
}
