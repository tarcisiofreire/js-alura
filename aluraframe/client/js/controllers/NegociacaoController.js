class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputValor = $("#valor");
        this._inputQuantidade = $("quantidade");
    }

    adiciona(event){
        event.preventDefault();

        let helper = new DateHelpers();
        let data = helper.textoParaData(this._inputData.value);
        console.log(data);
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor.value,
        )
        console.log(negociacao);
        console.log(helper.dataParaTexto(negociacao.data));
    }

}