const form = document.getElementById('form');
const cartaonome = document.getElementById('cartaonome');
const cartaonum = document.getElementById('cartaonum');
const cartaoval = document.getElementById('cartaoval');
const cartaocvv = document.getElementById('cartaocvv');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span');
const concluido = document.querySelector('#concluido');
const concluir = document.querySelector('.concluir');

form.addEventListener('submit', (event) =>{
    
    if (campos[0].value.length < 3){
        event.preventDefault();
        nameValidate();
    }
    if (campos[1].value.length < 16 || !/^\d+( \d+)*$/.test(campos[1].value)){
        event.preventDefault();
        cardValidate();
    }
    if (campos[2].value.length < 2){
        event.preventDefault();
        monthValidate();
    }
    if (campos[3].value.length < 2){
        event.preventDefault();
        yearValidate();
    }
    if (campos[4].value.length < 3){
        event.preventDefault();
        cvcValidate();
    }
    else{
        onsubmit = (event) => {
            concluido.style.display = 'block';
            form.style.display = 'none';
        };
    }
});
function funcao(){
    concluido.style.display = 'none';
    form.style.display = 'block';
}
campos[0].addEventListener('keyup', (event) =>{
    cartaonome.innerText = campos[0].value;
});
campos[1].addEventListener('keyup', (event) =>{
    cartaonum.innerText = campos[1].value;
});
campos[2].addEventListener('keyup', (event) =>{
    cartaoval.innerText = campos[2].value + '/' + campos[3].value;
});
campos[3].addEventListener('keyup', (event) =>{
    cartaoval.innerText = campos[2].value + '/' + campos[3].value;
});
campos[4].addEventListener('keyup', (event) =>{
    cartaocvv.innerText = campos[4].value;
});
function setError(index){
    campos[index].style.border = '1px solid #e63636';
    span[index].style.display = 'block';
}
function removeError(index){
    campos[index].style.border = '';
    span[index].style.display = 'none';
}

function nameValidate(){
    if (campos[0].value.length < 3){

        setError(0);
    }
    else{
        removeError(0);
    }
}
function cardValidate(){
    if (campos[1].value.length < 16 || !/^\d+( \d+)*$/.test(campos[1].value)){

        setError(1);
    }
    else{
        removeError(1);
    }
}
function monthValidate(){
    if (campos[2].value.length < 2 || !/^[0-9]+$/.test(campos[2].value)){

        setError(2);
    }
    else{
        removeError(2);
    }
}
function yearValidate(){
    if (campos[3].value.length < 2 || !/^[0-9]+$/.test(campos[3].value)){

        setError(3);
    }
    else{
        removeError(3);
    }
}
function cvcValidate(){
    if (campos[4].value.length < 3 || !/^[0-9]+$/.test(campos[4].value)){

        setError(4);
    }
    else{
        removeError(4);
    }
}
if(isvalid == true){
    concluido.style.display = 'block';
}