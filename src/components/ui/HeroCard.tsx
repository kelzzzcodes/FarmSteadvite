import React from 'react'

const HeroCard = ({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) => {
  return (
    <div className="bg-transparent w-[300px] flex flex-col gap-4 items-start justify-start py-2 ">
      <img src={image} alt={title} className="bg-transparent" />
      <p className="bg-transparent text-2xl text-[#36454F] ">{title}</p>
      <span className="bg-transparent w-[90%] text-lg text-[#8A8A8A]">
        {description}
      </span>
    </div>
  )
}

export default HeroCard
