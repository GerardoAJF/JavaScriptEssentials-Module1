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
    },
    "edit": (title, artist, date) => {
        // Iteramos cada imágen de la lista
        images.list.forEach(img => {
            // Cuando encontramos la imágen la modificamos y terminamos el programa
            if (img.title == title) {
                img.artist = artist
                img.date = date
                return
            }
        });
    },
    "delete": (title) => {
        // Buscamos la imágen con el titulo
        const image = images.list.filter(img => img.title == title)[0]
        // Obtenemos el indice de esa imágen y lo eliminamos
        const index = images.list.indexOf(image)
        images.list.splice(index, 1)
    }
}

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)