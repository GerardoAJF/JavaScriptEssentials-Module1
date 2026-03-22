// Objeto images
const images = {
    // La lista donde se guardan las imágenes
    "list" : [],
    // Método utilizando arrow functions, pide datos e inserta un nuevo objeto
    "add" : (title, artist, date) => {
        // Modificamos el atributo list de este mismo objeto
        images.list.push({
            "title": title,
            "artist": artist,
            "date": date
        });
    },
    // Arrow function para comprobar que algunos de los objetos tiene cierto titulo
    "contains": (title) => {
        // Utilizamos un operador ternario porque son épicos
        return (images.list.filter(img => {
            // Filtramos la lista de acuerdo a su titulo
            return img.title == title
        })).length === 0 ? false : true;
    },
    "show": () => {
        // Iteramos cada objeto de la lista y lo imprimimos en consola
        images.list.forEach(img => {
            console.log(`${img.title} -- ${img.artist} -- ${img.date}`)
        })
    },
    "clear": () => {
        // Limpiamos la lista al definir una completamente nueva
        images.list = []
    }
}


images.add("Mona Lisa", "Leonardo Da Vinci", 1495);
images.add("Starry Night", "Vincent van Gogh", 1889);
images.show();
console.log(images.contains("Mona Lisa"));

images.clear();
images.show();
console.log(images.contains("Mona Lisa"));

