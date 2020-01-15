var parametros = new URLSearchParams(location.search);
var np = parametros.get('np');

var peticiones = function peticiones(value, fn, file) {
  "use strict";

  if (typeof value === "undefined" || typeof fn === "undefined") return;
  var request = new XMLHttpRequest();
  request.open("GET", file, true);
  request.addEventListener("readystatechange", function (e) {
    if (request.readyState == XMLHttpRequest.DONE) if (request.status == 200) {
      fn(request.responseText);
    }
  }, false);
  request.send(null);
};

var compare = function compare(np, json) {
  if (typeof json === "undefined" || typeof np === "undefined") return false;
  if (typeof json[np] === "undefined") return false;
  return true;
};

var element = function element(_element) {
  if (typeof _element === "string") return document.createElement(_element);
};

var textNode = function textNode(_textNode) {
  if (typeof _textNode === "string") return document.createTextNode(_textNode);
};

var nodeInsert = function nodeInsert(_element, _parent) {
  if (typeof _element === "undefined" || typeof _parent === "undefined") return;

  if (typeof _parent == "string") {
    document.querySelector(_parent).appendChild(_element);
  } else {
    _parent.appendChild(_element);
  }
};

peticiones(np, function (valor) {
  valor = JSON.parse(valor);
  var imgOpt = [];
  console.log(compare(np, valor));
  var main = element("main"),
      header = element("header"),
      content = element("div"),
      paragraph = element("p"),
      strong = element("strong"),
      grid = element("div"),
      footer = element("footer");

  if (compare(np, valor)) {
    var title = textNode("Verificación Permiso Especial de Permanencia");
    nodeInsert(title, strong);
    nodeInsert(main, "body");
    nodeInsert(header, main);
    nodeInsert(content, main);
    nodeInsert(paragraph, content);
    nodeInsert(strong, paragraph);
    nodeInsert(grid, content);
    nodeInsert(footer, main);
    main.classList.add("ctf");
    header.classList.add("header", "cargando");
    content.classList.add("content");
    paragraph.classList.add("content--title");
    grid.classList.add("grid", "grid--4");
    footer.classList.add("footer", "cargando");

    var datos = function datos(_datos) {
      var _nodeList = [element("ul"), element("ul"), element("ul"), element("ul")];

      for (var _i = 0, _nodeList2 = _nodeList; _i < _nodeList2.length; _i++) {
        var ul = _nodeList2[_i];
        nodeInsert(ul, grid);
      }

      console.log(_datos);

      if (compare(np, _datos)) {
        var person = _datos[np];
        var itemA,
            itemB,
            itemC,
            itemD,
            num = 0;

        for (var key in person) {
          itemA = element("li");
          itemB = element("li");
          itemC = element("li");
          itemD = element("li");
          num++;

          if (num <= 5) {
            nodeInsert(textNode(key), itemA);
            nodeInsert(itemA, _nodeList[0]);
            nodeInsert(textNode(person[key]), itemB);
            nodeInsert(itemB, _nodeList[1]);
          } else if (5 < num && num < 10) {
            nodeInsert(textNode(key), itemC);
            nodeInsert(itemC, _nodeList[2]);
            nodeInsert(textNode(person[key]), itemD);
            nodeInsert(itemD, _nodeList[3]);
          } else {
            imgOpt[key] = person[key];
          }
        }
      }

      console.log(_nodeList);
    };

    datos(valor);
  }

  console.log(imgOpt);

  if (compare(np, valor)) {
    peticiones(np, function (value) {
      var h = imgOpt.header,
          f = imgOpt.footer;

      if (compare(h, value) && compare(f, value)) {
        value = JSON.parse(value);
        var imgHeader = element("img"),
            imgFooter = element("img");
        imgHeader.src = value.header[h];
        imgFooter.src = value.footer[f];
        nodeInsert(imgHeader, header);
        nodeInsert(imgFooter, footer);
        imgHeader.addEventListener("load", function () {
          header.classList.remove("cargando");
        }, false);
        imgFooter.addEventListener("load", function () {
          footer.classList.remove("cargando");
        }, false);
      }
    }, "code64.json");
  }
}, "datos.json");
