import React from 'react'
import {connect} from 'react-redux'
import Layout from '../../Components/Layout/Layout'
import {Link} from 'react-router-dom'
import './Cart.css'
import {removeFromCart} from '../../Redux/Cart/CartActions'

import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';

function Cart(props) {

    const totalSum = (products) => {
        return products.reduce((acc, prod) => {
               return acc += prod.quantity*prod.price;
            },0)
        }



    return (
      
        <Layout>
        <div className="cart-page cart-page cart-page-container container-fluid 
                d-flex flex-column justify-content-center align-items-center">
                     <h1 className = "d-flex flex-column align-items-center mt-3 mb-5"> Cosul tau de cumparaturi</h1>
            {
                props.products.length ?
                <div className="w-75">
                        <div className="d-flex justify-content-between text-center h4 text-bold border-bottom">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                           
                        </div>
                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center mb-3" key={product.id}>
                                    <Card className="w-25 d-flex flex-row justify-content-center align-items-center">
                                 
                                        <img src={product.image} alt="Produs"/>
                                        <h6>{ product.name }</h6>
                                
                                    </Card>
                                <h5 className = "w-25">{product.price} {product.currency}</h5>
                                <div className = "w-25 d-flex flex-row justify-content-center align-items-center">
                                <h5 className = "w-25">{product.quantity}</h5>
                                        <button className = "btn btn-dark"
                                            onClick = {() => props.removeFromCart({id:product.id}) }                                
                                            ><DeleteIcon/></button>
                            
                                </div>
                           </div>
                           
                        
                
            })}
            <div className = "d-flex justify-content-end border-top">
                <h3><span className = "text-danger">Total de plata:</span> {totalSum(props.products)} LEI </h3>               
            </div>
             </div>
             :<div className = "d-flex flex-column align-items-center mt-5 mb-5">
                <h3  className = "mb-4">Momentan nu ai produse in cos!</h3>
                <Link to = "/"><button className = "btn btn-danger">Inapoi la pagina principala</button></Link>
             </div>
            
        }
        </div>
        </Layout>
            
    )
}

function MapDispatchToProps(dispatch){
    return{
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    }
}



function MapStateToProps(state){
    return{
        products:state.cart.products
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Cart);
