const header = document.querySelector('header');
const formulario = document.querySelector('.formulario');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const h3 = document.querySelector('.h3');
const button = document.querySelector('button');
const resena = document.querySelector('.resena');
let valorInput1 = '';
let valorInput2 = '';

setTimeout(()=> {

    header.style.display = 'none';
    resena.style.display = 'flex';
    
   
}, 7000)


const vanishContent = () =>{

    h3.style.opacity = '0';
    input1.style.opacity = '0';
    input2.style.opacity = '0';
    button.style.opacity = '0';

    setTimeout(() => {
        h3.style.display = 'none';
        input1.style.display = 'none';
        input2.style.display = 'none';
        button.style.display = 'none';
    }, 1000)
}

const appearContent = () => {
    
    h3.style.display = 'block';
    input1.style.display = 'block';
    input2.style.display = 'block';
    button.style.display = 'block';

    setTimeout(() => {
        h3.style.opacity = '1';
        input1.style.opacity = '1';
        input2.style.opacity = '1';
        button.style.opacity = '1';
    }, 1000)
    
}

const validation = (input, valorInput) => {

    input.addEventListener('input', () => {

        if (!isNaN(input.value) && input.value <= 500 ) { 
            
            valorInput = Math.ceil(input.value);
            input.value = valorInput;

            if(input.value == '' || input.value == 0) {

                valorInput = '';
                input.value = valorInput;
            
            }
        }

        else if (isNaN(input.value) || input.value > 500) {
           vanishContent();
           setTimeout(appearContent, 3000);
           input.value = valorInput;       
        }
        
    })

}

validation(input1, valorInput1);
validation(input2, valorInput2);