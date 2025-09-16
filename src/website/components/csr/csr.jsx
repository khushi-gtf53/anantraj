import React from 'react'
import CsrAbout from './CsrAbout'
import CsrContent from './CsrContent'
import CsrGallery from './CsrGallery'

const contentData = [
    {
        img: "/assets/csr/tabImg/1.webp",
        title: "education",
        description: "Focusing on the education of underprivileged students who can't complete their education due to socio-economic reasons. Sizeable donations were made to the Children Education Society, Delhi Public School (RK Puram), Prayas Social Welfare Society, Sambhav Foundation, FDDI and Blossom Public School, aside from other notable societies. Children Education Society is a non-profit that is committed to educating underprivileged children who can't attain proper education due to socioeconomic reasons."
    },
    {
        img: "/assets/csr/tabImg/2.webp",
        title: "employment",
        description: "In collaboration with Divya Chaya Trust and Rainbow Foundation India, several vocational skill programs were provided to women so they could increase their employment opportunities. Divya Chaya Trust in Palam Vihar, Delhi is one of the topmost Charitable Trusts that aims to educate, support and rehabilitate underprivileged children."
    },
    {
        img: "/assets/csr/tabImg/3.webp",
        title: "rural development",
        description: "Undertaking eye centres for charitable operations of underprivileged disabled people. It was a collaborative effort with Charities Aid Foundation and the National Thallesemia Welfare Society. Donations were made to Delhi Chinmaya Sewa Trust and Beti foundation in order to promote social and cultural activities. Beti Foundation is a non-profit, providing free education to children and ladies begging at traffic signals."
    }
]

export default function Csr() {
    return (
        <>
            <CsrAbout />
            <CsrContent contentData={contentData} />
            <CsrGallery />
        </>
    )
}
