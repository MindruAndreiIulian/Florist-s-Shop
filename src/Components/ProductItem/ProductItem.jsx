import React from 'react'
import './ProductItem.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {addToCart} from '../../Redux/Cart/CartActions'
import { addToFavorite } from '../../Redux/Favorite/FavoriteActions'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Card from '@material-ui/core/Card';


function ProductItem(props) {
    const {name,price,currency, image, id} = props;

    
    return (
        
        <Card className="product-item col mb-3 mx-4 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center m-2">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="m-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>


            <ButtonGroup variant = "contained" className = "mb-2" >
                <Button 
                    color = "primary"
                    onClick = {() => props.addToCart({
                        product:{
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}>
                        <ShoppingCartIcon/>
                </Button>

                <Button 
                    color = "secondary"
                    onClick = {() => props.addToFavorite({
                        product:{
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}
                    ><FavoriteIcon/>
                </Button>
            </ButtonGroup>


    
    </Card> 
        
    )

}

function MapDispatchToProps(dispatch){
    
    return{
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorite: (payload) => dispatch(addToFavorite(payload))
        }
}

export default connect (null,MapDispatchToProps)(ProductItem);
