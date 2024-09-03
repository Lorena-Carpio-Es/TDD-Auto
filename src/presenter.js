import Auto from './auto.js';


const inputComandos = document.querySelector("#inputComandos");
const btnEjecutar = document.querySelector("#btnEjecutar");
const resultadoDiv = document.querySelector("#resultado");


btnEjecutar.addEventListener("click", () => {
   
    const comandos = inputComandos.value.trim();
    if (comandos) {
        
        const [dimensiones, posicion, comandosStr] = comandos.split('/');
        const [maxX, maxY] = dimensiones.split(',').map(Number);
        const [x, y, orientacion] = [parseInt(posicion[0]), parseInt(posicion[2]), posicion[3]];
        
        
        const auto = new Auto(x, y, orientacion, maxX, maxY);
        
      
        auto.ejecutarComandos(comandosStr);
        
      
        resultadoDiv.innerHTML = `Posición Final: ${auto.getPosicion()}`;
    } else {
        resultadoDiv.innerHTML = "Por favor, ingrese comandos válidos.";
    }
});
