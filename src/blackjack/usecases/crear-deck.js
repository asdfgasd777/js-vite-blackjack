import _ from 'underscore';

export const miNombre = 'Alejandro';

/**
 * Esta función crea un nuevo deck.
 * @param {Array<string>} tipoDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tipoEspeciales Ejemplo ['A','J','Q','K'];
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipoDeCarta, tipoEspeciales) => {

    if ( !tipoDeCarta || !tipoDeCarta.length > 0) {
        throw new Error('tipoDeCarta es obligatorio como un arreglo de string')
    }

    if ( !tipoEspeciales || !tipoEspeciales.length > 0) {
        throw new Error('tipoEspeciales es obligatorio como un arreglo de string')
    }

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCarta ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

// export default crearDeck;