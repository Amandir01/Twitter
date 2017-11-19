window.addEventListener('load', function(event) {
  var area = document.getElementById('insert-text');
  var boton = document.getElementById('button');
  var lista = document.getElementById('container-tweets');
  var count = document.getElementById('counter');
  var showMessage = document.getElementById('new-messages');

  boton.addEventListener('click', enter);

  area.addEventListener('keydown', counting);
  function counting() {
    var limit = 160;/* limite de caracteres permitidos, 160*/
    var boxsize = area.value.length;
    /* añadiendo al contador el conteo de manera descendente*/
    count.innerHTML = (limit - boxsize) - 1;
    if (boxsize >= 160) { /* validando si el texto ingresado es mayor a 160 */
      count.setAttribute('id', 'red');/* incorporando el color rojo para el contador con un div*/
      boton.disabled = true; /* el botón se deshabilitará*/
    } else if (boxsize >= 0 && boxsize <= 127) { /* validando si el texto tiene  130- 139 caracteres */
      count.setAttribute('id', 'green'); /* incorporando el color azul al contador */
      boton.disabled = false;
    } else if (boxsize >= 128 && boxsize <= 159) {/* validando si el texto ingresado tiene 140-159 caracteres */
      count.setAttribute('id', 'blue');/* incorpora el color verde al contador */
      boton.disabled = false;
    } else {
      count.setAttribute('id', 'count');
    }
  }
  function enter() {
    var myComment = area.value ;
    area.value = '' ;
    if (myComment === 0 || myComment === null) {
      boton.disabled = true;
    } else {
      var newComment = document.createElement('div');
      newComment.innerHTML = myComment;
      showMessage.appendChild(newComment);
    }
  };
});


/* boton.addEventListener('click', function(event) {
    if (area.value) {
      var li = document.createElement('li');
      var link = document.createElement('a');
      link.textContent = area.value;
      link.setAttribute('href', '#');
      li.appendChild(link),
      lista.appendChild(li);
      area.value = '';
    }) */