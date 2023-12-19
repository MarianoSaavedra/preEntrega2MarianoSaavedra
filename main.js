const productos = [
    {id: 2, categoria: "Tecnologia", nombre: "Celular B", precio: 2000, detalle: "Detalle celular C"},
    {id: 3, categoria: "Tecnologia", nombre: "Celular C", precio: 3000, detalle: "Detalle celular B"},
    {id: 1, categoria: "Tecnologia", nombre: "Celular A", precio: 1500, detalle: "Detalle celular A"},
    {id: 4, categoria: "Tecnologia", nombre: "Celular D", precio: 1750, detalle: "Detalle celular D"},
    {id: 5, categoria: "Tecnologia", nombre: "Celular E", precio: 1898, detalle: "Detalle celular E"},
    {id: 6, categoria: "Tecnologia", nombre: "Celular F", precio: 1544, detalle: "Detalle celular F"},
    {id: 7, categoria: "Tecnologia", nombre: "Celular G", precio: 5000, detalle: "Detalle celular G"},
    {id: 8, categoria: "Comida", nombre: "Comida A", precio: 1500, detalle: "Detalle comida A"},
    {id: 9, categoria: "Comida", nombre: "Comida C", precio: 3000, detalle: "Detalle comida B"},
    {id: 10, categoria: "Comida", nombre: "Comida B", precio: 2000, detalle: "Detalle comida C"},
    {id: 11, categoria: "Comida", nombre: "Comida D", precio: 1750, detalle: "Detalle comida D"},
    {id: 12, categoria: "Comida", nombre: "Comida E", precio: 1898, detalle: "Detalle comida E"},
    {id: 13, categoria: "Comida", nombre: "Comida F", precio: 1544, detalle: "Detalle comida F"},
    {id: 14, categoria: "Comida", nombre: "Comida G", precio: 5000, detalle: "Detalle comida G"},
    {id: 15, categoria: "Libros", nombre: "Libro A", precio: 1500, detalle: "Detalle libro A"},
    {id: 16, categoria: "Libros", nombre: "Libro C", precio: 3000, detalle: "Detalle libro B"},
    {id: 17, categoria: "Libros", nombre: "Libro B", precio: 2000, detalle: "Detalle libro C"},
    {id: 18, categoria: "Libros", nombre: "Libro D", precio: 1750, detalle: "Detalle libro D"},
    {id: 19, categoria: "Libros", nombre: "Libro E", precio: 1898, detalle: "Detalle libro E"},
    {id: 20, categoria: "Libros", nombre: "Libro F", precio: 1544, detalle: "Detalle libro F"},
    {id: 21, categoria: "Libros", nombre: "Libro G", precio: 5000, detalle: "Detalle libro G"},
    {id: 22, categoria: "Peliculas", nombre: "Pelicula A", precio: 1500, detalle: "Detalle pelicula A"},
    {id: 23, categoria: "Peliculas", nombre: "Pelicula C", precio: 3000, detalle: "Detalle pelicula B"},
    {id: 24, categoria: "Peliculas", nombre: "Pelicula B", precio: 2000, detalle: "Detalle pelicula C"},
    {id: 25, categoria: "Peliculas", nombre: "Pelicula D", precio: 1750, detalle: "Detalle pelicula D"},
    {id: 26, categoria: "Peliculas", nombre: "Pelicula E", precio: 1898, detalle: "Detalle pelicula E"},
    {id: 27, categoria: "Peliculas", nombre: "Pelicula F", precio: 1544, detalle: "Detalle pelicula F"},
    {id: 28, categoria: "Peliculas", nombre: "Pelicula G", precio: 5000, detalle: "Detalle pelicula G"}
    ]

let filtro = prompt("Elegir la categoria (Tecnologia / Comida / Libros / Peliculas)")

const filtrar = (respuesta) => {
    if(!respuesta || (respuesta !== "Tecnologia" && respuesta !== "Comida" && respuesta !== "Libros" && respuesta !== "Peliculas")){
        alert("Debes escribir una de estas categorias Comida/Tecnologia/Libros/Peliculas");
        filtro = prompt("Elegir la categoria (Tecnologia / Comida / Libros / Peliculas)")
    }

const resultado = productos.filter(item => item.categoria === filtro).map((item, i) => 
                                                                                        `<div class="contenedor">
                                                                                            <h2>${item.nombre}</h2>
                                                                                            <small>$${item.precio}</small>
                                                                                            <p>${item.detalle}</p>
                                                                                        </div>`).join("");

    document.getElementById("contenedor").innerHTML = resultado;
}

filtrar(filtro)
