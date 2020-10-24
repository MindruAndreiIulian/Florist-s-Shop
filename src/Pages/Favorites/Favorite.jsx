import React from 'react'
import Layout from '../../Components/Layout/Layout'
import {connect} from 'react-redux'
import { removeFromFavorite } from '../../Redux/Favorite/FavoriteActions'
import {Link} from 'react-router-dom'
import './Favorite.css'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';

function Favorite(props) {
    const {products} = props
    return (
        <Layout>
         <div className="favorite-page favorite-page favorite-page-container container-fluid 
                d-flex flex-column justify-content-center align-items-center">
                     <h1 className = "d-flex flex-column align-items-center mt-3 mb-5"> Produsele tale favorite</h1>
                    
            {
                props.products.length?
                <div className = "row">
                    {
                        products.map(product => {
                            return (
                                <div className = "product-item col mb-3 d-flex flex-column align-items-center">
                                    
                                    <Card className="p-2 d-flex flex-column align-items-center">
                                        <Link to = {`/product/${product.id}`} className=" d-flex flex-column align-items-center" >
                                                <img className = "m-3" src = {product.image} alt = {product.name} />
                                                <h6>{product.name}</h6>
                                                <p>{product.price} {product.currency}</p>        
                                            
                                        </Link>
                                        <ButtonGroup
                                            variant = "contained">
                                               
                                            <Button 
                                                color = "primary"
                                                onClick = {() => props.addToCart({product})}>
                                                    <ShoppingCartIcon/>
                                            </Button>
                                            <Button
                                                color = "secondary"
                                                onClick = {() => props.removeFromFavorite({id:product.id})}>
                                                    <DeleteIcon/>
                                            </Button>
                                        </ButtonGroup>
                                    </Card>


    </div> 
                                
                            )
                        })
                    }
                </div>
                :<div className = "d-flex flex-column align-items-center mt-5 mb-5">
                     <h3 className = "mb-4">Momentan nu ai produse favorite!</h3>
                <Link to = "/"><button className = "btn btn-danger">Inapoi la pagina principala</button></Link>
                </div>
            }
    
               
    </div>
            </Layout>
    )
}


function MapDispatchToProps(dispatch){
    return{
        removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload))
    }
}


function MapStateToProps(state){
    return{
        products: state.favorite.products
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Favorite)

