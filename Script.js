document.addEventListener('DOMContentLoaded',()=>{
    const calculatorDisplay = document.getElementById('display');
    const calculatorButtons = document.querySelectorAll('#buttons button');

    calculatorButtons.forEach( button =>{
        button.addEventListener('click',()=>{
            const value = button.textContent;   
            console.log(value);
            
            if (value === 'C') {
                calculatorDisplay.value = '';
            }else if(value=== 'DEL'){
                calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
            }else if(value==="="){
                try{
                    const expression = calculatorDisplay.value.replace(',', '.');
                    
                    if (expression.trim() === '') {
                    calculatorDisplay.value = '';
                    return;
                    }

                    if (/\/\s*0(?!\d)/.test(expression)) {
                        calculatorDisplay.value = 'Math Error';
                        return;
                    }
                    const result = eval(expression);
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
    
