

const initialState = {
    products: []
}

export function favoriteReducer(state = initialState,action){
    switch(action.type){
        case 'ADD_TO_FAVORITE':
        
        
        const updateProducts = state.products.filter(product =>  product.id === action.payload.product.id)
        
        if(updateProducts.length){
            return state
       
        }else{
                const newState = {
                    ...state,
                    products:[
                        ...state.products,
                        {
                            ...action.payload.product
                        }
                    ]
                }
                
                return newState;

            
        }

        case 'REMOVE_FROM_FAVORITE':
            const filteredProducts = state.products.filter(prod => {
                return prod.id !== action.payload.id;
            })
 
            return {
                ...state,
                products: filteredProducts
            }
            
            default :
            return state;
    }
}