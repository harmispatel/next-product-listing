"use client";

import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaBagShopping } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "./Products.css";
import Link from "next/link";

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setData(data?.products))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {data?.map((allProducts, index) => {
                        return (
                            <>
                                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div className="product-box text-center">
                                        <Link href={`/products/${allProducts?.id}`}>
                                            <div class="product">
                                                <img src={allProducts?.thumbnail} alt="images" />
                                                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                                    <li class="icon">
                                                        <FaExpandArrowsAlt />
                                                    </li>
                                                    <li class="icon mx-3">
                                                        <FiHeart />
                                                    </li>
                                                    <li class="icon">
                                                        <FaBagShopping />
                                                    </li>
                                                </ul>
                                            </div>
                                        </Link>
                                        <div class="tag bg-red">{allProducts?.brand}</div>
                                        <div class="title pt-4 pb-1">{allProducts?.title}</div>
                                        <div class="d-flex align-content-center justify-content-center">
                                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                        </div>
                                        <div class="price">$ {allProducts?.price}</div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Products;
