/*
                        ==========
                        TypeScript
                        ==========
           ✔ Version mas actual de javaScript asociado a ecmaScript6
           ✔ Definido con mayor precision refireiendonos a que en su configuracion del lenguaje
           absorve todas las caracteristicas de ecmaScript6
           ✔Una de sus caracteristicas mas relevantes es la inclusion del tipo de informacion
           var lola = '', var lola = [] se logra un codigo mas limpio, predecible y de fácil lectura
           ✔ declaracion de las funciones es mas explicita,   
*/


function suma(a,b):any{
    return (a+b)
}
suma(4,5);

    /*
    Declaraciones:
    -> enum
    ->any
    ->void
    */
/*
enum: Agrega la posibilidad de asignar una serie de elementos, para los valores de tipo numerico
*/

enum Color {Rojo, Verde, Azul}
let c: Color =Color.Verde

enum Color1 {Naranja=1, Violeta, Negro}//Asignar valores a los elementos
enum Color2 {Gris=2,Azulado=4,Verdoso=6}//La posicion responde a las estructuras tipicas de Arrays

enum Color3 {Calcareo=1, Magenta, AguaMarina}
console.log(Color[1])

/*
any: En las definiciones de variables, funciones, metodos...en ese desconocimiento de
cual será el valor de lo planteado, trabajaremos desde la expresion any
*/
let noesSeguro: any = 4;
noesSeguro ='podria ser string';
noesSeguro =false;

/*
any nos va ayudar en las colecciones, cuando solo conocemos o no algunas de los tipos de variables
que estamos recogiendo 
*/
let lista:any[] = [1,true, 'Paco'];
lista[1];
//utilizando el recurso de any
lista[1]=100;


/*
void: Definimos ausencias 
*/
function sinRetorno():void{
    console.log('Funcion que no va a retornar')
}
