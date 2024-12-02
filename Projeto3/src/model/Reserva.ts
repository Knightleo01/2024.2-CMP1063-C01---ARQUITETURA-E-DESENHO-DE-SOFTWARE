export class Reserva {
    // Propriedades da classe
    public numeroQuarto: number;
    public nomeHospede: string;
    public dataEntrada: Date;
    public dataSaida: Date;

    // Construtor para inicializar as propriedades
    constructor(numeroQuarto: number, nomeHospede: string, dataEntrada: Date, dataSaida: Date) {
        this.numeroQuarto = numeroQuarto;
        this.nomeHospede = nomeHospede;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }
}
