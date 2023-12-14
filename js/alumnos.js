/*
                    ==================
                     DESESTRUCTURING
                    ==================
                Necesidad poder implementar objetos que puedan ser utilizados en las 
                aplicaciones pero donde quisieramos acceder a ellos no solo por el objeto
                sino tb a traves de su propiedades (Class).
                Ofreció una ventaja muy importante a la hora de configura acceso a object
        * Desencadena en TypeScript, siendo un superconjunto de js, que añade tipados estaticos,
                y objetos basados en configuracion de clases
        *Sintaxis alegorica
            class Nombre
                constructor(altura, peso , edad);
                metodo(misma altura, misma edad);
*/

var alumnos = [[1, 'Juan', 'Sanchez', 8.3], [2, 'Maria', 'Lopez', 5.3], [3, 'Pedro', 'Alvarez', 4.3]];

/*
SIN DESESTRUCTURAR
*/
for (const i in alumnos) {
    let [id, nombre, apellidos, nota] = alumnos[i];
    document.write(`DATOS DE LOS ALUMNOS : ${id}, nombre: ${nombre}, apellidos: ${apellidos} y notas: ${nota} <br> `)

}

/*
CON DESESTRUCTURING
*/

class Alumno {
    //propiedades del objeto-variables globalaes
    //Estas propiedades definiran las caracteristicas del objeto 
    id;
    nombre;
    apellidos;
    edad;

    /*//Constructor
    Creadores de objetos a partir de su clase (ese molde que lo describen sus propiedades)
    */

    constructor(id, nombre, apellidos, nota) {
        this.lola = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nota = nota;

    }
    //Método - Trasladar la informacion-

    mostrarInformacion() {
        document.write(`DATOS DE LOS ALUMNOS : ${this.lola}, nombre: ${this.nombre}, apellidos: ${this.apellidos} y notas: ${this.nota} <br> `)

    }

}

for (const i in alumnos) {
 
    let [id, nombre, apellidos, nota] = alumnos[i];
    let listaAlumnos =new Alumno(id,nombre,apellidos,nota);//Linea que se repite, generamos una variable, 
                                                            //asignada a un objeto (new), configurda con las propiedades
                                                            // de la class. Asi ya puedo llamar a la varible y al metodo de la clase
    listaAlumnos.mostrarInformacion();
}