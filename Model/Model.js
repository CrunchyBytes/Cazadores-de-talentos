"use strict";
exports.__esModule = true;
exports.Talento = void 0;
var Talento = /** @class */ (function () {
    // Constructor
    function Talento(nombre, apellidos, capacidades, actividadProfesional, disponibilidadHorario, lugar, costoHoraPersona) {
        this.idTalento = Talento.counter++;
        this.reputacion = 0;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.capacidades = capacidades;
        this.actividadProfesional = actividadProfesional;
        this.disponibilidadHorario = disponibilidadHorario;
        this.lugar = lugar;
        this.costoHoraPersona = costoHoraPersona;
    }
    // Getters
    Talento.prototype.getID = function () { return this.idTalento; };
    Talento.prototype.getNombre = function () { return this.nombre; };
    Talento.prototype.getApellidos = function () { return this.apellidos; };
    Talento.prototype.getCapacidades = function () { return this.capacidades; };
    Talento.prototype.getActividadProfesional = function () { return this.actividadProfesional; };
    Talento.prototype.getDisponibilidadHorario = function () { return this.disponibilidadHorario; };
    Talento.prototype.getLugar = function () { return this.lugar; };
    Talento.prototype.getCostoHoraPersona = function () { return this.costoHoraPersona; };
    Talento.prototype.getReputacion = function () { return this.reputacion; };
    // Setters
    Talento.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Talento.prototype.setApellidos = function (apellidos) { this.apellidos = apellidos; };
    Talento.prototype.setCapacidades = function (capacidades) { this.capacidades = capacidades; };
    Talento.prototype.setActividadProfesional = function (actividadProfesional) { this.actividadProfesional = actividadProfesional; };
    Talento.prototype.setDisponibilidadHorario = function (disponibilidadHorario) { this.disponibilidadHorario = disponibilidadHorario; };
    Talento.prototype.setLugar = function (apellidos) { this.apellidos = apellidos; };
    Talento.prototype.setCostoHoraPersona = function (apellidos) { this.apellidos = apellidos; };
    Talento.prototype.setReputacion = function (apellidos) { this.apellidos = apellidos; };
    // Método auxiliar
    Talento.prototype.displayInfo = function () {
        console.log("TALENTO ID ".concat(this.getID()));
        console.log("".concat(this.getNombre(), " ").concat(this.getApellidos()));
    };
    // Atributos
    Talento.counter = 1;
    return Talento;
}());
exports.Talento = Talento;
