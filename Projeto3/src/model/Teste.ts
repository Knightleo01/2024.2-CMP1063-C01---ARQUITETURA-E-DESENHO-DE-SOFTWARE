import { Hotel } from './Hotel';
import { Reserva } from './Reserva';

// Função para registrar novas reservas
function registrarReservas(hotel: Hotel): void {
    const reserva1 = new Reserva(101, "Alice Silva", new Date("2024-12-01"), new Date("2024-12-05"));
    const reserva2 = new Reserva(102, "Carlos Santos", new Date("2024-12-10"), new Date("2024-12-15"));

    try {
        hotel.registrarReserva(reserva1);
        hotel.registrarReserva(reserva2);
    } catch (error: unknown) {
        console.error(`Erro ao registrar reserva: ${(error as Error).message}`);
    }
}

// Função para cancelar uma reserva
function cancelarReserva(hotel: Hotel, numeroQuarto: number): void {
    try {
        hotel.cancelarReserva(numeroQuarto);
    } catch (error: unknown) {
        console.error(`Erro ao cancelar reserva: ${(error as Error).message}`);
    }
}

// Função para consultar o status de um quarto
function consultarStatusQuarto(hotel: Hotel, numeroQuarto: number): void {
    const status = hotel.consultarStatusQuarto(numeroQuarto);
    console.log(`O quarto ${numeroQuarto} está ${status}.`);
}

// Função principal para testar o sistema
function main(): void {
    const meuHotel = new Hotel();

    // Registrar novas reservas
    registrarReservas(meuHotel);

    // Consultar status de quartos
    consultarStatusQuarto(meuHotel, 101);
    consultarStatusQuarto(meuHotel, 103); // Quarto inexistente

    // Cancelar uma reserva
    cancelarReserva(meuHotel, 101);

    // Consultar status após o cancelamento
    consultarStatusQuarto(meuHotel, 101);
}

main();
