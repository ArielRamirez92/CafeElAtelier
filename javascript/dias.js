/*Cambia el label a abierto*/
function abrir() {
	document.getElementById('estado').innerHTML = 'Abierto';
	document.getElementById('estado').style.backgroundColor = 'rgb(116,154,68)';
}
/*Cambia a negrita el elemento que corresponde al dia*/
function mostrar(dia) {
	var id = '';
	switch(dia) {
	  case 0:
	    id = 'dom';
	    break;
	  case 1:
	    id = 'lun';
	    break;
	  case 2:
	    id = 'mar';
	    break;
	  case 3:
	    id = 'mie';
	    break;
	  case 4:
	    id = 'jue';
	    break;
	  case 5:
	    id = 'vie';
	    break;
	  case 6:
	    id = 'sab';
	    break;
	  default:
	   	break;
	}
	document.getElementById(id).style.fontWeight = 'bold';
}
/*verificar el dia y mostar si esta abierto*/
var fecha = new Date();
var dia = fecha.getDay();
var hora = fecha.getHours();
if (dia == 0 && (hora > 8 && hora < 17)) {
	abrir();
	mostrar(dia);
}
else if (dia == 6 && (hora > 8 && hora < 18)){
	abrir();
	mostrar(dia);
}
else if (hora > 9 && hora < 18.5){
	abrir();
	mostrar(dia);
}