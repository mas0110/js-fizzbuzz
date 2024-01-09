const ul = document.querySelector(`ul.list`)

for ( let i = 0; i<= 100; i++){
    const element = `<li>${i}</li>`
    ul.innerHTML += element
}

