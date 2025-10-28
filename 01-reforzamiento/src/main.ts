import './style.css';
import './bases/01-const-let';
import './bases/02-template-string';
import './bases/03-object-literal.ts';
import './bases/04-arrays.ts';
import './bases/05-funtions.ts';
import './bases/06-obj-destructuring.ts';
import './bases/07-array-destructuring.ts';
import { getHeroeByOwner } from './bases/08-imp-exp.ts'
import { Owner } from './data/heroes.data.ts';
import './bases/09-promises.ts';
import './bases/10-fetch-api.ts';
import './bases/11-async-await.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>HOLA MUNDO</h1>
  </div>
`
console.log(getHeroeByOwner(Owner.Marvel));
console.log(getHeroeByOwner(Owner.DC));

// Importante: Si se importa algo que no se usa, da error. Por eso se importan los otros archivos

// Ejemplos de desestructuración


