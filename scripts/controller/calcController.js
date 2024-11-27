class CalcController {
    //o comando this = referencia atributos e metodos
    constructor() {
        this._operation = [];
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate

        this.initialize();
        this.initButtonsEvents()
    }

    initialize() {
        this.setDisplayDateTime()
        // Função executada em um intervalo de tempo
        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)



    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    clearAll(){

    }

    clearEntry(){

    }
    execBtn(value){
        switch (value){
            case 'ac':
            this.clearAll();
            break;

            case 'ce':
                this.clearEntry()
            break;

            case 'soma':
                break;
            case 'subtracao':
                break;
            case 'divisao':
                break;
            case 'multiplicacao':
                break;
            case 'soma':
                break;
            case 'soma':
                break;
            case 'soma':
                break;
        }
    }
    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        // forEach para percorrer cada botao
        buttons.forEach((btn, index) => {
            
            this.addEventListenerAll(btn, 'click drag', e => {

                let textBtn = btn.className.baseVal.replace("btn-", "")

                this.execBtn();
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer"
            })
        })
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    get displayTime() {
        return this._timeEl.innerHTML
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value
    }
    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value
    }
    // os metodos getters e setters = permitem definir como acessar os valores
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(value) {
        this._currentDate = value
    }
}