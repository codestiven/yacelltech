function card_activar(imgg , name , valor) {
var card = document.getElementById("card");
var img = document.getElementById("imgc");
var nombre = document.getElementById("nombre");
var precio = document.getElementById("precio");
playVideo();
card.classList.add('card_activo');

img.src = imgg;

nombre.innerHTML = name;
precio.innerHTML = "RD$"  + valor + " DOP";

}

function card_desactivar() {
  var card = document.getElementById("card");
 
  card.classList.remove("card_activo");
  closeVideo();

}

var interructor = true;
function ver_mas() {



if (interructor == true) {

    var canva = (document.getElementById("svgg").style.transform = "rotate(180deg)");


    interructor = false;
  var elementos = document.querySelectorAll(
    ".productos .subcontenedores .bloques #mas"
  );

  for (let index = 0; index <= elementos.length; index++) {
    elementos[index].className = "visible";
  }


} else {

      interructor = true;
    var elementos = document.querySelectorAll(
      ".productos .subcontenedores .bloques #mas"
    );

    var canva = (document.getElementById("svgg").style.transform = "rotate(0deg)");



    for (let index = 0; index <= elementos.length; index++) {
      elementos[index].className = "cam";
    }

}


  

  console.log(elementos[0]);
}



//funcio video solicitar $Productos
function playVideo() {
  var videoId = 'gp9aY09li1s';
  var videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

  var popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';
  popupContainer.innerHTML = `
    <span class="popup-close" onclick="closeVideo()">&times;</span>
    <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
  `;

  videoContainer.appendChild(popupContainer);
}


var videoContainer = document.getElementById('video-container');
                                    
                                    
                                    
function closeVideo() {
  var popupContainer = document.querySelector('.popup-container');
  videoContainer.removeChild(popupContainer);
}




