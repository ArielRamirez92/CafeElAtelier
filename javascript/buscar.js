var input = document.getElementById("myInput");
			input.addEventListener("keyup", function(event) {
			    event.preventDefault();
			    if (event.keyCode === 13) {
			        document.getElementById("myBtn").click();
			    }
			});

			function buscar(){
				var buscar = document.getElementById("myInput").value;
				/*
				Opciones:
				Inicio,Productos,Talleres,Contacto,Acerca,Dirección,Horario,Cursos,Arte,Repostería
				*/

				/*qutar acentos y mayusculas*/
				buscar = buscar.normalize('NFD')
     							.replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
     							.normalize()
     							.toLowerCase();

				if (buscar != '') {
					if (buscar == 'inicio') {
						window.location.href = 'Index.html';
					}
					else if (buscar == 'productos' ||
							 buscar == 'reposteria') {
						window.location.href = 'Productos.html';
					}
					else if (buscar == 'talleres' ||
							 buscar == 'cursos' ||
							 buscar == 'arte') {
						window.location.href = 'Talleres.html';
					}
					else if (buscar == 'contacto' || 
							 buscar == 'direccion') {
						window.location.href = 'Contacto.html';
					}
					else if (buscar == 'contacto' || 
							 buscar == 'Dirección') {
						window.location.href = 'Acerca.html';
					}
					else{
						alert('No se encontraron resultados');
						document.getElementById("myInput").value = '';
					}
				}
			}