import React  from 'react';
import Products from '../../utils/Products.json';
import Layout from '../../Components/Layout/Layout';
import HomeCategory from '../../Components/HomeCategory/HomeCategory';
import './MainCategory.css'

class MainCategory extends React.Component {
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount(){
        const categories = Object.keys(Products);
        this.setState({categories});
        console.log(categories);
        
    }

    render(){
        
        
        
        return (
                <Layout>
              <div className="category-container container container-min-max-width ">
                    <div className="row d-flex align-items-center justify-content-center">
                    { 
                    this.state.categories.map((category, index) =>
                        <HomeCategory
                            key = {index}
                            route = {category}
                            name = {Products[category].name}
                            description = {Products[category].description}
                            image = {Products[category].image}
                        />
                        
                    )
                }
                </div>

            </div>
                </Layout>
        );
    }
    
}

export default MainCategory;

