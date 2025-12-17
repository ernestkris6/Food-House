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
        <b>{text}</b>
      </div>
  )
 } 

export default function Products() {
  return (
    <div className='bg-[#E7f5f5] py-12'>
        <div className='flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide'>
            {imageDetails.map((item, idx)=> (
              <Gallery src={item.img} key={idx} text={item.text}/>
            ))}
        </div>
        <button className='bg-[#f3274c] text-white rounded px-6 py-2 mt-4 cursor-pointer'>Start Ordering</button>
    </div>
  )
}
