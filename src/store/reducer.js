import * as actiontypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
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
        default:
            return state;
    }
    return state;
};

export default reducer;
