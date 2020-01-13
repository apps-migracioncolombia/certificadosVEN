let parametros = new URLSearchParams(location.search);
var np = parametros.get('np');

// Valor:
let value = "908736129091994";

function objeto( main, value ) {
  let h1 = document.createElement("h1");
  h1.textContent = "Objeto no disponible";
  document.querySelector("body").appendChild(h1);
  
  // Comprobación de valores
  if ( typeof main !== "undefined" || typeof value !== "undefined" ) {
    if ( np !== value ) {
      let elm = document.querySelector(main);
      elm.classList.add("none");
    }
  }
}


objeto( "#main", value );
