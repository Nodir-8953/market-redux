import React, {useEffect}from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductList = () =>{
    const products = useSelector((state)=>state);
    const fetchProducts = async ()=>{
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err)=>console.log("err", err))
        console.log(response.data);
    }
    useEffect(()=>{
        fetchProducts();
    }, [])
    return (
        <div className='ui grid container' style={{marginTop: 20}}>
            <ProductComponent />
        </div>
    )
}
export default ProductList