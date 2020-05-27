import * as actiontypes from '../actions/actionTypes';

const initialState = {
    ingredients:null, // now fetched from the db
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const burgerBuilder = (state = initialState, action) => {
    switch(action.type) {
        case actiontypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients, // to distribute the old state as a copy to a new object
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                    // square brackets create a var to pass the properties (ES6), the latter part: we get the amount of ingredients in the state
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actiontypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actiontypes.SET_INGREDIENTS:
            return {
                ...state, //old state copied first
                ingredients: { //this ensures that the order of ingredients is the same as in the order buttons
                  salad: action.ingredients.salad,
                  bacon: action.ingredients.bacon,
                  cheese: action.ingredients.cheese,
                  meat: action.ingredients.meat
                }, //ingredients property received from  burgerBuilder action file
                error: false
            };
        case actiontypes.FETCHING_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
    return state;
};

export default burgerBuilder;
