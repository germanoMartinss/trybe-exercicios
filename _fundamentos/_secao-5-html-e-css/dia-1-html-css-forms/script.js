window.onload = () => {
    const bottun = document.querySelector('button[type=submit]');
    bottun.addEventListener('click', (event) => {
        const nomeCompleto = document.getElementById('nome-completo');
        if (nomeCompleto.value.length < 5) {
            event.preventDefault();
        }
        event.preventDefault();
    });
   };