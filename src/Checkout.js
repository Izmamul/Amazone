import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__add" src="https://rukminim1.flixcart.com/flap/844/140/image/c7f1f1ca7cc6d669.jpg?q=50" 
            alt=""/> 
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart Is Empty</h2>
                    <p>Add some items to continue shopping with amazon....</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>

                    {basket?.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}  
            </div> 
            
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
        
                </div>
            )}
        </div>
    )
}

export default Checkout
