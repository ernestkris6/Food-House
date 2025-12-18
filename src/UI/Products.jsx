import hero from '../assets/hero.jpg'

const imageDetails = [
  {
    id: 0,
    text: "Food",
    img: hero,
  },
    {
    id: 2,
    text: "Food",
    img: hero,
  },
    {
    id: 3,
    text: "Food",
    img: hero,
  },
  {
    id: 3,
    text: "Food",
    img: hero,
  },
  {
    id: 3,
    text: "Food",
    img: hero,
  },
  {
    id: 3,
    text: "Food",
    img: hero,
  },
  {
    id: 3,
    text: "Food",
    img: hero,
  },
  {
    id: 3,
    text: "Food",
    img: hero,
  },
  {
    id: 3,
    text: "Food",
    img: hero,
  },
  

]



function Gallery ({src, alt, text}) {
  return(
      <div className='flex-shrink-0 snap-start w-48 sm:w-56 md:w-60 lg:w-64 cursor-pointer rounded-md overflow-hidden group'>
        <img className='rounded' src={src} alt={alt} />
        <div className='flex justify-between'>
        <p>{text}</p>
        <p>$50</p>
        </div>
      </div>
  )
 } 

export default function Products() {
  return (
    <div className='bg-[#E7f5f5] px-8 py-12'>
        <div className='flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide'>
            {imageDetails.map((item, idx)=> (
              <Gallery src={item.img} key={idx} text={item.text}/>
            ))}
        </div>
    </div>
  )
}
