import './hero.css'

const TownshipHero = ()=>{
  return(
    <div className='township_hero_section'>
      <img src="assets/township/hero/hero.webp" alt="township main image" className='w-full bg_image' />
      <div className="contents">
        <div className="container">
          <div className="top">
            <h1 className='text-white text-[70px] uppercase text-center font-sangbleu tracking-[1px]'>Anant Raj Estate</h1>
            <h3 className='text-white text-[34px] uppercase text-center font-sangbleu tracking-[1px] mt-[30px] line_up'>township</h3>
          </div>

          <div className="bottom">
            <h5 className='text-white text-[30px] uppercase text-center tracking-[1px] font-bold'>Spread across 220 Acres,</h5>
            <p className='text-white text-[20px] uppercase text-center tracking-[1px]'>with mixed development residential and commercial</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TownshipHero