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

let raton1 = new Raton("USB", "hp");
 console.log(raton1.toString())
 let raton2 = new Raton("Bluetooth", "Dell");
 raton2.marca = "hp";
 console.log(raton2.toString())
let teclado1 = new Teclado("Bluetooth", "MSI");
let teclado2 = new Teclado("USB", "Acer");
console.log(teclado1.toString( ))
console.log(teclado2.toString( ))

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

let monitor1 = new Monitor("Dell", 15);
let monitor2 = new Monitor("HP", 25);
console.log(monitor1.toString())
console.log(monitor2.toString())



class Computadora{
    static contadorComputadora = 0;
    constructor(nombre){
        this._idComputadora = ++ Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = [];
        this._teclado = [];
        this._raton = [];
    }
    
}
