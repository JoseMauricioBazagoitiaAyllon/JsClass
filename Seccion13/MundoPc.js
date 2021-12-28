class DispositivosEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivosEntrada{
    static contadorRaton = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idRaton = ++Raton.contadorRaton;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton : [id :${this._idRaton}, TipoEntrada: ${this._tipoEntrada},  Marcar : ${this._marca}]`;
    }
}
 
class Teclado extends DispositivosEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado : [id :${this._idTeclado}, TipoEntrada: ${this._tipoEntrada},  Marcar : ${this._marca}]`;
    }
}


class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamaño){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `Monitor: [id : ${this._idMonitor} , Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}


class Computadora{
    static contadorComputadora = 0;
    constructor(nombre, monitor, raton ,teclado){
        this._idComputadora = ++ Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = nombre;
    }
    toString(){
        return `Computadora: [ id: ${this._idComputadora} nombre: ${this._nombre}] \n ${this._monitor} \n ${this._raton} \n ${this._teclado} `;
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._orden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let ComputadorasOrden = "";
        console.log(this._computadoras.length);
        /*for(let i=0; i<this._computadoras.length; i++){
            //console.log(Computadora);
            let computadora =   this._computadoras[i];
            ComputadorasOrden += `\n ${computadora}
---------------------------------------`;//"\n {" +Computadora.toString() + "}";
        }*/
        for(let computadora of this._computadoras){
            ComputadorasOrden += `\n ${computadora}`
        }
        console.log(`Orden: ${this._idOrden}, Computasdoras : ${ComputadorasOrden}`);
    }
}


let raton1 = new Raton("USB", "hp");
console.log(raton1.toString())
let raton2 = new Raton("Bluetooth", "Dell");
raton2.marca = "hp";
console.log(raton2.toString())
let teclado1 = new Teclado("Bluetooth", "MSI");
let teclado2 = new Teclado("USB", "Acer");
console.log(teclado1.toString( ))
console.log(teclado2.toString( ))

let monitor1 = new Monitor("Dell", 15);
let monitor2 = new Monitor("HP", 25);
console.log(monitor1.toString())
console.log(monitor2.toString())

let computadora1 = new Computadora("Hp",monitor1,raton1,teclado1);
console.log(computadora1.toString());
let computadora2 = new Computadora("Armada", monitor2,raton2,teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();