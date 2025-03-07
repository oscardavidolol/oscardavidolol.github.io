let numero1 = Math.floor(Math.random() * 151) + 1;
let numero2 = Math.floor(Math.random() * 151) + 1;
let numero3 = Math.floor(Math.random() * 151) + 1;
let numero4 = Math.floor(Math.random() * 151) + 1;

 
var uri1 = `https://pokeapi.co/api/v2/pokemon/${numero1}`;
var uri2 = `https://pokeapi.co/api/v2/pokemon/${numero2}`;
var uri3 = `https://pokeapi.co/api/v2/pokemon/${numero3}`;
var uri4 = `https://pokeapi.co/api/v2/pokemon/${numero4}`;


fetch(uri1)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombrepokemon1", "imgpokemon1", "descripcionpokemon1"));
 
fetch(uri2)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombrepokemon2", "imgpokemon2", "descripcionpokemon2"));
   
fetch(uri3)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombrepokemon3", "imgpokemon3", "descripcionpokemon3"));

fetch(uri4)
    .then(response => response.json())
    .then(data => CargarDatos(data, "nombrepokemon4", "imgpokemon4", "descripcionpokemon4"));
   
   
    function CargarDatos(pokemon, nombreId, imgId, descId) {
    const nombre = document.getElementById(nombreId);
    const foto = document.getElementById(imgId);
    const tipo = document.getElementById(descId);
 
   
    nombre.textContent = pokemon.name;
    foto.src = pokemon.sprites.front_default;
    tipo.textContent = pokemon.types[0].type.name;
    
    document.addEventListener('keydown', function(event) {
    
        if (event.key === 'Enter') {
            
            location.reload();
        }
    });
 
}