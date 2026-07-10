// Banco de preguntas del Pasapalabra.
// Cada letra tiene varias preguntas; el juego elige una al azar por partida.
// El campo "categoria" es solo una etiqueta interna para organizar el banco,
// no se usa todavía para filtrar preguntas en el juego.
// El "tipo" de pregunta (Empieza por / Contiene la) lo calcula el juego según
// la letra, no hace falta indicarlo aquí.

const BANCO_PREGUNTAS = {
  A: [
    { categoria: "geografia", texto: "País europeo cuya capital es Viena, famoso por sus valses.", respuesta: "Austria" },
    { categoria: "animales", texto: "Ave rapaz, símbolo de Estados Unidos y de la libertad.", respuesta: "Águila" },
    { categoria: "musica", texto: "Instrumento musical de cuerda, de forma triangular.", respuesta: "Arpa" },
    { categoria: "deporte", texto: "Deporte olímpico en el que se corre, se salta y se lanzan objetos.", respuesta: "Atletismo" },
    { categoria: "ciencia", texto: "Parte más pequeña de la materia que conserva las propiedades de un elemento químico.", respuesta: "Átomo" },
    { categoria: "geografia", texto: "Continente donde se encuentran Egipto y Marruecos.", respuesta: "África" },
    { categoria: "gastronomia", texto: "Condimento líquido y verde, hecho de aceituna, base de la dieta mediterránea.", respuesta: "Aceite" },
    { categoria: "cultura-general", texto: "Conjunto ordenado de letras que forman un idioma escrito.", respuesta: "Alfabeto" }
  ],
  B: [
    { categoria: "animales", texto: "Mamífero marino, el animal más grande que existe.", respuesta: "Ballena" },
    { categoria: "arte", texto: "Danza clásica que se baila de puntillas.", respuesta: "Ballet" },
    { categoria: "geografia", texto: "País sudamericano donde se encuentra el lago Titicaca.", respuesta: "Bolivia" },
    { categoria: "deporte", texto: "Deporte en el que se encesta un balón en un aro, muy popular en Estados Unidos.", respuesta: "Baloncesto" },
    { categoria: "musica", texto: "Conjunto de tambores y platillos que marca el ritmo en una banda de rock.", respuesta: "Batería" },
    { categoria: "gastronomia", texto: "Pan de molde con forma de rosca, de origen judío, muy popular en Nueva York.", respuesta: "Bagel" },
    { categoria: "cine-tv", texto: "Superhéroe que protege Gotham City escondido tras una capa y una máscara con orejas.", respuesta: "Batman" },
    { categoria: "historia", texto: "Ciudad alemana dividida por un muro durante la Guerra Fría.", respuesta: "Berlín" }
  ],
  C: [
    { categoria: "cultura-general", texto: "Órgano que bombea la sangre por todo el cuerpo.", respuesta: "Corazón" },
    { categoria: "geografia", texto: "País sudamericano cuya capital es Santiago.", respuesta: "Chile" },
    { categoria: "historia", texto: "Explorador genovés que llegó a América en 1492.", respuesta: "Colón" },
    { categoria: "gastronomia", texto: "Bebida caliente hecha con granos tostados y molidos, muy popular por las mañanas.", respuesta: "Café" },
    { categoria: "animales", texto: "Insecto rastrero considerado plaga doméstica, de color marrón oscuro.", respuesta: "Cucaracha" },
    { categoria: "literatura", texto: "Escritor español autor de \"Don Quijote de la Mancha\".", respuesta: "Cervantes" },
    { categoria: "geografia", texto: "País asiático más poblado del mundo, cuya capital es Pekín.", respuesta: "China" },
    { categoria: "ciencia", texto: "Sustancia formada por dos o más elementos químicos combinados entre sí.", respuesta: "Compuesto" }
  ],
  D: [
    { categoria: "ciencia", texto: "Figura geométrica de diez lados.", respuesta: "Decágono" },
    { categoria: "cultura-general", texto: "En la mitología griega, dios del vino y de las fiestas.", respuesta: "Dionisio" },
    { categoria: "geografia", texto: "País escandinavo cuya capital es Copenhague.", respuesta: "Dinamarca" },
    { categoria: "deporte", texto: "Partido de tenis o pádel en el que juegan dos parejas, uno contra dos por bando.", respuesta: "Dobles" },
    { categoria: "animales", texto: "Reptil prehistórico gigante, ya extinguido, como el T-Rex.", respuesta: "Dinosaurio" },
    { categoria: "arte", texto: "Movimiento artístico absurdo de principios del siglo XX, nacido en Zúrich.", respuesta: "Dadaísmo" },
    { categoria: "gastronomia", texto: "Alimento que se toma al final de una comida para endulzar el paladar.", respuesta: "Dulce" },
    { categoria: "cultura-general", texto: "Papel oficial que certifica la identidad de una persona.", respuesta: "Documento" }
  ],
  E: [
    { categoria: "geografia", texto: "País europeo cuya capital es Madrid.", respuesta: "España" },
    { categoria: "geografia", texto: "Continente donde se encuentra España.", respuesta: "Europa" },
    { categoria: "historia", texto: "Antigua civilización del Nilo, famosa por las pirámides y los faraones.", respuesta: "Egipto" },
    { categoria: "ciencia", texto: "Fenómeno en el que la Luna se interpone entre el Sol y la Tierra.", respuesta: "Eclipse" },
    { categoria: "deporte", texto: "Deporte en el que se monta a caballo y se saltan obstáculos.", respuesta: "Equitación" },
    { categoria: "musica", texto: "Género musical con ritmos repetitivos, muy habitual en las discotecas.", respuesta: "Electrónica" },
    { categoria: "animales", texto: "Mamífero africano de gran tamaño, con una trompa larga y colmillos de marfil.", respuesta: "Elefante" },
    { categoria: "gastronomia", texto: "Vino con burbujas que se usa para brindar en las celebraciones.", respuesta: "Espumante" }
  ],
  F: [
    { categoria: "ciencia", texto: "Ciencia que estudia el movimiento, la energía y la materia.", respuesta: "Física" },
    { categoria: "arte", texto: "Movimiento artístico de principios del siglo XX que exaltaba la velocidad y la máquina.", respuesta: "Futurismo" },
    { categoria: "geografia", texto: "País europeo cuya capital es París.", respuesta: "Francia" },
    { categoria: "deporte", texto: "Deporte de equipo en el que se mete un balón en la portería con los pies.", respuesta: "Fútbol" },
    { categoria: "gastronomia", texto: "Alimento vegetal y dulce que crece en árboles o plantas, como la manzana o el plátano.", respuesta: "Fruta" },
    { categoria: "cultura-general", texto: "Persona que admira y sigue a un artista, equipo o celebridad.", respuesta: "Fanático" },
    { categoria: "musica", texto: "Instrumento de viento madera, delgado y alargado, que se toca en posición horizontal.", respuesta: "Flauta" },
    { categoria: "animales", texto: "Ave de plumaje rosado que vive en grandes bandadas cerca del agua, con patas muy largas.", respuesta: "Flamenco" }
  ],
  G: [
    { categoria: "animales", texto: "Ave doméstica de corral que canta al amanecer.", respuesta: "Gallo" },
    { categoria: "geografia", texto: "País centroamericano cuya capital es Ciudad de Guatemala.", respuesta: "Guatemala" },
    { categoria: "historia", texto: "Conflicto armado a gran escala entre países, como la Primera o la Segunda Mundial.", respuesta: "Guerra" },
    { categoria: "deporte", texto: "Punto que se consigue al meter el balón en la portería en fútbol.", respuesta: "Gol" },
    { categoria: "ciencia", texto: "Fuerza que atrae los objetos hacia el centro de la Tierra.", respuesta: "Gravedad" },
    { categoria: "animales", texto: "Felino salvaje muy veloz, con manchas negras redondas sobre pelaje amarillo.", respuesta: "Guepardo" },
    { categoria: "musica", texto: "Instrumento de seis cuerdas, muy usado en el rock y el flamenco.", respuesta: "Guitarra" },
    { categoria: "gastronomia", texto: "Legumbre pequeña, verde y redonda, que crece en vainas.", respuesta: "Guisante" }
  ],
  H: [
    { categoria: "geografia", texto: "País europeo cuya capital es Budapest.", respuesta: "Hungría" },
    { categoria: "ciencia", texto: "Físico británico famoso por sus estudios sobre los agujeros negros.", respuesta: "Hawking" },
    { categoria: "gastronomia", texto: "Alimento ovalado que ponen las gallinas, base de la tortilla.", respuesta: "Huevo" },
    { categoria: "deporte", texto: "Deporte de equipo que se juega sobre hielo con un disco y palos curvos.", respuesta: "Hockey" },
    { categoria: "animales", texto: "Mamífero africano enorme y de piel gruesa que vive en ríos y lagos.", respuesta: "Hipopótamo" },
    { categoria: "cine-tv", texto: "Nombre del joven mago protagonista de una saga que estudia en Hogwarts.", respuesta: "Harry" },
    { categoria: "ciencia", texto: "Fenómeno de fuertes vientos giratorios, típico del Caribe, también llamado ciclón.", respuesta: "Huracán" },
    { categoria: "literatura", texto: "Poeta épico de la Antigua Grecia, autor de \"La Odisea\" y \"La Ilíada\".", respuesta: "Homero" }
  ],
  I: [
    { categoria: "geografia", texto: "País europeo con forma de bota.", respuesta: "Italia" },
    { categoria: "geografia", texto: "País escandinavo conocido por sus volcanes y géiseres.", respuesta: "Islandia" },
    { categoria: "historia", texto: "Civilización precolombina que construyó Machu Picchu en los Andes.", respuesta: "Inca" },
    { categoria: "ciencia", texto: "Enorme bloque de hielo flotante que hundió al Titanic.", respuesta: "Iceberg" },
    { categoria: "arte", texto: "Movimiento artístico francés del siglo XIX que capturaba la luz y el instante.", respuesta: "Impresionismo" },
    { categoria: "deporte", texto: "Prueba deportiva de resistencia extrema, versión larga del triatlón, popularizada en Hawái.", respuesta: "Ironman" },
    { categoria: "cultura-general", texto: "Símbolo gráfico y simplificado que representa una idea o un objeto.", respuesta: "Icono" },
    { categoria: "animales", texto: "Ave grande y blanca, de cuello curvo, sagrada en el Antiguo Egipto.", respuesta: "Ibis" }
  ],
  J: [
    { categoria: "cultura-general", texto: "Día de la semana entre el miércoles y el viernes.", respuesta: "Jueves" },
    { categoria: "ciencia", texto: "Planeta más grande del sistema solar.", respuesta: "Júpiter" },
    { categoria: "geografia", texto: "País asiático formado por islas, cuya capital es Tokio.", respuesta: "Japón" },
    { categoria: "deporte", texto: "Arte marcial olímpica de origen japonés, con un uniforme llamado \"gi\".", respuesta: "Judo" },
    { categoria: "musica", texto: "Género musical afroamericano nacido en Nueva Orleans, con mucha improvisación.", respuesta: "Jazz" },
    { categoria: "deporte", texto: "Profesional que monta a caballo en las carreras hípicas.", respuesta: "Jockey" },
    { categoria: "cultura-general", texto: "Persona con autoridad para decidir un conflicto o valorar un concurso.", respuesta: "Juez" },
    { categoria: "animales", texto: "Ave de zoo con un cuello larguísimo, la más alta del mundo.", respuesta: "Jirafa" }
  ],
  L: [
    { categoria: "animales", texto: "Felino de gran melena, conocido como el rey de la selva.", respuesta: "León" },
    { categoria: "geografia", texto: "Diminuto país europeo situado entre Suiza y Austria.", respuesta: "Liechtenstein" },
    { categoria: "geografia", texto: "País de Oriente Medio cuya capital es Beirut.", respuesta: "Líbano" },
    { categoria: "ciencia", texto: "Fuente de luz artificial muy concentrada, usada en cirugía y en punteros.", respuesta: "Láser" },
    { categoria: "cultura-general", texto: "Conjunto de normas escritas y aprobadas por un gobierno que regulan la convivencia.", respuesta: "Ley" },
    { categoria: "deporte", texto: "Competición en la que varios equipos juegan entre sí durante una temporada.", respuesta: "Liga" },
    { categoria: "literatura", texto: "Género literario en el que se expresan sentimientos, normalmente en verso.", respuesta: "Lírica" },
    { categoria: "animales", texto: "Mamífero salvaje parecido al perro, que aúlla en manada durante la noche.", respuesta: "Lobo" }
  ],
  M: [
    { categoria: "geografia", texto: "Capital de España.", respuesta: "Madrid" },
    { categoria: "ciencia", texto: "Planeta conocido como el planeta rojo.", respuesta: "Marte" },
    { categoria: "geografia", texto: "País norteamericano famoso por los mariachis y los tacos.", respuesta: "México" },
    { categoria: "animales", texto: "Primate inteligente, pariente cercano del ser humano, vive en selvas tropicales.", respuesta: "Mono" },
    { categoria: "musica", texto: "Arte de combinar sonidos con ritmo y melodía.", respuesta: "Música" },
    { categoria: "gastronomia", texto: "Fruta roja o verde y redonda, dicen que aleja al médico si se come una al día.", respuesta: "Manzana" },
    { categoria: "geografia", texto: "Elevación natural del terreno, más alta que una colina, como el Everest.", respuesta: "Montaña" },
    { categoria: "cine-tv", texto: "Ratón animado más famoso de Disney, viste guantes blancos y pantalón rojo.", respuesta: "Mickey" }
  ],
  N: [
    { categoria: "geografia", texto: "País escandinavo famoso por sus fiordos.", respuesta: "Noruega" },
    { categoria: "geografia", texto: "Nombre que recibe la mitad superior del continente americano.", respuesta: "Norteamérica" },
    { categoria: "ciencia", texto: "Elemento químico gaseoso que compone la mayor parte del aire que respiramos.", respuesta: "Nitrógeno" },
    { categoria: "geografia", texto: "Río más largo de África, que atraviesa Egipto.", respuesta: "Nilo" },
    { categoria: "gastronomia", texto: "Fruto seco con cáscara dura, como la almendra o la avellana.", respuesta: "Nuez" },
    { categoria: "cine-tv", texto: "Plataforma de streaming muy popular para ver series y películas.", respuesta: "Netflix" },
    { categoria: "cultura-general", texto: "Momento del día en que el sol se pone y llega la oscuridad.", respuesta: "Noche" },
    { categoria: "gastronomia", texto: "Fruta tropical anaranjada y jugosa, muy usada para hacer zumo por la mañana.", respuesta: "Naranja" }
  ],
  O: [
    { categoria: "geografia", texto: "Continente donde se encuentra Australia.", respuesta: "Oceanía" },
    { categoria: "musica", texto: "Instrumento musical de tubos, típico de las iglesias.", respuesta: "Órgano" },
    { categoria: "deporte", texto: "Competición deportiva internacional que se celebra cada cuatro años, con anillos como símbolo.", respuesta: "Olimpiadas" },
    { categoria: "animales", texto: "Mamífero grande y plantígrado que hiberna en invierno y adora la miel.", respuesta: "Oso" },
    { categoria: "ciencia", texto: "Gas incoloro e inodoro imprescindible para respirar.", respuesta: "Oxígeno" },
    { categoria: "geografia", texto: "Punto cardinal por donde se pone el sol.", respuesta: "Oeste" },
    { categoria: "gastronomia", texto: "Fruto pequeño, verde o negro, del que se extrae el aceite, típico mediterráneo.", respuesta: "Oliva" },
    { categoria: "cultura-general", texto: "En la Antigua Grecia, persona o lugar que predecía el futuro, como el de Delfos.", respuesta: "Oráculo" }
  ],
  P: [
    { categoria: "geografia", texto: "País sudamericano donde se encuentra Machu Picchu.", respuesta: "Perú" },
    { categoria: "animales", texto: "Ave que no vuela, de plumaje blanco y negro, típica de la Antártida.", respuesta: "Pingüino" },
    { categoria: "gastronomia", texto: "Plato italiano hecho de masa, con tomate y queso, cocinado al horno.", respuesta: "Pizza" },
    { categoria: "deporte", texto: "Deporte de raqueta muy popular en España, que se juega por parejas en una pista cerrada.", respuesta: "Pádel" },
    { categoria: "historia", texto: "Persona que asalta barcos en el mar, como los del Caribe en el siglo XVII.", respuesta: "Pirata" },
    { categoria: "ciencia", texto: "Astro rocoso que orbita alrededor de una estrella, como la Tierra o Marte.", respuesta: "Planeta" },
    { categoria: "musica", texto: "Instrumento de teclas blancas y negras, con cuerdas percutidas por macillos.", respuesta: "Piano" },
    { categoria: "animales", texto: "Ave de corral muy grande, típica de las cenas de Navidad en muchos países.", respuesta: "Pavo" }
  ],
  Q: [
    { categoria: "gastronomia", texto: "Alimento sólido elaborado a partir de leche cuajada.", respuesta: "Queso" },
    { categoria: "ciencia", texto: "Ciencia que estudia la composición y las reacciones de la materia.", respuesta: "Química" },
    { categoria: "cultura-general", texto: "Sala de un hospital donde se realizan las operaciones.", respuesta: "Quirófano" },
    { categoria: "cultura-general", texto: "Pequeño puesto callejero donde se venden periódicos, revistas o chucherías.", respuesta: "Quiosco" },
    { categoria: "cultura-general", texto: "Número que resulta de sumar diez más cinco.", respuesta: "Quince" },
    { categoria: "cultura-general", texto: "Lengua indígena hablada en los Andes, sobre todo en Perú y Bolivia.", respuesta: "Quechua" }
  ],
  R: [
    { categoria: "animales", texto: "Anfibio verde que vive cerca del agua y dice \"croac\".", respuesta: "Rana" },
    { categoria: "geografia", texto: "País europeo cuya capital es Bucarest.", respuesta: "Rumanía" },
    { categoria: "geografia", texto: "País más grande del mundo, cuya capital es Moscú.", respuesta: "Rusia" },
    { categoria: "musica", texto: "Género musical urbano y bailable muy popular en Latinoamérica.", respuesta: "Reguetón" },
    { categoria: "deporte", texto: "Deporte de balón ovalado en el que se puede placar al rival, muy popular en Nueva Zelanda.", respuesta: "Rugby" },
    { categoria: "ciencia", texto: "Línea de luz que viaja en línea recta desde una fuente luminosa, como el sol.", respuesta: "Rayo" },
    { categoria: "cultura-general", texto: "Objeto redondo que gira sobre un eje, parte fundamental de coches y bicicletas.", respuesta: "Rueda" },
    { categoria: "geografia", texto: "Curso de agua natural que desemboca en el mar, como el Amazonas o el Nilo.", respuesta: "Río" }
  ],
  S: [
    { categoria: "ciencia", texto: "Estrella que ilumina nuestro sistema solar.", respuesta: "Sol" },
    { categoria: "geografia", texto: "País asiático con forma de lágrima, situado junto a la India.", respuesta: "Sri Lanka" },
    { categoria: "geografia", texto: "País escandinavo cuya capital es Estocolmo.", respuesta: "Suecia" },
    { categoria: "deporte", texto: "Deporte que se practica sobre una tabla, deslizándose sobre las olas del mar.", respuesta: "Surf" },
    { categoria: "animales", texto: "Reptil sin patas y de cuerpo alargado; algunas especies son venenosas.", respuesta: "Serpiente" },
    { categoria: "musica", texto: "Instrumento de viento metal con forma de S, muy usado en el jazz.", respuesta: "Saxofón" },
    { categoria: "gastronomia", texto: "Condimento blanco y cristalino que da sabor salado a la comida.", respuesta: "Sal" },
    { categoria: "ciencia", texto: "Nombre que recibe el conjunto de estrellas y planetas al que pertenece la Tierra.", respuesta: "Sistema" }
  ],
  T: [
    { categoria: "geografia", texto: "País situado entre Europa y Asia, cuya capital es Ankara.", respuesta: "Turquía" },
    { categoria: "animales", texto: "Reptil de caparazón duro, muy longevo, símbolo de lentitud.", respuesta: "Tortuga" },
    { categoria: "cine-tv", texto: "Aparato electrónico que se usa para ver programas, series y noticias en casa.", respuesta: "Televisión" },
    { categoria: "deporte", texto: "Deporte de raqueta que se juega en una pista con red, popular en torneos como Wimbledon.", respuesta: "Tenis" },
    { categoria: "gastronomia", texto: "Postre horneado y redondo que se decora para los cumpleaños.", respuesta: "Tarta" },
    { categoria: "musica", texto: "Género musical argentino, apasionado, que se baila en pareja muy pegados.", respuesta: "Tango" },
    { categoria: "ciencia", texto: "Fenómeno geológico en el que la tierra tiembla bruscamente.", respuesta: "Terremoto" },
    { categoria: "ciencia", texto: "Instrumento óptico usado para observar objetos lejanos, como las estrellas.", respuesta: "Telescopio" }
  ],
  U: [
    { categoria: "cultura-general", texto: "Institución donde se cursan estudios superiores tras el instituto.", respuesta: "Universidad" },
    { categoria: "geografia", texto: "País sudamericano cuya capital es Montevideo.", respuesta: "Uruguay" },
    { categoria: "ciencia", texto: "Elemento químico radiactivo usado como combustible nuclear.", respuesta: "Uranio" },
    { categoria: "gastronomia", texto: "Fruta pequeña y redonda que crece en racimos, con la que se hace el vino.", respuesta: "Uva" },
    { categoria: "animales", texto: "Criatura mitológica parecida a un caballo blanco, con un solo cuerno en la frente.", respuesta: "Unicornio" },
    { categoria: "cultura-general", texto: "Prenda de ropa idéntica que llevan los miembros de un equipo o colegio.", respuesta: "Uniforme" },
    { categoria: "cine-tv", texto: "Estudio de cine y parque temático estadounidense, creador de \"Jurassic Park\".", respuesta: "Universal" },
    { categoria: "ciencia", texto: "Cantidad que se usa como referencia para medir algo, como el metro o el kilo.", respuesta: "Unidad" }
  ],
  V: [
    { categoria: "arte", texto: "Pintor español autor de \"Las Meninas\".", respuesta: "Velázquez" },
    { categoria: "ciencia", texto: "Montaña que expulsa lava, cenizas y gases desde su interior.", respuesta: "Volcán" },
    { categoria: "geografia", texto: "País asiático alargado, con capital en Hanói, escenario de una famosa guerra.", respuesta: "Vietnam" },
    { categoria: "gastronomia", texto: "Bebida alcohólica hecha con uvas fermentadas.", respuesta: "Vino" },
    { categoria: "animales", texto: "Mamífero rumiante de los Andes, pariente salvaje de la llama, con una lana muy fina.", respuesta: "Vicuña" },
    { categoria: "musica", texto: "Instrumento de cuerda frotada con arco, el más pequeño y agudo de su familia.", respuesta: "Violín" },
    { categoria: "deporte", texto: "Deporte en el que dos equipos golpean un balón por encima de una red sin dejarlo caer.", respuesta: "Voleibol" },
    { categoria: "ciencia", texto: "Microorganismo mucho más pequeño que una bacteria, causante de enfermedades como la gripe.", respuesta: "Virus" }
  ],
  X: [
    { categoria: "musica", texto: "Instrumento de percusión formado por láminas de madera que se golpean con baquetas.", respuesta: "Xilófono" },
    { categoria: "cultura-general", texto: "Sentimiento de rechazo o miedo hacia lo extranjero o desconocido.", respuesta: "Xenofobia" },
    { categoria: "ciencia", texto: "Elemento químico gaseoso, noble, usado en algunas lámparas y flashes de cámara.", respuesta: "Xenón" },
    { categoria: "arte", texto: "Técnica de grabado artístico que consiste en tallar una plancha de madera.", respuesta: "Xilografía" }
  ],
  Y: [
    { categoria: "gastronomia", texto: "Postre lácteo cremoso y fermentado, muy habitual en el desayuno.", respuesta: "Yogur" },
    { categoria: "cultura-general", texto: "Embarcación de lujo, grande y elegante, usada para navegar por placer.", respuesta: "Yate" },
    { categoria: "deporte", texto: "Disciplina física y mental de origen indio, con posturas y respiración controlada.", respuesta: "Yoga" },
    { categoria: "gastronomia", texto: "Parte amarilla del huevo, rica en grasas y vitaminas.", respuesta: "Yema" },
    { categoria: "cultura-general", texto: "Bloque de hierro sobre el que el herrero golpea el metal caliente con un martillo.", respuesta: "Yunque" },
    { categoria: "ciencia", texto: "Elemento químico necesario para la tiroides, presente en la sal yodada.", respuesta: "Yodo" },
    { categoria: "animales", texto: "Hembra del caballo.", respuesta: "Yegua" }
  ],
  Z: [
    { categoria: "animales", texto: "Mamífero astuto, de hocico puntiagudo y cola larga, protagonista de muchas fábulas.", respuesta: "Zorro" },
    { categoria: "cultura-general", texto: "Calzado que cubre y protege el pie, se usa a diario.", respuesta: "Zapato" },
    { categoria: "gastronomia", texto: "Líquido que se extrae al exprimir una fruta, se bebe en el desayuno.", respuesta: "Zumo" },
    { categoria: "gastronomia", texto: "Verdura naranja y alargada, muy buena para la vista, encanta a los conejos.", respuesta: "Zanahoria" },
    { categoria: "cultura-general", texto: "Piedra preciosa de color azul intenso, muy valorada en joyería.", respuesta: "Zafiro" },
    { categoria: "cultura-general", texto: "Lugar donde se exhiben animales salvajes en cautividad para que el público los vea.", respuesta: "Zoológico" },
    { categoria: "cultura-general", texto: "Se dice de la persona que usa la mano izquierda como principal.", respuesta: "Zurdo" },
    { categoria: "cine-tv", texto: "Criatura ficticia de terror, muerto viviente que camina lentamente.", respuesta: "Zombi" }
  ],
  "Ñ": [
    { categoria: "animales", texto: "Animal de ocho patas que teje una tela para cazar insectos.", respuesta: "Araña" },
    { categoria: "gastronomia", texto: "Fruta tropical cubierta de escamas, con una corona de hojas en la punta.", respuesta: "Piña" },
    { categoria: "geografia", texto: "País europeo cuya capital es Madrid.", respuesta: "España" },
    { categoria: "geografia", texto: "Elevación natural del terreno, más alta que una colina.", respuesta: "Montaña" },
    { categoria: "geografia", texto: "Garganta profunda excavada por un río, como el famoso Grand Canyon.", respuesta: "Cañón" },
    { categoria: "cultura-general", texto: "Parte dura que crece en la punta de los dedos de manos y pies.", respuesta: "Uña" },
    { categoria: "cultura-general", texto: "Estado de descanso durante el cual soñamos, también la propia actividad de dormir.", respuesta: "Sueño" },
    { categoria: "cultura-general", texto: "Juguete infantil con forma de persona; también parte del cuerpo entre la mano y el brazo.", respuesta: "Muñeca" },
    { categoria: "ciencia", texto: "Estación del año en la que caen las hojas de los árboles.", respuesta: "Otoño" },
    { categoria: "cultura-general", texto: "Habitación de la casa donde nos duchamos y está el inodoro.", respuesta: "Baño" }
  ]
};
