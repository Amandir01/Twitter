var area = document.getElementById('insert-links');
var boton = document.getElementById('button');
var lista = document.getElementById('container-links');

    boton.addEventListener('click', function(event) {
        if (area.value) {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.textContent = area.value;
            link.setAttribute('href', '#');
            li.appendChild(link),
                lista.appendChild(li);
            area.value = '';
        }
    });


