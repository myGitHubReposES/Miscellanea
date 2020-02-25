/**
 * Get filename from URL
 * @url {string} si url no es definida la funcion obtiene 
 * el valor del navegador.
 * 
 * Related info
 * - https://befused.com/javascript/get-filename-url
 */
const getFilenameFromURL = (url) => {
    let s = url || window.location.pathname;
    return s.substring( s.lastIndexOf('/') + 1 )
}