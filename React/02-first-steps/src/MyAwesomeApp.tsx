/** UTILIZACION DE VARIABLES 
 * Es recomendable usar las constantes que nunca cambian fuera del componente
 * para evitar que se redefinan en cada renderizado.
*/

import { CSSProperties } from "react";

const name = "Demetrio";
const lastName = "Sinisterra";
const favoriteGame = ['Elden Ring', 'Smash Bros', 'Metal Gear'];
const isActive = true;
const address = {
    zipCode: 'ABC-123',
    country: 'Colombia',
};
const myStyle: CSSProperties = {
    backgroundColor: '#f0f0f0',
    borderRadius: isActive ? 10 : 20, /** Se pueden utilizar condicionales */
    padding: 10,
}

export function MyAwesomeApp() {

    return (
        <>
            <h1>{name}</h1>
            <h2>{lastName}</h2>
            <p>{favoriteGame.join(', ')}</p>
            <p>{(1 + 1) * 3}</p>
            <p>{isActive ? 'Activo' : 'No activo'}</p>
            <h3 style={myStyle}>
                {JSON.stringify(address)}</h3>
        </>
    )
}