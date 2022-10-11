import React, {useCallback} from 'react';

const fetchDrinks = useCallback(async () => {
    try {
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        const {drinks} = data;
        if (drinks) {
            const newCocktails = drinks.map((item) => {
                const {
                    idDrink,
                    strDrink,
                    strDrinkThumb
                } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb
                }
            })
        } 
    } catch (error) {
        console.log('error')
    }
}, [searchTerm])