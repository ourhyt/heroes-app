import {heroes} from "../data/heroes.js";

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['Marvel Comics','DC Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${ publisher} is not a valid publisher`)
    }
    return heroes.filter(hero => hero.publisher === publisher);
}