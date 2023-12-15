import React, {useState} from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title:'First Title',
            city: 'Prishtine',
            price:'50.0 €',
        },
        {
            id: 2,
            title:'Second Title',
            city: 'Tirane',
            price:'50.0 €',
        },
        {
            id: 3,
            title:'Third Title',
            city: 'Tel Aviv',
            price:'50.0 €',
        },
        {
            id: 4,
            title:'Some random title that is a bit longer than usual',
            city: 'Bujanovc',
            price:'50.0 €',
        },
        {
            id: 5,
            title:'First Title',
            city: 'Prishtine',
            price:'50.0 €',
        },
        {
            id: 6,
            title:'Second Title',
            city: 'Tirane',
            price:'50.0 €',
        },
        {
            id: 7,
            title:'Third Title',
            city: 'Tel Aviv',
            price:'50.0 €',
        },
        {
            id: 8,
            title:'Some random title that is a bit longer than usual',
            city: 'Bujanovc',
            price:'50.0 €',
        }
    ])

    return (
        <>
           <Hero/>
            <div style={{paddingTop:'50px'}} >
                <Products products={products}/>
            </div>
        </>
    )
}

export default Home