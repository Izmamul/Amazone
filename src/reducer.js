export const initialState = {
    basket: [
    ],
    user: null
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
        case "REMOVE_FROM_BASKET":
            //Logic for removing item from basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItems) => basketItems.id === action.id)

            if(index >= 0){
                newBasket.splice(index, 1)
                
            }else{
                console.warn(`cannot remove product (id: ${action.id})`)
            }

            return { ...state , basket: newBasket }
        default:
            return state
    }
}

export default reducer