let palette = document.getElementById('color-palette');

    palette.addEventListener('click', function(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    });

    
