import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Header.css';
import {connect} from 'react-redux';
import {logoutUser} from '../../Redux/User/UserActions'
import Products from '../../utils/Products.json'



import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class Header  extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search:''
        }
    }

         updateSearch = (event) =>{
           
            this.setState({search: event.target.value})
         }

        findItemByName(search) {
            

            const toamna = Products["toamna"].items.filter(item => item.name.toLowerCase().includes(search));
            const trandafiri = Products["trandafiri"].items.filter(item => item.name.toLowerCase().includes(search));
            const ocazii = Products["ocazii"].items.filter(item => item.name.toLowerCase().includes(search));
            const onomastica = Products["onomastica"].items.filter(item => item.name.toLowerCase().includes(search));
            const trandafiriCriogenati = Products["trandafiri criogenati"].items.filter(item => item.name.toLowerCase().includes(search));
            const zodii = Products["zodii"].items.filter(item => item.name.toLowerCase().includes(search));
        
            const result = [
                 ...toamna,
                ...trandafiri,
                 ...ocazii,
                ...onomastica,
                ...trandafiriCriogenati,
                 ...zodii
            ];

              return result;
         }
        
        
    

    
render(){
     const {search} = this.state  
     const filteredProducts = this.findItemByName(search)
   

    return (
        <div className = "header">

    <AppBar 
            color = "light">
        <Toolbar >
            <Grid   container
                    direction = "row"
                    justify = "space-evenly"
                    alignItems = "flex-end">
            
           
            <Link to='/'>
                <img src = { Logo } alt ="logo" className = "logo"/>
            </Link>

            <Grid item
                    direction = "column"
                    alignItems = "center" >

         <div className = "d-flex flex-row mb-3 justify-content-end align-items-end" >
            <div>
              <SearchIcon />
            </div>
            <TextField
              
              color = 'secondary'
              placeholder="Search…"
              variant = "standard"
              onChange = {(event) =>this.updateSearch(event)}
            />
          </div>


        <ButtonGroup  size = "large" variant = "text" aria-label="text primary button group" >
            <Button>
                <Link to = '/'>Acasa</Link>
            </Button>

            <Button>
                <Link to = '/products'>Produse</Link>
            </Button>
                
            <Button>
                <Link to = '/about'>Despre</Link>
            </Button>

           

            {
                this.props.user?
                <Button onClick ={() => this.props.signOut()}>Delogare</Button>  
                :<Button><Link to = "/login">Logare</Link></Button>
            }

            <Button>
                <Link to = '/terms'>Termeni si conditii</Link>
            </Button>

        </ButtonGroup>
            </Grid>

        

          
         
            <Grid item
                  direction = "column-reverse">
            
            {
                this.props.user?
                <div className = "mb-3 d-flex justify-content-center">
                    <Avatar alt={this.props.user.displayName} src={this.props.user.photoURL} />
                    <h6 className = "ml-2">Salut, {this.props.user.displayName}</h6>
                </div>
                :<h6 className = "mb-3 d-flex justify-content-center">Salut, bine ai venit !</h6>
            }

          
            <Link to = '/cart'>
                <IconButton  color="inherit">
                    <Badge badgeContent={this.props.numberOfProducts} color="secondary">
                        <ShoppingCartIcon fontSize = "large" />
                    </Badge>
                </IconButton>
            </Link>

            <Link to = '/favorite' >
                <IconButton  color="inherit" >
                    <Badge badgeContent={this.props.numberOfFavorites} color="secondary">
                        <FavoriteIcon fontSize = "large" color = "secondary"/>
                    </Badge>
                </IconButton>
            </Link>

        </Grid>
           
            
             </Grid>
        </Toolbar>
    </AppBar>

        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                
            <Link to = '/' className = "navbar-brand">Acasa</Link>
            <Link to = '/about' className = "navbar-brand">Despre</Link>
            {
                this.props.user?
                <button onClick ={() => this.props.signOut()} 
                className = "header-button">Logout</button>  
                :<Link to = '/login'  className = "navbar-brand">Login</Link>
                
            }
            

                <div className = "d-flex flex-column">
                    <input 
                        type = "text"
                        name = "search"
                        onChange = {(event) =>this.updateSearch(event)}
                        />
                    
                    <div className = "d-flex flex-row align-items-center searchResult">
                        <ul>

                    {
                        this.state.search ?
                        filteredProducts.map(product =>{
                            return(
                                <div className = "border-bottom d-flex flex-row">
                                    <img className = "result-image" src = {product.image} alt = "img"/>
                                    <p>{product.name}</p>
                                </div>
                                )
                            })
                            :null
                        }
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>

)}
}

function mapStateToProps(state){
    return {
        numberOfProducts:state.cart.products.length,
        user: state.user.data,
        numberOfFavorites: state.favorite.products.length
    }
}

function MapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps,MapDispatchToProps)(Header);
