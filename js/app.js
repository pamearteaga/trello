
//MOSTRAR INPUT PARA AÑADIR LISTA

var addList = document.getElementById("list");


addList.addEventListener("click", function(){

	document.getElementById("lista").classList.add("after");
	document.getElementById("buttons").classList.remove("hidden");
});


// CERRAR INPUT PARA AÑADIR LISTA


var closeList = document.getElementById("close");

   
closeList.addEventListener("click", function(){

	document.getElementById("lista").classList.remove("after");
	document.getElementById("buttons").classList.add("hidden");
});



// BOTON GUARDAR LISTA

var saveList = document.getElementById("save");
var lista = document.getElementById("lista");
var main = document.getElementById("principal");


saveList.addEventListener("click", function() {

	// variables titulo lista
    var textList = document.getElementById("list").value;
    document.getElementById("list").value = "";
    var pList = document.createElement("p");
    var contentList = document.createTextNode(textList);


    // variable textarera
    var textArea = document.createElement("textarea");
    // falta agregar atributo placeholder


    // variable botones
    var divButtons = document.createElement("div");
    var saveButton = document.createElement("button");
    var textButton = document.createTextNode("Guardar");
    var closeButton = document.createElement("span");

    // seccion donde va la nueva lista
    var divList = document.createElement("div");

  
    // crear nueva lista  
    //document.getElementById("save").disabled = false;

    // crear titulo
    pList.appendChild(contentList);
    divList.appendChild(pList);


    // crear textarea
    divList.appendChild(textArea);

    // crear botones
    saveButton.appendChild(textButton);
    divButtons.appendChild(saveButton);
    divButtons.appendChild(closeButton);
    
    divList.appendChild(divButtons);

    main.insertBefore(divList,lista);

    
   
});


/*
// MOSTRAR INPUT PARA AÑADIR TARJETA


var addCard = document.getElementById("card");


addCard.addEventListener("click", function(){

	document.getElementById("buttons-card").classList.remove("hidden");
	document.getElementById("card").classList.add("input-card");
});


// CERRAR INPUT PARA AÑADIR TARJETA

var closeCard = document.getElementById("close-card");


closeCard.addEventListener("click", function(){

	document.getElementById("buttons-card").classList.add("hidden");
	document.getElementById("card").classList.remove("input-card");
});
*/




