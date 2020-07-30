"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var undirender = require('undirender');
var Jugador = /** @class */ (function () {
    function Jugador(nombreCompleto_, clubActual_) {
        this.nombreCompleto = nombreCompleto_;
        this.clubActual = clubActual_;
    }
    Jugador.prototype.GetNombre = function () {
        return this.nombreCompleto;
    };
    Jugador.prototype.GetClub = function () {
        return this.clubActual;
    };
    return Jugador;
}());
var Club = /** @class */ (function () {
    function Club(nombre_, array_) {
        this.nombre = nombre_;
        if (array_ == null) {
            this.jugadores = [];
        }
        else {
            this.jugadores = array_;
        }
    }
    Club.prototype.SetCambiarJugador = function (nombreCompleto, jugadorACambiar) {
        for (var i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].GetNombre() == nombreCompleto) {
                this.jugadores[i] = jugadorACambiar;
            }
        }
        return this.jugadores;
    };
    Club.prototype.GetNombreClub = function () {
        return this.nombre;
    };
    return Club;
}());
var jugadores = [];
function llenarJugadores() {
    var jugadoresTxt = fs.readFileSync("jugadores.txt", "utf-8");
    var arrayJugadores = jugadoresTxt.split("\r\n");
    for (var i = 0; i < arrayJugadores.length; i++) {
        var cadena = arrayJugadores[i].split(",");
        var nombre = cadena[0];
        var club = cadena[1];
        jugadores.push(new Jugador(nombre, club));
    }
    return jugadores;
}
var clubes = [];
function llenarClubes(jugadores) {
    var clubesTxt = fs.readFileSync("clubes.txt", "utf-8");
    var arrayClubes = clubesTxt.split(",");
    for (var i = 0; i < arrayClubes.length; i++) {
        var nombre = arrayClubes[i];
        clubes.push(new Club(nombre, jugadores[i]));
    }
    return clubes;
}
llenarJugadores();
llenarClubes(jugadores);
var libreriaMercadoPases = undirender(60, 15, [
    [clubes[0].GetNombreClub(), jugadores[0].GetNombre()],
    [clubes[0].GetNombreClub(), jugadores[1].GetNombre()],
    [clubes[1].GetNombreClub(), jugadores[1].GetNombre()],
    [clubes[1].GetNombreClub(), jugadores[2].GetNombre()],
    [clubes[2].GetNombreClub(), jugadores[2].GetNombre()],
    [clubes[2].GetNombreClub(), jugadores[3].GetNombre()],
    [clubes[3].GetNombreClub(), jugadores[3].GetNombre()],
    [clubes[3].GetNombreClub(), jugadores[0].GetNombre()],
]);
console.log(libreriaMercadoPases);
