import { FeaturedProductData } from '../constants'
import { Button } from './ui'
import FeaturedProductCard from './ui/FeaturedProductCard'

const FeaturedProducts = () => {
  return (
    <section className="mt-10 mb-10 px-4 sm:px-8  flex flex-col gap-4">
      <h2
        className="text-[#192127] text-4xl font-Merriweather mb-20
"
      >
        Featured Products
      </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mx-auto w-full">
  {
    FeaturedProductData.map((item,index) => (
      <FeaturedProductCard  key={index} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} name={item.name}/>
    ))
  }

</div>


      <div className="flex mx-auto">
        <Button
          href="/shopnow"
          className="bg-[#228B22] py-4 px-8 rounded-lg text-white font-semibold text-xl"
          spanClassName=" bg-transparent text-white"
        >
          View all Products
        </Button>
      </div>
    </section>
  )
}

export default FeaturedProducts
