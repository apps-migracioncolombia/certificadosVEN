var parametros = new URLSearchParams(location.search);
var np = parametros.get('np');

// Valor:
var value = "908736129091994";

function objeto( main, value ) {
  var h1 = document.createElement("h1");
  h1.textContent = "Objeto no disponible";
  
  // Comprobación de valores
  if ( typeof main !== "undefined" || typeof value !== "undefined" ) {
    if ( np === value ) {
      var elm = document.querySelector(main);
      elm.classList.remove("none");
      elm.classList.add("certificado");
      elm.style.display = "";
    }else {
      document.querySelector("body").appendChild(h1);
      document.querySelector("title").textContent="No disponible";
      ocument.querySelector("link[href='favicon.ico']").href="fav.png";
    }
  }
}


objeto( "#main", value );
