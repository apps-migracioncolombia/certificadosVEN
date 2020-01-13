var parametros = new URLSearchParams(location.search);
var np = parametros.get('np');

// Valor:
var value = "908736129091994";

function objeto( main, value ) {
  var h1 = document.createElement("h1");
  h1.textContent = "Objeto no disponible";
  document.querySelector("body").appendChild(h1);
  
  // Comprobación de valores
  if ( typeof main !== "undefined" || typeof value !== "undefined" ) {
    if ( np !== value ) {
      var elm = document.querySelector(main);
      elm.classList.add("none");
      elm.style.display = "none";
    }
  }
}


objeto( "#main", value );
