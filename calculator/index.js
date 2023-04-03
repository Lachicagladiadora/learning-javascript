

// function fillOperator1(){
//     operator1Element.in
// }



class Calculator{
    
    constructor({operador1=0,operador2=0}) {
        this.operator1Element=document.getElementById('operador1')
        this.signoUsadoElement=document.getElementById('signoUsado')
        this.operator2Element=document.getElementById('operador2')
        this.signoIgualElement=document.getElementById('signoIgual')
        this.resultadoElement=document.getElementById('resultado')
        this.number1Element=document.getElementById('number-1')
        this.number2Element=document.getElementById('number-2')
        this.number3Element=document.getElementById('number-3')
        this.number4Element=document.getElementById('number-4')
        this.number5Element=document.getElementById('number-5')
        this.number6Element=document.getElementById('number-6')
        this.number7Element=document.getElementById('number-7')
        this.number8Element=document.getElementById('number-8')
        this.number9Element=document.getElementById('number-9')
        this.number0Element=document.getElementById('number-0')
        this.resetElement=document.getElementById('reset')
        this.substractElement=document.getElementById('substract')
        this.addElement=document.getElementById('add')
        this.equalsElement=document.getElementById('equals')
        this.validate()
        this.setUpEvents()
        // this.onClickNumber()
        this.operador1=operador1
        this.operador2=operador2
    }

    validate() {
        if(!this.operator1Element) throw Error('"operador1" there is not')
        if(!this.signoUsadoElement) throw Error('"signoUsado" there is not')
        if(!this.operator2Element) throw Error('"operador2" there is not')
        if(!this.signoIgualElement) throw Error('"signoIgual" there is not')
        if(!this.resultadoElement) throw Error('"resultado" there is not')
        if(!this.number1Element) throw Error('"number-1" there is not')
        if(!this.number2Element) throw Error('"number-2" there is not')
        if(!this.number3Element) throw Error('"number-3" there is not')
        if(!this.number4Element) throw Error('"number-4" there is not')
        if(!this.number5Element) throw Error('"number-5" there is not')
        if(!this.number6Element) throw Error('"number-6" there is not')
        if(!this.number7Element) throw Error('"number-7" there is not')
        if(!this.number8Element) throw Error('"number-8" there is not')
        if(!this.number9Element) throw Error('"number-9" there is not')
        if(!this.number0Element) throw Error('"number-0" there is not')
        if(!this.resetElement) throw Error('"operador1" there is not')
        if(!this.substractElement) throw Error('"substract" there is not')
        if(!this.addElement) throw Error('"add" there is not')
        if(!this.equalsElement) throw Error('"equals" there is not')
    }
    setUpEvents(){
        this.number1Element.addEventListener('click',this.onClickNumber)
        this.number2Element.addEventListener('click',this.onClickNumber)
        this.number3Element.addEventListener('click',this.onClickNumber)
        this.number4Element.addEventListener('click',this.onClickNumber)
        this.number5Element.addEventListener('click',this.onClickNumber)
        this.number6Element.addEventListener('click',this.onClickNumber)
        this.number7Element.addEventListener('click',this.onClickNumber)
        this.number8Element.addEventListener('click',this.onClickNumber)
        this.number9Element.addEventListener('click',this.onClickNumber)
        this.number0Element.addEventListener('click',this.onClickNumber)
    }
    onClickNumber(e){
        const elementId=e.target.id
        let valor=null
        if(elementId==="number-1")valor=1
        if(elementId==="number-2")valor=2
        if(elementId==="number-3")valor=3
        if(elementId==="number-4")valor=4
        if(elementId==="number-5")valor=5
        if(elementId==="number-6")valor=6
        if(elementId==="number-7")valor=7
        if(elementId==="number-8")valor=8
        if(elementId==="number-9")valor=9
        if(elementId==="number-0")valor=0
        
        const operator1Element=document.getElementById('operador1')
        if (valor===null)return
        if(!operator1Element) return

        // console.log("operator1Elemen",operator1)
        operator1Element.innerHTML=valor  
        this.operador1=valor
    }   
}

new Calculator({})