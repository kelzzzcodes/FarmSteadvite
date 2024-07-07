import landing from '../../assets/landing.png'
import Button from './Button'
import Search from '../../assets/Search.svg'
const UpperHero = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col gap-4 lg:flex-4 pt-24 ">
        <h2 className="text-[40px] leading-[70.56px] md:text-[80px] md:leading-[100.56px] font-Merriweather ">
          Fresh from our <br /> Farm to Your{' '}
          <span className="text-[#228B22]">Table</span>
        </h2>
        <p className="text-[24px] w-[90%] text-[#8A8A8A] leading-[40px]">
          Experience the best of local farms, delivered directly to your
          doorstep
        </p>
        <div className="flex gap-4 md:gap-8 items-center">
          <Button
            href="/shopnow"
            className="bg-[#228B22] px-6 md:px-12 py-4 rounded-lg text-white font-extrabold text-xl"
          >
            Shop Now
          </Button>
          <div className="border-2 border-[#228B22] flex-1  flex h-[56px] rounded-lg overflow-hidden ">
            <input type="text" className=" flex flex-1 outline-none" />
            <img src={Search} className="bg-[#228B22] w-16 p-2" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-6 ">
        <div className="pt-12 flex-1 flex items-center justify-center">
          <div className="relative w-[80%] rounded-full border-[#FE5B3E] border-2">
            <img src={landing} className=" mt-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperHero
