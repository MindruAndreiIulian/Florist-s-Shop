import React, {Component} from 'react';
import Layout from '../../Components/Layout/Layout';
import Products from '../../utils/Products.json';
import ProductList from '../../Components/ProductList';
import './Category.css'

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            category:{},
            items:[]
   }
    } 

    componentDidMount() {
  const { match } = this.props;
        const categoryName = match.params.categoryName;
        
        this.setState({ category: Products[categoryName], 
                        items:Products[categoryName].items
        });
    }

    render() {
        return (
                <Layout>
                    <div className="category container  d-flex flex-column justify-content-center align-items-center">
                        <h1 className = "mt-2" >{this.state.category.name}</h1>
                        <ProductList products = {this.state.items} />
                    </div>
                </Layout>
        )
    }
}

export default Category;