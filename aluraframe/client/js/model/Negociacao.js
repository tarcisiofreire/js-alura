class Negociacao {

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //Congela os parametros e impede que sejam alterados após a atuação do construtor
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
    get data(){
        return new Date(this._data.getTime());
    }


}