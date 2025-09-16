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

const TownshipLocationmap = ()=>{
  return(
    <div className='township_amenities_section relative bg-[#FBF6F6]'>
        <img src="assets/township/location/map.webp" alt="experience image 1" className="img-fluid w-full" />
        <div className="advantages py-[100px]">
          <CommonHeading customClass="mx-auto lg:max-w-[700px] text-center">Strategic Location Advantages</CommonHeading>
          
        </div>
    </div>
  )
}

export default TownshipLocationmap