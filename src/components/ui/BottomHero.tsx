import { HomeCardData } from '../../constants'
import HeroCard from './HeroCard'

const BottomHero = () => {
  return (
      <section className="bg-white bg-opacity-80  absolute  left-0 right-0 -bottom-24 border-2 border-none p-4 flex items-center justify-center flex-wrap gap-4 max-w-[96%] mx-auto">
      <div className='flex flex-wrap bg-transparent '>
          {HomeCardData.map((item, index) => (
          <HeroCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      </section>

  )
}

export default BottomHero

  // <section className=" px-16 relative ">