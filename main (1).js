const paintings = [
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1503
  },
  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: 1495
  },
  {
    title: "Starry Night",
    artist: "Vincent van Gogh",
    year: 1889
  },
  {
    title: "The Scream",
    artist: "Edvard Munch",
    year: 1893
  },
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    year: 1937
  },
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: 1907
  },
  {
    title: "Girl With a Pearl Earring",
    artist: "Johannes Vermeer",
    year: 1665
  },
  {
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: 1485
  },
  {
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: 1656
  },
  {
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: 1512
  }
];

// Creamos una función para imprimir la imágenes
const printPaintings = (list) => {
    list.forEach(painting => {
        console.log("=======")
        console.log(painting.title)
        console.log(painting.artist)
        console.log(painting.date)})
}

// Creamos la clase Image
function Image(title, artist, date) {
    // Definimos los atributos de los objetos de la clase Image
    this.title = title
    this.artist = artist
    this.date = date
}

// Creamos el array de objetos Image
const images1 = paintings.map(painting => {
  return new Image(painting.title, painting.artist, painting.year);
});

// Imprimimos las imágenes
console.log(">Imágenes usando Image")
printPaintings(images1)

// Creamos la función getImage
const getImage = (title, artist, date) => {
    // Retornamos un objeto con los atributos recibidos
    return {
        "title": title,
        "artist": artist,
        "date": date
    }
}

// Creamos otro array pero esta vez usando getImage
const images2 = paintings.map(painting => {
    return getImage(painting.title, painting.artist, painting.year)
})

// Imprimimos el nuevo array de imágenes
console.log("\n\n>Imágenes usando getImage")
printPaintings(images2)
