
import Investors from '@/src/components/investors/investors'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='investors bg-[#FBF6F6] relative'>
            <Investors />
            {/* Background Pattern */}
            <Image
                src="/assets/pattern-bg.png"
                alt="pattern-bg"
                width={1920}
                height={70}
                priority
                className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
            />
        </div>
    )
}
