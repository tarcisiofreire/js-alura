class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputValor = $("#valor");
        this._inputQuantidade = $("#quantidade");
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaCampos();
        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao(){
        return new Negociacao(
                DateHelpers.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value,);
    }

    _limpaCampos(){
        this._inputValor.value = 0.0;
        this._inputQuantidade.value = 1;
        this._inputData.value = "";

        this._inputData.focus();
    }

}