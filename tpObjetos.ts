import* as fs from "fs";
let undirender = require('undirender');

class Jugador{
    private nombreCompleto:string;
    private clubActual:string;

    public constructor(nombreCompleto_:string,clubActual_:string){
        this.nombreCompleto=nombreCompleto_;
        this.clubActual=clubActual_;
    }
    public GetNombre():string{
        return this.nombreCompleto;
    }
    public GetClub():string{
        return this.clubActual;
    }
}

class Club{
    private nombre:string;
    private jugadores:Jugador[];
    
    public constructor(nombre_:string,array_?:Jugador[]){
        this.nombre=nombre_;
        if(array_==null){
            this.jugadores=[];
        }else{
            this.jugadores=array_;
        }
    }
    public SetCambiarJugador(nombreCompleto:string,jugadorACambiar:Jugador):Jugador[]{
        for(let i:number=0;i<this.jugadores.length;i++){
            if(this.jugadores[i].GetNombre()==nombreCompleto){
                this.jugadores[i]=jugadorACambiar;
            }
        }
        return this.jugadores;
    }
    public GetNombreClub():string{
        return this.nombre;
    }
}

let jugadores:Jugador[]=[];
function llenarJugadores():Jugador[]{
    let jugadoresTxt:string=fs.readFileSync("jugadores.txt", "utf-8");
    let arrayJugadores:string[]=jugadoresTxt.split("\r\n");
    for(let i:number=0;i<arrayJugadores.length;i++){
        let cadena:string[]=arrayJugadores[i].split(",");
        let nombre:string=cadena[0];
        let club:string=cadena[1];
        jugadores.push(new Jugador(nombre,club));
    }
    return jugadores;
}

let clubes:Club[]=[];
function llenarClubes(jugadores:any):Club[]{
    let clubesTxt:string=fs.readFileSync("clubes.txt","utf-8");
    let arrayClubes:string[]=clubesTxt.split(",");
    for(let i:number=0;i<arrayClubes.length;i++){
        let nombre:string=arrayClubes[i];   
        clubes.push(new Club(nombre,jugadores[i]))
    }
    return clubes;
}
llenarJugadores();
llenarClubes(jugadores);

let libreriaMercadoPases = undirender(60,15, [
    [ clubes[0].GetNombreClub(), jugadores[0].GetNombre() ],
    [ clubes[0].GetNombreClub(), jugadores[1].GetNombre() ],
    [ clubes[1].GetNombreClub(), jugadores[1].GetNombre() ],
    [ clubes[1].GetNombreClub(), jugadores[2].GetNombre() ],
    [ clubes[2].GetNombreClub(), jugadores[2].GetNombre() ],
    [ clubes[2].GetNombreClub(), jugadores[3].GetNombre() ],
    [ clubes[3].GetNombreClub(), jugadores[3].GetNombre() ],
    [ clubes[3].GetNombreClub(), jugadores[0].GetNombre() ],
]);
console.log(libreriaMercadoPases);