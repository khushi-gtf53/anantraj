"use client";

import Image from "next/image";
import CommonHeading from "../common/CommonHeading"
import CommonPera from "../common/CommonPera"

const ContentTabs = ({ contentData }) => {
  if (!contentData) return;

  return (
    <section className="contenttab relative bg-[#FBF6F6] w-full">
      {contentData.map((content, i) => (
        <div key={i} className="grid grid-cols-1  lg:grid-cols-12 py-10 gap-10 border-t first:border-0" id={content.title.replace(" ", "")}>
          {/* Image */}
          <div
            className={`col-span-6 ${i % 2 === 1 ? "lg:order-last" : "lg:order-first"
              }`}
          >
            <div className={`tab_img flex w-full h-full ${i % 2 === 1 ? "justify-end" : "justify-start"
              }`}>
              <Image
                src={content.img}
                layout="responsive"
                width={800}
                height={600}
                className="object-cover h-full w-full"
                alt={contentData?.alt || "image"}
              />
              {/* <img src={content.img} alt={content.title} /> */}
            </div>
          </div>

          {/* Text */}
          <div
            className={`col-span-6 flex items-center h-full ${i % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
              }`}
          >
            <div className="tab_content space-y-5">
              <CommonHeading>{content.title}</CommonHeading>
              <CommonPera extraClass="text-justify">
                {content.description}
              </CommonPera>
            </div>
          </div>
        </div>
      ))}
    </section>

  )
}

export default ContentTabs