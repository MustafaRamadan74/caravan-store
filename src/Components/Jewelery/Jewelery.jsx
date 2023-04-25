import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Jewelery() {

    const [jewelery, setJewelery] = useState([]);

    async function getJewelery(categoty) {
        let { data } = await axios.get(`https://fakestoreapi.com/products/category/${categoty}`);
        console.log(data);
        setJewelery(data);
    }

    useEffect(() => {
        getJewelery("jewelery");
    }, []);

    return <>
        <div className="filter">
            <div className="right d-flex justify-content-end">
                <p className='h4 fw-bold me-4'>Sort Products: </p>
                <select className='form-select bg-dark text-light me-3' name="price" id="price">
                    <option disabled selected value="color">price</option>
                    <option value="newest">newest</option>
                    <option value="price">price(asc)</option>
                    <option value="price">price(desc)</option>
                </select>
            </div>
        </div>

        {jewelery.length === 0 ? <div className="spin position-relative top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
        </div>
            : <div className="container my-5">
                <div className="row">
                    {jewelery.map((product, index) =>
                        <div className="col-md-4 gy-5">
                            <div className="productCard bg-dark position-relative">
                                <img className='w-100 proImg' src={product.image} alt="" />
                                <div className="content px-4 py-3">
                                    <h3 className='h5 fw-bold text-danger'>{product.title}</h3>
                                    <p>{product.description.split(" ").slice(0, 10).join(" ")} <Link className='seeMore' to={`/productDetails/${product.id}`}>see more</Link></p>

                                    <div className="price position-absolute bg-danger d-flex justify-content-center align-items-center px-3 py-2 rounded-pill">
                                        {product.price} $
                                    </div>
                                    <div className="btn btn-outline-danger d-flex justify-content-center align-items-center py-2">
                                        <i class="fa-solid fa-cart-plus fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>}

    </>

}
