document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('mouseover', () => {
      const albumPair = album.closest('.album-pair');
      const textElement = albumPair.querySelector('p');
      textElement.textContent = album.getAttribute('data-text');
      textElement.classList.remove('hide');
    });

    album.addEventListener('mouseout', () => {
      const albumPair = album.closest('.album-pair');
      const textElement = albumPair.querySelector('p');
      textElement.textContent = '';
      textElement.classList.add('hide');
    });
});