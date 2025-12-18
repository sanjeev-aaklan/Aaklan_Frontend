import React from 'react'

const HeroHeading = ({colorHeading,NonColorHading}) => {
    return (
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="bg-linear-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                {colorHeading}
            </span>
            <br />
            <span className="text-gray-900 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
                {NonColorHading}
            </span>
        </h1>
    )
}

export default HeroHeading