let parametros = new URLSearchParams(location.search);
var np = parametros.get('np');

// Valor:
let value = "908736129091994";

// Comprobación de valores:
if ( np !== value )
  if ( typeof main !== "undefined" )
    main.classList.add("none");
