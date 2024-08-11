import Button from './Button'
import { GoPlus } from 'react-icons/go'

const FeaturedProductCard = ({
  image,
  oldPrice,
  newPrice,
  name,

}: {
  image: string,
  oldPrice: number,
  newPrice: number,
  name: string,
}) => {
  return (
    <div className=" w-full h-[190px] bg-white/80 shadow-custom-combined flex flex-col px-4 rounded-md  mb-16 ">
      <img src={image} alt={name} className="h-36 mx-auto relative bottom-16" />
      <div className=" flex items-center justify-between relative bottom-8">
        <div className="flex flex-col">
          <ul className="flex gap-1 text-sm font-semibold">
            <li className='text-[#FF8D29]'>
              <span>N</span>{oldPrice}
            </li>
            <li className='text-[#82828B]'>
              <span>N</span>{newPrice}
            </li>
          </ul>
          <p className='text-lg text-[#192127]'>{name}</p>
        </div>
        <Button
          href="/add"
          className="bg-[#228B22] p-2 rounded-lg "
          spanClassName="text-white"
        >
          <GoPlus/>
        </Button>
      </div>
    </div>
  )
}

export default FeaturedProductCard
