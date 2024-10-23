document.querySelector('.button-our-locations').addEventListener('click', function () {
    document.getElementById('mapsModal').style.display = 'block';
  });
  
  document.querySelector('.button-franchise').addEventListener('click', function () {
    document.getElementById('mapsModal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('mapsModal').style.display = 'none';
  });
  
  window.onclick = function (event) {
    let modal = document.getElementById('mapsModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };