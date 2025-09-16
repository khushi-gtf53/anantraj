"use client";

import Link from "next/link";
import Image from "next/image";

const truncateTitle = (title, maxWords = 10) => {
  const words = title.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return title;
};

export default function BlogCard({ blogsData }) {
  if (!blogsData) return null;
  const truncatedTitle = truncateTitle(blogsData?.title, 12);

  return (
    <div className="blog__card w-full group">
      <Link href={`/blogs/${blogsData?.slug}`} className="block">
        <figure className="fig__img relative w-full h-[360px] lg:h-[360px] overflow-hidden">
          <Image
            src={blogsData?.img}
            alt={blogsData?.alt || "blog img"}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 1024px) 100vw, 360px"
            priority
          />
        </figure>

        <div className="content__div">
          <div className="py-8">
            <h3 className="inline-block font-lato text-[20px] font-[400] tracking-[1px] leading-[30px]">
              {truncatedTitle}
              <span className="inline-flex items-center pl-6 text-[15px] relative bottom-[3px]">
                <span className="block w-[80px] bg-gray-300 h-[2px] mr-5"></span>
                <span>{blogsData.date}</span>
              </span>
            </h3>
          </div>
        </div>

        <button className="text-[#263A7F] cursor-pointer block py-[9px] px-12 border-y uppercase font-[600]">
          Explore more
        </button>
      </Link>
    </div>
  );
}
