import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../Context/AppContext'
const BestSeller = () => {
    const {products} = useAppContext();
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium mt-10'>Best Sellers</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 mt-6'>
            {products.filter((product)=> product.inStock).slice(0,5).map((product,index)=>(
                <ProductCard key={index} product={product}/>
            )) }
        </div>

    </div>
  )
}

export default BestSeller