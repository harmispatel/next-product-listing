"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import "./index.css"

const ProductsDetails = () => {
    const params = useParams()
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params?.productId}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);

    return (    
        <>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-5">
                        <div class="main-img">
                            <img class="img-fluid" src={data?.thumbnail} alt="ProductS" />
                            <div class="row my-3 previews">
                                <div class="col-md-3">
                                    <img class="w-100" src={data?.images} alt="Sale" />
                                </div>
                                <div class="col-md-3">
                                    <img class="w-100" src={data?.images} alt="Sale" />
                                </div>
                                <div class="col-md-3">
                                    <img class="w-100" src={data?.images} alt="Sale" />
                                </div>
                                <div class="col-md-3">
                                    <img class="w-100" src={data?.images} alt="Sale" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="main-description px-2">
                            <div class="category text-bold">
                                Category: {data?.category}
                            </div>
                            <div class="product-title text-bold my-3">
                                {data?.title}
                            </div>


                            <div class="price-area my-4">
                                <p class="old-price mb-1"><del>$100</del> <span class="old-price-discount text-danger">({data?.discountPercentage}% off)</span></p>
                                <p class="new-price text-bold mb-1">${data?.price}</p>
                                <p class="text-secondary mb-1">(Additional tax may apply on checkout)</p>

                            </div>


                            <div class="buttons d-flex my-5">
                                <div class="block">
                                    <a href="#" class="shadow btn custom-btn ">Wishlist</a>
                                </div>
                                <div class="block">
                                    <button class="shadow btn custom-btn">Add to cart</button>
                                </div>

                                <div class="block quantity">
                                    <input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity" />
                                </div>
                            </div>




                        </div>

                        <div class="product-details my-4">
                            <p class="details-title text-color mb-1">Product Details</p>
                            <p class="description">{data?.description}</p>
                        </div>



                        <div class="delivery my-4">
                            <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-truck"></i></span> <b>Delivery done in 3 days from date of purchase</b> </p>
                            <p class="text-secondary">Order now to get this product delivery</p>
                        </div>
                        <div class="delivery-options my-4">
                            <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-filter"></i></span> <b>Delivery options</b> </p>
                            <p class="text-secondary">View delivery options here</p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsDetails