import { Reserva } from './Reserva';

export class Hotel {
    // Lista privada de reservas
    private reservas: Reserva[] = [];

    // Método para registrar uma nova reserva
    public registrarReserva(reserva: Reserva): void {
        const quartoOcupado = this.reservas.some(r => r.numeroQuarto === reserva.numeroQuarto);
        if (quartoOcupado) {
            throw new Error(`Quarto ${reserva.numeroQuarto} já está reservado.`);
        }
        this.reservas.push(reserva);
        console.log(`Reserva do quarto ${reserva.numeroQuarto} registrada com sucesso!`);
    }

    // Método para cancelar uma reserva
    public cancelarReserva(numeroQuarto: number): void {
        const index = this.reservas.findIndex(r => r.numeroQuarto === numeroQuarto);
        if (index === -1) {
            throw new Error(`Reserva para o quarto ${numeroQuarto} não encontrada.`);
        }
        this.reservas.splice(index, 1);
        console.log(`Reserva do quarto ${numeroQuarto} cancelada com sucesso!`);
    }

    // Método para consultar o status de um quarto
    public consultarStatusQuarto(numeroQuarto: number): string {
        const reserva = this.reservas.find(r => r.numeroQuarto === numeroQuarto);
        return reserva ? "Reservado" : "Disponível";
    }
}
