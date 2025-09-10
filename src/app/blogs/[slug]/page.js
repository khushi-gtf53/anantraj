// import BlogContent from '@/src/components/blog/blogDetail/blogContent';
// import CommonHeroSec from '@/src/components/common/CommonHeroSec'
import BlogContent from '@/src/components/blog/blogDetail/blogContent';
import CommonHeroSec from '@/src/components/common/CommonHeroSec';
import React from 'react'

const Obj = {
    title: "Blog detail",
    heading: "Blog Details",
    subtitle: "The demand for secure, scalable, and future-ready IT infrastructure is reshaping the real estate landscape across India.",
    imgUrl: "/assets/blogs/blog-detail.webp",
    linkTo: "discover-blogs",
    tabs: [
        { tabname: "blog detail", tablink: "discover-blogs" }
        , { tabname: "old blog", tablink: "other-blogs" }
    ]
}


export default async function BlogDetail({ params }) {
    const slug = params;
    return (
        <div className='blog__page bg-[#FBF6F6]'>
            <CommonHeroSec ObjData={Obj} />
            <BlogContent />
        </div>
    )
}
