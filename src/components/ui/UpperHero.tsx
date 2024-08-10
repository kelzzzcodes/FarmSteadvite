import landing from '../../assets/landing.png'
import verify from '../../assets/verify.png'
import Button from './Button'
import Search from '../../assets/Search.svg'
const UpperHero = () => {
  return (
    <section className="flex mt-8">
      <div className="flex flex-col gap-4 flex-1 sm:text-center sm:items-center xl:items-start xl:text-left">
        <h2 className="text-[40px] leading-[60.56px] xl:text-[80px] xl:leading-[100.56px] font-Merriweather">
          Fresh from our <br/> Farm to Your{' '}
          <span className="text-[#228B22]">Table</span>
        </h2>
        <p className="text-[24px] w-[90%] text-[#8A8A8A] leading-[40px]">
          Experience the best of local farms, delivered directly to your
          doorstep
        </p>
        <div className="flex  flex-col sm:flex-row items-start gap-2 xl:pr-2">
          <Button
            href="/shopnow"
            className="bg-[#228B22] px-4 py-[8px] xl:py-3 rounded-lg text-white font-extrabold text-xl"
            spanClassName=" bg-transparent text-white "
          >
            Shop Now
          </Button>
          <div className="border-2 border-[#228B22] flex rounded-lg overflow-hidden">
            <input type="text" className="flex outline-none px-2" />
            <img src={Search} className="bg-[#228B22] xl:w-12 p-2" />
          </div>
        </div>
        <ul className="flex gap-8 items-center">
          <li className="flex gap-2 items-center text-[#82828b]">
            <img src={verify} className="w-8 h-8" />
            Quality Assurance
          </li>

          <li className="flex gap-2 items-center text-[#82828b]">
            <img src={verify} className="w-8 h-8" />
            Freshness Guaranteed
          </li>
        </ul>
      </div>
      <div className="hidden xl:flex xl:flex-1 items-center justify-center">
        <div className="w-[720px] flex items-center justify-center">
          <img src={landing} className="max-w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

export default UpperHero
