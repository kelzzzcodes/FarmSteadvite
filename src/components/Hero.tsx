import { BottomHero, UpperHero } from './ui'

const Hero = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 h-screen overflow-hidden">
      <UpperHero />
      <BottomHero />
    </div>
  )
}

export default Hero
