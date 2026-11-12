import React from 'react'
import { EmployeeStatusCard, HiCard } from '../atoms/CardAnimated'
import { candidateInfo } from "../../constants/data"

const HeroSection = () => {
    return (
        <header className="relative h-screen flex flex-col md:flex-row gap-7 md:gap-0 items-center md:justify-center pt-80 md:pt-0">
            {/* child1 */}
            <div className="flex flex-col items-center gap-1">
                <h1 className="font-bold text-4xl md:text-[52px] text-[#474747]">Hi, I&#39;m {candidateInfo.name}</h1>
                <p className="font-gaegu font-bold text-[24px] text-[rgb(138,138,138)] gaegu-font">{candidateInfo.tagline}.</p>
            </div>

            {/* child2 */}
            <div className="relative md:absolute md:top-[calc(50%+90px)] md:right-0 w-[300px] h-[230px] shrink-0">
                <div className="relative">
                    <HiCard />

                </div>
                <div className="relative">
                    <EmployeeStatusCard />
                </div>
            </div>
        </header>
    )
}

export default HeroSection