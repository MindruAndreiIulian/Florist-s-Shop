import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css'




function HomeCategory(props) {
    const {route,name,description,image} = props;
    

    return (
        <category className="col-12 col-md-6 mb-5  d-flex justify-content-center">

       
                 <div className = "containerr">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-100" />                                                                  
                    
                        <Link to = {`/category/${route}`} >
                            <div className = "content">
                                <h3>{name}</h3>
                                <h4>{description}</h4>
                            </div>
                        </Link>
                 </div>
                     
                      
            
        </category>
    )
}

export default HomeCategory;
