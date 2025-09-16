"use client";

import CommonHeading from "../common/CommonHeading"
import CommonPera from "../common/CommonPera"
import ContentTabs from "./ContentTabs"

const CsrContent = ({ contentData }) => {
    return (
        <section className="csrcontent relative bg-[#FBF6F6] w-full">
            <div className="wrapper">
                <div className="about border-b-2 border-gray-400">
                    <CommonHeading>monica sarin foundation</CommonHeading>
                    <div className="about_desc mt-5 pb-20">
                        <CommonPera extraClass="text-justify">
                            Monica Sarin Foundation has been instrumental in carrying out our organization's CSR initiatives to help create an impact in our society. We take pride in a wide range of comprehensive initiatives with several notable foundations that helped turn our mission into action. In association with LCPM Nirvana Naturopathy and retreat, people who required recovery and healing were given assistance at the wellness center. We teamed up with Prayas social welfare society in order to help provide education and upliftment to economically and socially challenged people. In another endeavour with Iskcon, a successful food drive was organized to help feed hungry and the underprivileged. Through our significant collaboration with Rainbow Foundation India, an initiative of providing education to the girls who are unable to pursue their studies due to their difficult circumstances was taken by us. The efforts towards contribution to society is a path that Monica Sareen foundation follows.
                        </CommonPera>
                    </div>
                </div>

                <ContentTabs contentData={contentData} />
            </div>
        </section>
    )
}

export default CsrContent