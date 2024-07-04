"use client"

import Image from 'next/image'
import { Unica_One } from 'next/font/google'
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";


const unicaOne = Unica_One({ weight: ["400"], subsets: ["latin"] })
const customClass = unicaOne.className + " text-[64px]"


import Button from '@/components/button'

const Hero = () => {

    useEffect(() => {
        AOS.init()
    }, [])

  return (
    <div className='flex-col'>
        <div className='flex text-[12px] md:text-[18px] justify-center md:text-end md:justify-end mt-[20px]  md:mr-[25px] lg:mr-[60px] lg:text-[24px] font-bold    '>
            <i className="z-40">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Igniting a Revolution in HR Innovation")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Igniting a Revolution in HR Innovation")
                            .start();
                    }}
                />
            </i>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start md:ml-[30px] lg:ml-[60px] xl:ml-[100px] 2xl:ml-[200px] leading-tight z-40">
                <div>
                    <h1 className='flex font-bold text-[30px] md:text-[34px] lg:text-[49px] xl:text-[70px] 2xl:text-[100px] mt-[80px] clash-display'>getlinked Tech</h1>
                    <h1 className='flex font-bold text-[30px] md:text-[34px] lg:text-[49px] xl:text-[70px] 2xl:text-[100px] mb-[10px] clash-display'>Hackathon &nbsp; <span className="text-cpink">1.0</span></h1>
                </div>
                <div className="flex max-w-[250px] md:max-w-[360px] lg:max-w-[430px] leading-normal mb-[20px]">
                    <p className="md:font-semibold text-center md:text-start text-[10px] lg:text-[16px]">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                </div>
                <div>
                    <Button content="Register" />
                </div>
                <div className="flex gap-x-[18px] md:gap-x-[20px] md:my-auto my-[18px] font-bold">
                    <p className={customClass}>00<span className="mt-[44px] text-[14px] font-bold">H</span></p>
                    <p className={customClass}>00<span className="mt-[44px] text-[14px] font-bold">M</span></p>
                    <p className={customClass}>00<span className="mt-[44px] text-[14px] font-bold">S</span></p>
                </div>
            </div>
            <div className="flex-grow mr-[2px] z-0">
                <Image
                    src="/hackathonGuy2.png"
                    alt="menu"
                    width={700}
                    height={563}
                    draggable={false}
                    className='hidden md:flex float-right z-0'
                />
                <Image
                    src="/hackathonGuy.png"
                    alt="menu"
                    width={500}
                    height={363}
                    draggable={false}
                    className='md:hidden flex float-right z-0'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero