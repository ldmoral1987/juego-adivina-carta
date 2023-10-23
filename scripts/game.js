const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
const types = ["c", "d", "t", "p"];
const order = ["1d", "1t", "1c", "1p", "2d", "2t", "2c", "2p", "3d", "3t", "3c", "3p",
            "4d", "4t", "4c", "4p", "5d", "5t", "5c", "5p", "6d", "6t", "6c", "6p",
            "7d", "7t", "7c", "7p", "8d", "8t", "8c", "8p", "9d", "9t", "9c", "9p",
            "10d", "10t", "10c", "10p", "jd", "jt", "jc", "jp", "qd", "qt", "qc", "qp", 
            "kd", "kt", "kc", "kp"];

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

    // Se comprueba que las cartas sean diferentes
    if ( (card1 != card2) && (card1 != card3) && (card1 != card4) && (card2 != card3) && (card2 != card4) && (card3 != card4))
    {
        // Se muestra un mensaje con las cartas seleccionadas
        alert("Cartas seleccionadas:\n" + card1 + "," + card2 + "," + card3 + "," + card4);

        // Ahora se tiene que calcular el orden que tienen las cartas para ver cuánto se sumas
        // Se consulta el vector de orden que contiene la ordenación maestra de todas las cartas
        // Para esto, se calculará el índice en el que se encuentra cada una de las cartas
        // Como se va a sumar sobre la carta 2, se calcula entonces el índice de las cartas 1, 3 y 4
        idxCard1 = order.indexOf(card1);
        idxCard3 = order.indexOf(card3);
        idxCard4 = order.indexOf(card4);

        console.log(idxCard1);
        console.log(idxCard3);
        console.log(idxCard4);
        var add = 0;

        // Con los índices, se puede determinar el orden en el que hay que sumar a la segunda carta
        // idxCard1 - idxCard3 - idxCard4
        // pequeño  - igual     - grande      -> Sumar 1
        // pequeño  - grande    - igual       -> Sumar 2
        // igual    - pequeño   - grande      -> Sumar 3
        // igual    - grande    - pequeño     -> Sumar 4
        // grande   - pequeño   - igual       -> Sumar 5
        // grande   - igual     - pequeño     -> Sumar 6
        if ((idxCard1 < idxCard3) && (idxCard3 < idxCard4) && (idxCard1 < idxCard4))
            add = 1;
        else if ((idxCard1 < idxCard3) && (idxCard3 > idxCard4) && (idxCard1 < idxCard4))
            add = 2;
        else if ((idxCard1 < idxCard4) && (idxCard3 < idxCard4) && (idxCard1 > idxCard4))
            add = 3;
        else if ((idxCard1 > idxCard4) && (idxCard3 > idxCard4) && (idxCard1 > idxCard4))
            add = 4;
        else if ((idxCard1 > idxCard4) && (idxCard3 < idxCard4) && (idxCard1 > idxCard4))
            add = 5;
        else if ((idxCard1 > idxCard4) && (idxCard3 > idxCard4) && (idxCard1 > idxCard4))
            add = 6;

        console.log("Hay que sumar: " + add);


    }
    else
    {
        // Se han detectado cartas duplicadas
        alert("Error: no se permite utilizar cartas duplicadas");
    }
}