import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    // state = {
    //     ingredients: null,
    //     price: 0
    // }

    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         // ['salad','1']
    //         } else {
    //         ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price})
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings} // using now Redux
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    // now using Redux   render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)}/>
                    component={ContactData}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients // state.ingredients property named as in the state, ings can named freely
    }
};

// mapDispatchToProps not needed, nothing is dispatched

export default connect(mapStateToProps)(Checkout);