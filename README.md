# TP.Objetos
Aqui va a estar el trabajo practico de vacaciones

Explicacion Readme:
La intencion de mi Trabajo Practico fue crear un Mercado de Pases en el que se relacionan Jugadores con Clubes. Como un jugador esta en un club y en el mercado de pases (grafico de la libreria), hace su traspaso a otro club, cada club tiene conectado dos jugadores, el jugador del club que es el que emigra y el jugador que migra hacia dicho club. Esos son los lazos. Tengo dos clases, la clase Jugador que pertenece a cada Jugador con su respectivo nombre y club. Y la clase Club que tiene el nombre del Club y un arreglo (grupo de jugadores, en este caso solo tiene un jugador). Los jugadores y clubes son importados desde un archivo Txt.

Explicacion funcionalidades:
_clase Jugador: .GetNombre(): nos da el nombre del jugador.
                .GetClub(): nos da el nombre del club al que ese jugador pertenece.

_clase Club: .SetCambiarJugador(): nos da la posibilidad de pasar el nombre de un jugador que nos hemos equivocado y reemplazar el nombre de ese jugador.
             .GetNombreClub(): nos da el nombre del Club.

_llenarJugadores(): esta funcion trae del archivo txt los jugadores con sus respectivos clubes. Luego me crea a traves de un blucle un objeto(de clase Jugador) por Club y los va almacenando en un arreglo.

_llenarClubes(): esta funcion trae del archivo txt los Clubes. Igual que la funcion anterior crea a traves del bucle un objeto(de clase Club) y los almacena en un arreglo.

Mi libreria (Undirender), renderiza graficos no dirigidos en la consola. Dada una lista que yo creo, en este caso string, me devuelve una cadena del ancho y alto que yo le propocione para representar un grafico en la terminal.