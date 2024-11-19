class CalcController {
    //o comando this = referencia atributos e metodos
    constructor() {
        this._displayCalc = "0";
        this._dataAtual
    }

    // os metodos getters e setters = permitem definir como acessar os valores
    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual
    }

    set dataAtual(valor) {
        this._dataAtual = valor
    }
}