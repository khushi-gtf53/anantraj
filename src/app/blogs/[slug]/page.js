import BlogContent from '@/src/website/components/blog/blogDetail/blogContent';
import CommonHeroSec from '@/src/website/components/common/CommonHeroSec';
import React from 'react';

// Mock function to fetch blog data by slug (replace with actual API/database call)
async function getBlogData(slug) {
  // This is a placeholder. In a real app, you'd fetch this from an API or database
  return {
    slug,
    title: `Blog Post: ${slug}`,
    content: `Content for ${slug}`,
    // Add other blog data as needed
  };
}

// Mock function to fetch blog slugs (replace with actual API/database call)
async function getBlogSlugs() {
  // This is a placeholder. In a real app, you'd fetch this from an API or database
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