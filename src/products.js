import React, { useState, useEffect } from 'react';

const Products = function() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        myData();
    }, []);



    const myData = async function() {
        const result = await fetch('https://fortnite-api.theapinetwork.com/items/list',
            {
                method: 'GET',
                headers: {
                    Authorization: 'b634658839fb93ea4b3b2fc6e2701521'
                }});
        const products = await result.json();
        console.log(products);
        setProducts(products);
        debugger;
    }

    const _products = products &&
        products.data && products.data.length > 0 ?
        products.data:
        [];
    const content  = _products.map(function (product) {

        debugger;
        return <li onClick= {() => {document.location = `products/${product.itemId}`}}>{product.item.name}</li>

    })


        return (
            <div className="products">
                <ul>
                {content}
                </ul>
            </div>
        );
}

export default Products;
