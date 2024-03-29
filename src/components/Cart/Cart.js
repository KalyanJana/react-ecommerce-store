import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import react from 'react';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value=>{
            const {cart}=value;
            if(cart.length>0){
              return (
                <react.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} 
                  history={this.props.history}/>
                </react.Fragment>
              );
            }else{
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
      
    )
  }
}
