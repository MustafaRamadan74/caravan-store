import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function ProductDetails() {


    const [item, setItem] = useState([]);
    let { id } = useParams();

    async function getItem(id) {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(data);
        setItem(data);
    }

    useEffect(() => {
        getItem(id);
    }, []);


    return <>

        <div className="container my-5 ">
            <div className="row">
                <div className="col-md-6">
                    <img className='w-100 imgDetails' src={item.image} alt="product" />
                </div>
                <div className="col-md-6">
                    <h2 className='fw-bold text-danger mb-5'>{item.title}</h2>
                    <p>{item.description}</p>
                    <p className='fw-bold text-danger'>price : {item.price} $</p>

                    {item.id !== 5 && item.id !== 6 && item.id !== 7 && item.id !== 8 ? <>
                        <div className="colorChoice d-flex mt-3 mb-5">
                            <p className='me-3'>color :</p>
                            <div className="mx-2 px-3 py-1 rounded-circle d-flex justify-content-center align-items-center cursor-pointer white">
                                .
                            </div>
                            <div className="mx-2 px-3 py-1 rounded-circle d-flex justify-content-center align-items-center cursor-pointer black">
                                .
                            </div>
                            <div className="mx-2 px-3 py-1 rounded-circle d-flex justify-content-center align-items-center cursor-pointer red">
                                .
                            </div>
                            <div className="mx-2 px-3 py-1 rounded-circle d-flex justify-content-center align-items-center cursor-pointer green">
                                .
                            </div>
                            <div className="mx-2 px-3 py-1 rounded-circle d-flex justify-content-center align-items-center cursor-pointer blue">
                                .
                            </div>
                        </div>
                        <div className="sizeChoice d-flex ">
                            <p className='me-4'>size :</p>
                            <select className='form-select bg-dark text-light' name="size" id="size">
                                <option selected disabled value="size">size</option>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="larg">larg</option>
                                <option value="xlarg">xlarg</option>
                                <option value="xxlarg">xxlarg</option>
                            </select>
                        </div>
                    </> : ""}



                    <div className="number my-5 d-flex align-items-center ">
                        <div className="numOfProduct cursor-pointer btn-outline-danger me-4 d-flex justify-content-center align-items-center rounded">
                            -
                        </div>
                        <p className='me-4 mt-3 numOfProduct d-flex justify-content-center align-items-center rounded'>1</p>
                        <div className="numOfProduct cursor-pointer btn-outline-danger me-4 d-flex justify-content-center align-items-center rounded">
                            +
                        </div>
                        <div className="btn btn-outline-danger">Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>



    </>
}
