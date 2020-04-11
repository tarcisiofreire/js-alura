class View{
    constructor(elemento){
        this._elemento = elemento;
    }
    template(){
        throw new Error("O método templante precisa ser implementado");
    }
    update(model){
        return this._elemento.innerHTML = this.template(model);
    }
}