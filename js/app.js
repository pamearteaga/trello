
//MOSTRAR INPUT PARA AÑADIR LISTA

var addList = document.getElementById("list"); // llamar input para agregar nueva lista 


addList.addEventListener("click", function(){ // funcion se activa la hacer click en input

	document.getElementById("lista").classList.add("after"); // se muestra el formulario los botones para egregar nueva lista
	document.getElementById("buttons").classList.remove("hidden");// se remueve la clase css que mantiene los botones escondidos
});


// CERRAR INPUT PARA AÑADIR LISTA


var closeList = document.getElementById("close"); // se llama al icono para cerrar

   
closeList.addEventListener("click", function(){ // funcion se activa la hacer click en input

	document.getElementById("lista").classList.remove("after");// se oculta el formulario los botones para egregar nueva lista
	document.getElementById("buttons").classList.add("hidden");// se rañade la clase css que mantiene los botones escondidos
});



// BOTON GUARDAR NUEVA LISTA

var saveList = document.getElementById("save"); // se llama boton para guardar nueva lista
var inputList = document.getElementById("lista"); // se llama contenedor del input para añadir nueva lista
var main = document.getElementById("principal"); // se llama contenedor principal


saveList.addEventListener("click", function() { // funcion se activa la hacer click en input

	// variables titulo lista
    var textList = document.getElementById("list").value; // se extrae el texto que ingresa el usuario en input de nueva lista
    document.getElementById("list").value = ""; // se limpia 
    var pList = document.createElement("p"); // se crea el p donde irá el título
    var contentList = document.createTextNode(textList); // se crea el text node que se insertará en el p de título


    // variable textarera
    var textArea = document.createElement("textarea"); // se crea el textarea para añadir tarjetas nuevas
 


    // variable botones
    var divButtons = document.createElement("div"); // se crea el div donde irán los botones para crear nuesvas tarjetas
    var saveButton = document.createElement("button");// se crea el botón para añadir nuevas tarjetas
    var textButton = document.createTextNode("Añadir"); // texto "Añadir" del boton
    var closeButton = document.createElement("span");// se crea el botón para cerrar el textarea

    // seccion donde va la nueva lista
    var divList = document.createElement("div"); // contenedor de la nueva lista

  
    // SE CREA NUEVA LISTA

    // crear titulo
    pList.appendChild(contentList); // se inserta el texto que ingreso el usuario como titulo de la lista
    divList.appendChild(pList); // se inserta el titulo en el div de la lista nueva


    // insertar textarea
    textArea.setAttribute("id", "card"); // se le añade el atributo card
    textArea.setAttribute("placeholder", "Añadir una tarjeta..."); // se le añade el texto del placeholder
    divList.appendChild(textArea); // se inserta el textarea en el div de la lista nueva
    
    

    // insertar botones
    saveButton.appendChild(textButton); // se inserta el texto "Añadir" en el boton para agregar nuevas tarjetas
    divButtons.appendChild(saveButton); //se inserta el boton para añadir nuevas tarjetas en el div que contienen los botones
    saveButton.setAttribute("id","save-card") // para agregarle un id al boton de añadir
    divButtons.appendChild(closeButton); // se inserta el boton para cerra input en contenedor de botones
    closeButton.classList.add("icon-cancel"); // se inserta el icono para cerrar
    closeButton.setAttribute("id", "close-card"); // se añade id a boton de cerar  
    divButtons.setAttribute("id", "buttons-card"); // se añade id al contenedor de botones 
    //divButtons.setAttribute("class", "hidden"); // para esconder los botones (funciona pero despues no se puede quitar)


    
    divList.appendChild(divButtons); // insertar contenedor de botones en la lista nueva
    divList.classList.add("newlist");// agregar clases al div de la lista nueva

    main.insertBefore(divList,inputList); // insertar lista nueva antes del inputlist, lo que permite que las listas nuevas siempre queden al lado izquierdo

    
   
});




// MOSTRAR INPUT PARA AÑADIR TARJETA


var addCard = document.getElementById("card"); // llamar al textarea


addCard.addEventListener("click", function(){

	document.getElementById("buttons-card").classList.remove("hidden"); //quitar clase que mantiene los botones escondidos
	
}); 


// CERRAR INPUT PARA AÑADIR TARJETA

var closeCard = document.getElementById("close-card"); // llamar al boton para cerras


closeCard.addEventListener("click", function(){

	document.getElementById("buttons-card").classList.add("hidden"); //añadir clase que mantiene los botones escondidos
	
});




// BOTON AÑADIR NUEVA TARJETA

var newCard = document.getElementById("save-card"); // llamar boton para añadir nueva tarjeta
var divCard = document.querySelector(".newlist"); // llamar div que contiene le título de la nueva tarjeta

newCard.addEventListener("click" , function(){

      
    // variables titulo tarjeta
    var textCard = document.getElementById("card").value; // obtener texto que ingresa el usuario 
    document.getElementById("card").value = ""; // limpiar

    var titleCard = document.createElement("div"); // crear div donde estará el título de la nueva tarjeta
    var textTitle = document.createTextNode(textCard); //se crea el nodo texto con el título ingresado por el usuario

    titleCard.appendChild(textTitle); // se inserta el texto en el título
    titleCard.setAttribute("class", "newcard"); // se agrega la clase css

   divCard.insertBefore(titleCard,addCard); // se inserta el título en div de la nueva tarjeta



});




