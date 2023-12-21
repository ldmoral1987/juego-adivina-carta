# Juego de adivinación de cartas
Juego de **magia matemática** en el que se seleccionan _5 cartas_ al azar de la baraja de póker, se da _1_ a un espectador y las otras 4 se ordenan en un orden concreto para que el ordenador adivine la que falta. :hearts: :clubs: :spades: :diamonds:. A continuación, se explica brevemente su funcionamiento y se detallan los ficheros de código afectados (`game.js`). El código `javascript` se encuentra debidamente comentado. La idea original del juego es de **Pedro Alegría** y puede consultarse en la web del **Rincón de Matemagia**. Esta implementación del juego se ha creado en colaboración con el profesor de matemáticas **Javier Ceballos**, gran amante de las matemáticas y los juegos de magia. ¡Espero que lo disfrutes!

## Funcionamiento
Se mezcla la baraja de póker y se extraen _5 cartas_. Al menos _2 cartas_ deben ser del mismo _palo_, por lo que el mago escoje una carta cuyo palo esté repetido y se la da al espectador. Después, se ordenan las _4 restantes_ y se insertan en el programa en un **orden concreto**.

## Entrada de cartas
De las _4 cartas_ que quedan, en la **segunda posición** se inserta la carta a partir de la cuál tenemos que sumar para llegar a la carta que queremos adivinar. Por definición, en la baraja de poker la **distancia máxima** entre dos cartas del mismo palo es de **6 posiciones**.

De esta forma, en las **posiciones 1**, **3** y **4** vamos a ordenar las cartas en un orden concreto para indicar al programa cuántas posiciones tiene que desplazarse (`módulo 13`) para obtener la carta adivinada.

## Cartas, palos y ordenación
Los **tipos de cartas**, los **palos** y la ordenación se almacenan en sendas **constantes** en el fichero `game.js` (`cards`, `types` y `orders`). El orden de las cartas está establecido de antemano. A igualdad numérica, los palos determinarán la importancia de la carta (véanse las mencionadas constantes).

## ¿Qué número se debe sumar?
En función del orden de las **posiciones 1**, **3** y **4**, se suma una cantidad sobre la carta de la **posición 2**. Esta suma se establece según el siguiente criterio (y teniendo en cuenta la ordenación establecida en la constante `orders`):

| Carta 1 | Carta 3 | Carta 4 | Suma |
| :---: | :---: | :---: | :---: |
| Pequeña | Intermedia | Grande | 1 |
| Pequeña | Grande | Intermedia | 2 |
| Intermedia | Pequeña | Grande | 3 |
| Intermedia | Grande | Pequeña | 4 |
| Grande | Pequeña | Intermedia | 5 |
| Grande | Intermedia | GrandPequeñae | 6 |
