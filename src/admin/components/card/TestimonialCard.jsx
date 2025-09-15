import { BASE_ADMIN } from "@/config";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { useApi } from "../../hooks/useApi";
import { useCrud } from "../../hooks/useCrud";
import Card from "./Card";
import CardHeading from "./CardHeading";

const TestimonialCard = () => {
  const api = useApi(BASE_ADMIN);
  const { tableData : testimonial } = useCrud(api, "testimonial");

  return (
    <Card>
        <CardHeading icon={FaAddressCard} className="!mb-[5px]">Testimonial</CardHeading>
      <div className="h-[122px] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500 scrollbar-track-transparent">
        {testimonial?.length > 0 ?
        testimonial.map((item,i) => (
        <div key={i} className="flex gap-[15px] 2xl:gap-[20px] relative mb-[10px] pb-[20px] pt-[20px] border-b border-[#45464f]">
        <p className="absolute right-[10px] top-[-4px] text-[14px] flex items-center gap-[5px] text-[var(--admin-yellow)]">{new Date(item?.createdAt).toLocaleDateString("en-GB")}<FaCalendar className="text-white"/>  </p>
          <div>
            {" "}
            <h1 className="bg-[var(--admin-primary)] uppercase rounded-[50px] p-[10px] font-roboto text-[40px] block text-center text-[#181a26] w-[80px] h-[80px]">
              {item?.name?.trim().slice(0, 1)}

            </h1>
          </div>
          <div>
            <p className="text-white font-robotoLight capitalize text-[18px] 2xl:text-[22px] border-b border-[#45464f] pb-[12px]">
              {item?.name}
            </p>

            <div className="flex justify-start gap-[10px] mt-[10px] w-full">
              <p className="text-[#f7f7f7] font-[13px] tracking-[0.7px] leading-[26px]">
                {item?.short_description}
              </p>
            </div>
          </div>
        </div>

        ))
        :
           <p className="text-[#f7f7f7] mt-[30px]  font-[13px] tracking-[0.7px] leading-[26px]">
               No Data Available
              </p>
           }
      </div>
    </Card>
  );
};

export default TestimonialCard;
