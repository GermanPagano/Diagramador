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
  inputHoja.setAttribute("type", "number");
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
  inputFranco.setAttribute("name", "franco[]");
  inputFranco.classList.add("form-control", "nuevoInput");
  inputFranco.required = true;
  colFranco.appendChild(inputFranco);



  var iconoBorrar = document.createElement("span");
  iconoBorrar.classList.add(
    "bi",
    "bi-x",
    "text-light",
    "rounded",
    "cursor-pointer",
    'd-flex',
    "justify-content-center",
    "align-items-center",
    'col-2',
    'gap-1'
  );
  iconoBorrar.style.height = "100%"; // Establece la altura al 100% para que coincida con los inputs
  iconoBorrar.style.fontSize = "1.2rem"; // Cambia el tamaño de fuente para hacerlo más pequeño
  iconoBorrar.style.backgroundColor = "red";
  iconoBorrar.addEventListener("click", function () {
    lineasInputs.removeChild(nuevaLinea);
  });

  
  nuevaLinea.appendChild(iconoBorrar);

  lineasInputs.appendChild(nuevaLinea);
}
