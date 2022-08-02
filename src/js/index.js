const titulo = document.querySelector('h1')


function typewriter (elemento) {
    const nomeTitulo = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    nomeTitulo.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}

typewriter(titulo)