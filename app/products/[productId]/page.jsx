import ProductsDetails from '@/components/DetailsPage/ProductsDetails';
import React from 'react'

export async function generateStaticParams() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        if (!data.products || !Array.isArray(data.products)) {
            throw new Error("Invalid products data");
        }

        return data.products.map((post) => ({
            productId: post.id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching products data:", error);
        return [];
    }
}

const page = () => {
    return (
        <>
            <ProductsDetails />
        </>
    )
}

export default page