import { FeaturedProducts, Hero } from '../../components'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <FeaturedProducts />
    </div>
  )
}

export default Home
