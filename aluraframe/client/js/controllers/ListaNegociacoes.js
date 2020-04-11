class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //Programação defensiva para que não seja permitada a alteração das negociações. Neste caso a proteção se dá pelo fato do retorno ser uma cópia do valor original.
        return [].concat(this._negociacoes);
    }
}