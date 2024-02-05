import React from 'react';
import PropTypes from 'prop-types';

export const SeconsApp = ({title, subtitle}) =>{
    /**
     * Las props se pueden desestructurar colocandolas entre llaves {} o solas
     * es decir el nombre del objecto dentro del argumento del componente
     */
    return (<>
    <h1 data-testid="test-title"> { title } </h1>
    <p>Mis primeras props titulo: Trabajando Con Las Props O Propiedades De La Aplicación:</p>
    <p>Mis primeras props subtitulo: { subtitle +1}</p>
    </>);
};

/**
 * Aqui se deben definir las propiedades que va a utilizar el componente
 * se define el tipo de variable, si es obligatoria con la propiedad .isRequired
 */
SeconsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
};
/**
 * Tambien podemos definir propiedades por defecto con el props * 
 */

SeconsApp.defaultProps ={
    title: 'Ejemplo No hay tiulo',
    /*subtitle: 23*/
}