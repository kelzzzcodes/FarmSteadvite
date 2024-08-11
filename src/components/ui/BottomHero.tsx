import { HomeCardData } from '../../constants'
import HeroCard from './HeroCard'

const BottomHero = () => {
  return (
    <section className="h-auto bg-white shadow-custom-combined rounded-md p-4 flex flex-wrap gap-4 max-w-[96%] mx-auto w-full">
      {/* <div className='flex flex-wrap bg-transparent mx-auto items-center justify-center '>
          {HomeCardData.map((item, index) => (
          <HeroCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div> */}
      {HomeCardData.map((item, index) => (
        <HeroCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  )
}

export default BottomHero

// <section className=" px-16 relative ">
