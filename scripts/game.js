const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
const types = ["c", "d", "t", "p"];

// Cambia la carta seleccionada, teniendo en cuenta el orden (-1 bajar, +1 subir)
function cardChange(id, order)
{
    // Obtenemos el valor del id de la carta actual
    var cardId = document.getElementById("id" + id).value;

    // Obtenemos el tipo de la carta actual
    var typeId = document.getElementById("type" + id).value;

    // Comprobamos si es - (carta vacía), y si está vacía, le ponemos
    // el 1 (la primera carta del palo de la baraja)
    if(cardId == "-")
    {
        // Se carga el valor 0 en el índice (seleccionar la primera carta)
        var card = 0;
        document.getElementById("id" + id).value = card;
    }
    else
    {
        // Se suma 1 al índice y se calcula el módulo (para recorrer el array de cartas)
        var card = (parseInt(cardId) + order) % 13;

        // Si llegamos al final (< 0), asignamos 12 para ir a la última carta del palo de la baraja
        if (card < 0)
            card = 12;

        // Se cambia el id de la carta
        document.getElementById("id" + id).value = card;
    }

    // Se actualiza la carta visible, teniendo en cuenta el índice y el tipo
    document.getElementById("card" + id).src = "./images/" + types[typeId] + cards[card] + ".png";
}

// Cambia el palo de las cartas de forma progresiva (entre los 4 disponibles)
function typeChange(id)
{
    // Obtenemos el valor del id de la carta actual
    var cardId = document.getElementById("id" + id).value;

    // Obtenemos el palo actual
    var typeId = document.getElementById("type" + id).value;
    
    // Se suma 1 al palo teniendo en cuenta el módulo 4
    typeId = (parseInt(typeId) + 1) % 4;
    document.getElementById("type" + id).value = typeId;

    // Se actualiza el palo teniendo en cuenta la suma
    document.getElementById("timg" + id).src = "./images/" + types[typeId] + ".png";

    // Si la carta actual no es la carta boca abajo (-), entonces
    // cambiamos también la carta teniendo en cuenta el cambio de palo
    if(cardId != "-")
    {
        document.getElementById("card" + id).src = "./images/" + types[typeId] + cards[cardId] + ".png";
    }
}

// Selecciona las cartas
function selectCards()
{
    // Lee las cuatro cartas seleccionadas
    var card1 = cards[document.getElementById("id1").value] + types[document.getElementById("type1").value];
    var card2 = cards[document.getElementById("id2").value] + types[document.getElementById("type2").value];
    var card3 = cards[document.getElementById("id3").value] + types[document.getElementById("type3").value];
    var card4 = cards[document.getElementById("id4").value] + types[document.getElementById("type4").value];

    alert("Cartas seleccionadas:\n" + card1 + "," + card2 + "," + card3 + "," + card4);
}