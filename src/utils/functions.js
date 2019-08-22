import { Linking } from 'react-native';

/**
 *  Abre uma página Web no navegador default 
 * @param {*string} url link para a pagina desejada 
 */
export const openLink = (url) => {
    Linking.openURL(url)
}

export const openPage = (page, data) => {
    
}