
// Definición de variables de trabajo.
var Objeto1,
    Objeto2,
    Objeto3,
    Objeto4,
	hayganador,
    numero = 0;
	
// Asignación de valor a las variables de trabajo.
Objeto1 = 20;
Objeto2 = 20;
Objeto3 = 20;
Objeto4 = 20;
n = 10;
hayganador=0;

// Asigación de variables de imagenes.
var figura1 = new Image();
figura1.src = "Galgo1.jpg";

var figura2 = new Image();
figura2.src = "Galgo2.jpg";

var figura3 = new Image();
figura3.src = "Galgo3.jpg";

var figura4 = new Image();
figura4.src = "Galgo4.jpg";

var	figura5 = new Image;
figura5.src = "meta.jpg";

// Función principal del proceso.
function principal() {
  contenedor = document.getElementById("contenedor");
  contenedor.style.background = "#f5faf7";
  contexto = contenedor.getContext("2d");
  
//La función setInterval ejecuta una instrucción indefinidamente cada un cierto periodo de tiempo (Milisegundos).
  setInterval(mover, 300);

}
// Función que determina el ganador y da movimiento a los objetos.
function mover() {
	if(Objeto1>=500 || Objeto2>=500 || Objeto3>=500 || Objeto4>=500)
			{
				if(Objeto1 > Objeto2 && Objeto1 > Objeto3 && Objeto1 > Objeto4){
            		X=Objeto1;
					Y='Galgo Número 1';
        		}
		        if(Objeto2 > Objeto1 && Objeto2 > Objeto3 && Objeto2 > Objeto4){
					X=Objeto2;
					Y='Galgo Número 2';
				}
		        if(Objeto3 > Objeto1 && Objeto3 > Objeto2 && Objeto3 > Objeto4){
		        	X=Objeto3;
					Y='Galgo Número 3';
				}if(Objeto4 > Objeto1 && Objeto4 > Objeto2 && Objeto4 > Objeto3){
		        	X=Objeto4;
					Y='Galgo Número 4';
				}
				alert('Felicidades al ganador: '+Y
				+' \n\n '
				)
				Objeto1 = 20;
				Objeto2 = 20;
				Objeto3 = 20;
				Objeto4 = 20;
				hayganador=1;
			}
  
  //La función Math.round() retorna el valor de un número redondeado al entero más cercano.
  //La función Math.random genera números aleatorios entre 0 y 1, pero esto lo podemos cambiar para que genere un número entre un rango
  //que nosotros deseemos. Para generar un número entre 0 y el número que deseemos, debemos escribir *num_deseado,
  //por ejemplo, Math.random()*30, esto genera números //entre 0 y 30, este ultimo no se incluye, el máximo sería 29,9999.
  Objeto1 = Objeto1 + Math.round(Math.random() * n);
  Objeto2 = Objeto2 + Math.round(Math.random() * n);
  Objeto3 = Objeto3 + Math.round(Math.random() * n);
  Objeto4 = Objeto4 + Math.round(Math.random() * n);

  //clearRect método () para especificar el conjunto vacío de píxeles dentro del rectángulo (Limpiar Pantalla).
  contexto.clearRect(0, 0, contenedor.width, contenedor.height);

  //El método CanvasRenderingContext2D.drawImage() de la API Canvas 2D proporciona
  //diferentes formas para dibujar una imagen dentro de canvas.
  contexto.drawImage(figura5, 620, 10);
  contexto.drawImage(figura1, Objeto1, 50);
  contexto.drawImage(figura2, Objeto2, 200);
  contexto.drawImage(figura3, Objeto3, 350);
  contexto.drawImage(figura4, Objeto4, 500);
}
