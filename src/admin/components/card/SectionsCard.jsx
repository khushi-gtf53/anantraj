import React from "react";
import Card from "./Card";
import CardHeading from "./CardHeading";
import { RiPagesFill } from "react-icons/ri";
import Link from "next/link";

const SectionsCard = ({ title, icon,data,cms=false }) => {
  
  return (
    <section className="py-[20px]" key={data?.slug}>
      
      <Card>
        <CardHeading icon={icon}> {title}</CardHeading>
          {data?.length > 0 ? 
        <div className="grid grid-cols-12 gap-3">
        {data.map((item, i) => {
          return (
            <Card key={i} className="!py-[15px] !px-[15px] col-span-3">
              <div className="flex justify-start items-center gap-[10px]">
                <div className="border flex-none basis-[70px] border-[#45464f] rounded-full w-[70px] h-[70px] flex items-center justify-center">
                  <RiPagesFill className="text-[var(--admin-primary)] text-[30px]" />
                </div>
                <div>
                  <p className="leading-[20px] text-white text-[13px]">{item?.name}</p>
                  <Link href={cms ? `/admin/cms/${item?.slug }`:`/admin/page/${item?.slug}`} ><p className="text-[var(--admin-secondary)] !text-[12px]">View Details</p></Link>
                </div>
              </div>
            </Card>
          );
        })}
        </div>
        :
        <p className="leading-[20px] text-white text-[13px]">No Data Available</p>
        }
      </Card>
      
    </section>
  );
};

export default SectionsCard;
