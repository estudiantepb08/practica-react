const caracterNames = ['Goku', 'Vegeta', 'Trunks'];

// const goku = caracterNames[0];
// const vegeta = caracterNames[1];
// const trunks = caracterNames[2];

// Destructuring
const [p1, p2, p3] = caracterNames;
const [, , , p4 = 'Piccolo'] = caracterNames;

console.log({p1, p2, p3});
console.log({p4});

const returnsArrayFn = () =>{
    return ['ABC', 123] as const; // as const para que no se pierda el tipo de dato original
}

const [letters, numbers] = returnsArrayFn();

/*IMPLEMENTACION DEL HOOKSTATE*/
function useState(valor: string){
    return [valor, (valorFlecha: string)=>{ console.log(valorFlecha)} ] as const;
}

const [value, setValue] = useState ('Hola Mundo');
 setValue('Hola Mundo 2 desde setValue');
 console.log({value});

 /******************************************/

 