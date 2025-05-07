let primerCarta = null;
let segundaCarta = null;
let bloqueado = false; // Evita múltiples clics simultáneos
let errores = document.getElementById("errores").value;
let valorerrores = parseInt(errores);
let puntaje = document.getElementById("puntaje").value;
let valorpuntaje = parseInt(puntaje);
let select = document.getElementById("select");
let inicio_generacion =0;
let fin_generacion=0;
function elegirGeneracion(numero_generacion) {
    select.style.display = "none";
    switch (numero_generacion) {
        case 1:
            inicio_generacion = 1
            fin_generacion = 151;
            break;
        case 2:
            inicio_generacion = 152
            fin_generacion = 251;
            break;
        default:
            inicio_generacion = 1
            fin_generacion = 151;
            break;
    }
    let pokemon = [];
    for (let i = 1; i <= 8; i++) {
        let elegirpokemon = pokemon.push(Math.floor(Math.random() * (fin_generacion - inicio_generacion)) + inicio_generacion);
        console.log(pokemon[i - 1]);
 
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon[i - 1]}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.name);
                CargarDatos(data);
                CargarDatos(data);
 
            });
    }
 
}
 
function evaluar(id, elemento) {
    if (bloqueado) return;
    if (valorerrores < 3) {
        // No permitir clics mientras se comparan
        if (!primerCarta) {
            // Primera carta seleccionada
            primerCarta = { id, elemento };
        } else {
            // Segunda carta seleccionada
            segundaCarta = { id, elemento };
            // Bloquear mientras se compara
            bloqueado = true;
            // Verificar si las cartas coinciden
            if (primerCarta.id === segundaCarta.id) {
                console.log("¡Es un par!");
                valorpuntaje += 1;
                document.getElementById("puntaje").value = valorpuntaje;
                primerCarta = null;
                segundaCarta = null;
 
 
                bloqueado = false;
                if (valorpuntaje == 8) {
                    alert('Haz Ganado');
                    document.getElementById("boton").classList.remove("oculto")
                }
            } else {
                setTimeout(() => {
                    // Voltear nuevamente las cartas
                    primerCarta.elemento.classList.remove("flipped");
                    segundaCarta.elemento.classList.remove("flipped");
                    primerCarta = null;
                    segundaCarta = null;
 
                    console.log("No coinciden, volteando de nuevo...");
                    valorerrores += 1;
                    console.log(valorerrores);
                    document.getElementById("errores").value = valorerrores;
                    if (valorerrores >= 3) {
 
                        alert('Game Over');
                        document.getElementById("boton").classList.remove("oculto");
                    }
                    bloqueado = false;
                }, 1000);
            }
        }
    }
 
}
function CargarDatos(data) {
    const contenedor = document.getElementById("contenedor");
    let div = document.createElement("div");
    div.classList.add("flip-card");
    div.addEventListener("click", function () {
        if (valorerrores >= 3 || bloqueado == true) return;
        if (!div.classList.contains("flipped")) {
            div.classList.toggle("flipped");
            evaluar(data.id, div);
        }
    });
 
    let tarjeta = `
    <div class="flip-card-inner">
        <div class="flip-card-front"></div>
        <div class="flip-card-back">
            <img id="${data.id}" src="${data.sprites.front_default}"/></br>
            <label>${data.name}</label>
        </div>
    </div>`;
 
    div.innerHTML = tarjeta;
 
    let contenedorHijo = contenedor.children;
    let randomIndex = Math.floor(Math.random() * (contenedorHijo.length + 1));
    if (contenedorHijo.length > 0) {
        contenedor.insertBefore(div, contenedorHijo[randomIndex]);
    } else {
        contenedor.appendChild(div);
    }
}