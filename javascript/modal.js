//obtiene el div modal donde se cargará la imagen
var modal = document.getElementById('myModal');

// obtiene el elemento span que cerrará el modal
var span = document.getElementsByClassName("close")[0];

// cuando el usuario da clic en el span se cierra el modal
span.onclick = function() {
	modal.style.display = "none";
}

var images = document.getElementsByTagName('img');
var modalImg = document.getElementById('modal01');
var captionText = document.getElementById('caption');
var i;
for (var i = 0; i < images.length; i++) {
	images[i].onclick = function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		modalImg.alt = this.alt;
		captionText.innerHTML = this.nextElementSibling.innerHTML;
	}
};