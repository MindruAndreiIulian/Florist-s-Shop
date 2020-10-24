const initialState = {
    products: []
}

export function cartReducer(state = initialState,action){
    switch(action.type){
        case 'ADD_TO_CART':

        let inCart = false;
        const updatedProducts = state.products.map(product =>{
            if(product.id === action.payload.product.id){
                inCart = true;
                return {
                    ...product,
                    quantity: product.quantity+1
                } 
            }else {
                return product;
            }
        })

        if(!inCart){

         const newState = {
                ...state,
                products:[
                    ...state.products,
                    {
                        ...action.payload.product,
                        quantity:1
                    }
                ]
            }
            return newState;
        }else{

            return {
                ...state,
                products: updatedProducts
            }; 
        }
        case 'REMOVE_FROM_CART':
           const filteredProducts = state.products.filter(prod => {
               return prod.id !== action.payload.id;
           })

           return {
               ...state,
               products: filteredProducts
           }
            
        default:
            return state;
    }

}