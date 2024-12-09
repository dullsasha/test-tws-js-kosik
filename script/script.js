const nabidka = ["Mléko", "Vajíčka", "Chleba", "Máslo", "Salám",];

function vypis(array, output){
    document.getElementById(output).innerHTML = "Nabídka: <br>";
    for(let i =0; i<array.lenght; i++){
        document.getElementById(output).innerHTML += array[i] + "<br>";
    }
}

function Add(){
    const input = document.getElementById("add-component").ariaValueMax.trim();
    const content = document.getElementById("content");
    const user_cart = document.getElementById("output");

    if(nabidka.includes(input)){
        user_cart.innerHTML += input + "<br>";
    }
}

vypis(nabidka, "content")