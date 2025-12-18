import React from 'react'
import { buttonCard } from '../assets/assets'

const ButtonCard = ({image,text}) => {
    return (
        <div className="border border-orange-300 rounded-xl p-5 shadow-sm bg-white flex items-center gap-4 hover:shadow-xl transition">
            <img src={image} alt="Coding" className="w-12" />
            <span className="font-medium text-[#0B234A]">{text}</span>
        </div>
    )
}

export default ButtonCard