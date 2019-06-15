import React, { useState, useEffect } from 'react';

const Product = function() {

    const [product, setProduct] = useState({});

    useEffect(() => {
        myProductData();
    }, []);



    const myProductData = async function() {
    const productId = window.location.href.split('/products/')[1]
        const result = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${productId}`,
            {
                method: 'GET',
                headers: {
                    Authorization: 'b634658839fb93ea4b3b2fc6e2701521'
                }});
        const product = await result.json();
        console.log(product);
        setProduct(product);

    }


    const content = product && product.data ? product.data : '';

    debugger;

    if(content === '') {
        return null;
    }
    return (
        <div className="product">
            <h1>{content.item.name}</h1>
            <h4>{content.item.description}</h4>
            <img src={content.item.images.background} />
        </div>
    );

}

export default Product;
