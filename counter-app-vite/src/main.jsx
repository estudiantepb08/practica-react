import ReactDOM from 'react-dom'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './HelloWorldApp';

import moduleName from 'module'
import { FirstApp } from './FirstApp';
import './styles.css'; // importar hoja de estilos de manera global para todos los componentes
import { SeconsApp } from './SeconsApp';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App></App>
        <FirstApp></FirstApp>
        <SeconsApp title='PROPS123' subtitle={12}></SeconsApp>
        */
        }
        
        <CounterApp value={2}></CounterApp>
        
    </React.StrictMode>
);
