//alert("Hola mundo del JvaScript");

function sumaNumeros(){
    let n1=document.getElementById('n1').value;
    let n2=document.getElementById('n2').value;
    const answer= document.getElementById('answer');

    const resultado = parseInt(n1) +parseInt(n2);
    
    answer.innerHTML=resultado;
    
}

function restaNumeros(){
    let n1=document.getElementById('n1').value;
    let n2=document.getElementById('n2').value;
    const answer= document.getElementById('answer');

    const resultado = n1 - n2;
    
    answer.innerHTML=resultado;
}

function divideNumeros(){
    let n1=document.getElementById('n1').value;
    let n2=document.getElementById('n2').value;
    const answer= document.getElementById('answer');

    const resultado = n1 / n2;
    
    answer.innerHTML=resultado;
}

function multiplicaNumeros(){
    let n1=document.getElementById('n1').value;
    let n2=document.getElementById('n2').value;
    const answer= document.getElementById('answer');

    const resultado = n1 * n2;
    
    answer.innerHTML=resultado;
}