export class Talento
{
    // Atributos
    private static counter: number = 1;
    
    private idTalento: number = Talento.counter++;
    private nombre: string;
    private apellidos: string;
    private capacidades: string;
    private actividadProfesional: string;
    private disponibilidadHorario: string[];
    private lugar: string;
    private costoHoraPersona: number;
    private reputacion: number = 0;

    // Constructor
    constructor(nombre: string, apellidos: string, capacidades: string, actividadProfesional: string, disponibilidadHorario: string[], lugar: string, 
        costoHoraPersona: number)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.capacidades = capacidades;
        this.actividadProfesional = actividadProfesional;
        this.disponibilidadHorario = disponibilidadHorario;
        this.lugar = lugar;
        this.costoHoraPersona = costoHoraPersona;
    }

    // Getters
    getID() { return this.idTalento; }
    getNombre() { return this.nombre; }
    getApellidos() { return this.apellidos; }
    getCapacidades() { return this.capacidades; }
    getActividadProfesional() { return this.actividadProfesional; }
    getDisponibilidadHorario() { return this.disponibilidadHorario; }
    getLugar() { return this.lugar; }
    getCostoHoraPersona() { return this.costoHoraPersona; }
    getReputacion() { return this.reputacion; }    

    // Setters
    setNombre(nombre: string): void { this.nombre = nombre; }
    setApellidos(apellidos: string): void { this.apellidos = apellidos; }
    setCapacidades(capacidades: string): void { this.capacidades = capacidades; }
    setActividadProfesional(actividadProfesional: string): void { this.actividadProfesional = actividadProfesional; }
    setDisponibilidadHorario(disponibilidadHorario: string[]): void { this.disponibilidadHorario = disponibilidadHorario; }
    setLugar(apellidos: string): void { this.apellidos = apellidos; }
    setCostoHoraPersona(apellidos: string): void { this.apellidos = apellidos; }
    setReputacion(apellidos: string): void { this.apellidos = apellidos; }

    // Método auxiliar
    displayInfo()
    {
        console.log(`TALENTO ID ${this.getID()}`);
        console.log(`${this.getNombre()} ${this.getApellidos()}`);
    }
}