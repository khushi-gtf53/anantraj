import BlogContent from '@/src/components/blog/blogDetail/blogContent';
import CommonHeroSec from '@/src/components/common/CommonHeroSec';
import React from 'react';

async function getBlogData(slug) {
  return {
    slug,
    title: `Blog Post: ${slug}`,
    content: `Content for ${slug}`,
  };
}

async function getBlogSlugs() {
  return ['blog-1', 'blog-2', 'blog-3'];
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

const Obj = {
  title: "Blog detail",
  heading: "Blog Details",
  subtitle: "The demand for secure, scalable, and future-ready IT infrastructure is reshaping the real estate landscape across India.",
  imgUrl: "/assets/blogs/blog-detail.webp",
  linkTo: "discover-blogs",
  tabs: [
    { tabname: "blog detail", tablink: "discover-blogs" },
    { tabname: "old blog", tablink: "other-blogs" },
  ],
};

export default async function BlogDetail({ params }) {
  const { slug } = params;
  const blogData = await getBlogData(slug);

  return (
    <div className="blog__page bg-[#FBF6F6]">
      <CommonHeroSec ObjData={Obj} />
      <BlogContent blogData={blogData} />
    </div>
  );
}