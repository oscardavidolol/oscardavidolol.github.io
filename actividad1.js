let numero = Math.floor(Math.random() * 151) + 1;
let numero1 = Math.floor(Math.random() * 151) + 1;
 
 
var uri1 = `https://pokeapi.co/api/v2/pokemon/${numero}`;
var uri2 = `https://pokeapi.co/api/v2/pokemon/${numero1}`;
 
fetch(uri1)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombrepokemon1", "imgpokemon1", "descripcionpokemon1"));
 
fetch(uri2)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombrepokemon2", "imgpokemon2", "descripcionpokemon2"));
 
function CargarDatos(pokemon, nombreId, imgId, descId) {
    const nombre = document.getElementById(nombreId);
    const foto = document.getElementById(imgId);
    const tipo = document.getElementById(descId);
 
   
    nombre.textContent = pokemon.name;
    foto.src = pokemon.sprites.front_default;
    tipo.textContent = pokemon.types[0].type.name;
   
}