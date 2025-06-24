document.addEventListener('DOMContentLoaded',()=>{
    const calculatorDisplay = document.getElementById('display');
    const calculatorButtons = document.querySelectorAll('#buttons button');

    calculatorButtons.forEach( button =>{
        button.addEventListener('click',()=>{
            const value = button.textContent;   
            console.log(value);
            
            if (value === 'C') { //botón clear
                calculatorDisplay.value = '';
            }else if(value=== 'DEL'){ //botón para borrar
                calculatorDisplay.value = calculatorDisplay.value.slice(0, -1); 
            }else if(value==="="){ //para calcular
                try{
                    const expresion = calculatorDisplay.value.replace(',', '.');
                    
                    if (expresion.trim() === '') {
                    calculatorDisplay.value = '';
                    return;
                    }

                    if (/\/\s*0(?!\d)/.test(expresion)) { //regex para evitar error "Infinity"
                        calculatorDisplay.value = 'Error';
                        return;
                    }
                    const result = eval(expresion);
                    calculatorDisplay.value=result.toString();
                }catch{
                    calculatorDisplay.value = 'Error';
                }
            }else{
                calculatorDisplay.value += value;
            }
        })
    });
});
    
