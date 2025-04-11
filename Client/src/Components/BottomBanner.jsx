import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className="relative mt-24 ">
  <img src={assets.bottom_banner_image} alt="banner" className="w-full hidden md:block"/>
  <img src={assets.bottom_banner_image_sm} alt="banner" className="w-full md:hidden"/>

  {/* Text on banner */}
  <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
    <div>
    <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-6">Why We Are The Best?</h1>
    {features.map((feature,index)=>(
        <div key={index} className='flex items-center gap-4 mt-2'>
            <img src={feature.icon} alt=""className='md:w-11 w-9'/>
            <div>
            <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
            <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
            </div>

        </div>
    ))}
    </div>
     

      {/* <ul className="space-y-3">
        <li className="flex items-start gap-4">
          <img src={assets.delivery_truck_icon} alt="" className="w-12 h-12" />
          <div>
            <p className="font-semibold">Fastest Delivery</p>
            <p className="text-sm text-gray-600">Groceries delivered in under 30 minutes.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <img src={assets.leaf_icon} alt="" className="w-12 h-12" />
          <div>
            <p className="font-semibold">Freshness Guaranteed</p>
            <p className="text-sm text-gray-600">Fresh produce straight from the source.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <img src={assets.coin_icon} alt="" className="w-12 h-12" />
          <div>
            <p className="font-semibold">Affordable Prices</p>
            <p className="text-sm text-gray-600">Quality groceries at unbeatable prices.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <img src={assets.trust_icon} alt="" className="w-12 h-12" />
          <div>
            <p className="font-semibold">Trusted by Thousands</p>
            <p className="text-sm text-gray-600">Loved by 10,000+ happy customers.</p>
          </div>
        </li>
      </ul> */}
  </div>
</div>
  )
}

export default BottomBanner