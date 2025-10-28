interface Persona{
  nombre: string;
  apellido: string;
  edad: number;
  direccion: Direccion;
  //mostrarDireccion: () => string;
}
interface Direccion{
  calle: string;
  numero: number;
  pais: string;
  ciudad: string;
}

const persona: Persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    calle: "Malibu",
    numero: 10880,
    pais: "USA",
    ciudad: "Los Angeles",
  },
  /*mostrarDireccion() {
    return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
  },*/
};

// LA FUNCION STRUCTUREDCLONE ES PARA HACER UNA COPIA DE UN OBJETO
const persona2 = structuredClone(persona);
persona2.nombre = "Peter";
persona2.apellido = "Parker";
persona2.direccion.calle = "New York";
persona2.direccion.numero = 20;
persona2.direccion.pais = "USA";
persona2.direccion.ciudad = "New York";

console.log(persona);
console.log(persona2);
//console.log(persona.mostrarDireccion());