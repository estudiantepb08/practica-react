import { useState } from 'react';
import { ItemCounterProps } from './interfaceItemCounter';
import './ItemCounter.css';

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {

    const [count, setCount] = useState(quantity);

    const handlerAdd = () => {
        console.log(`Clicked +1 on ${name}`);
        console.log('Hola Mundo desde ItemCounter');
        setCount(count + 1);
    }
    const handlerSubtract = () => {
        if (count === 1) return;
        console.log('Counter desde subtract -1');
        setCount(count - 1)
        console.log(`Clicked +1 on ${name}`);
    }

    return (
        <section className="item_row"
        //style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }} estilo en linea
        >
            <span className='item-text' style={{ color: count === 1 ? 'red' : 'black' }}>{name}</span>
            <button
                //onMouseEnter={() => { `Mouse enter on +1 of ${name}` }}
                onClick={() => { handlerAdd() }}
            >+1</button>
            <span>{count}</span>
            <button
                onClick={() => { handlerSubtract() }}
            >-1</button>
        </section>
    )
}
