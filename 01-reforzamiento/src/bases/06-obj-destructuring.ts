const person = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

/** Desestructuración */
// const nombre = person.nombre;
// const edad = person.edad;
// const clave = person.clave;

/* Segunda forma de desestructurar */
// const {nombre, edad, clave} = person;

const { nombre: nombre2, edad: edad2, clave: clave2 } = person;

console.log(nombre2, edad2, clave2);

interface Hero {
    nombre: string;
    edad: number;
    clave: string;
    rango?: string;
};

const useContext = ({nombre, edad, clave, rango}: Hero) =>{
    return {
        keyName: clave,
        user:{
            name: nombre,
            age: edad,            
        },
        rango: rango ?? 'Capitán' // Si no viene rango, le asigno Capitán
    };
};

const context = useContext(person);
console.log(context);

// Desestructuración de arreglos
const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
const [thor, ironman, spiderman] = avengers;

console.log(thor, ironman, spiderman);