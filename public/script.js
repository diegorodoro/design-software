document.addEventListener("DOMContentLoaded", async function() {
    const endpoint = 'https://651e3f3044a3a8aa4767ed5b.mockapi.io/movies'; 

    try {
        const respuesta = await fetch(endpoint);
        const datos = await respuesta.json();
        mostrarPeliculas(datos);
    } catch (error) {
        console.error("Error ", error);
    }
});

function mostrarPeliculas(peliculas) {
    const listaPeliculas = document.getElementById('movie-list');
    peliculas.forEach(pelicula => {
   
    const elementoLista = document.createElement('li');

       
        const titulo = document.createElement('p');
        titulo.textContent = `Título: ${pelicula.title}`;
        elementoLista.appendChild(titulo);

        const id = document.createElement('p');
        id.textContent = `ID: ${pelicula.id}`;
        elementoLista.appendChild(id);

        const fecha = document.createElement('p');
        fecha.textContent = `Fecha: ${pelicula.Fecha}`;
        elementoLista.appendChild(fecha);

        const imagenRoca = document.createElement('img');
        imagenRoca.src = pelicula.Roca;
        imagenRoca.alt = `Imagen para ${pelicula.title}`;
        elementoLista.appendChild(imagenRoca);
        
        listaPeliculas.appendChild(elementoLista);
    });
}
