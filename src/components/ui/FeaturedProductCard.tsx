import React from 'react'
import Potato from '../../assets/potato.png'
import Button from './Button'
import { GoPlus } from 'react-icons/go'

const FeaturedProductCard = ({
  image,
  oldPrice,
  newPrice,

}: {
  image: string,
  oldPrice: number,
  newPrice: number,
}) => {
  return (
    <div className="w-[308px] h-[200px] bg-white/80 flex flex-col px-4 rounded-md">
      <img src={Potato} className="w-36 h-36 mx-auto relative bottom-16 " />
      <div className="flex items-center justify-between mb-5">
        <div className="flex flex-col">
          <ul className="flex gap-1">
            <li>
              <span>N</span>3000.00
            </li>
            <li>
              <span>N</span>1500
            </li>
          </ul>
          <p>Potato</p>
        </div>
        <Button
          href="/add"
          className="bg-[#228B22] p-2 rounded-lg "
          spanClassName="text-white"
        >
          <GoPlus />
        </Button>
      </div>
    </div>
  )
}

export default FeaturedProductCard
