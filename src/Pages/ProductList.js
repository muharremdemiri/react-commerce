import React, {useEffect, useState} from 'react'
import Filters from "../components/Filters";
import Products from "../components/Products";

const ProductList = () => {
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
        }
    ])

    return (
        <>
            <Filters/>
            <Products withOptions={true} products={products}/>
        </>
    )
}

export default ProductList;