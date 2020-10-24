import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Products from '../../utils/Products.json';
import './Product.css';
import {connect} from 'react-redux'
import {addToCart} from '../../Redux/Cart/CartActions'
import { addToFavorite } from '../../Redux/Favorite/FavoriteActions'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


class Product extends React.Component {
        
constructor(props){
    super(props);
    this.state = {
        product: {}
    }

    
}

componentDidMount(){
    const {match} = this.props;
    const productId = match.params.productId;
    const categoryValues = Object.values(Products);
    const productItems = categoryValues.reduce((acc, category) => {
        return [
            ...acc,
            ...category.items
        ]
    }, []);
    const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
            
    });
    this.setState({product: currentProduct})
    
   
}


    render(){
        const {product} = this.state;

    return (
        <Layout>
         <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                           <ButtonGroup
                                      variant = "contained"
                                      className = "mb-3">
                               <Button
                                      color = 'primary' 
                                      onClick = {() => this.props.addToCart({product})}>
                                      <ShoppingCartIcon/>
                               </Button>
                               <Button
                                      color = 'secondary'
                                      onClick = {() => this.props.addToFavorite({product})}>
                                      <FavoriteIcon/> 
                               </Button>
                           </ButtonGroup>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
        </Layout>
    )}
}

function MapDispatchToProps(dispatch){
    
    return{
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorite: (payload) => dispatch(addToFavorite(payload))
        }
}

export default connect (null,MapDispatchToProps)(Product);
