import { localStorageGetItem, localStorageSetItem } from "./storage";

export const LANGUAGE = 'LANGUAGE';

export function getCurrentLanguage(): string {
    let lang = localStorageGetItem(LANGUAGE)
    if (!lang) {
        lang = navigator.language || navigator.language;
    }

    localStorageSetItem(LANGUAGE, lang)
    return lang ? lang : ''
}