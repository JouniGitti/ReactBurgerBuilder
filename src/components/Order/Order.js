import React from 'react';

import classes from './Order.css';

const Order = ( props ) => {
    // converting ingredients object to array
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );   //ingredientName is the value (0,1,2...)
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount}) </span>
        // {dynamic output needs curly braces}
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong> USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default Order;
