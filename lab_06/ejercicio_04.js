const seres = [
    {
    nombre: "Fernando",
    apellido: "Díaz del Castillo",
    edad: 58,
    profesion: "Ingeniero de Sistemas",
    },
    {
    nombre: "Maribel",
    apellido: "Posso Zuluaga",
    edad: 51,
    profesion: "Hogar",
    },
    {
    nombre: "Joan Sebastian",
    apellido: "Díaz del Castillo Posso",
    edad: 32,
    profesion: "Programador",
    },
    {
    nombre: "Mafe",
    apellido: "Díaz del Castillo Posso",
    edad: 31,
    profesion: "Programador",
    },
    {
    nombre: "Owen",
    apellido: "Díaz del Castillo Posso",
    edad: 6,
    profesion: "Soporte Emocional",
    }
]
const presentacion = function(seres) {
    for (let ser of seres) {
        console.log("Nombre:", ser.nombre, "\nApellido:", ser.apellido, "\nEdad:",ser.edad, "\nProfesión:", ser.profesion,"\n");
    }
};
presentacion(seres);