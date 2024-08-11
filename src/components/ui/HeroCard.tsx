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
    <div className="bg-transparent mx-auto w-full md:w-[300px] flex flex-col gap-4 items-center justify-center md:items-start md:justify-start  py-2 ">
      <img src={image} alt={title} />
      <p className="bg-transparent text-2xl text-[#36454F] ">{title}</p>
      <span className="bg-transparent text-lg text-[#8A8A8A] text-center md:text-left">
        {description}
      </span>
    </div>
  )
}

export default HeroCard
