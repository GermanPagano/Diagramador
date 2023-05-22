function addInput() {
  var lineasInputs = document.querySelector(".lineas-inputs");

  var nuevaLinea = document.createElement("div");
  nuevaLinea.classList.add("row", "mb-3");

  var colHoja = document.createElement("div");
  colHoja.classList.add("col-5");
  nuevaLinea.appendChild(colHoja);

  var labelHoja = document.createElement("label");
  labelHoja.setAttribute("for", "hoja");
  labelHoja.classList.add("form-label");
  labelHoja.textContent = "Hoja:";
  colHoja.appendChild(labelHoja);

  var inputHoja = document.createElement("input");
  inputHoja.setAttribute("type", "xxx");
  inputHoja.setAttribute("placeholder", "number");
  inputHoja.setAttribute("name", "hoja[]");
  inputHoja.classList.add("form-control", "nuevoInput");
  inputHoja.required = true;
  colHoja.appendChild(inputHoja);

  var colFranco = document.createElement("div");
  colFranco.classList.add("col-5"); 
  nuevaLinea.appendChild(colFranco);

  var labelFranco = document.createElement("label");
  labelFranco.setAttribute("for", "franco");
  labelFranco.classList.add("form-label");
  labelFranco.textContent = "Franco:";
  colFranco.appendChild(labelFranco);

  var inputFranco = document.createElement("input");
  inputFranco.setAttribute("type", "number");
  inputFranco.setAttribute("placeholder", "x");
  inputFranco.setAttribute("name", "franco[]");
  inputFranco.classList.add("form-control", "nuevoInput");
  inputFranco.required = true;
  colFranco.appendChild(inputFranco);


  var contenedorBtnBorrar = document.createElement("div");
  contenedorBtnBorrar.classList.add("col-2"); 
  contenedorBtnBorrar.classList.add("d-flex");
  contenedorBtnBorrar.classList.add("justify-content-center");
  contenedorBtnBorrar.classList.add("align-items-end");

  var iconoBorrar = document.createElement("span");
  iconoBorrar.classList.add(
    "bi",
    "bi-trash",
    "text-light",
    "rounded",
    "cursor-pointer",
    'd-flex',
    "justify-content-center",
    "align-items-center",
    'row',
    'btn-danger'
  );
  iconoBorrar.style.height = "2.4rem";
  iconoBorrar.style.width = "80px"; 
  iconoBorrar.style.fontSize = "1rem"; // Cambia el tamaño de fuente para hacerlo más pequeño
  iconoBorrar.style.backgroundColor = "red";

  iconoBorrar.addEventListener("click", function () {
    lineasInputs.removeChild(nuevaLinea);
  });

  contenedorBtnBorrar.appendChild(iconoBorrar);

  nuevaLinea.appendChild(contenedorBtnBorrar);

  lineasInputs.appendChild(nuevaLinea);
}
