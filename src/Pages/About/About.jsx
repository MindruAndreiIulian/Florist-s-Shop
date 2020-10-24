import React from 'react'
import Layout from '../../Components/Layout/Layout';
import AboutPhoto from '../../assets/images/about.jpg'
import './About.css'

function About() {
    return (
        
            <Layout>
            <div className = "container container-about d-flex flex-row align-items-center justify-content-center mt border-bottom">
                <div className = "mt-5 mr-4">
                    <h1>Bine ai venit la <span className = "text-danger">Florist's Shop</span></h1>
                    <p className = "mt-5">Flowers and plants are always a great gift for those you hold dear, or even yourself. Whether you’re shopping for birthday flowers for your mom or you want to surprise your husband at the office with a lush bonsai plant, we’ve got you covered. Browse indoor plants perfect for the hard-working college student, bountiful bouquets filled to bursting with magnificent blooms, and designer floral arrangements you can’t find elsewhere. No matter the occasion, flower deliveries will make your day shine! If you’re gift shopping for a snack fiend, browse our gourmet baskets filled to the brim with tasty eats. Want to complement that savory snack with a sweet treat? Don’t forget to order a gift basket of delicious chocolate dipped strawberries. Complement your gourmet gift with some gorgeous blooms to sweeten the surprise. Order flowers the same day and brighten the week of a friend, family member, or special someone.</p>
                </div>
                <img className = "mt-5" width = "50%" height = "500px" src = {AboutPhoto} alt = 'o imagine' />
            </div>

            </Layout>
        
    )
}

export default About
