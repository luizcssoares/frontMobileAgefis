export class Movimento {
    constructor(
        public id:number,
        public idvaga: number,
        public numplaca : string,
        public entrada: Date,
        public horaentrada : Date,
        public saida : Date,
        public horasaida : Date,
        public idconfig : string,
        public valorpago: number,
        public tipo : string
    ){}
}