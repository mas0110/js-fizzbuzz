// costante elemento lista 
const ul = document.querySelector(`ul.list`);

// ciclo for lista numeri 0-100 
for ( let i = 0; i<= 100; i++){
    if(((i % 3) === 0 && (i % 5) === 0)){
        console.log(i);
        const element ='<li>FizzBuzz</li>'
        ul.innerHTML += element
    } else if ( (i % 3) === 0){
        console.log(i);
        const element ='<li>fizz</li>'
        ul.innerHTML += element
    } else if ((i % 5) === 0) {
        console.log(i);
        const element ='<li>buzz</li>'
        ul.innerHTML += element
    } else {
        const element = `<li>${i}</li>`
        ul.innerHTML += element
    }
}