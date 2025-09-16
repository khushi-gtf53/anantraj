// import Csr from "@/src/components/csr/csr";

import Csr from "@/src/website/components/csr/csr";

export const metadata = {
  title: "Corporate Social Responsibility | Anant Raj",
  description:
    "Discover our Corporate Social Responsibility (CSR) initiatives — from sustainability to community impact, we are committed to creating a better future.",
  keywords: [
    "CSR",
    "Corporate Social Responsibility",
    "Sustainability",
    "Community",
    "Environment",
    "Anant Raj"
  ],
  openGraph: {
    title: "Corporate Social Responsibility | Anant Raj",
    description:
      "Explore how Anant Raj drives positive impact through CSR — supporting communities, sustainability, and environmental initiatives.",
    url: "https://yourdomain.com/csr",
    siteName: "Anant Raj",
    images: [
      {
        url: "/assets/csr/about.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Social Responsibility at Anant Raj",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Social Responsibility | Anant Raj",
    description:
      "See how Anant Raj is making a difference with CSR initiatives worldwide.",
    images: ["https://yourdomain.com/images/csr-og.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/csr",
  },
};

const page = () => {
  return (
    <>
      <Csr />
    </>
  );
};

export default page;
