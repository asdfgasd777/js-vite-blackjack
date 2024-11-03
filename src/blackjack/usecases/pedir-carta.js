
/**
 * Esta funcion es para pedir cartas 
 * @param {Array<string>} deck []
 * @returns string retorna la ultima carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
