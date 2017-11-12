
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



// BOTON GUARDAR NUEVA LISTA

var saveList = document.getElementById("save");
var inputList = document.getElementById("lista");
var main = document.getElementById("principal");


saveList.addEventListener("click", function() {

	// variables titulo lista
    var textList = document.getElementById("list").value;
    document.getElementById("list").value = "";
    var pList = document.createElement("p");
    var contentList = document.createTextNode(textList);


    // variable textarera
    var textArea = document.createElement("textarea");
 


    // variable botones
    var divButtons = document.createElement("div");
    var saveButton = document.createElement("button");
    var textButton = document.createTextNode("Añadir");
    var closeButton = document.createElement("span");

    // seccion donde va la nueva lista
    var divList = document.createElement("div");

  
    // crear nueva lista 

    // crear titulo
    pList.appendChild(contentList);
    divList.appendChild(pList);


    // crear textarea
    textArea.setAttribute("id", "card");
    textArea.setAttribute("placeholder", "Añadir una tarjeta...");
    divList.appendChild(textArea);
    
    

    // crear botones
    saveButton.appendChild(textButton);
    divButtons.appendChild(saveButton);
    saveButton.setAttribute("id","save-card") // para agregarle un id al element boton
    divButtons.appendChild(closeButton);
    closeButton.classList.add("icon-cancel"); 
    closeButton.setAttribute("id", "close-card");   
    divButtons.setAttribute("id", "buttons-card");  
    //divButtons.setAttribute("class", "hidden"); // para esconder los botones
    
    divList.appendChild(divButtons);
    divList.classList.add("newlist");

    main.insertBefore(divList,inputList);

    
   
});




// MOSTRAR INPUT PARA AÑADIR TARJETA


var addCard = document.getElementById("card");


addCard.addEventListener("click", function(){

	document.getElementById("buttons-card").classList.remove("hidden"); //quitar clase que los mantien escondidos
	
}); 


// CERRAR INPUT PARA AÑADIR TARJETA

var closeCard = document.getElementById("close-card");


closeCard.addEventListener("click", function(){

	document.getElementById("buttons-card").classList.add("hidden");
	
});




// BOTON AÑADIR NUEVA TARJETA

var newCard = document.getElementById("save-card");
var divCard = document.querySelector(".newlist");

newCard.addEventListener("click" , function(){

      
      // variables titulo tarjeta
    var textCard = document.getElementById("card").value;
    document.getElementById("card").value = "";

    var titleCard = document.createElement("div");
    var textTitle = document.createTextNode(textCard);

    titleCard.appendChild(textTitle);
    titleCard.setAttribute("class", "newcard"); 

   divCard.insertBefore(titleCard,addCard);




});




