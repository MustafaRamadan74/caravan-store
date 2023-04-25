import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Women({ cartID, addToCart }) {

    const [womenClothing, setWomenClothing] = useState([]);



    async function getWomen(categoty) {
        let { data } = await axios.get(`https://fakestoreapi.com/products/category/${categoty}`);
        console.log(data);
        setWomenClothing(data);
    }

    useEffect(() => {
        getWomen("women's clothing");
        console.log(cartID);
    }, []);



    return <>
        <div className="filter row justify-content-between">
            <div className="leftCateg d-flex col-md-6 ">
                <p className='h4 fw-bold me-4'>Filter Products: </p>
                <select className='form-select bg-dark text-light me-3' name="color" id="color">
                    <option disabled selected value="color">color</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                </select>
                <select className='form-select bg-dark text-light' name="size" id="size">
                    <option disabled selected value="size">size</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="larg">larg</option>
                    <option value="xlarg">xlarg</option>
                    <option value="xxlarg">xxlarg</option>
                </select>
            </div>
            <div className="rightCateg d-flex col-md-6 justify-content-end">
                <p className='h4 fw-bold me-4'>Sort Products: </p>
                <select className='form-select bg-dark text-light me-3' name="price" id="price">
                    <option disabled selected value="color">price</option>
                    <option value="newest">newest</option>
                    <option value="price">price(asc)</option>
                    <option value="price">price(desc)</option>
                </select>
            </div>
        </div>

        {womenClothing.length === 0 ? <div className="spin position-relative top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
        </div>
            : <div className="container my-5">
                <div className="row">
                    {womenClothing.map((product, index) =>
                        <div className="col-md-4 gy-5">
                            <div className="productCard bg-dark position-relative">
                                <img className='w-100 proImg' src={product.image} alt="" />
                                <div className="content px-4 py-3">
                                    <h3 className='h5 fw-bold text-danger'>{product.title}</h3>
                                    <p>{product.description.split(" ").slice(0, 10).join(" ")} <Link className='seeMore' to={`/productDetails/${product.id}`}>see more</Link></p>

                                    <div className="price position-absolute bg-danger d-flex justify-content-center align-items-center px-3 py-2 rounded-pill">
                                        {product.price} $
                                    </div>
                                    <div addtocart={product.id} onClick={addToCart} className="btn btn-outline-danger d-flex justify-content-center align-items-center py-2">
                                        <i addtocart={product.id} class="fa-solid fa-cart-plus fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>}

    </>

}
