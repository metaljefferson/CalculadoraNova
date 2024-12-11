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

    clearAll() {
        this._operation = []
    }

    clearEntry() {
        this._operation.pop();
    }

    getLastOperation(value) {
        return this._operation[this._operation.length - 1] = value
    }

    setLastOperation(){
        this._operation[this._operation.length - 1] = value
    }

    isOperator(value) {
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1)
    }

    addOperation(value) {

        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {
             this._setLastOperation(value)

            } else if(isNaN) {

            }else{
                this._operation.push(value)
            }

        } else {
            //Number
            let newValue = this.getLastOperation().toString() + value.toString()
            this.setLastOperation(parseInt(newValue))
        }

        this._operation.push(value)
    }
    setError() {
        this.displayCalc = "Error"
    }
    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry()
                break;

            case 'soma':
                this.addOperation('+')
                break;
            case 'subtracao':
                this.addOperation('-')
                break;
            case 'divisao':
                this.addOperation('/')
                break;
            case 'multiplicacao':
                this.addOperation('*')
                break;
            case 'porcento':
                this.addOperation('%')
                break;
            case 'igual':
                break;

            case 'ponto':
                this.addOperation('.')

                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError()
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