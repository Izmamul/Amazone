import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <a href="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MI/Under1499_Tallhero_3000x1200._CB634138928_.jpg">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MI/Under1499_Tallhero_3000x1200._CB634138928_.jpg" 
                alt="" />
            </a>

            <div className="home__row">
                <Product
                id="12321241"
                title="Up to 70% off | Clearance store"
                price={2990}
                rating={4}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                />

                <Product
                id="12321242"
                title="Start Selling on Amazon"
                price={200}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/Option4_379x304._SY304_CB629577209_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="12321243"
                title="Apple iPhone 11 (Black, 64 GB)"
                price={69500}
                rating={2}
                image="https://rukminim1.flixcart.com/image/352/352/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70"
                />

                <Product
                id="12321244"
                title="Apple iPhone 7 (Black, 32 GB)"
                price={29499}
                rating={5}
                image="https://rukminim1.flixcart.com/image/352/352/k12go7k0/mobile/7/e/e/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpeg?q=70"
                />

                <Product
                id="12321245"
                title="Apple iPhone X (Silver, 256 GB)"
                price={76990}
                rating={4}
                image="https://rukminim1.flixcart.com/image/352/352/j9d3bm80/mobile/g/x/j/apple-iphone-x-mqa62hn-a-original-imaeyzyfdzhfckef.jpeg?q=70"
                />
            </div>

            <div className="home__row">
                <Product
                id="12321246"
                title="MSI 27 inch Curved Full HD VA Panel Gaming Monitor (Optix MAG271CR)"
                price={26999}
                rating={3}
                image="https://rukminim1.flixcart.com/image/352/352/k59xci80/monitor/a/g/z/optix-mag271cr-with-rgb-led-1920x1080-144-hz-refresh-rate-1-ms-original-imafn99tzt6zqgr7.jpeg?q=70"
                />

<Product
                id="1232124689"
                title="Nokia T20"
                price={26999}
                rating={3}
                image="https://images-eu.ssl-images-amazon.com/images/I/41UhOK1eu5L._SX300_SY300_QL70_FMwebp_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home
