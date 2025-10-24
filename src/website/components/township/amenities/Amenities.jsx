import CommonHeading from "../../common/CommonHeading";
import './amenities.css'

const am_points = [
  "Club house",
  "Green Areas",
  "Parks",
  "Kids Play Area",
  "Wide Roads",
  "Gated Community",
  "Security"
]

const TownshipAmenities = ()=>{
  return(
    <div className='township_amenities_section relative py-[100px] bg-[#FBF6F6]'>
        <div className="container">
          <CommonHeading customClass="mx-auto lg:max-w-[600px] text-center">Stunning Luxury Prime Residences, Designed For Life</CommonHeading>
          <ul className="flex points justify-center items-center mt-[50px]">
            {am_points.map((item, index)=>{
              return am_points.length - 1 == index ? (
                <>
                  <li className="tracking-[1px]" key={index}>{item}</li>
                </>
              ) : (
                <>
                  <li className="tracking-[1px]" key={index}>{item}</li>
                  <span className="divider"></span>
                </>
              )

            })}
          </ul>
        </div>
    </div>
  )
}

export default TownshipAmenities