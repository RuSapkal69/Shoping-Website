import React from 'react'
import { star } from '../assets/icons'
const PopularProductCard = ({ imgURL, name, price }) => {
    return (
      <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
          src={imgURL} alt={name}
          className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex flex-col items-start gap-2">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <img 
              src={star} alt="rating"
              width={24} height={24}
            />
            <p className="font-montserrat text-xl text-slate-gray leading-normal">(4+)</p>
          </div>
          {/* Name */}
          <h3 className="text-2xl leading-normal font-semibold font-palanquin">
            {name}
          </h3>
          {/* Price */}
          <p className="text-coral-red font-montserrat leading-normal text-1xl">
            {price}
          </p>
        </div>
      </div>
    );
  };

export default PopularProductCard
