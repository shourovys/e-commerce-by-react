import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SkeletonCard from '../Skeleton/SkeletonCard/SkeletonCard';
import './ProductInfo2.css'

const ProductInfo2 = ({ category, products, thisProductKey }) => {
    const [sameProduct, setSameProduct] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            let sameCategoryProducts = products.filter(product => products.key !== thisProductKey && product.category === category)
            setSameProduct(sameCategoryProducts.slice(0, 12))
        }, 3000);
    }, [])


    return (
        <div className='productInfo2'>
            {sameProduct &&
                sameProduct.map(categoryProduct =>
                    <Card
                        categoryProduct={categoryProduct}
                        key={categoryProduct.key}
                    />)
            }
            {!sameProduct &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => <SkeletonCard key={n} />)
            }
        </div>
    );
};

export default ProductInfo2;