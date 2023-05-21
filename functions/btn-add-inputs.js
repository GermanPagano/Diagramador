function addInput() {
    var lineasInputs = document.querySelector('.lineas-inputs');
  
    var nuevaLinea = document.createElement('div');
    nuevaLinea.classList.add('row', 'mb-3');
  
    var colHoja = document.createElement('div');
    colHoja.classList.add('col-6');
    nuevaLinea.appendChild(colHoja);
  
    var labelHoja = document.createElement('label');
    labelHoja.setAttribute('for', 'hoja');
    labelHoja.classList.add('form-label');
    labelHoja.textContent = 'Hoja:';
    colHoja.appendChild(labelHoja);
  
    var inputHoja = document.createElement('input');
    inputHoja.setAttribute('type', 'number');
    inputHoja.setAttribute('name', 'hoja[]');
    inputHoja.classList.add('form-control');
    inputHoja.classList.add('nuevoInput');;

    inputHoja.required = true;
    colHoja.appendChild(inputHoja);
  
    var colFranco = document.createElement('div');
    colFranco.classList.add('col-6');
    nuevaLinea.appendChild(colFranco);
  
    var labelFranco = document.createElement('label');
    labelFranco.setAttribute('for', 'franco');
    labelFranco.classList.add('form-label');
    labelFranco.textContent = 'Franco:';
    colFranco.appendChild(labelFranco);
  
    var inputFranco = document.createElement('input');
    inputFranco.setAttribute('type', 'number');
    inputFranco.setAttribute('name', 'franco[]');
    inputFranco.classList.add('form-control');
    inputFranco.classList.add('nuevoInput');;

    inputFranco.required = true;
    colFranco.appendChild(inputFranco);
  
    lineasInputs.appendChild(nuevaLinea);
  }
  
  