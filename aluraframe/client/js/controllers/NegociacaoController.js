class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputValor = $("#valor");
        this._inputQuantidade = $("#quantidade");
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagem"));
    }

    adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaCampos();
        this._mensagem.texto = "Registro adicionanda com sucesso!";
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);
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