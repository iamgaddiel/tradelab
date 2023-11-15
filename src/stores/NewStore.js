import { Store } from 'pullstate';

const NewStore = new Store({

    places: [],
    favourites: []
});

export default NewStore;

export const addFavourite = (place, remove) => {

    if (remove) {

        NewStore.update(s => {

            const newFavourites = s.favourites.filter(f => f.id !== place.id);
            s.favourites = newFavourites;
        });
    } else {
        
        NewStore.update(s => { s.favourites = [ ...s.favourites, place ]});
    }
}