import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const addIngredient = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients =(ingredients) => { // this is the synchronous action
    return { // we return an action for the next function after this
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients //payload, where the name is free to choose
    };
};

export const fetchingIngredientsFailed = () => {
    return {
        type: actionTypes.FETCHING_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => { // this is the async action
    return dispatch => { // this way can be used due to redux thunk
        axios.get( 'https://brgrbldr-44089.firebaseio.com/ingredients.json' )
            .then( response => {
                //this.setState( { ingredients: response.data } );
                dispatch(setIngredients(response.data)); //axios response
            } )
            .catch( error => {
                //this.setState( { error: true } );
                dispatch(fetchingIngredientsFailed());
            } );
    };
};