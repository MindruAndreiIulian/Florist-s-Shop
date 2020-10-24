import React  from 'react';
import Products from '../../utils/Products.json';
import Photos from '../../utils/Photos.json';
import Layout from '../../Components/Layout/Layout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Home.css'
import {Link} from 'react-router-dom'
import Rose from '../../assets/images/redRose.jpg';
import Lalele from '../../assets/images/lalele.jfif'
import CountdownTimer from '../../Components/CountdownTimer';

import Button from '@material-ui/core/Button';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            categories: [],
            items: []
        }
    }

    componentDidMount(){
        const categories = Object.keys(Products);
        const itemsObj = categories.map(category => {
            return Object.values(Products[category].items)
            
        });
        const merged = [].concat.apply([], itemsObj);
        const items = merged.filter(item => item.id < 10)
            this.setState({categories,
                       items});
        
        
    }
    
    render(){
           
        const darkTheme = createMuiTheme({
            palette: {
              type: 'dark',
            },
          });

            const {photos} = Photos;

            const settings = {
                dots:true,
                fade:true,
                infinite:true,
                autoplay:true,
                speed:1500,
                autoplaySpeed:4000,
                slidesToShow:1,
                arrows:true,
                slidesToScroll:1,
                className: "slides"
            }

            const settings2 = {
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
               
            }
            
            const DateNow = Date.now(); // 1602710690936
            console.log(new Date(DateNow).toString())
        
        return (
                <Layout>

                    <div className = "mb-5">
                <Slider {...settings}>
                    {photos.map(photo =>{
                        return(
                            <div>
                                <Link to = '/products'>
                                    <div className = "carousel-overlay d-flex flex-column">
                                        <p>{photo.description}</p>
                                    </div>
                                </Link>
                                
                                 <div className = "carousel-container">
                                    {
                                        photo.id === 0?
                                        <div>
                                            <p>Toate florile de sezon </p>
                                            <h3> Ai 10% discount doar saptamana asta</h3>
                                        </div>
                                        :null

                                    }
                                </div>
                                <img width = "100%" height = "550px" src = {photo.url}  alt = {photo.name} />
                            </div>
                        )
                    })}
               </Slider>
                    </div>
               
               <div className = "container">
               <h4 className = "border-bottom">Produsele cele mai populare</h4>
               <Slider {...settings2} className >
                    
                       {
                           this.state.items.map(item => {
                        
                               return(
                                       <Link to = {`/product/${item.id}`}>
                                   <div className = "d-flex flex-column align-items-center carousel-item">
                                            <img width = "200px" height = "200px"  src = {item.image} alt = {item.name} />
                                            <h6 className = "mt-3">{item.name}</h6>
                                            <p>{item.price} {item.currency}</p>
                                   </div>
                                       </Link>
                               )
                               
                               
                            })
                        }
               </Slider>
                </div>

                <div className = "container d-flex flex-row mt-5 border-top border-bottom">
                        <img width = "500px" height = "500px" src = {Rose} alt = "rose pot" />
                        <div className = "d-flex flex-column justify-content-center">
                            <h3 className = "text-danger">Promotie speciala !</h3>
                            <h4 className = "mb-4">Cumpara 9 trandafiri si noi iti oferim cadou inca 2</h4>
                            <CountdownTimer/>
                            <Link to = "/products">
                                <Button
                                    className = "mt-5"
                                    variant = "contained"
                                    color = "secondary"
                                >Cumpara acum</Button>
                            </Link>
                        </div>
                </div>


                <div className = "containers mt-5">
                        <img width = "100%" height = "400px" src = {Lalele} alt = "lalele" className = "rounded" /> 
                        <div className = "content d-flex flex-column align-items-center justify-content-center">
                            <h1>Cele mai de calitate <span className = "text-danger font-weight-bold">Flori</span></h1>
                            <h5 className = "font-weight-bold">Pentru ca tinem la bunastarea ta</h5>
                            <MuiThemeProvider theme = {darkTheme}>
                                <Link to = '/products'>
                                    <Button
                                        variant = "outlined"
                                        size = "large"
                                    >Vezi produsele</Button>
                                    </Link>
                            </MuiThemeProvider>
                        </div>
                </div>
                    
              



                </Layout>
        );
    }
    
}

export default Home;

