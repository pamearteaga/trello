
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



// MOSTRAR INPUT PARA AÑADIR TARJETA


var addCard = document.getElementById("card");


addCard.addEventListener("click", function(){


	document.getElementById("buttons-card").classList.remove("hidden");
	document.getElementById("card").classList.add("input-card");
});




var closeCard = document.getElementById("close-card");


closeCard.addEventListener("click", function(){


	document.getElementById("buttons-card").classList.add("hidden");
	document.getElementById("card").classList.remove("input-card");
});




